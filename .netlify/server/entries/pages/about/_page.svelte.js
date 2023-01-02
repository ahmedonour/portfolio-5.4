import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
const aboutButton_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".heroBtns.svelte-2ls6ks.svelte-2ls6ks{width:300px;height:20vh;display:flex;flex-direction:column;margin-top:2rem;justify-content:space-between;align-items:center}.heroBtns.svelte-2ls6ks button.svelte-2ls6ks{width:250px;height:70px;border-radius:40px;border:none;background:#260090;font-family:var(--ff-montserrat);font-size:1.7rem;color:var(--clr-White);box-shadow:inset 0px 9px 10px rgba(255, 255, 255, 0.25),\n			inset 0px -10px 9px rgba(0, 0, 0, 0.25);cursor:pointer}.btnShadow.svelte-2ls6ks.svelte-2ls6ks{width:250px;height:20px;border-radius:30%;background-color:rgb(0, 0, 0, 0.5);filter:blur(10px)}@media screen and (max-width: 414px){.heroBtns.svelte-2ls6ks a.svelte-2ls6ks{width:100%}.heroBtns.svelte-2ls6ks button.svelte-2ls6ks{width:100%;font-size:1.5rem;font-weight:600}.btnShadow.svelte-2ls6ks.svelte-2ls6ks{display:none}.heroBtns.svelte-2ls6ks.svelte-2ls6ks{width:100%;height:200px}}",
  map: null
};
const AboutButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { links } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css$3);
  return `<div class="${"heroBtns svelte-2ls6ks"}"><a${add_attribute("href", links, 0)} class="${"svelte-2ls6ks"}"><button class="${"svelte-2ls6ks"}">${escape(title)}</button></a>
	<div class="${"btnShadow svelte-2ls6ks"}"></div>
</div>`;
});
const aboutCircle_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".heroCircle.svelte-d2ms1b{width:auto;height:25em;display:flex;flex-direction:column;justify-content:space-between;align-items:center;grid-column:2}.circle.svelte-d2ms1b{width:21rem;height:21rem;border-radius:400px;background-color:var(--clr-Blue);box-shadow:inset 0px 15px 22px rgba(255, 255, 255, 0.51),\n			inset 0px -21px 39px 5px rgba(0, 0, 0, 0.5)}.circleShadow.svelte-d2ms1b{width:21rem;height:1.25rem;border-radius:30%;background-color:rgb(0, 0, 0, 0.5);filter:blur(10px)}@media screen and (max-width: 414px){.circle.svelte-d2ms1b{display:none}.circleShadow.svelte-d2ms1b{display:none}}",
  map: null
};
const AboutCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `
<div class="${"heroCircle  svelte-d2ms1b"}"><div class="${"circle circleColor svelte-d2ms1b"}"></div>
	<div class="${"circleShadow svelte-d2ms1b"}"></div>
</div>`;
});
const aboutText_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".aboutTesxt.svelte-emno8d{width:40vw;height:100%}h1.svelte-emno8d{font-family:var(--ff-montserrat);font-weight:800;font-size:4.5rem;color:var(--clr-Dark-Purple);text-align:center}p.svelte-emno8d{font-family:var(--ff-montserrat);color:#fff;font-size:20px;font-weight:500;text-align:left;line-height:1.5}@media screen and (max-width: 414px){.aboutTesxt.svelte-emno8d{width:85vw}p.svelte-emno8d{font-weight:300;text-align:justify}}",
  map: null
};
const AboutText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"aboutTesxt svelte-emno8d"}"><h1 class="${"svelte-emno8d"}">About</h1>
	<p class="${"svelte-emno8d"}">I am Ahmed Suliman.
		<br>
		I am a highly motivated and driven individual who is always looking for new opportunities to learn
		and grow. I am a quick learner and have a strong desire to continuously improve my skills. I am also
		a very team-oriented person and enjoy working collaboratively with others. I am confident in my abilities
		and always work to produce the best possible results.
	</p>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1jnqem7.svelte-1jnqem7{display:grid;place-items:center;grid-template-columns:repeat(6, 1fr);height:calc(100vh - calc(3em + 90px))}main.svelte-1jnqem7>.svelte-1jnqem7{flex-basis:20%}.aboutText.svelte-1jnqem7.svelte-1jnqem7{display:flex;flex-direction:column;align-items:center;grid-column:4;width:30vw}@media screen and (max-width: 414px){.aboutText.svelte-1jnqem7.svelte-1jnqem7{width:90vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1jnqem7"}">${validate_component(AboutCircle, "AboutCircle").$$render($$result, {}, {}, {})}
	<div class="${"aboutText svelte-1jnqem7"}">${validate_component(AboutText, "AboutText").$$render($$result, {}, {}, {})}
		${validate_component(AboutButton, "AboutButton").$$render($$result, { links: "/project", title: "Projects" }, {}, {})}</div>
</main>`;
});
export {
  Page as default
};
