import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D59iCj8i.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CwHp2cg_.mjs');
const _page1 = () => import('./chunks/404_CU2cEs2T.mjs');
const _page2 = () => import('./chunks/_album__7V7lUhcn.mjs');
const _page3 = () => import('./chunks/index_BJbUNqKU.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/[album].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "eb94ce37-1f6f-4925-8bde-4bc4b2296f2a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
