/* empty css                            */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, i as renderTransition, e as createAstro, f as renderComponent } from '../astro_DWNM6x7p.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_B8BzK37a.mjs';
import 'clsx';
/* empty css                          */
import { A as Albums } from './_album__BsSWI2WK.mjs';

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="inline-block bg-clip-text text-7xl uppercase text-center font-bold text-white hover:text-[#29273F] transition-all cursor-pointer">
Albums
<span class="block text-5xl">all of time</span> </h1>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/components/Title.astro", void 0);

const $$Astro = createAstro();
const $$AlbumItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AlbumItem;
  const { id, title, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="hover:scale-105 hover:invert hover:shadow-2xl inline-block transition-all w-full"${addAttribute(`/${id}`, "href")}> <div class="bg-card h-full flex flex-col"${addAttribute(renderTransition($$result, "q6vb7fxh", "", `album-div-${id}`), "data-astro-transition-scope")}> <img class="aspect-auto object-cover w-full"${addAttribute(img, "src")}${addAttribute(`Album ${title}`, "alt")}${addAttribute(renderTransition($$result, "yczllrpi", "", `album-image-${id}`), "data-astro-transition-scope")}> </div> </a>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/components/AlbumItem.astro", "self");

const $$AlbumList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"> ${Albums.map(({ id, title, img }) => {
    return renderTemplate`<li> ${renderComponent($$result, "AlbumItem", $$AlbumItem, { "id": id, "title": title, "img": img })} </li>`;
  })} </ul>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/components/AlbumList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "View Transitions Demo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-auto flex flex-col items-center justify-center max-w-5xl min-h-screen text-white px-10 gap-5"> ${renderComponent($$result2, "Title", $$Title, {})} ${renderComponent($$result2, "AlbumList", $$AlbumList, {})} </main> ` })}`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
