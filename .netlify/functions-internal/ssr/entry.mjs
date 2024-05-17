import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CVP9q-Jq.mjs';
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
    "middlewareSecret": "c058070a-88b0-49a5-8d37-4e7d1af8fcf4"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
