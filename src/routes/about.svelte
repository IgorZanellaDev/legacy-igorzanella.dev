<script>
	import { fade } from 'svelte/transition';
	import { animations as animationsState } from '../components/stores.js';

	let age = ~~((Date.now() - new Date(Date.UTC(1998,1,2))) / (31557600000));
	let about_animation = false;

	const animationsUnsubscribe = animationsState.subscribe(value => {
		about_animation = value.about;
		if(about_animation){
			setTimeout(() => animationsState.update(value => {return {...value, about: false}}), 3000);
		}
	})
</script>

<svelte:head>
	<title>About - igorzanella.dev</title>
</svelte:head>

<div in:fade={{duration: 300}} class="flex flex-col justify-center items-center p-2 md:max-w-4xl">
	<div class="flex w-full items-center justify-center flex-col md:flex-row">
		<div class="hidden w-full bg-light flex-col -mr-16 rounded-lg h-24 justify-center {about_animation ? "slide-in-elliptic-bottom-fwd-delay": ""} md:flex">
			<h1 class="text-3xl font-title font-bold text-center text-dark">About <span class="text-primary">me</span></h1>
		</div>
		<div class="h-56 w-full flex flex-grow items-center justify-center">
			<img class="rounded-full object-cover object-top h-full w-auto {about_animation ? "roll-in-left md:roll-in-left-delay" : ""} md:z-20" src="img/igor.jpeg" alt="Igor Zanella"/>
		</div>
		<div class="w-5/6 shadow-lg p-4 -mt-16 border-none h-24 bg-light flex flex-col justify-center rounded-lg {about_animation ? "bounce-in-bck-delay md:bounce-in-bck" : ""} md:w-full md:mt-0 md:-ml-16">
			<p class="text-center text-2xl font-bold text-primary">Igor Zanella</p>
			<p class="text-center font-semibold text-secondary">Full Stack Developer</p>
			<p class="text-center font-semibold text-secondary">Social Media Manager</p>
		</div>
	</div>
	<div class="self-start text-light p-2">
		<h1 class="text-3xl font-title font-bold md:hidden">About <span class="text-primary">me</span></h1>
		<h2 class="text-2xl font-title font-bold">Who <span class="text-primary">am I</span>?</h2>
		<p>Hi, I am Igor, I am Italian and {age} years old (yes, it's changing dynamically, you can check it on 2nd February😉). I love IT world, so I decided to become a freelancer, after more than 3 years as employee.</p>
		<h2 class="text-2xl font-title font-bold mt-3 leading-tight">What are my previous <span class="text-primary">work experiences</span>?</h2>
		<p>I worked in 3 different branches of IT, I worked in IT security for some months, but it was shift work, also on weekends and it was not compatible with my other activities.</p>
		<p class="mt-2">Then, I worked as web developer, but I did not like the environment of the company where i was. I developed on web apps using Angular JS and Ionic, following directly entirely projects on my own.</p>
		<p class="mt-2">The last job I did as employee was the IT consultant, so I worked on hardware and virtual environments in companies. From virtual machines to network and security. And I learnt how to behave in companies.</p>
		<h2 class="text-2xl font-title font-bold mt-3 leading-tight">Why I decided to became a <span class="text-primary">freelancer</span>?</h2>
		<p>I have an affiliate marketing web business (<a href="/projects/bestondesk" class="text-accent underline">BestOnDesk</a>), I had to open a VAT account to manage entrances and exits. So I decided to become a freelancer also for web developing and social media management.</p>
		<p class="mt-2">I decided it on my previous and actual projects I'm managing. My goal is to live with entrances from my businesses, but I love coding, so I want also to continue to develop my passion.</p>
		<h2 class="text-2xl font-title font-bold mt-3 leading-tight">Where did I learn to <span class="text-primary">code</span>?</h2>
		<p>I learn basics at high school, I did 5 years, oriented to "IT and telecommunications", where I achieve advanced skills on some object-oriented programming languages like Java and C++.</p>
		<p class="mt-2">I also studied at home, and I did some projects on my own or with friends, like mobile games on Unity 3D.</p>
		<p class="mt-2">After school I decided not go to university, for various reasons, mainly because in the first period I should have to study things that I already know or I don't like.</p>
		<p class="mt-2">I continued to study at home, I love web developing and I'm always studying new programming languages and frameworks.</p>
		<h2 class="text-2xl font-title font-bold mt-3 leading-tight">Where did I learn things about <span class="text-primary">Social Media</span>?</h2>
		<p>I learnt it "on the job" and on web articles and blogs. I now manage different social accounts with good  (like <a href="/projects/racing-line-motorsport" class="text-accent underline">Racing Line Motorsport</a>, <a href="/projects/bestondesk" class="text-accent underline">BestOnDesk</a>, <a href="/projects/igorzanella16" class="text-accent underline">Igor Zanella #16</a>) with good results.</p>
		<p class="mt-2">I like to work on socials because they offer a possibility to let you became known in the whole world.</p>
		<h2 class="text-2xl font-title font-bold mt-3 leading-tight">What are my other <span class="text-primary">passions</span>?</h2>
		<p>As you can see on my projects I love adrenaline sports, motorsports in particular. In my spare time I train in martial arts (MMA and BJJ), I go snowboarding, enduro mountain biking, karting.</p>
		<p class="mt-2">Follow me on my social if you are interested in this things!</p>
		<h2 class="text-2xl font-title font-bold mt-3 leading-tight">Let's <span class="text-primary">speak</span>!</h2>
		<p>We can speak on the chat you can find in the lower right-hand corner of the screen. Or contact me by mail at <a href="mailto:hello@igorzanella.dev" class="text-accent underline">hello@igorzanella.dev</a>. I'm waiting for you!</p>
	</div>
</div> 