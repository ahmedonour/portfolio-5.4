import { init } from '../serverless.js';

export const handler = init({
	appDir: '_app',
	appPath: '_app',
	assets: new Set([
		'103.svg',
		'13.svg',
		'151.svg',
		'AS.svg',
		'ASlight.svg',
		'Cursor.png',
		'favicon.png',
		'mouckup/Book.png',
		'mouckup/m.a.m.png',
		'mouckup/procduct.png',
		'mouckup/roshan.png',
		'surrealist.jpg'
	]),
	mimeTypes: { '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' },
	_: {
		entry: {
			file: '_app/immutable/start-058e1762.js',
			imports: [
				'_app/immutable/start-058e1762.js',
				'_app/immutable/chunks/index-e4df2d6a.js',
				'_app/immutable/chunks/singletons-2ec708e6.js'
			],
			stylesheets: [],
			fonts: []
		},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: '/',
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: '/about',
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: '/contact',
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: '/project',
				pattern: /^\/project\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			return {};
		}
	}
});
