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
		github: "https://github.com/ZanellaIgor/igorzanella.dev",
		html: `

		`
	},
	{
		title: 'Racing Line Motorsport',
		slug: 'racing-line-motorsport',
		tags: ['react', 'bootstrap', 'animatecss', 'node', 'mongodb', 'aws'],
		description: 'Website crafted for my sim racing team.',
		image: "racinglinemotorsport.jpg",
		link: 'https://racinglinemotorsport.com',
		html: `
			<h2 class="text-light text-xl font-title">What is Sim Racing?</h2>
			<p class="text-light">
				Sim Racing is the term which indicates the auto racing simulation software, hardware and organizations. It has been around for a lot of time, but recently is growing exponentially.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title">What is Racing Line Motorsport?</h2>
			<p class="text-light">
				Racing Line Motorsport is a team where I am part of organization. We compete in national and international championships, for sprint races or team endurance races.
				<br/>We won different races and leagues, national and international
				<br/>We also organized some race and we created this website to organize the next events.
			</p>
			<img class="h-48 my-2 self-center md:h-64" src="img/projects/racinglinemotorsport/events.jpg">
			<h2 class="text-light text-xl font-title">What did I do?</h2>
			<p class="text-light">
				I worked on this website with Andrea Santoro, I worked on frontend and Andrea on backend.
				<br/>We also helped each other with code debug and bug fixing.
				<br/>The frontend is based on React, I used Bootstrap as CSS framework, with high customizations. For animations I used animate.css library.
				<br/>The backend is based on node.js, we use mongoDB and passport as authentication middleware.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title">Future goals</h2>
			<p class="text-light">
				Our main goal is to grow as a team and organization. We will also do some real track days with some fantastic cars.
			</p>
		`
	},
	{
		title: 'BestOnDesk',
		slug: 'bestondesk',
		tags: ['wordpress', 'php', 'openlitespeed', 'aws', 'cloudflare', 'googleads'],
		description: 'Website and business based on affiliations.',
		image: "bestondesk.jpg",
		link: 'https://bestondesk.com',
		html: `
			<h2 class="text-light text-xl font-title">What is BestOnDesk?</h2>
			<p class="text-light">
				BestOnDesk is a business I started a friend of mine, Marco Campagnolo.
				<br/>We wanted to create a website for all the people which work in the offices, to help them with articles on personal growth. The website is also for companies advices.
				<br/>For now the website has only the Italian language, but we aim to expand in the whole world.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title">Where do we earn?</h2>
			<p class="text-light">
				The business core is the affiliations, we create articles where we advice products (on Amazon or other Marketplaces), if the people buy these articles we earn a percentage of the order.
				<br/> Below there is an example of an article.
			</p>
			<img class="h-48 my-2 self-center md:h-64" src="img/projects/bestondesk/articles.jpeg">
			<h2 class="text-light text-xl font-title">What did I do?</h2>
			<p class="text-light">
				I created the website on Wordpress CMS using a prepackaged theme (I didn't have so much time because I was working as employee).
				<br/>The website is hosted on Amazon Web Services EC2 server, with OpenLiteSpeed web server. I used CloudFlare CDN.
				<br/>I planned to transform the frontend to headless CMS, so I will recreate the new frontend using a JS framework like React or Svelte.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title">Ads and social networks</h2>
			<p class="text-light">
				I manage the Google Ads profile and social netowrks. I plan Ads and social posts on a daily base, to get more people on website.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title">Future goals</h2>
			<p class="text-light">
				Obviously the main goal is to raise the earning from affiliations, to get more from this business.
				<br/> Another goal is to become a reference point for employees and companies for growth advices.
			</p>
		`
	},
];

projects.forEach(project => {
	project.html = project.html.replace(/^\t{3}/gm, '');
});

export default projects;
