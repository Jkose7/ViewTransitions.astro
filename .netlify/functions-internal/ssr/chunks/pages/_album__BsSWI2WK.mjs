/* empty css                            */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as createAstro, f as renderComponent, d as addAttribute, i as renderTransition } from '../astro_DWNM6x7p.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_B8BzK37a.mjs';
import 'clsx';
/* empty css                          */

const Albums = [
    {
        id: "in-rainbowns",
        title: "In Rainbowns",
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/50/c7/dd50c790-99ac-d3d0-5ab8-e3891fb8fd52/634904032463.png/1200x1200bb.jpg",
        artist: "Radiohead",
        genre: "Art Rock | Rock Alternativo",
        realese: "10 October 2007",
        duration: "42:39",
        producer: "Nigel Godrich",
        studio: "XL RECORDINGS"
    },
    {
        id: "el-jardin-de-los-presentes",
        title: "El Jardin De los Presentes",
        img: "https://upload.wikimedia.org/wikipedia/en/2/20/El_jard%C3%ADn_de_los_presentes.jpg",
        artist: "Invisible",
        genre: "Progressive rock | art rock | jazz rock",
        realese: "29 September 1976",
        duration: "37:42",
        producer: "Alberto Spinnetta",
        studio: "CBS Studios"
    },
    {
        id: "showbiz",
        title: "Showbiz",
        img: "https://upload.wikimedia.org/wikipedia/en/9/9d/Museshowbizalbumcover.jpg?20110502040400",
        artist: "Muse",
        genre: "Alternative rock | progressive rock | hard rock | space rock",
        realese: "7 September 1999",
        duration: "49:36",
        producer: "John Leckie,  Muse,  Paul Reeve",
        studio: "RAK"
    },
    {
        id: "whats-going-on",
        title: "What's Going On",
        img: "https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg",
        artist: "Marvin Gaye",
        genre: "Soul",
        realese: "21 May 1971",
        duration: "35:32",
        producer: "Marvin Gaye",
        studio: "Golder World"
    },
    {
        id: "white-pony",
        title: "White Pony",
        img: "https://http2.mlstatic.com/D_NQ_NP_959047-MLU70545031083_072023-O.webp",
        artist: "Deftones",
        genre: "Alternative metal | nu metal | art rock",
        realese: "20 June 2000",
        duration: "48:52",
        producer: "Chino Moreno",
        studio: "RAK"
    },
    {
        id: "chet",
        title: "Chet",
        img: "https://upload.wikimedia.org/wikipedia/en/1/1d/Chet_%28album%29.jpg",
        artist: "Chet Baker",
        genre: "Jazz",
        realese: "19 January 1959",
        duration: "41:48",
        producer: "Orrin Keepnews",
        studio: "Reeves Sound"
    },
    
];

const Tracks = [
    {
        album: 'in-rainbowns',
        tracks: [
            '15 Step',
            'Bodysnatchers',
            'Nude',
            'Weird Fishes/Arpeggi',
            'All I Need',
            'Faust Arp',
            'Reckoner',
            'House of Cards',
            'Jigsaw Falling into Place',
            'Videotape'
        ]
    },
    {
        album: 'el-jardin-de-los-presentes',
        tracks: [
            'Los Libros de la Buena Memoria',
            'Las Golondrinas de Plaza de Mayo',
            'El Anillo del Capitán Beto',
            'El Diluvio y la Pasajera',
            'Tiempo de Resurrección',
            'Alfileres',
            'Burbujas',
            'El Mañana a las Cinco de la Tarde',
            'La Lengua Popular'
        ]
    },
    {
        album: 'showbiz',
        tracks: [
            'Sunburn',
            'Muscle Museum',
            'Fillip',
            'Falling Down',
            'Cave',
            'Showbiz',
            'Unintended',
            'Uno',
            'Sober',
            'Escape',
            'Overdue',
            'Hate This & I\'ll Love You'
        ]
    },
    {
        album: 'whats-going-on',
        tracks: [
            "What's Going On",
            "What's Happening Brother",
            "Flyin' High (In the Friendly Sky)",
            "Save the Children",
            "God Is Love",
            "Mercy Mercy Me (The Ecology)",
            "Right On",
            "Wholy Holy",
            "Inner City Blues (Make Me Wanna Holler)"
        ]
    },
    {
        album: 'chet',
        tracks: [
            'My Funny Valentine',
            'But Not for Me',
            'Time After Time',
            'I Get Along Without You Very Well (Except Sometimes)',
            'There Will Never Be Another You',
            'The Thrill Is Gone',
            'I Fall in Love Too Easily',
            'Look for the Silver Lining',
            'Daybreak',
            'Just Friends',
            'I Remember You',
            'Let\'s Get Lost'
        ]
    },
    {
        album: 'white-pony',
        tracks: [
            'Feiticeira',
            'Digital Bath',
            'Elite',
            'Rx Queen',
            'Street Carp',
            'Teenager',
            'Knife Prty',
            'Korea',
            'Passenger',
            'Change (In the House of Flies)',
            'Pink Maggit'
        ]
    }
];

const $$Astro$1 = createAstro();
const $$AlbumTrackList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AlbumTrackList;
  const { album } = Astro2.props;
  const albumTracks = Tracks.find((t) => t.album === album)?.tracks || [];
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> ${albumTracks.map((song, index) => renderTemplate`<p class="block font-semibold text-sm"> ${index + 1}. ${song} </p>`)} </div>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/components/AlbumTrackList.astro", void 0);

const $$Astro = createAstro();
const $$album = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$album;
  const { album } = Astro2.params;
  const info = Albums.find((a) => a.id === album);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": info.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-auto flex flex-col items-center justify-center max-w-5xl min-h-screen gap-5"> <div class="bg-card transition-all min-h-[800px] shadow-md shadow-white p-8 flex flex-col max-w-md rounded-md gap-3"${addAttribute(renderTransition($$result2, "v2emqlhb", "", `album-div-${info.id}`), "data-astro-transition-scope")}> <div class="w-full min-h-full transition-all"> <img class="aspect-auto object-cover h-96 w-full transition-all"${addAttribute(info.img, "src")}${addAttribute(`Album ${info.title}`, "alt")}${addAttribute(renderTransition($$result2, "4udprgtk", "", `album-image-${info.id}`), "data-astro-transition-scope")}> </div> <div class="relative w-full min-h-80 flex flex-col"> <div class="w-full flex"> ${renderComponent($$result2, "AlbumTrackList", $$AlbumTrackList, { "album": album })} <div class="w-full flex flex-col"> <div class="text-right font-semibold flex flex-col"> <small>${info.genre}</small> <small>Produce by ${info.producer}</small> </div> <div></div> </div> </div> <div class="mt-auto flex flex-row justify-between w-full h-full"> <div class="self-end flex flex-col font-semibold w-full"> <small>${info.duration} / ${info.realese}</small> <small class="">RELEASED BY ${info.studio}</small> </div> <div class="w-full text-right"> <h1 class="text-xl font-semibold">${info.artist}</h1> <h1 class="text-2xl text-balance font-bold uppercase"> ${info.title} </h1> </div> </div> </div> </div> </main> ` })}`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/pages/[album].astro", "self");

const $$file = "C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/ViewTransitions.astro/src/pages/[album].astro";
const $$url = "/[album]";

const _album_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$album,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Albums as A, _album_ as _ };
