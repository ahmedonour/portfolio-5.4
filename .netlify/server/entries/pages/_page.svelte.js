import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const heroCircle_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "@media screen and (max-width: 414px){}",
  map: null
};
const HeroCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `

  `;
});
const herobuttons_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".heroBtns.svelte-bok6rm.svelte-bok6rm{width:780px;height:20vh;display:flex;flex-direction:column;margin-top:2rem;justify-content:space-between}.heroBtns.svelte-bok6rm button.svelte-bok6rm{width:250px;height:70px;border-radius:40px;border:none;background:#260090;font-family:var(--ff-montserrat);font-size:1.7rem;color:var(--clr-White);box-shadow:inset 0px 9px 10px rgba(255, 255, 255, 0.25),\n      inset 0px -10px 9px rgba(0, 0, 0, 0.25);cursor:pointer}.btnShadow.svelte-bok6rm.svelte-bok6rm{width:250px;height:20px;border-radius:30%;background-color:rgb(0, 0, 0, 0.5);filter:blur(10px)}@media screen and (max-width: 414px){.heroBtns.svelte-bok6rm a.svelte-bok6rm{width:100%}.heroBtns.svelte-bok6rm button.svelte-bok6rm{width:100%;font-size:1.5rem;font-weight:600}.btnShadow.svelte-bok6rm.svelte-bok6rm{display:none}.heroBtns.svelte-bok6rm.svelte-bok6rm{width:100%;height:200px}}",
  map: null
};
const Herobuttons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { links } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css$3);
  return `<div class="${"heroBtns svelte-bok6rm"}"><a${add_attribute("href", links, 0)} class="${"svelte-bok6rm"}"><button class="${"svelte-bok6rm"}">${escape(title)}</button></a>
  <div class="${"btnShadow svelte-bok6rm"}"></div>
</div>`;
});
const heroText_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `.herotext.svelte-1lhhcnn.svelte-1lhhcnn{height:50vh;width:80vw;color:white;display:flex;flex-direction:column;justify-content:center;font-family:"Montserrat";grid-column:3;grid-row:2}.herotext.svelte-1lhhcnn h1.svelte-1lhhcnn{font-size:9vw;font-weight:900;color:var(--clr-Dark-Purple)}.herotext.svelte-1lhhcnn p.svelte-1lhhcnn:nth-of-type(1){font-weight:500;font-size:2rem}.herotext.svelte-1lhhcnn p.svelte-1lhhcnn:nth-of-type(2){font-weight:700;font-size:2rem;color:var(--clr-Dark-Purple)}.herotext.svelte-1lhhcnn p.svelte-1lhhcnn:nth-of-type(3){font-weight:500;font-size:1.5rem;font-family:'Cabin', sans-serif;width:70%}.heroButtons.svelte-1lhhcnn.svelte-1lhhcnn{display:flex;width:60%;justify-content:space-between}@media screen and (max-width: 414px){.herotext.svelte-1lhhcnn.svelte-1lhhcnn{z-index:3;width:80vw;--clr-Dark-Purple:#fff;margin-top:3rem}.herotext.svelte-1lhhcnn h1.svelte-1lhhcnn{font-size:4rem}.herotext.svelte-1lhhcnn p.svelte-1lhhcnn:nth-of-type(3){display:none}.heroButtons.svelte-1lhhcnn.svelte-1lhhcnn{flex-direction:column;align-items:center;height:200px;width:100%}}`,
  map: null
};
const HeroText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"herotext svelte-1lhhcnn"}"><p class="${"svelte-1lhhcnn"}">Hi There <b style="${"color: #260090; text-transform:uppercase;"}">I am</b></p>
  <h1 class="${"svelte-1lhhcnn"}">Ahmed Suliman</h1>
  <p class="${"svelte-1lhhcnn"}">Junior Front-End Developer &amp; Designer \u{1F525}</p>
  <p class="${"svelte-1lhhcnn"}">I bring value to my clients by creating beautiful, user-friendly interfaces
    that help them achieve their goals.
  </p>
  <div class="${"heroButtons svelte-1lhhcnn"}">${validate_component(Herobuttons, "Herobuttons").$$render(
    $$result,
    {
      links: "mailto:ahmedonour.49@gmail.com",
      title: "Contact Me"
    },
    {},
    {}
  )}
    ${validate_component(Herobuttons, "Herobuttons").$$render($$result, { links: "/project", title: "Projects" }, {}, {})}</div>
</div>`;
});
const heroSocialIcons_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".socialIcons.svelte-1a4q6jx.svelte-1a4q6jx{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:30px;height:150px;grid-row:2}.socialIcons.svelte-1a4q6jx a i.svelte-1a4q6jx:hover{font-size:35px}.socialIcons.svelte-1a4q6jx a i.svelte-1a4q6jx{font-size:24px;transition:all 550ms ease-in-out;color:var(--clr-Dark-Purple)}@media screen and (max-width: 414px){.socialIcons.svelte-1a4q6jx.svelte-1a4q6jx{flex-direction:row;display:none}}",
  map: null
};
const HeroSocialIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-1ttyl48_START --><script src="${"https://kit.fontawesome.com/f3c7bd6f07.js"}" crossorigin="${"anonymous"}"><\/script><!-- HEAD_svelte-1ttyl48_END -->`, ""}
<div class="${"socialIcons svelte-1a4q6jx"}"><a href="${"https://www.github.com/ahmedonour"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fab fa-github svelte-1a4q6jx"}"></i></a>
  <a href="${"https://www.dev.to/ahmed_onour"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fab fa-dev svelte-1a4q6jx"}"></i></a>
  <a href="${"mailto:ahmedonour.49@gmail.com"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fas fa-envelope svelte-1a4q6jx"}"></i></a>
  <a href="${"https://www.twitter.com/ahmed_onour"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fab fa-twitter svelte-1a4q6jx"}"></i></a>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".herosection.svelte-1cxsd4r{height:calc(100vh - 100px);display:grid;place-items:center;grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(3, 1fr)}main.svelte-1cxsd4r{background-color:#5200ff;width:100vw;height:calc(100vh - calc(3em + 90px))}@media screen and (max-width: 414px){.herosection.svelte-1cxsd4r{height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:space-around}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1cxsd4r"}"><div class="${"herosection svelte-1cxsd4r"}">${validate_component(HeroSocialIcons, "HeroSocialIcons").$$render($$result, {}, {}, {})}
		${validate_component(HeroText, "HeroText").$$render($$result, {}, {}, {})}
		${validate_component(HeroCircle, "HeroCircle").$$render($$result, {}, {}, {})}</div>
</main>`;
});
export {
  Page as default
};
