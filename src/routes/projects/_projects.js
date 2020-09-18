// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const projects = [
	{
		title: 'igorzanella.dev',
		slug: 'igorzanella-dev',
		tags: ['svelte', 'sapper', 'tailwind','postcss'],
		description: 'Just the website you are navigating on!',
		image: "igorzanella-dev.jpg",
		logo: "igorzanella-dev-logo.jpg",
		link: "this",
		html: `
			
		`
	},
	{
		title: 'Racing Line Motorsport',
		slug: 'racing-line-motorsport',
		tags: ['react', 'bootstrap', 'node', 'mongodb', 'aws'],
		description: 'Website crafted for my sim racing team.',
		link: 'https://racinglinemotorsport.com',
		html: `
			
		`
	},
	{
		title: 'BestOnDesk',
		slug: 'bestondesk',
		tags: ['wordpress', 'php', 'openlitespeed', 'cloudflare'],
		description: 'Website and business based on affiliations.',
		image: "bestondesk.jpg",
		link: 'https://bestondesk.com',
		html: `
			
		`
	},
];

projects.forEach(project => {
	project.html = project.html.replace(/^\t{3}/gm, '');
});

export default projects;
