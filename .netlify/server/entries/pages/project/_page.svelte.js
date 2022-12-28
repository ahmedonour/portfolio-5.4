import {
	c as create_ssr_component,
	d as add_attribute,
	e as escape,
	v as validate_component
} from '../../../chunks/index.js';
const projectCard_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.projects.svelte-116u6cq img.svelte-116u6cq{width:100%;height:auto;border-radius:20px;border:2px solid #fff}.projects.svelte-116u6cq button.svelte-116u6cq{background-color:rgba(0, 0, 0, 0);border:none;cursor:pointer}main.svelte-116u6cq.svelte-116u6cq{width:100vw;height:auto;background-color:rgba(0, 0, 0, 0.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:fixed;z-index:99;top:0;left:0;display:flex;flex-direction:column;justify-content:end;align-items:center;cursor:auto;overflow:scroll}main.svelte-116u6cq .projectsShowCase.svelte-116u6cq{background-color:#260090;width:100vw;height:fit-content;padding-block:5rem;margin-top:10vh;border-radius:5rem 5rem 0 0;display:flex;justify-content:center;flex-direction:column;align-items:center;color:white}main.svelte-116u6cq button.svelte-116u6cq{background:none;border:5px solid #fff;font-size:3rem;color:rgb(173, 0, 0);position:relative;width:5rem;height:5rem;border-radius:50px;left:40%;top:30%;cursor:pointer;transition:all 550ms ease-in}main.svelte-116u6cq button.svelte-116u6cq:hover{background-color:#fff;color:#260090;font-size:2rem}main.svelte-116u6cq .projectsShowCase .project-image.svelte-116u6cq{display:flex;justify-content:center}main.svelte-116u6cq .projectsShowCase .project-image img.svelte-116u6cq{width:30%;border-radius:20px}.projectDescription.svelte-116u6cq.svelte-116u6cq{margin-top:2rem;width:50%}',
	map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { projectImg } = $$props;
	let { srcPath } = $$props;
	let { projectName } = $$props;
	let { projectDes } = $$props;
	let visible = true;
	function toggleVisible() {
		visible = !visible;
	}
	if ($$props.projectImg === void 0 && $$bindings.projectImg && projectImg !== void 0)
		$$bindings.projectImg(projectImg);
	if ($$props.srcPath === void 0 && $$bindings.srcPath && srcPath !== void 0)
		$$bindings.srcPath(srcPath);
	if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
		$$bindings.projectName(projectName);
	if ($$props.projectDes === void 0 && $$bindings.projectDes && projectDes !== void 0)
		$$bindings.projectDes(projectDes);
	if ($$props.toggleVisible === void 0 && $$bindings.toggleVisible && toggleVisible !== void 0)
		$$bindings.toggleVisible(toggleVisible);
	$$result.css.add(css$1);
	return `<div class="${'projects svelte-116u6cq'}"><button class="${'svelte-116u6cq'}"><img${add_attribute(
		'src',
		projectImg,
		0
	)} alt="${'Insparition for project'}" class="${'svelte-116u6cq'}"></button></div>
${
	!visible
		? `<main class="${'svelte-116u6cq'}"><button class="${'svelte-116u6cq'}"><i class="${'fas fa-x'}"></i></button>
		<div class="${'projectsShowCase svelte-116u6cq'}"><div class="${'project-image svelte-116u6cq'}">
				<img${add_attribute('src', srcPath, 0)} alt="${'project image'}" class="${'svelte-116u6cq'}"></div>
			<div class="${'projectDescription svelte-116u6cq'}"><h1>${escape(projectName)}</h1>
				<p>${escape(projectDes)}</p></div></div></main>`
		: ``
}`;
});
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: '.SelectedProjects.svelte-p70m5k.svelte-p70m5k{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);place-items:center center;row-gap:5rem;column-gap:5rem;padding-inline:2rem;cursor:none}.SelectedProjects.svelte-p70m5k .project-1.svelte-p70m5k{grid-row:1;grid-column:2}.SelectedProjects.svelte-p70m5k .project-2.svelte-p70m5k{grid-row:2;grid-column:2}.SelectedProjects.svelte-p70m5k .project-3.svelte-p70m5k{grid-row:1;grid-column:1}.SelectedProjects.svelte-p70m5k .project-4.svelte-p70m5k{grid-row:2;grid-column:1}.otherProjects.svelte-p70m5k.svelte-p70m5k{margin-top:10rem;display:flex;flex-direction:column}.otherProjects.svelte-p70m5k h1.svelte-p70m5k{font-size:8vw;font-weight:900}.otherProjects.svelte-p70m5k .projects.svelte-p70m5k{width:100%;display:grid;grid-template-columns:2;place-items:center;padding:5rem 20rem}.otherProjects.svelte-p70m5k .fa-github.svelte-p70m5k{color:#fff;font-size:20vw;grid-column:1;width:20%;margin-bottom:5rem;cursor:pointer}main.svelte-p70m5k.svelte-p70m5k{width:100vw;height:fit-content;color:var(--clr-White);font-family:var(--ff-montserrat);padding:0 9rem}main.svelte-p70m5k h1.svelte-p70m5k{font-size:8vw;font-weight:900}@media screen and (max-width: 415px){main.svelte-p70m5k.svelte-p70m5k{flex-direction:column;padding:0 1rem}.otherProjects.svelte-p70m5k .projects.svelte-p70m5k{padding:3rem 0}.SelectedProjects.svelte-p70m5k.svelte-p70m5k{padding-inline:0;row-gap:1rem;column-gap:1rem}.otherProjects.svelte-p70m5k.svelte-p70m5k{margin-top:2rem}}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<main class="${'svelte-p70m5k'}"><h1 class="${'svelte-p70m5k'}">Selected Projects</h1>
	<div class="${'SelectedProjects svelte-p70m5k'}"><div class="${'project-1 svelte-p70m5k'}">${validate_component(
		ProjectCard,
		'ProjectCard'
	).$$render(
		$$result,
		{
			projectImg: '/mouckup/Book.png',
			srcPath: '/mouckup/Book.png',
			projectName: 'Book Author Landing Page',
			projectDes: 'lorem'
		},
		{},
		{}
	)}
			</div>
		<div class="${'project-2 svelte-p70m5k'}">${validate_component(ProjectCard, 'ProjectCard').$$render(
		$$result,
		{
			projectImg: '/mouckup/m.a.m.png',
			srcPath: '/mouckup/m.a.m.png',
			projectName: 'M.A.M',
			projectDes:
				'I am proud to present the product card I designed and developed, inspired by the Front End Mentor challenge. This card is an effective and efficient way to showcase a product, highlighting its features and benefits in an attractive and user-friendly way. The design is modern and sleek, with a focus on creating an aesthetically pleasing and intuitive experience for the user. The card also includes a clear call-to-action, so that customers can easily take the next step and purchase the product. Overall, I am pleased with the results of this project, and I am confident that it will be a valuable asset to any business.'
		},
		{},
		{}
	)}</div>
		<div class="${'project-3 svelte-p70m5k'}">${validate_component(ProjectCard, 'ProjectCard').$$render(
		$$result,
		{
			projectImg: '/mouckup/procduct.png',
			srcPath: '/mouckup/procduct.png',
			projectName: 'Product Card',
			projectDes:
				'I am proud to present the product card I designed and developed, inspired by the Front End Mentor challenge. This card is an effective and efficient way to showcase a product, highlighting its features and benefits in an attractive and user-friendly way. The design is modern and sleek, with a focus on creating an aesthetically pleasing and intuitive experience for the user. The card also includes a clear call-to-action, so that customers can easily take the next step and purchase the product. Overall, I am pleased with the results of this project, and I am confident that it will be a valuable asset to any business.'
		},
		{},
		{}
	)}</div>
		<div class="${'project-4 svelte-p70m5k'}">${validate_component(ProjectCard, 'ProjectCard').$$render(
		$$result,
		{ projectImg: '/mouckup/roshan.png' },
		{},
		{}
	)}</div></div>
	<div class="${'otherProjects svelte-p70m5k'}"><h1 class="${'svelte-p70m5k'}">Other Projects</h1>
		<div class="${'projects svelte-p70m5k'}"><a href="${'https://github.com/ahmedonour/'}" target="${'_blank'}" rel="${'noreferrer'}"><i class="${'fab fa-github svelte-p70m5k'}"></i></a></div></div>
</main>`;
});
export { Page as default };
