import { faInstagram, faYoutube, faTwitch, faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const projects = [
	{
		title: "igorzanella.dev",
		slug: "igorzanella-dev",
		tags: ["svelte", "sapper", "tailwind","postcss", "animatecss", "netlify"],
		description: "Just the website you are navigating on!",
		metaDescription: "The project of this website. Explaining what I used to do it. You can also find the GitHub public link and code examples.",
		metaDescriptionCard: "Project of this website. Explaining how I developed it and public code.",
		image: "igorzanella-dev.jpg",
		github: "https://github.com/ZanellaIgor/igorzanella.dev",
		html: `
			<h2 class="text-light text-xl font-title font-bold">Welcome to my website!</h2>
			<p class="text-light">
				Welcome to my website. I developed this website to use it as a portfolio and a tracker for my work activity.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Simple static website</h2>
			<p class="text-light">
				This is a static website based on Sapper, a framework powered by Svelte, which is a framework of JavaScript.
				</br/>The project you can see on GitHub is then exported to be hosted.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">CSS part</h2>
			<p class="text-light">
				The CSS is based on Tailwind CSS, a UI Toolkit, low-level CSS framework, it is different from usual CSS frameworks because it do not has a default theme and themed components.
				<br/>It provides low-level utility classes that let you build completely custom designs, without working on CSS (or so).
				<br/>It uses PostCSS which is a tool with different plugins, which let you create fast CSS files, purging (in my case) all the CSS classes i did not use on the website, to create light CSS files.
				<br/>Below you can see an example of an HTML title styled using Tailwind classes.
			</p>
			<code class="w-full bg-light rounded-lg text-dark p-2 mt-2">
				<span class="text-purple-600">&lt;h1</span> <span class="text-orange-600">class=</span><span class="text-blue-600">"text-gray-800 text-2xl font-serif hover:underline md:text-6xl"></span>Title<span class="text-purple-600">&lt;/h1></span>
			</code>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Animations</h2>
			<p class="text-light">
				For animations I used Svelte default libraries and animate.css, a good library with pre-made CSS animations.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Free Code</h2>
			<p class="text-light">
				I published the code of this website on my GitHub, to show you my skills. You can find it above.
			</p>
		`
	},
	{
		title: "Racing Line Motorsport (Coming out soon)",
		slug: "racing-line-motorsport",
		tags: ["react", "bootstrap", "animatecss", "node", "mongodb", "aws"],
		description: "Website crafted for my sim racing team.",
		metaDescription: "Racing Line Motorsport website, developed for my Sim Racing team. Case study and Social Media management.",
		metaDescriptionCard: "My Sim Racing team website. Case study and Social Media management.",
		image: "racinglinemotorsport.jpg",
		socials: [
			{
				name: "Facebook",
				user: "Racing Line Motorsport",
				icon: faFacebook,
				color: "#1877f2",
				link: "https://www.facebook.com/RacingLineMotorsport"
			},
			{
				name: "Instagram",
				user: "@racinglinemotorsport",
				icon: faInstagram,
				color: "#e1306c",
				link: "https://instagram.com/racinglinemotorsport"
			},
			{
				name: "YouTube",
				user: "Igor Zanella",
				icon: faYoutube,
				color: "#ff0000",
				link: "https://youtube.com/channel/UCf2A-B-rWCJZqpiNmR9R35g"
			},
			{
				name: "Twitch",
				user: "igorzanella",
				icon: faTwitch,
				color: "#6441a4",
				link: "https://twitch.tv/igorzanella"
			},
			{
				name: "Twitter",
				user: "RacingLiners",
				icon: faTwitter,
				color: "#1da1f2",
				link: "https://twitter.com/RacingLiners"
			}
		],
		link: "https://racinglinemotorsport.com",
		html: `
			<h2 class="text-light text-xl font-title font-bold">What is Sim Racing?</h2>
			<p class="text-light">
				Sim Racing is the term which indicates the auto racing simulation software, hardware and organizations. It has been around for a lot of time, but recently is growing exponentially.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">What is Racing Line Motorsport?</h2>
			<p class="text-light">
				Racing Line Motorsport is a team where I am part of organization. We compete in national and international championships, for sprint races or team endurance races.
				<br/>We won different races and leagues, national and international
				<br/>We also organized some race and we created this website to organize the next events.
			</p>
			<Image class="h-48 my-2 self-center md:h-64" src="img/projects/racinglinemotorsport/events.jpg">
			<h2 class="text-light text-xl font-title font-bold">What did I do?</h2>
			<p class="text-light">
				I worked on this website with Andrea Santoro, I worked on frontend and Andrea on backend.
				<br/>We also helped each other with code debug and bug fixing.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Frontend</h2>
			<p class="text-light">
				The frontend is based on React, I used Bootstrap as CSS framework, with high customizations. For animations I used animate.css library.
			</p>	
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Backend</h2>
			<p class="text-light">
				The backend is based on Node.js, we use mongoDB and Passport as authentication middleware.
				<br/>The login is managed by backend using Discord, a famous VoIP service for gamers.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Social Media Manager</h2>
			<p class="text-light">
				In this team I am also the social media manager, I do not write posts, but only managing the Social Media team to work well, I am choosing the best strategy for reaching the best, and planning posts on different socials.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Future goals</h2>
			<p class="text-light">
				Our main goal is to grow as a team and organization. We will also do some real track days with some fantastic cars.
			</p>
		`
	},
	{
		title: "BestOnDesk",
		slug: "bestondesk",
		tags: ["wordpress", "php", "openlitespeed", "aws", "cloudflare", "googleads"],
		description: "Website and business based on affiliations.",
		metaDescription: "BestOnDesk, one of my businesses. An affiliate marketing based website. Discover the case study now!",
		metaDescriptionCard: "BestOnDesk, one of my businesses. Discover the case study now!",
		image: "bestondesk.jpg",
		link: "https://bestondesk.com",
		socials: [
			{
				name: "Facebook",
				user: "BestOnDesk",
				icon: faFacebook,
				color: "#1877f2",
				link: "https://www.facebook.com/bestondeskcom"
			},
			{
				name: "Instagram",
				user: "@bestondesk",
				icon: faInstagram,
				color: "#e1306c",
				link: "https://www.instagram.com/bestondesk/"
			},
			{
				name: "Linkedin",
				user: "BestOnDesk",
				icon: faLinkedin,
				color: "#0077b5",
				link: "https://www.linkedin.com/company/bestondesk/"
			},
		],
		html: `
			<h2 class="text-light text-xl font-title font-bold">What is BestOnDesk?</h2>
			<p class="text-light">
				BestOnDesk is a business I started a friend of mine, Marco Campagnolo.
				<br/>We wanted to create a website for all the people which work in the offices, to help them with articles on personal growth. The website is also for companies advices.
				<br/>For now the website has only the Italian language, but we aim to expand in the whole world.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Where do we earn?</h2>
			<p class="text-light">
				The business core is the affiliations, we create articles where we advice products (on Amazon or other Marketplaces), if the people buy these articles we earn a percentage of the order.
				<br/> Below there is an example of an article.
			</p>
			<Image class="h-48 my-2 self-center md:h-64" src="img/projects/bestondesk/articles.jpeg">
			<h2 class="text-light text-xl font-title font-bold">What did I do?</h2>
			<p class="text-light">
				I created the website on Wordpress CMS using a prepackaged theme (I did not have so much time because I was working as employee).
				<br/>The website is hosted on Amazon Web Services EC2 server, with OpenLiteSpeed web server. I used CloudFlare CDN.
				<br/>I planned to transform the frontend to headless CMS, so I will recreate the new frontend using a JS framework like React or Svelte.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Ads and social networks</h2>
			<p class="text-light">
				I manage the Google Ads profile and social netowrks. I plan Ads and social posts on a daily base, to get more people on website.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">Future goals</h2>
			<p class="text-light">
				Obviously the main goal is to raise the earning from affiliations, to get more from this business.
				<br/> Another goal is to become a reference point for employees and companies for growth advices.
			</p>
		`
	},
	{
		title: "Igor Zanella #16",
		slug: "igorzanella16",
		tags: ["instagram", "youtube", "twitch"],
		description: "Social media project for sim racing",
		metaDescription: "My social project for Sim Racing. Discover what are my social accounts and how I manage them.",
		metaDescriptionCard: "Discover now my social networks project for Sim Racing. Follow me!",
		image: "igorzanella16.jpg",
		socials: [
			{
				name: "Instagram",
				user: "@igorzanella16",
				icon: faInstagram,
				color: "#e1306c",
				link: "https://instagram.com/igorzanella16"
			},
			{
				name: "YouTube",
				user: "Igor Zanella",
				icon: faYoutube,
				color: "#ff0000",
				link: "https://youtube.com/channel/UCf2A-B-rWCJZqpiNmR9R35g"
			},
			{
				name: "Twitch",
				user: "igorzanella",
				icon: faTwitch,
				color: "#6441a4",
				link: "https://twitch.tv/igorzanella"
			}
		],
		html: `
			<h2 class="text-light text-xl font-title font-bold">What is Igor Zanella #16?</h2>
			<p class="text-light">
				This is my project on social networks for my sim racing "career".
				<br/>I have different social accounts where I post photos and videos about my races, championships and training.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">What is Sim Racing?</h2>
			<p class="text-light">
				Sim Racing is the term which indicates the auto racing simulation software, hardware and organizations. It has been around for a lot of time, but recently is growing exponentially.
			</p>
			<Image class="h-48 my-2 self-center md:h-64" src="img/projects/igorzanella16/igorzanella16-audi.jpg">
			<h2 class="text-light text-xl font-title font-bold">What am I doing?</h2>
			<p class="text-light">
				I am training everyday to prepare online races and championships. During this I stream all the races on Twitch (also for endurances, like real 8h/12h/24h), and I do some tutorials, recaps and other things on Youtube.
				<br/>On Instagram, instead, I am offering news for my followers, for new races I am partecipating in.
			</p>
			<br/>
			<h2 class="text-light text-xl font-title font-bold">What do I have achieved so far?</h2>
			<p class="text-light">
				I already met real racing world. For example I competed in 12h of Suzuka with David Fumanelli, a real PRO racing driver, which drove different racing car like Formula Renault, Formula 3 / GP3 and also in GT World Cup.
				<br/><br/>I also helped Matteo Cairoli on simulators with software, setups and races. He is (today) an official Porsche Driver, he took part and also won different championships. For example, he competed (as of today) in Porsche Supercup, World Endurance Championship, GT World Cup, 24h Le Mans, 24h Nurburging and much more.
				<br/><br/>Last but not least, Fabrizio Crestani, he is actually helping us with our sim racing team with setups, driving coaching and much more. He competed in Formula 3, GP2, GT World Cup, and (as today) he is racing in International GT Open.
			</p>
			<Image class="h-48 my-2 self-center md:h-64" src="img/projects/igorzanella16/igorzanella16-12h.jpg">
			<h2 class="text-light text-xl font-title font-bold">Future goals</h2>
			<p class="text-light">
				My goal with this project is to reach real racing world. I am creating a presence on social networks to offer it to future sponsors.
			</p>
			<br/>
		`
	},
];

projects.forEach((project) => {
	project.html = project.html.replace(/^\t{3}/gm, "");
});

export function getProjectBySlug(slug){
	return projects.filter((project) => project.slug === slug)[0];
}

export function getProjects(){
	return projects;
}
