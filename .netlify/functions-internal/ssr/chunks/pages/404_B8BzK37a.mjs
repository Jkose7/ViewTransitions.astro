/* empty css                            */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_DWNM6x7p.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="view-transition" content="same-origin">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body> <div id="content"> ${renderSlot($$result, $$slots["default"])} </div>  </body></html>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/layouts/Layout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-auto flex flex-col items-center justify-center max-w-5xl min-h-screen text-white px-10 gap-5"> <h1 class="text-white text-4xl font-bold text-center">Oh!! Are you missing?</h1> <div class="w-1/2"> <img class="aspect-auto w-full" src="https://media.tenor.com/Kn7iTVaNpYsAAAAM/green-day-smash.gif" alt="" srcset=""> </div> <a href="/" class="text-red-300 hover:text-red-600 transition-all uppercase text-3xl font-bold text-center">go back</a> </main> ` })}`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
