import { h as bind_props, s as store_get, u as unsubscribe_stores, j as spread_props, k as attr_style, b as spread_attributes, a as attr_class, l as stringify, m as slot, f as ensure_array_like, g as attr } from "../../../../chunks/index2.js";
import "clsx";
import { g as get, w as writable, d as derived, r as readable } from "../../../../chunks/index.js";
import * as THREE from "three";
import { REVISION, DefaultLoadingManager, Vector3, Sphere, Matrix4, Ray, Object3D, Vector2, TextureLoader, Mesh, ShaderChunk, Box3, MeshBasicMaterial } from "three";
import mitt from "mitt";
import { _ as ssr_context, W as getContext, V as setContext, Z as fallback, X as escape_html } from "../../../../chunks/context.js";
import "camera-controls";
import "three-viewport-gizmo";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GroundedSkybox } from "three/examples/jsm/objects/GroundedSkybox.js";
import { OrbitControls as OrbitControls$1 } from "three/examples/jsm/controls/OrbitControls.js";
import { shaderStructs, shaderIntersectFunction } from "three-mesh-bvh";
import "@threejs-kit/instanced-sprite-mesh";
function fromStore(store) {
  if ("set" in store) {
    return {
      get current() {
        return get(store);
      },
      set current(v) {
        store.set(v);
      }
    };
  }
  return {
    get current() {
      return get(store);
    }
  };
}
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
const useCache = () => {
  const cache = getContext("threlte-cache");
  if (!cache) {
    throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");
  }
  return cache;
};
const signal = Symbol();
const isStore = (dep) => {
  return typeof dep?.subscribe === "function";
};
const runObserve = (dependencies, callback, pre) => {
  const stores = dependencies().map((d) => {
    if (isStore(d)) {
      return fromStore(d);
    }
    return signal;
  });
  dependencies().map((d, i) => {
    if (stores[i] === signal) return d;
    return stores[i].current;
  });
};
const observePost = (dependencies, callback) => {
  return runObserve(dependencies);
};
const observePre = (dependencies, callback) => {
  return runObserve(dependencies);
};
const observe = Object.assign(observePost, { pre: observePre });
const isInstanceOf = (obj, type) => {
  return obj?.[`is${type}`] === true;
};
const browser = typeof window !== "undefined";
REVISION.replace("dev", "");
const currentWritable = (value) => {
  const store = writable(value);
  const extendedWritable = {
    set: (value2) => {
      extendedWritable.current = value2;
      store.set(value2);
    },
    subscribe: store.subscribe,
    update: (fn) => {
      const newValue = fn(extendedWritable.current);
      extendedWritable.current = newValue;
      store.set(newValue);
    },
    current: value
  };
  return extendedWritable;
};
const resolvePropertyPath = (target, propertyPath) => {
  if (propertyPath.includes(".")) {
    const path = propertyPath.split(".");
    const key = path.pop();
    for (let i = 0; i < path.length; i += 1) {
      target = target[path[i]];
    }
    return {
      target,
      key
    };
  } else {
    return {
      target,
      key: propertyPath
    };
  }
};
const useDOM = () => {
  const context = getContext("threlte-dom-context");
  if (!context) {
    throw new Error("useDOM can only be used in a child component to <Canvas>.");
  }
  return context;
};
class DAG {
  allVertices = {};
  /** Nodes that are fully unlinked */
  isolatedVertices = {};
  connectedVertices = {};
  sortedConnectedValues = [];
  needsSort = false;
  emitter = mitt();
  emit = this.emitter.emit.bind(this.emitter);
  on = this.emitter.on.bind(this.emitter);
  off = this.emitter.off.bind(this.emitter);
  get sortedVertices() {
    return this.mapNodes((value) => value);
  }
  moveToIsolated(key) {
    const vertex = this.connectedVertices[key];
    if (!vertex)
      return;
    this.isolatedVertices[key] = vertex;
    delete this.connectedVertices[key];
  }
  moveToConnected(key) {
    const vertex = this.isolatedVertices[key];
    if (!vertex)
      return;
    this.connectedVertices[key] = vertex;
    delete this.isolatedVertices[key];
  }
  getKey = (v) => {
    if (typeof v === "object") {
      return v.key;
    }
    return v;
  };
  add(key, value, options) {
    if (this.allVertices[key] && this.allVertices[key].value !== void 0) {
      throw new Error(`A node with the key ${key.toString()} already exists`);
    }
    let vertex = this.allVertices[key];
    if (!vertex) {
      vertex = {
        value,
        previous: /* @__PURE__ */ new Set(),
        next: /* @__PURE__ */ new Set()
      };
      this.allVertices[key] = vertex;
    } else if (vertex.value === void 0) {
      vertex.value = value;
    }
    const hasEdges = vertex.next.size > 0 || vertex.previous.size > 0;
    if (!options?.after && !options?.before && !hasEdges) {
      this.isolatedVertices[key] = vertex;
      this.emit("node:added", {
        key,
        type: "isolated",
        value
      });
      return;
    } else {
      this.connectedVertices[key] = vertex;
    }
    if (options?.after) {
      const afterArr = Array.isArray(options.after) ? options.after : [options.after];
      afterArr.forEach((after) => {
        vertex.previous.add(this.getKey(after));
      });
      afterArr.forEach((after) => {
        const afterKey = this.getKey(after);
        const linkedAfter = this.allVertices[afterKey];
        if (!linkedAfter) {
          this.allVertices[afterKey] = {
            value: void 0,
            // uninitialized
            previous: /* @__PURE__ */ new Set(),
            next: /* @__PURE__ */ new Set([key])
          };
          this.connectedVertices[afterKey] = this.allVertices[afterKey];
        } else {
          linkedAfter.next.add(key);
          this.moveToConnected(afterKey);
        }
      });
    }
    if (options?.before) {
      const beforeArr = Array.isArray(options.before) ? options.before : [options.before];
      beforeArr.forEach((before) => {
        vertex.next.add(this.getKey(before));
      });
      beforeArr.forEach((before) => {
        const beforeKey = this.getKey(before);
        const linkedBefore = this.allVertices[beforeKey];
        if (!linkedBefore) {
          this.allVertices[beforeKey] = {
            value: void 0,
            // uninitialized
            previous: /* @__PURE__ */ new Set([key]),
            next: /* @__PURE__ */ new Set()
          };
          this.connectedVertices[beforeKey] = this.allVertices[beforeKey];
        } else {
          linkedBefore.previous.add(key);
          this.moveToConnected(beforeKey);
        }
      });
    }
    this.emit("node:added", {
      key,
      type: "connected",
      value
    });
    this.needsSort = true;
  }
  remove(key) {
    const removeKey = this.getKey(key);
    const unlinkedVertex = this.isolatedVertices[removeKey];
    if (unlinkedVertex) {
      delete this.isolatedVertices[removeKey];
      delete this.allVertices[removeKey];
      this.emit("node:removed", {
        key: removeKey,
        type: "isolated"
      });
      return;
    }
    const linkedVertex = this.connectedVertices[removeKey];
    if (!linkedVertex) {
      return;
    }
    linkedVertex.next.forEach((nextKey) => {
      const nextVertex = this.connectedVertices[nextKey];
      if (nextVertex) {
        nextVertex.previous.delete(removeKey);
        if (nextVertex.previous.size === 0 && nextVertex.next.size === 0) {
          this.moveToIsolated(nextKey);
        }
      }
    });
    linkedVertex.previous.forEach((prevKey) => {
      const prevVertex = this.connectedVertices[prevKey];
      if (prevVertex) {
        prevVertex.next.delete(removeKey);
        if (prevVertex.previous.size === 0 && prevVertex.next.size === 0) {
          this.moveToIsolated(prevKey);
        }
      }
    });
    delete this.connectedVertices[removeKey];
    delete this.allVertices[removeKey];
    this.emit("node:removed", {
      key: removeKey,
      type: "connected"
    });
    this.needsSort = true;
  }
  mapNodes(callback) {
    if (this.needsSort) {
      this.sort();
    }
    const result = [];
    this.forEachNode((value, index) => {
      result.push(callback(value, index));
    });
    return result;
  }
  forEachNode(callback) {
    if (this.needsSort) {
      this.sort();
    }
    let index = 0;
    for (; index < this.sortedConnectedValues.length; index++) {
      callback(this.sortedConnectedValues[index], index);
    }
    Reflect.ownKeys(this.isolatedVertices).forEach((key) => {
      const vertex = this.isolatedVertices[key];
      if (vertex.value !== void 0)
        callback(vertex.value, index++);
    });
  }
  getValueByKey(key) {
    return this.allVertices[key]?.value;
  }
  getKeyByValue(value) {
    return Reflect.ownKeys(this.connectedVertices).find((key) => this.connectedVertices[key].value === value) ?? Reflect.ownKeys(this.isolatedVertices).find((key) => this.isolatedVertices[key].value === value);
  }
  sort() {
    const inDegree = /* @__PURE__ */ new Map();
    const zeroInDegreeQueue = [];
    const result = [];
    const connectedVertexKeysWithValues = Reflect.ownKeys(this.connectedVertices).filter((key) => {
      const vertex = this.connectedVertices[key];
      return vertex.value !== void 0;
    });
    connectedVertexKeysWithValues.forEach((vertex) => {
      inDegree.set(vertex, 0);
    });
    connectedVertexKeysWithValues.forEach((vertexKey) => {
      const vertex = this.connectedVertices[vertexKey];
      vertex.next.forEach((next) => {
        const nextVertex = this.connectedVertices[next];
        if (!nextVertex)
          return;
        inDegree.set(next, (inDegree.get(next) || 0) + 1);
      });
    });
    inDegree.forEach((degree, value) => {
      if (degree === 0) {
        zeroInDegreeQueue.push(value);
      }
    });
    while (zeroInDegreeQueue.length > 0) {
      const vertexKey = zeroInDegreeQueue.shift();
      result.push(vertexKey);
      const v = connectedVertexKeysWithValues.find((key) => key === vertexKey);
      if (v) {
        this.connectedVertices[v]?.next.forEach((adjVertex) => {
          const adjVertexInDegree = (inDegree.get(adjVertex) || 0) - 1;
          inDegree.set(adjVertex, adjVertexInDegree);
          if (adjVertexInDegree === 0) {
            zeroInDegreeQueue.push(adjVertex);
          }
        });
      }
    }
    if (result.length !== connectedVertexKeysWithValues.length) {
      throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");
    }
    const filterUndefined = (value) => value !== void 0;
    this.sortedConnectedValues = result.map((key) => this.connectedVertices[key].value).filter(filterUndefined);
    this.needsSort = false;
  }
  clear() {
    this.allVertices = {};
    this.isolatedVertices = {};
    this.connectedVertices = {};
    this.sortedConnectedValues = [];
    this.needsSort = false;
  }
  static isKey(value) {
    return typeof value === "string" || typeof value === "symbol";
  }
  static isValue(value) {
    return typeof value === "object" && "key" in value;
  }
}
const useScheduler = () => {
  const context = getContext("threlte-scheduler-context");
  if (!context) {
    throw new Error("useScheduler can only be used in a child component to <Canvas>.");
  }
  return context;
};
const useCamera = () => {
  const context = getContext("threlte-camera-context");
  if (!context) {
    throw new Error("useCamera can only be used in a child component to <Canvas>.");
  }
  return context;
};
const parentContextKey = Symbol("threlte-parent-context");
const createParentContext = (parent) => {
  const ctx = currentWritable(parent);
  setContext(parentContextKey, ctx);
  return ctx;
};
const useParent = () => {
  const parent = getContext(parentContextKey);
  return parent;
};
const parentObject3DContextKey = Symbol("threlte-parent-object3d-context");
const createParentObject3DContext = (object) => {
  const parentObject3D = getContext(parentObject3DContextKey);
  const object3D = writable(object);
  const ctx = derived([object3D, parentObject3D], ([object3D2, parentObject3D2]) => {
    return object3D2 ?? parentObject3D2;
  });
  setContext(parentObject3DContextKey, ctx);
  return object3D;
};
const useParentObject3D = () => {
  return getContext(parentObject3DContextKey);
};
function useTask(keyOrFn, fnOrOptions, options) {
  if (!browser) {
    return {
      task: void 0,
      start: () => void 0,
      stop: () => void 0,
      started: readable(false)
    };
  }
  let key;
  let fn;
  let opts;
  if (DAG.isKey(keyOrFn)) {
    key = keyOrFn;
    fn = fnOrOptions;
    opts = options;
  } else {
    key = Symbol("useTask");
    fn = keyOrFn;
    opts = fnOrOptions;
  }
  const schedulerCtx = useScheduler();
  let stage = schedulerCtx.mainStage;
  if (opts) {
    if (opts.stage) {
      if (DAG.isValue(opts.stage)) {
        stage = opts.stage;
      } else {
        const maybeStage = schedulerCtx.scheduler.getStage(opts.stage);
        if (!maybeStage) {
          throw new Error(`No stage found with key ${opts.stage.toString()}`);
        }
        stage = maybeStage;
      }
    } else if (opts.after) {
      if (Array.isArray(opts.after)) {
        for (let index = 0; index < opts.after.length; index++) {
          const element = opts.after[index];
          if (DAG.isValue(element)) {
            stage = element.stage;
            break;
          }
        }
      } else if (DAG.isValue(opts.after)) {
        stage = opts.after.stage;
      }
    } else if (opts.before) {
      if (Array.isArray(opts.before)) {
        for (let index = 0; index < opts.before.length; index++) {
          const element = opts.before[index];
          if (DAG.isValue(element)) {
            stage = element.stage;
            break;
          }
        }
      } else if (DAG.isValue(opts.before)) {
        stage = opts.before.stage;
      }
    }
  }
  const started = writable(false);
  const task = stage.createTask(key, fn, opts);
  const start = () => {
    started.set(true);
    if (opts?.autoInvalidate ?? true) {
      schedulerCtx.autoInvalidations.add(fn);
    }
    task.start();
  };
  const stop = () => {
    started.set(false);
    if (opts?.autoInvalidate ?? true) {
      schedulerCtx.autoInvalidations.delete(fn);
    }
    task.stop();
  };
  if (opts?.autoStart ?? true) {
    start();
  } else {
    stop();
  }
  onDestroy(() => {
    stop();
    stage.removeTask(key);
  });
  return {
    task,
    start,
    stop,
    started: {
      subscribe: started.subscribe
    }
  };
}
const useScene = () => {
  const context = getContext("threlte-scene-context");
  if (!context) {
    throw new Error("useScene can only be used in a child component to <Canvas>.");
  }
  return context;
};
const useRenderer = () => {
  const context = getContext("threlte-renderer-context");
  if (!context) {
    throw new Error("useRenderer can only be used in a child component to <Canvas>.");
  }
  return context;
};
const useUserContext = () => {
  const context = getContext("threlte-user-context");
  if (!context) {
    throw new Error("useUserContext can only be used in a child component to <Canvas>.");
  }
  return context;
};
function Canvas($$renderer, $$props) {
  let { children, $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<div class="svelte-clyidt"><canvas class="svelte-clyidt">`);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></canvas></div>`);
}
const useThrelte = () => {
  const schedulerCtx = useScheduler();
  const rendererCtx = useRenderer();
  const cameraCtx = useCamera();
  const sceneCtx = useScene();
  const domCtx = useDOM();
  const context = {
    advance: schedulerCtx.advance,
    autoRender: schedulerCtx.autoRender,
    autoRenderTask: rendererCtx.autoRenderTask,
    camera: cameraCtx.camera,
    colorManagementEnabled: rendererCtx.colorManagementEnabled,
    colorSpace: rendererCtx.colorSpace,
    dpr: rendererCtx.dpr,
    invalidate: schedulerCtx.invalidate,
    mainStage: schedulerCtx.mainStage,
    renderer: rendererCtx.renderer,
    renderMode: schedulerCtx.renderMode,
    renderStage: schedulerCtx.renderStage,
    scheduler: schedulerCtx.scheduler,
    shadows: rendererCtx.shadows,
    shouldRender: schedulerCtx.shouldRender,
    dom: domCtx.dom,
    canvas: domCtx.canvas,
    size: domCtx.size,
    toneMapping: rendererCtx.toneMapping,
    get scene() {
      return sceneCtx.scene;
    },
    set scene(scene) {
      sceneCtx.scene = scene;
    }
  };
  return context;
};
const useAttach = (getRef, getAttach) => {
  const { invalidate } = useThrelte();
  fromStore(useParent());
  fromStore(useParentObject3D());
  createParentContext();
  createParentObject3DContext();
};
const contextName = Symbol("threlte-disposable-object-context");
const useSetDispose = (getDispose) => {
  const parentDispose = getContext(contextName);
  const mergedDispose = getDispose() ?? parentDispose?.() ?? true;
  setContext(contextName, () => mergedDispose);
};
const useEvents = (getRef, propKeys, props) => {
  for (const key of propKeys) {
    props[key];
    if (key.startsWith("on")) ;
  }
};
let currentIs;
const setIs = (is) => {
  currentIs = is;
};
const useIs = () => {
  const is = currentIs;
  currentIs = void 0;
  return is;
};
const pluginContextKey = "threlte-plugin-context";
const usePlugins = (args) => {
  const plugins = getContext(pluginContextKey);
  if (!plugins)
    return;
  const pluginsProps = [];
  const pluginsArray = Object.values(plugins);
  if (pluginsArray.length > 0) {
    const pluginArgs = args();
    for (let i = 0; i < pluginsArray.length; i++) {
      const plugin = pluginsArray[i];
      const p = plugin(pluginArgs);
      if (p && p.pluginProps) {
        pluginsProps.push(...p.pluginProps);
      }
    }
  }
  return {
    pluginsProps
  };
};
const ignoredProps = /* @__PURE__ */ new Set(["$$scope", "$$slots", "type", "args", "attach", "instance"]);
const updateProjectionMatrixKeys = /* @__PURE__ */ new Set([
  "fov",
  "aspect",
  "near",
  "far",
  "left",
  "right",
  "top",
  "bottom",
  "zoom"
]);
const memoizeProp = (value) => {
  if (typeof value === "string")
    return true;
  if (typeof value === "number")
    return true;
  if (typeof value === "boolean")
    return true;
  if (typeof value === "undefined")
    return true;
  if (value === null)
    return true;
  return false;
};
const createSetter = (target, key, value) => {
  if (!Array.isArray(value) && typeof value === "number" && typeof target[key] === "object" && target[key] !== null && typeof target[key]?.setScalar === "function" && // colors do have a setScalar function, but we don't want to use it, because
  // the hex notation (i.e. 0xff0000) is very popular and matches the number
  // type. So we exclude colors here.
  !target[key]?.isColor) {
    return (target2, key2, value2) => {
      target2[key2].setScalar(value2);
    };
  } else {
    if (typeof target[key]?.set === "function" && typeof target === "object" && target !== null) {
      if (Array.isArray(value)) {
        return (target2, key2, value2) => {
          target2[key2].set(...value2);
        };
      } else {
        return (target2, key2, value2) => {
          target2[key2].set(value2);
        };
      }
    } else {
      return (target2, key2, value2) => {
        target2[key2] = value2;
      };
    }
  }
};
const useProps = () => {
  const { invalidate } = useThrelte();
  const memoizedProps = /* @__PURE__ */ new Map();
  const memoizedSetters = /* @__PURE__ */ new Map();
  const setProp = (instance, propertyPath, value, manualCamera) => {
    if (memoizeProp(value)) {
      const memoizedProp = memoizedProps.get(propertyPath);
      if (memoizedProp && memoizedProp.instance === instance && memoizedProp.value === value) {
        return;
      }
      memoizedProps.set(propertyPath, {
        instance,
        value
      });
    }
    const { key, target } = resolvePropertyPath(instance, propertyPath);
    if (value !== void 0 && value !== null) {
      const memoizedSetter = memoizedSetters.get(propertyPath);
      if (memoizedSetter) {
        memoizedSetter(target, key, value);
      } else {
        const setter = createSetter(target, key, value);
        memoizedSetters.set(propertyPath, setter);
        setter(target, key, value);
      }
    } else {
      createSetter(target, key, value)(target, key, value);
    }
    if (manualCamera)
      return;
    if (updateProjectionMatrixKeys.has(key) && (target.isPerspectiveCamera || target.isOrthographicCamera)) {
      target.updateProjectionMatrix();
    }
  };
  const updateProp = (instance, key, value, pluginsProps, manualCamera) => {
    if (!ignoredProps.has(key) && !pluginsProps?.includes(key)) {
      setProp(instance, key, value, manualCamera);
    }
    invalidate();
  };
  return {
    updateProp
  };
};
const isClass = (input) => {
  return typeof input === "function" && Function.prototype.toString.call(input).startsWith("class ");
};
const determineRef = (is, args) => {
  if (isClass(is)) {
    if (Array.isArray(args)) {
      return new is(...args);
    } else {
      return new is();
    }
  }
  return is;
};
function T$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      is = useIs(),
      args,
      attach,
      manual = false,
      makeDefault = false,
      dispose,
      ref = void 0,
      oncreate,
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    const internalRef = determineRef(is, args);
    usePlugins(() => ({
      get ref() {
        return internalRef;
      },
      get args() {
        return args;
      },
      get attach() {
        return attach;
      },
      get manual() {
        return manual;
      },
      get makeDefault() {
        return makeDefault;
      },
      get dispose() {
        return dispose;
      },
      get props() {
        return props;
      }
    }));
    const propKeys = Object.keys(props);
    useProps();
    propKeys.forEach((key) => {
      props[key];
    });
    useAttach();
    useSetDispose(() => dispose);
    useEvents(() => internalRef, propKeys, props);
    children?.($$renderer2, { ref: internalRef });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref });
  });
}
const catalogue = {};
const T = new Proxy(T$1, {
  get(_target, is) {
    if (typeof is !== "string") {
      return T$1;
    }
    const module = catalogue[is] || THREE[is];
    if (module === void 0) {
      throw new Error(`No Three.js module found for ${is}. Did you forget to extend the catalogue?`);
    }
    setIs(module);
    return T$1;
  }
});
function useThrelteUserContext(namespace, value, options) {
  const userCtxStore = useUserContext();
  if (!userCtxStore) {
    throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");
  }
  if (!value) {
    return derived(userCtxStore, (ctx) => ctx[namespace]);
  }
  userCtxStore.update((ctx) => {
    if (namespace in ctx) {
      return ctx;
    }
    const v = typeof value === "function" ? value() : value;
    ctx[namespace] = v;
    return ctx;
  });
  return userCtxStore.current[namespace];
}
const toCurrentReadable = (store) => {
  return {
    subscribe: store.subscribe,
    get current() {
      return store.current;
    }
  };
};
let previousTotalLoaded = 0;
const finishedOnce = currentWritable(false);
const activeStore = currentWritable(false);
const itemStore = currentWritable(void 0);
const loadedStore = currentWritable(0);
const totalStore = currentWritable(0);
const errorsStore = currentWritable([]);
const progressStore = currentWritable(0);
const { onStart, onLoad, onError } = DefaultLoadingManager;
DefaultLoadingManager.onStart = (url, loaded, total) => {
  onStart?.(url, loaded, total);
  activeStore.set(true);
  itemStore.set(url);
  loadedStore.set(loaded);
  totalStore.set(total);
  const progress = (loaded - previousTotalLoaded) / (total - previousTotalLoaded);
  progressStore.set(progress);
  if (progress === 1)
    finishedOnce.set(true);
};
DefaultLoadingManager.onLoad = () => {
  onLoad?.();
  activeStore.set(false);
};
DefaultLoadingManager.onError = (url) => {
  onError?.(url);
  errorsStore.update((errors) => {
    return [...errors, url];
  });
};
DefaultLoadingManager.onProgress = (url, loaded, total) => {
  if (loaded === total) {
    previousTotalLoaded = total;
  }
  activeStore.set(true);
  itemStore.set(url);
  loadedStore.set(loaded);
  totalStore.set(total);
  const progress = (loaded - previousTotalLoaded) / (total - previousTotalLoaded) || 1;
  progressStore.set(progress);
  if (progress === 1)
    finishedOnce.set(true);
};
({
  active: toCurrentReadable(activeStore),
  item: toCurrentReadable(itemStore),
  loaded: toCurrentReadable(loadedStore),
  total: toCurrentReadable(totalStore),
  errors: toCurrentReadable(errorsStore),
  progress: toCurrentReadable(progressStore),
  finishedOnce: toCurrentReadable(finishedOnce)
});
new Vector3();
new Vector3();
new Vector3();
new Sphere();
new Matrix4();
new Ray();
new Vector3();
const suspenseContextIdentifier = Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER");
const useSuspense = () => {
  const ctx = getContext(suspenseContextIdentifier);
  const promises = /* @__PURE__ */ new Set();
  const suspend = (promise) => {
    if (ctx) {
      ctx.suspend(promise);
      promises.add(promise);
    }
    return promise;
  };
  const state = {
    suspended: derived(ctx?.suspended ?? readable(false), (suspended) => suspended)
  };
  onDestroy(() => {
    if (!ctx)
      return;
    for (const promise of promises) {
      ctx.onComponentDestroy(promise);
    }
    promises.clear();
  });
  return Object.assign(suspend, state);
};
new Vector3();
new Matrix4();
new Vector3();
new Vector3();
new Object3D();
new Vector3();
new Vector3();
new Vector3();
new Vector2();
const useEnvironment = (options) => {
  const { invalidate } = useThrelte();
  observe(() => [options.scene], ([scene]) => {
    const { background, environment } = scene;
    return () => {
      scene.background = background;
      scene.environment = environment;
    };
  });
  observe(() => [options.scene], ([scene]) => {
    scene.background;
    scene.environment;
  });
};
const loaders = {};
function Environment($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = useThrelte();
    let {
      skybox = void 0,
      texture = void 0,
      ground = false,
      isBackground = false,
      scene = ctx.scene,
      url
    } = $$props;
    useSuspense();
    useCache();
    useEnvironment({
      get scene() {
        return scene;
      }
    });
    const isEXR = url?.endsWith("exr") ?? false;
    const isHDR = url?.endsWith("hdr") ?? false;
    (() => {
      if (url === void 0) return;
      if (isEXR) {
        loaders.exr ??= new EXRLoader();
        return loaders.exr;
      } else if (isHDR) {
        loaders.hdr ??= new RGBELoader();
        return loaders.hdr;
      }
      loaders.tex ??= new TextureLoader();
      return loaders.tex;
    })();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (ground) {
        $$renderer3.push("<!--[-->");
        const options = ground === true ? {} : ground;
        if (texture) {
          $$renderer3.push("<!--[-->");
          T($$renderer3, {
            is: GroundedSkybox,
            args: [
              texture,
              options.height ?? 1,
              options.radius ?? 1,
              options.resolution ?? 128
            ],
            get ref() {
              return skybox;
            },
            set ref($$value) {
              skybox = $$value;
              $$settled = false;
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { skybox, texture });
  });
}
const useControlsContext = () => {
  return useThrelteUserContext("threlte-controls", {
    orbitControls: writable(void 0),
    trackballControls: writable(void 0)
  });
};
function OrbitControls($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { ref = void 0, children, $$slots, $$events, ...props } = $$props;
    const parent = useParent();
    const { dom, invalidate } = useThrelte();
    if (!isInstanceOf(store_get($$store_subs ??= {}, "$parent", parent), "Camera")) {
      throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");
    }
    const controls = new OrbitControls$1(store_get($$store_subs ??= {}, "$parent", parent), dom);
    const { orbitControls } = useControlsContext();
    const { start, stop } = useTask(
      () => {
        controls.update();
      },
      { autoStart: false, autoInvalidate: false }
    );
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      T($$renderer3, spread_props([
        { is: controls },
        props,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            children?.($$renderer4, { ref: controls });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { ref });
  });
}
new Matrix4();
new Matrix4();
new Mesh();
`
    #include <common>
    ${ShaderChunk.logdepthbuf_pars_vertex}
    ${ShaderChunk.fog_pars_vertex}

    attribute vec3 previous;
    attribute vec3 next;
    attribute float side;
    attribute float width;
    attribute float counters;

    uniform vec2 resolution;
    uniform float lineWidth;
    uniform vec3 color;
    uniform float opacity;
    uniform float sizeAttenuation;
    uniform float scaleDown;

    varying vec2 vUV;
    varying vec4 vColor;
    varying float vCounters;

    vec2 intoScreen(vec4 i) {
        return resolution * (0.5 * i.xy / i.w + 0.5);
    }

    void main() {
        float aspect = resolution.y / resolution.x;

        mat4 m = projectionMatrix * modelViewMatrix;

        vec4 currentClip = m * vec4( position, 1.0 );
        vec4 prevClip = m * vec4( previous, 1.0 );
        vec4 nextClip = m * vec4( next, 1.0 );

        vec4 currentNormed = currentClip / currentClip.w;
        vec4 prevNormed = prevClip / prevClip.w;
        vec4 nextNormed = nextClip / nextClip.w;

        vec2 currentScreen = intoScreen(currentNormed);
        vec2 prevScreen = intoScreen(prevNormed);
        vec2 nextScreen = intoScreen(nextNormed);

        float actualWidth = lineWidth * width;

        vec2 dir;
        if(nextScreen == currentScreen) {
            dir = normalize( currentScreen - prevScreen );
        } else if(prevScreen == currentScreen) {
            dir = normalize( nextScreen - currentScreen );
        } else {
            vec2 inDir = currentScreen - prevScreen;
            vec2 outDir = nextScreen - currentScreen;
            vec2 fullDir = nextScreen - prevScreen;

            if(length(fullDir) > 0.0) {
                dir = normalize(fullDir);
            } else if(length(inDir) > 0.0){
                dir = normalize(inDir);
            } else {
                dir = normalize(outDir);
            }
        }

        vec2 normal = vec2(-dir.y, dir.x);

        if(sizeAttenuation != 0.0) {
            normal /= currentClip.w;
            normal *= min(resolution.x, resolution.y);
        }

        if (scaleDown > 0.0) {
            float dist = length(nextNormed - prevNormed);
            normal *= smoothstep(0.0, scaleDown, dist);
        }

        vec2 offsetInScreen = actualWidth * normal * side * 0.5;

        vec2 withOffsetScreen = currentScreen + offsetInScreen;
        vec3 withOffsetNormed = vec3((2.0 * withOffsetScreen/resolution - 1.0), currentNormed.z);

        vCounters = counters;
        vColor = vec4( color, opacity );
        vUV = uv;

        gl_Position = currentClip.w * vec4(withOffsetNormed, 1.0);

        ${ShaderChunk.logdepthbuf_vertex}
        ${ShaderChunk.fog_vertex}
    }
`;
`
uniform vec3 glowColor;
uniform float falloffAmount;
uniform float glowSharpness;
uniform float glowInternalRadius;

varying vec3 vPosition;
varying vec3 vNormal;

void main()
{
	// Normal
	vec3 normal = normalize(vNormal);
	if(!gl_FrontFacing)
			normal *= - 1.0;
	vec3 viewDirection = normalize(cameraPosition - vPosition);
	float fresnel = dot(viewDirection, normal);
	fresnel = pow(fresnel, glowInternalRadius + 0.1);
	float falloff = smoothstep(0., falloffAmount, fresnel);
	float fakeGlow = fresnel;
	fakeGlow += fresnel * glowSharpness;
	fakeGlow *= falloff;
	gl_FragColor = vec4(clamp(glowColor * fresnel, 0., 1.0), clamp(fakeGlow, 0., 1.0));

	${ShaderChunk.tonemapping_fragment}
	${ShaderChunk.colorspace_fragment}
}`;
`
uniform sampler2D pointTexture;
uniform float fade;
uniform float opacity;

varying vec3 vColor;
void main() {
	float pointOpacity = 1.0;
	if (fade == 1.0) {
		float d = distance(gl_PointCoord, vec2(0.5, 0.5));
		pointOpacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
	}
	gl_FragColor = vec4(vColor, pointOpacity * opacity);

	${ShaderChunk.tonemapping_fragment}
	${ShaderChunk.colorspace_fragment}
}`;
`#define ENVMAP_TYPE_CUBE_UV
precision highp isampler2D;
precision highp usampler2D;
varying vec3 vWorldPosition;
varying vec3 vNormal;
varying mat4 vModelMatrixInverse;

#ifdef USE_INSTANCING_COLOR
	varying vec3 vInstanceColor;
#endif

#ifdef ENVMAP_TYPE_CUBEM
	uniform samplerCube envMap;
#else
	uniform sampler2D envMap;
#endif

uniform float bounces;
${shaderStructs}
${shaderIntersectFunction}
uniform BVH bvh;
uniform float ior;
uniform bool correctMips;
uniform vec2 resolution;
uniform float fresnel;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrixInverse;
uniform mat4 viewMatrixInverse;
uniform float aberrationStrength;
uniform vec3 color;

float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
	return pow( 1.0 + dot( viewDirection, worldNormal), 10.0 );
}

vec3 totalInternalReflection(vec3 ro, vec3 rd, vec3 normal, float ior, mat4 modelMatrixInverse) {
	vec3 rayOrigin = ro;
	vec3 rayDirection = rd;
	rayDirection = refract(rayDirection, normal, 1.0 / ior);
	rayOrigin = vWorldPosition + rayDirection * 0.001;
	rayOrigin = (modelMatrixInverse * vec4(rayOrigin, 1.0)).xyz;
	rayDirection = normalize((modelMatrixInverse * vec4(rayDirection, 0.0)).xyz);
	for(float i = 0.0; i < bounces; i++) {
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		vec3 hitPos = rayOrigin + rayDirection * max(dist - 0.001, 0.0);
		vec3 tempDir = refract(rayDirection, faceNormal, ior);
		if (length(tempDir) != 0.0) {
			rayDirection = tempDir;
			break;
		}
		rayDirection = reflect(rayDirection, faceNormal);
		rayOrigin = hitPos + rayDirection * 0.01;
	}
	rayDirection = normalize((modelMatrix * vec4(rayDirection, 0.0)).xyz);
	return rayDirection;
}

#include <common>
#include <cube_uv_reflection_fragment>

#ifdef ENVMAP_TYPE_CUBEM
	vec4 textureGradient(samplerCube envMap, vec3 rayDirection, vec3 directionCamPerfect) {
		return textureGrad(envMap, rayDirection, dFdx(correctMips ? directionCamPerfect: rayDirection), dFdy(correctMips ? directionCamPerfect: rayDirection));
	}
#else
	vec4 textureGradient(sampler2D envMap, vec3 rayDirection, vec3 directionCamPerfect) {
		vec2 uvv = equirectUv( rayDirection );
		vec2 smoothUv = equirectUv( directionCamPerfect );
		return textureGrad(envMap, uvv, dFdx(correctMips ? smoothUv : uvv), dFdy(correctMips ? smoothUv : uvv));
	}
#endif

void main() {
	vec2 uv = gl_FragCoord.xy / resolution;
	vec3 directionCamPerfect = (projectionMatrixInverse * vec4(uv * 2.0 - 1.0, 0.0, 1.0)).xyz;
	directionCamPerfect = (viewMatrixInverse * vec4(directionCamPerfect, 0.0)).xyz;
	directionCamPerfect = normalize(directionCamPerfect);
	vec3 normal = vNormal;
	vec3 rayOrigin = cameraPosition;
	vec3 rayDirection = normalize(vWorldPosition - cameraPosition);
	vec3 finalColor;
	#ifdef CHROMATIC_ABERRATIONS
		vec3 rayDirectionG = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior, 1.0), vModelMatrixInverse);
		#ifdef FAST_CHROMA
			vec3 rayDirectionR = normalize(rayDirectionG + 1.0 * vec3(aberrationStrength / 2.0));
			vec3 rayDirectionB = normalize(rayDirectionG - 1.0 * vec3(aberrationStrength / 2.0));
		#else
			vec3 rayDirectionR = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 - aberrationStrength), 1.0), vModelMatrixInverse);
			vec3 rayDirectionB = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 + aberrationStrength), 1.0), vModelMatrixInverse);
		#endif
		float finalColorR = textureGradient(envMap, rayDirectionR, directionCamPerfect).r;
		float finalColorG = textureGradient(envMap, rayDirectionG, directionCamPerfect).g;
		float finalColorB = textureGradient(envMap, rayDirectionB, directionCamPerfect).b;
		finalColor = vec3(finalColorR, finalColorG, finalColorB);
	#else
		rayDirection = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior, 1.0), vModelMatrixInverse);
		finalColor = textureGradient(envMap, rayDirection, directionCamPerfect).rgb;
	#endif

	finalColor *= color;
	#ifdef USE_INSTANCING_COLOR
		finalColor *= vInstanceColor;
	#endif

	vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
	float nFresnel = fresnelFunc(viewDirection, normal) * fresnel;
	gl_FragColor = vec4(mix(finalColor, vec3(1.0), nFresnel), 1.0);
	${ShaderChunk.tonemapping_fragment}
	${ShaderChunk.colorspace_fragment}
}`;
new Box3();
typeof window !== "undefined" ? document.createElement("div") : void 0;
new MeshBasicMaterial();
new Vector3();
new Matrix4();
new Ray();
new Sphere();
new Box3();
new Vector3();
new Vector3();
function writableDerived(origins, derive, reflect, initial) {
  var childDerivedSetter, originValues, blockNextDerive = false;
  var reflectOldValues = reflect.length >= 2;
  var wrappedDerive = (got, set, update3) => {
    childDerivedSetter = set;
    if (reflectOldValues) {
      originValues = got;
    }
    if (!blockNextDerive) {
      let returned = derive(got, set, update3);
      if (derive.length < 2) {
        set(returned);
      } else {
        return returned;
      }
    }
    blockNextDerive = false;
  };
  var childDerived = derived(origins, wrappedDerive, initial);
  var singleOrigin = !Array.isArray(origins);
  function doReflect(reflecting) {
    var setWith = reflect(reflecting, originValues);
    if (singleOrigin) {
      blockNextDerive = true;
      origins.set(setWith);
    } else {
      setWith.forEach((value, i) => {
        blockNextDerive = true;
        origins[i].set(value);
      });
    }
    blockNextDerive = false;
  }
  var tryingSet = false;
  function update2(fn) {
    var isUpdated, mutatedBySubscriptions, oldValue, newValue;
    if (tryingSet) {
      newValue = fn(get(childDerived));
      childDerivedSetter(newValue);
      return;
    }
    var unsubscribe = childDerived.subscribe((value) => {
      if (!tryingSet) {
        oldValue = value;
      } else if (!isUpdated) {
        isUpdated = true;
      } else {
        mutatedBySubscriptions = true;
      }
    });
    newValue = fn(oldValue);
    tryingSet = true;
    childDerivedSetter(newValue);
    unsubscribe();
    tryingSet = false;
    if (mutatedBySubscriptions) {
      newValue = get(childDerived);
    }
    if (isUpdated) {
      doReflect(newValue);
    }
  }
  return {
    subscribe: childDerived.subscribe,
    set(value) {
      update2(() => value);
    },
    update: update2
  };
}
const TOAST_LIMIT = 20;
const toasts = writable([]);
const pausedAt = writable(null);
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    remove(toastId);
  }, 1e3);
  toastTimeouts.set(toastId, timeout);
};
const clearFromRemoveQueue = (toastId) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};
function update(toast2) {
  if (toast2.id) {
    clearFromRemoveQueue(toast2.id);
  }
  toasts.update(($toasts) => $toasts.map((t) => t.id === toast2.id ? { ...t, ...toast2 } : t));
}
function add(toast2) {
  toasts.update(($toasts) => [toast2, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast2) {
  if (get(toasts).find((t) => t.id === toast2.id)) {
    update(toast2);
  } else {
    add(toast2);
  }
}
function dismiss(toastId) {
  toasts.update(($toasts) => {
    if (toastId) {
      addToRemoveQueue(toastId);
    } else {
      $toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      });
    }
    return $toasts.map((t) => t.id === toastId || toastId === void 0 ? { ...t, visible: false } : t);
  });
}
function remove(toastId) {
  toasts.update(($toasts) => {
    if (toastId === void 0) {
      return [];
    }
    return $toasts.filter((t) => t.id !== toastId);
  });
}
function startPause(time) {
  pausedAt.set(time);
}
function endPause(time) {
  let diff;
  pausedAt.update(($pausedAt) => {
    diff = time - ($pausedAt || 0);
    return null;
  });
  toasts.update(($toasts) => $toasts.map((t) => ({
    ...t,
    pauseDuration: t.pauseDuration + diff
  })));
}
const defaultTimeouts = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: Infinity,
  custom: 4e3
};
function useToasterStore(toastOptions = {}) {
  const mergedToasts = writableDerived(toasts, ($toasts) => $toasts.map((t) => ({
    ...toastOptions,
    ...toastOptions[t.type],
    ...t,
    duration: t.duration || toastOptions[t.type]?.duration || toastOptions?.duration || defaultTimeouts[t.type],
    style: [toastOptions.style, toastOptions[t.type]?.style, t.style].join(";")
  })), ($toasts) => $toasts);
  return {
    toasts: mergedToasts,
    pausedAt
  };
}
const isFunction = (valOrFunction) => typeof valOrFunction === "function";
const resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
const genId = /* @__PURE__ */ (() => {
  let count = 0;
  return () => {
    count += 1;
    return count.toString();
  };
})();
const prefersReducedMotion = /* @__PURE__ */ (() => {
  let shouldReduceMotion;
  return () => {
    if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
      const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();
const createToast = (message, type = "blank", opts) => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite"
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId()
});
const createHandler = (type) => (message, options) => {
  const toast2 = createToast(message, type, options);
  upsert(toast2);
  return toast2.id;
};
const toast = (message, opts) => createHandler("blank")(message, opts);
toast.error = createHandler("error");
toast.success = createHandler("success");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");
toast.dismiss = (toastId) => {
  dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });
  promise.then((p) => {
    toast.success(resolveValue(msgs.success, p), {
      id,
      ...opts,
      ...opts?.success
    });
    return p;
  }).catch((e) => {
    toast.error(resolveValue(msgs.error, e), {
      id,
      ...opts,
      ...opts?.error
    });
  });
  return promise;
};
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts: toasts2, pausedAt: pausedAt2 } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt2.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts2.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts: toasts2, handlers };
}
function CheckmarkIcon($$renderer, $$props) {
  let primary = fallback($$props["primary"], "#61d345");
  let secondary = fallback($$props["secondary"], "#fff");
  $$renderer.push(`<div class="svelte-1did3zw"${attr_style("", { "--primary": primary, "--secondary": secondary })}></div>`);
  bind_props($$props, { primary, secondary });
}
function ErrorIcon($$renderer, $$props) {
  let primary = fallback($$props["primary"], "#ff4b4b");
  let secondary = fallback($$props["secondary"], "#fff");
  $$renderer.push(`<div class="svelte-1ro2ggf"${attr_style("", { "--primary": primary, "--secondary": secondary })}></div>`);
  bind_props($$props, { primary, secondary });
}
function LoaderIcon($$renderer, $$props) {
  let primary = fallback($$props["primary"], "#616161");
  let secondary = fallback($$props["secondary"], "#e0e0e0");
  $$renderer.push(`<div class="svelte-tyythq"${attr_style("", { "--primary": primary, "--secondary": secondary })}></div>`);
  bind_props($$props, { primary, secondary });
}
function ToastIcon($$renderer, $$props) {
  let type, icon, iconTheme;
  let toast2 = $$props["toast"];
  ({ type, icon, iconTheme } = toast2);
  if (typeof icon === "string") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="animated svelte-t33qv2">${escape_html(icon)}</div>`);
  } else {
    $$renderer.push("<!--[!-->");
    if (typeof icon !== "undefined") {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<!---->`);
      icon?.($$renderer, {});
      $$renderer.push(`<!---->`);
    } else {
      $$renderer.push("<!--[!-->");
      if (type !== "blank") {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<div class="indicator svelte-t33qv2">`);
        LoaderIcon($$renderer, spread_props([iconTheme]));
        $$renderer.push(`<!----> `);
        if (type !== "loading") {
          $$renderer.push("<!--[-->");
          $$renderer.push(`<div class="status svelte-t33qv2">`);
          if (type === "error") {
            $$renderer.push("<!--[-->");
            ErrorIcon($$renderer, spread_props([iconTheme]));
          } else {
            $$renderer.push("<!--[!-->");
            CheckmarkIcon($$renderer, spread_props([iconTheme]));
          }
          $$renderer.push(`<!--]--></div>`);
        } else {
          $$renderer.push("<!--[!-->");
        }
        $$renderer.push(`<!--]--></div>`);
      } else {
        $$renderer.push("<!--[!-->");
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { toast: toast2 });
}
function ToastMessage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let toast2 = $$props["toast"];
    $$renderer2.push(`<div${spread_attributes({ class: "message", ...toast2.ariaProps }, "svelte-1gudbf6")}>`);
    if (typeof toast2.message === "string") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(toast2.message)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      toast2.message?.($$renderer2, { toast: toast2 });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { toast: toast2 });
  });
}
function ToastBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let toast2 = $$props["toast"];
    let position = fallback($$props["position"], () => void 0, true);
    let style = fallback($$props["style"], "");
    let Component = fallback($$props["Component"], () => void 0, true);
    let factor;
    let animation;
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
    $$renderer2.push(`<div${attr_class(`base ${stringify(toast2.height ? animation : "transparent")} ${stringify(toast2.className || "")}`, "svelte-yae3e8")}${attr_style(`${stringify(style)}; ${stringify(toast2.style)}`, { "--factor": factor })}>`);
    if (Component) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Component?.($$renderer2, {
        $$slots: {
          icon: ($$renderer3) => {
            ToastIcon($$renderer3, { toast: toast2, slot: "icon" });
          },
          message: ($$renderer3) => {
            ToastMessage($$renderer3, { toast: toast2, slot: "message" });
          }
        }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      slot($$renderer2, $$props, "default", { ToastIcon, ToastMessage, toast: toast2 }, () => {
        ToastIcon($$renderer2, { toast: toast2 });
        $$renderer2.push(`<!----> `);
        ToastMessage($$renderer2, { toast: toast2 });
        $$renderer2.push(`<!---->`);
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { toast: toast2, position, style, Component });
  });
}
function ToastWrapper($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let top, bottom, factor, justifyContent;
    let toast2 = $$props["toast"];
    let setHeight = $$props["setHeight"];
    top = toast2.position?.includes("top") ? 0 : null;
    bottom = toast2.position?.includes("bottom") ? 0 : null;
    factor = toast2.position?.includes("top") ? 1 : -1;
    justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
    $$renderer2.push(`<div${attr_class("wrapper svelte-1pz3gqy", void 0, {
      "active": toast2.visible,
      "transition": !prefersReducedMotion()
    })}${attr_style("", {
      "--factor": factor,
      "--offset": toast2.offset,
      top,
      bottom,
      "justify-content": justifyContent
    })}>`);
    if (toast2.type === "custom") {
      $$renderer2.push("<!--[-->");
      ToastMessage($$renderer2, { toast: toast2 });
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      slot($$renderer2, $$props, "default", { toast: toast2 }, () => {
        ToastBar($$renderer2, { toast: toast2, position: toast2.position });
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { toast: toast2, setHeight });
  });
}
function Toaster($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let reverseOrder = fallback($$props["reverseOrder"], false);
    let position = fallback($$props["position"], "top-center");
    let toastOptions = fallback($$props["toastOptions"], () => void 0, true);
    let gutter = fallback($$props["gutter"], 8);
    let containerStyle = fallback($$props["containerStyle"], () => void 0, true);
    let containerClassName = fallback($$props["containerClassName"], () => void 0, true);
    const { toasts: toasts2, handlers: handlers2 } = useToaster(toastOptions);
    let _toasts;
    _toasts = store_get($$store_subs ??= {}, "$toasts", toasts2).map((toast2) => ({
      ...toast2,
      position: toast2.position || position,
      offset: handlers2.calculateOffset(toast2, store_get($$store_subs ??= {}, "$toasts", toasts2), { reverseOrder, gutter, defaultPosition: position })
    }));
    $$renderer2.push(`<div${attr_class(`toaster ${stringify(containerClassName || "")}`, "svelte-haq5xk")}${attr_style(containerStyle)} role="alert"><!--[-->`);
    const each_array = ensure_array_like(_toasts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let toast2 = each_array[$$index];
      ToastWrapper($$renderer2, {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      });
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      reverseOrder,
      position,
      toastOptions,
      gutter,
      containerStyle,
      containerClassName
    });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let carColors = [];
    let rimColors = [];
    let caliperColors = [];
    let selectedCarColor = null;
    let selectedRimColor = null;
    let selectedCaliperColor = null;
    let inputConfigurationCode = "";
    $$renderer2.push(`<div class="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded h-[80vh] w-full">`);
    Canvas($$renderer2, {
      class: "w-full h-full",
      children: ($$renderer3) => {
        T.AmbientLight($$renderer3, { intensity: 0.5 });
        $$renderer3.push(`<!----> `);
        T.DirectionalLight($$renderer3, { position: [5, 10, 5], intensity: 1 });
        $$renderer3.push(`<!----> `);
        T.DirectionalLight($$renderer3, { position: [-10, 5, 0], intensity: 1 });
        $$renderer3.push(`<!----> `);
        T.DirectionalLight($$renderer3, { position: [1, 5, 0], intensity: 1 });
        $$renderer3.push(`<!----> `);
        Environment($$renderer3, { preset: "city" });
        $$renderer3.push(`<!----> `);
        T.PerspectiveCamera($$renderer3, {
          makeDefault: true,
          position: [5, 3, 7.5],
          fov: 80,
          near: 0.1,
          far: 1e3,
          children: ($$renderer4) => {
            OrbitControls($$renderer4, { enableDamping: true });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        T.Group($$renderer3, {
          position: [0, 0, -0.5],
          scale: 2,
          children: ($$renderer4) => {
            {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        T.GridHelper($$renderer3, { args: [10, 10] });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="options-container svelte-xhal46"><div class="option-card svelte-xhal46"><h3 class="svelte-xhal46">Body Paint</h3> <div class="color-grid svelte-xhal46"><!--[-->`);
    const each_array = ensure_array_like(carColors);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let color = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`color-dot ${stringify(selectedCarColor?._id === color._id ? "selected" : "")}`, "svelte-xhal46")}${attr_style(`background-color: ${stringify(color.hex)}`)} aria-label="Body Paint Color Selector"${attr("title", `${stringify(color.name)} (${stringify(color.price)} CHF)`)}></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="option-card svelte-xhal46"><h3 class="svelte-xhal46">Rim Color</h3> <div class="color-grid svelte-xhal46"><!--[-->`);
    const each_array_1 = ensure_array_like(rimColors);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let color = each_array_1[$$index_1];
      $$renderer2.push(`<button${attr_class(`color-dot ${stringify(selectedRimColor?._id === color._id ? "selected" : "")}`, "svelte-xhal46")}${attr_style(`background-color: ${stringify(color.hex)}`)} aria-label="Rim Paint Color Selector"${attr("title", `${stringify(color.name)} (${stringify(color.price)} CHF)`)}></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="option-card svelte-xhal46"><h3 class="svelte-xhal46">Caliper Color</h3> <div class="color-grid svelte-xhal46"><!--[-->`);
    const each_array_2 = ensure_array_like(caliperColors);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let color = each_array_2[$$index_2];
      $$renderer2.push(`<button${attr_class(`color-dot ${stringify(selectedCaliperColor?._id === color._id ? "selected" : "")}`, "svelte-xhal46")}${attr_style(`background-color: ${stringify(color.hex)}`)} aria-label="Caliper Paint Color Selector"${attr("title", `${stringify(color.name)} (${stringify(color.price)} CHF)`)}></button>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="api-controls svelte-xhal46"><div class="load-control svelte-xhal46"><input class="dark:text-black text-black svelte-xhal46" type="text" placeholder="6-stelliger Code" maxlength="6"${attr("value", inputConfigurationCode)}/> <button class="load-button svelte-xhal46">Laden</button></div> <button class="save-button svelte-xhal46">Speichern</button></div> `);
    Toaster($$renderer2, {});
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
