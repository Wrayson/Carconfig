const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","glb/.DS_Store","glb/M3.glb","logo.svg","models/.DS_Store","models/340i.webp","models/i7.webp","models/m3.webp","models/x7.webp","robots.txt"]),
	mimeTypes: {".glb":"model/gltf-binary",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DvkXWnoO.js",app:"_app/immutable/entry/app.BCQYThaV.js",imports:["_app/immutable/entry/start.DvkXWnoO.js","_app/immutable/chunks/BCZAcgnA.js","_app/immutable/chunks/BgWkloOl.js","_app/immutable/chunks/BBG15Ui1.js","_app/immutable/entry/app.BCQYThaV.js","_app/immutable/chunks/BBG15Ui1.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BgWkloOl.js","_app/immutable/chunks/DieghSKU.js","_app/immutable/chunks/DMfDRYDU.js","_app/immutable/chunks/CdVMgiNz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DQpHFuCU.js')),
			__memo(() => import('./chunks/1-D6Tv4J_B.js')),
			__memo(() => import('./chunks/2-Dm0lDWv8.js')),
			__memo(() => import('./chunks/3-BHQ-6nRw.js')),
			__memo(() => import('./chunks/4-CZGCJFCt.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/models",
				pattern: /^\/models\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/models/configure",
				pattern: /^\/models\/configure\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
