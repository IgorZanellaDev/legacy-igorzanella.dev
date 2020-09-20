<script>
	import Typewriter from '../components/Typewriter.svelte';
	import * as animateScroll from "svelte-scrollto";

	import { animations as animations_wr } from '../components/stores.js';
	import { colors } from '../assets/theme';
	
	import Icon from 'fa-svelte';
	import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons/faLongArrowAltRight';
	import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
	import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';
	import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
	import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
	import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
	import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

	let animations;
	let tw_interval = [50,60,70,80];

	const animations_unsubscribe = animations_wr.subscribe((value) => {
		animations = value;
	});

	function handleAnimationDone (){
		animations_wr.update((value) => {
			return {...value, home: false}
		});
	}
</script>

<svelte:head>
	<title>Home - igorzanella.dev</title>
</svelte:head>

<div class="py-2">
	<div class="text-light flex flex-col items-center justify-center px-2 h-screen">
		<div class="text-center text-4xl transition-all duration-300 sm:text-5xl lg:text-6xl xl:text-7xl">
			<Typewriter cursor={colors.light} interval={tw_interval} cascade active={animations.home} on:done={handleAnimationDone}>
				<p class="font-title">Hi! I'm <span class="text-primary">Igor Zanella</span><span>!</span></p>
				<p><span>I can build the </span><span class="text-accent">complete </span><span>web solution for your </span><span class="text-secondary">business</span><span>.</span></p>
			</Typewriter>
		</div>
		<a on:click={() => animateScroll.scrollTo({element: '#services', offset: -50})} href="#services" class="mt-6 bg-primary hover:bg-primaryDark transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg {!animations.home ? "visible animate__animated animate__fadeInUp" : "invisible"} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
			Discover how
		</a>
	</div>
	<div class="mx-4 bg-light rounded-lg flex flex-col sm:flex-row sm:mx-10 sm:p-2" id="services">
		<div class="flex flex-col py-4 px-5 flex-1">
			<Icon class="text-primary text-3xl self-center" icon={faMobileAlt}/>
			<h3 class="text-primary text-2xl font-title mb-2 self-center">Full Stack Developer</h3>
			<p><Icon class="text-primary" icon={faCheck}/> Static websites on pure <span class="text-primary">HTML</span>, <span class="text-primary">CSS</span> and <span class="text-primary">JavaScript</span>.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Websites and ecommerce on <span class="text-primary">CMS</span> like <span class="text-primary">Wordpress</span>.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Apps and web apps on JS frameworks like <span class="text-primary">React</span>.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Frontend UI/UX development with <span class="text-primary">custom CSS</span> or customizing CSS frameworks like <span class="text-primary">Bootstrap</span> and <span class="text-primary">TailwindCSS</span>.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Apps backend, on <span class="text-primary">REST API</span>, <span class="text-primary">SQL</span> and <span class="text-primary">noSQL</span> databases.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Apps tests and reports for error and improvements.</p>
			<div class="mb-3"/>
			<a href="projects" class="mt-auto bg-primary mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faProjectDiagram}/>Check my projects</a>
			<a href="#contact" class="bg-accent mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faUserCircle}/>Contact me</a>
		</div>
		<div class="flex flex-col py-4 px-5 flex-1">
			<Icon class="text-primary text-3xl self-center" icon={faRocket}/>
			<h3 class="text-primary text-2xl font-title mb-2 self-center">Social Media Manager</h3>
			<p><Icon class="text-primary" icon={faCheck}/> Social account creations and management.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Social posts creation and advices.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Social management on <span class="text-primary">Facebook</span>, <span class="text-primary">Instagram</span>, <span class="text-primary">Twitter</span>, <span class="text-primary">YouTube</span> and <span class="text-primary">Twitch</span>.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Best hashtags listing.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Managing organic growth.</p>
			<p><Icon class="text-primary" icon={faCheck}/> Basic video editing.</p>
			<div class="mb-3"/>
			<a href="projects" class="mt-auto bg-primary mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faProjectDiagram}/>Check my projects</a>
			<a href="articles" class="bg-secondary mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faNewspaper}/>Check my articles</a>
			<a href="#contact" class="bg-accent mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faUserCircle}/>Contact me</a>
		</div>
	</div>
</div>