import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const heroCircle_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".heroCircle.svelte-1kv7j6o{width:auto;height:25em;display:flex;flex-direction:column;justify-content:space-between;align-items:center;grid-column:4;grid-row:2}.circle.svelte-1kv7j6o{width:21rem;height:21rem;font-size:20vw;border-radius:400px;background-color:#260090;box-shadow:inset 0px 15px 22px rgba(255, 255, 255, 0.51),\n			inset 0px -21px 39px 5px rgba(0, 0, 0, 0.5)}.circleShadow.svelte-1kv7j6o{width:21rem;height:1.25rem;border-radius:30%;background-color:rgb(0, 0, 0, 0.5);filter:blur(10px)}@media(max-width: 414px){.circle.svelte-1kv7j6o{display:none}.circleShadow.svelte-1kv7j6o{display:none}.animate__heartBeat.svelte-1kv7j6o{display:none}}",
  map: null
};
const HeroCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"heroCircle  svelte-1kv7j6o"}"><div class="${"circle animate__animated animate__heartBeat animate__infinite svelte-1kv7j6o"}"></div>
	<div class="${"circleShadow svelte-1kv7j6o"}"></div>
</div>`;
});
const herobuttons_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".heroBtns.svelte-lrbkjk.svelte-lrbkjk{width:780px;height:20vh;display:flex;flex-direction:column;margin-top:2rem;justify-content:space-between}.heroBtns.svelte-lrbkjk button.svelte-lrbkjk{width:250px;height:70px;border-radius:40px;border:none;background:#260090;font-family:var(--ff-montserrat);font-size:1.7rem;color:var(--clr-White);box-shadow:inset 0px 9px 10px rgba(255, 255, 255, 0.25),\n			inset 0px -10px 9px rgba(0, 0, 0, 0.25);cursor:pointer}.btnShadow.svelte-lrbkjk.svelte-lrbkjk{width:250px;height:20px;border-radius:30%;background-color:rgb(0, 0, 0, 0.5);filter:blur(10px)}@media screen and (max-width: 414px){.heroBtns.svelte-lrbkjk a.svelte-lrbkjk{width:100%}.heroBtns.svelte-lrbkjk button.svelte-lrbkjk{width:100%;font-size:1.5rem;font-weight:600}.btnShadow.svelte-lrbkjk.svelte-lrbkjk{display:none}.heroBtns.svelte-lrbkjk.svelte-lrbkjk{width:100%;height:200px}}",
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
  return `<div class="${"heroBtns svelte-lrbkjk"}"><a${add_attribute("href", links, 0)} class="${"svelte-lrbkjk"}"><button id="${"btn"}" class="${"svelte-lrbkjk"}">${escape(title)}</button></a>
	<div class="${"btnShadow svelte-lrbkjk"}"></div>
</div>`;
});
const heroText_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".herotext.svelte-rxa54u.svelte-rxa54u{height:50vh;width:60vw;color:white;display:flex;flex-direction:column;justify-content:center;font-family:'Montserrat';grid-column:3;grid-row:2}.herotext.svelte-rxa54u h1.svelte-rxa54u{font-size:5vw;font-weight:900;color:var(--clr-Dark-Purple)}.herotext.svelte-rxa54u p.svelte-rxa54u:nth-of-type(1){font-weight:500;font-size:2rem}.herotext.svelte-rxa54u p.svelte-rxa54u:nth-of-type(2){font-weight:700;font-size:2rem;color:var(--clr-Dark-Purple)}.herotext.svelte-rxa54u p.svelte-rxa54u:nth-of-type(3){font-weight:500;font-size:1.5rem;font-family:'Cabin', sans-serif;width:70%}.heroButtons.svelte-rxa54u.svelte-rxa54u{display:flex;width:80%;justify-content:space-between}@media screen and (max-width: 414px){.herotext.svelte-rxa54u.svelte-rxa54u{z-index:3;width:80vw;--clr-Dark-Purple:#fff;margin-top:3rem}.herotext.svelte-rxa54u h1.svelte-rxa54u{font-size:4rem}.herotext.svelte-rxa54u p.svelte-rxa54u:nth-of-type(3){display:none}.heroButtons.svelte-rxa54u.svelte-rxa54u{flex-direction:column;align-items:center;height:200px;width:100%}}",
  map: null
};
const HeroText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"herotext svelte-rxa54u"}"><p class="${"svelte-rxa54u"}">Hi There I am</p>
	<h1 class="${"svelte-rxa54u"}">Ahmed Suliman</h1>
	<p class="${"svelte-rxa54u"}">Junior Front-End Developer &amp; Designer \u{1F525}</p>
	<p class="${"svelte-rxa54u"}">I bring value to my clients by creating beautiful, user-friendly interfaces that help them
		achieve their goals.
	</p>
	<div class="${"heroButtons svelte-rxa54u"}">${validate_component(Herobuttons, "Herobuttons").$$render(
    $$result,
    {
      links: "mailto:ahmedonour.49@gmail.com",
      title: "Contact"
    },
    {},
    {}
  )}
		${validate_component(Herobuttons, "Herobuttons").$$render($$result, { links: "/project", title: "Projects" }, {}, {})}</div>
</div>`;
});
const heroSocialIcons_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".socialIcons.svelte-1n5wmgp.svelte-1n5wmgp{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:30px;height:150px;grid-row:2}.socialIcons.svelte-1n5wmgp a i.svelte-1n5wmgp:hover{font-size:35px}.socialIcons.svelte-1n5wmgp a i.svelte-1n5wmgp{font-size:24px;transition:all 550ms ease-in-out;color:var(--clr-Dark-Purple)}@media screen and (max-width: 414px){.socialIcons.svelte-1n5wmgp.svelte-1n5wmgp{flex-direction:row;display:none}}",
  map: null
};
const HeroSocialIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-11z5d5n_START --><script src="${"https://kit.fontawesome.com/f3c7bd6f07.js"}" crossorigin="${"anonymous"}"><\/script><!-- HEAD_svelte-11z5d5n_END -->`, ""}
<div class="${"socialIcons svelte-1n5wmgp"}"><a href="${"https://www.github.com/ahmedonour"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fab fa-github svelte-1n5wmgp"}"></i></a>
	<a href="${"https://www.dev.to/ahmed_onour"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fab fa-dev svelte-1n5wmgp"}"></i></a>
	<a href="${"mailto:ahmedonour.49@gmail.com"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fas fa-envelope svelte-1n5wmgp"}"></i></a>
	<a href="${"https://www.twitter.com/ahmed_onour"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fab fa-twitter svelte-1n5wmgp"}"></i></a>
	<a href="${"https://www.fiverr.com/ahmed_onour"}" target="${"_blank"}" rel="${"noreferrer"}"><i class="${"fas fa-business-time svelte-1n5wmgp"}"></i></a>
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
