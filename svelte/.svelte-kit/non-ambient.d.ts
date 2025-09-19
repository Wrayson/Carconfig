
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/models" | "/models/configure";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/models": Record<string, never>;
			"/models/configure": Record<string, never>
		};
		Pathname(): "/" | "/models" | "/models/" | "/models/configure" | "/models/configure/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/glb/.DS_Store" | "/glb/M3.glb" | "/logo.svg" | "/models/.DS_Store" | "/models/340i.webp" | "/models/i7.webp" | "/models/m3.webp" | "/models/x7.webp" | "/robots.txt" | string & {};
	}
}