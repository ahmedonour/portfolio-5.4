export const manifest = {
	appDir: '_app',
	appPath: '_app',
	assets: new Set([
		'AS.svg',
		'ASlight.svg',
		'Cursor.png',
		'app.css',
		'mouckup/Book.png',
		'mouckup/m.a.m.png',
		'mouckup/procduct.png',
		'mouckup/roshan.png'
	]),
	mimeTypes: { '.svg': 'image/svg+xml', '.png': 'image/png', '.css': 'text/css' },
	_: {
		entry: {
			file: '_app/immutable/start-fe3d66d1.js',
			imports: [
				'_app/immutable/start-fe3d66d1.js',
				'_app/immutable/chunks/index-63c2ad18.js',
				'_app/immutable/chunks/singletons-edf5b976.js'
			],
			stylesheets: [],
			fonts: []
		},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
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
				id: '/ar',
				pattern: /^\/ar\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: '/contact',
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: '/project',
				pattern: /^\/project\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			return {};
		}
	}
};
