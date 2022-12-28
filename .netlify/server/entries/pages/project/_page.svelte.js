import {
	c as create_ssr_component,
	e as escape,
	v as validate_component
} from '../../../chunks/index.js';
const projectCard_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.projects-list.svelte-bksgpj.svelte-bksgpj{width:100%}ol.svelte-bksgpj.svelte-bksgpj{list-style:none;font-size:3rem;padding-inline:3rem;width:60%;line-height:2}ol.svelte-bksgpj li.svelte-bksgpj{border-bottom:5px solid #fff;font-weight:800}',
	map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { projectTitle } = $$props;
	if ($$props.projectTitle === void 0 && $$bindings.projectTitle && projectTitle !== void 0)
		$$bindings.projectTitle(projectTitle);
	$$result.css.add(css$1);
	return `
<div class="${'projcets'}"><div class="${'projects-list svelte-bksgpj'}"><ol class="${'svelte-bksgpj'}"><li class="${'svelte-bksgpj'}">${escape(
		projectTitle
	)}</li></ol></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: '.SelectedProjects.svelte-qphee0.svelte-qphee0{display:grid;grid-template-columns:2;width:100%;padding-inline:5rem}.otherProjects.svelte-qphee0.svelte-qphee0{margin-top:10rem;display:flex;flex-direction:column}.otherProjects.svelte-qphee0 h1.svelte-qphee0{font-size:5rem}.otherProjects.svelte-qphee0 .projects.svelte-qphee0{width:100%;display:grid;grid-template-columns:2;place-items:center;padding:5rem 20rem}.otherProjects.svelte-qphee0 .fa-github.svelte-qphee0{color:#fff;font-size:20vw;grid-column:1;width:20%;margin-bottom:5rem;cursor:pointer}main.svelte-qphee0.svelte-qphee0{width:100vw;height:fit-content;color:var(--clr-White);font-family:var(--ff-montserrat);padding:0 9rem}main.svelte-qphee0 h1.svelte-qphee0{font-size:8vw}@media screen and (min-width: 412px){main.svelte-qphee0.svelte-qphee0{flex-direction:column}}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<main class="${'svelte-qphee0'}"><h1 class="${'svelte-qphee0'}">Selected Projects</h1>
	<div class="${'SelectedProjects svelte-qphee0'}">${validate_component(
		ProjectCard,
		'ProjectCard'
	).$$render(
		$$result,
		{
			srcPath: '/mouckup/m.a.m.png',
			projectTitle: '01  M.A.M',
			projectPargraph: 'A project for a freind'
		},
		{},
		{}
	)}
		${validate_component(ProjectCard, 'ProjectCard').$$render(
			$$result,
			{
				srcPath: '/mouckup/m.a.m.png',
				projectTitle: '02 Roshan',
				projectPargraph: 'A project for a freind'
			},
			{},
			{}
		)}
		${validate_component(ProjectCard, 'ProjectCard').$$render(
			$$result,
			{
				srcPath: '/mouckup/m.a.m.png',
				projectTitle: '03 Product Card',
				projectPargraph: 'A project for a freind'
			},
			{},
			{}
		)}</div>
	<div class="${'otherProjects svelte-qphee0'}"><h1 class="${'svelte-qphee0'}">Other Projects</h1>
		<div class="${'projects svelte-qphee0'}"><i class="${'fab fa-github svelte-qphee0'}"></i></div></div>
</main>`;
});
export { Page as default };
