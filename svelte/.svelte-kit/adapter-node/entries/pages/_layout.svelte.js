import "clsx";
import { a as attr_class, c as clsx, s as store_get, u as unsubscribe_stores } from "../../chunks/index2.js";
import { W as getContext } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "../../chunks/state.svelte.js";
import "../../chunks/theme.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<nav class="navbar bg-gray-100 dark:bg-gray-700 dark:text-white border-b border-black/15 dark:border-white/15 svelte-zne36e"><a href="/" class="logo svelte-zne36e"><img src="/logo.svg" alt="Logo" class="svelte-zne36e"/></a> <ul class="nav-links svelte-zne36e"><li><a href="/"${attr_class(clsx(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "active" : ""), "svelte-zne36e")}>Home</a></li> <li><a href="/models"${attr_class(clsx(store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/models") ? "active" : ""), "svelte-zne36e")}>Jetzt konfigurieren</a></li></ul></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="transition-colors duration-500 ease-in-out min-h-screen bg-white dark:bg-gray-800 dark:text-white">`);
  Header($$renderer);
  $$renderer.push(`<!----> `);
  children($$renderer);
  $$renderer.push(`<!----> `);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
