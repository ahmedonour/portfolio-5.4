import {
	c as create_ssr_component,
	d as add_attribute,
	e as escape,
	v as validate_component
} from '../../../chunks/index.js';
const aboutButton_svelte_svelte_type_style_lang = '';
const css$3 = {
	code: '.heroBtns.svelte-riqase.svelte-riqase{width:300px;height:20vh;display:flex;flex-direction:column;margin-top:2rem;justify-content:space-between;align-items:center}.heroBtns.svelte-riqase button.svelte-riqase{width:250px;height:70px;border-radius:40px;border:none;background:#260090;font-family:var(--ff-montserrat);font-size:1.7rem;color:var(--clr-White);box-shadow:inset 0px 9px 10px rgba(255, 255, 255, 0.25),\n      inset 0px -10px 9px rgba(0, 0, 0, 0.25);cursor:pointer}.btnShadow.svelte-riqase.svelte-riqase{width:250px;height:20px;border-radius:30%;background-color:rgb(0, 0, 0, 0.5);filter:blur(10px)}@media screen and (max-width: 414px){.heroBtns.svelte-riqase a.svelte-riqase{width:100%}.heroBtns.svelte-riqase button.svelte-riqase{width:100%;font-size:1.5rem;font-weight:600}.btnShadow.svelte-riqase.svelte-riqase{display:none}.heroBtns.svelte-riqase.svelte-riqase{width:100%;height:200px}}',
	map: null
};
const AboutButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { title } = $$props;
	let { links } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
	$$result.css.add(css$3);
	return `<div class="${'heroBtns svelte-riqase'}"><a${add_attribute(
		'href',
		links,
		0
	)} class="${'svelte-riqase'}"><button class="${'svelte-riqase'}">${escape(title)}</button></a>
  <div class="${'btnShadow svelte-riqase'}"></div>
</div>`;
});
const aboutCircle_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: '.heroCircle.svelte-f3gdak{width:auto;height:25em;display:flex;flex-direction:column;justify-content:space-between;align-items:center;grid-column:2}.circle.svelte-f3gdak{width:21rem;height:21rem;border-radius:400px;background-color:var(--clr-Blue);box-shadow:inset 0px 15px 22px rgba(255, 255, 255, 0.51),\n      inset 0px -21px 39px 5px rgba(0, 0, 0, 0.5)}.circleShadow.svelte-f3gdak{width:21rem;height:1.25rem;border-radius:30%;background-color:rgb(0, 0, 0, 0.5);filter:blur(10px)}@media screen and (max-width: 414px){.circle.svelte-f3gdak{width:60vw;height:60vw;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:-1}.circleShadow.svelte-f3gdak{display:none}}',
	map: null
};
const AboutCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$2);
	return `
<div class="${'heroCircle  svelte-f3gdak'}"><div class="${'circle circleColor svelte-f3gdak'}"></div>
  <div class="${'circleShadow svelte-f3gdak'}"></div>
</div>`;
});
const aboutText_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.aboutTesxt.svelte-16jzyhn{width:40vw;height:100%}h1.svelte-16jzyhn{font-family:var(--ff-montserrat);font-weight:800;font-size:4.5rem;color:var(--clr-Dark-Purple);text-align:center}p.svelte-16jzyhn{font-family:var(--ff-montserrat);color:#fff;font-size:20px;font-weight:500;text-align:left;line-height:1.5}@media screen and (max-width: 414px){.aboutTesxt.svelte-16jzyhn{width:90vw}}',
	map: null
};
const AboutText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<div class="${'aboutTesxt svelte-16jzyhn'}"><h1 class="${'svelte-16jzyhn'}">About</h1>
	<p class="${'svelte-16jzyhn'}">I am Ahmed Suliman.
		<br>
		I am a highly motivated and driven individual who is always looking for new opportunities to
		learn and grow. I am a quick learner and have a strong desire to continuously improve my skills.
		I am also a very team-oriented person and enjoy working collaboratively with others. I am
		confident in my abilities and always work to produce the best possible results.
	</p>
</div>`;
});
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: 'main.svelte-14kzcdo.svelte-14kzcdo{display:grid;place-items:center;grid-template-columns:repeat(6, 1fr);height:calc(100vh - calc(3em + 90px))}main.svelte-14kzcdo>.svelte-14kzcdo{flex-basis:20%}.aboutText.svelte-14kzcdo.svelte-14kzcdo{display:flex;flex-direction:column;align-items:center;grid-column:4;width:30vw}@media screen and (max-width: 414px){.aboutText.svelte-14kzcdo.svelte-14kzcdo{width:90vw}}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<main class="${'svelte-14kzcdo'}">${validate_component(
		AboutCircle,
		'AboutCircle'
	).$$render($$result, {}, {}, {})}
    <div class="${'aboutText svelte-14kzcdo'}">${validate_component(
		AboutText,
		'AboutText'
	).$$render($$result, {}, {}, {})}
        ${validate_component(AboutButton, 'AboutButton').$$render(
					$$result,
					{ links: '/project', title: 'Projects' },
					{},
					{}
				)}</div>
</main>`;
});
export { Page as default };
