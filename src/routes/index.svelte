<script>
	import Typewriter from '../components/Typewriter.svelte';
	import * as animateScroll from "svelte-scrollto";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	import { animations as animationsState } from '../components/stores.js';
	import { colors } from '../assets/theme';
	
	import Icon from 'fa-svelte';
	import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons/faLongArrowAltRight';
	import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
	import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';
	import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
	import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
	import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';
	import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

	let animation_home = true;
	let animation_home2 = true;
	let tw_interval = [50,60,70,80];
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const animations_unsubscribe = animationsState.subscribe((value) => {
		animation_home = value.home;
		animation_home2 = value.home2;
	});

	function handleAnimationDone (){
		animationsState.update((value) => {
			return {...value, home: false}
		});
		setTimeout(() => animationsState.update((value) => {
			return {...value, home2: false}
		}), 2000);
	}
</script>

<svelte:head>
	<title>Home - igorzanella.dev</title>
</svelte:head>

<div in:fade={{duration: 300}}>
<div class="text-light flex flex-col items-center justify-center px-2 h-screen">
	<div class="text-center text-4xl transition-all duration-300 sm:text-5xl lg:text-6xl xl:text-7xl">
		<Typewriter cursor={colors.light} interval={tw_interval} cascade active={animation_home} on:done={handleAnimationDone}>
			<p class="font-title"><span>Hi! I'm </span><span class="text-primary">Igor Zanella</span><span>!</span></p>
			<p><span>I can build the </span><span class="text-accent">complete </span><span>web solution for your </span><span class="text-secondary">business</span><span>.</span></p>
		</Typewriter>
	</div>
	{#if mounted}
		<button on:click={() => animateScroll.scrollTo({element: '#services', offset: -50})} class="mt-4 bg-primary hover:bg-primaryDark transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg focus:outline-none {!animation_home ? animation_home2 ? "visible scale-in-center" : "visible" : "invisible"} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
			Discover how
		</button>
	{/if}
</div>
<div class="mx-4 bg-light rounded-lg flex flex-col sm:flex-row sm:mx-10 sm:p-2" id="services">
	<div class="flex flex-col py-4 px-5 flex-1">
		<Icon class="text-primary text-3xl self-center" icon={faMobileAlt}/>
		<h3 class="text-primary text-2xl font-title mb-2 self-center">Full Stack Developer</h3>
		<p><Icon class="text-primary" icon={faCheck}/> Static websites on pure <span class="text-primary">HTML</span>, <span class="text-primary">CSS</span> and <span class="text-primary">JavaScript</span>.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Websites and ecommerce on <span class="text-primary">CMS</span> like <span class="text-primary">Wordpress</span>.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Fast <span class="text-primary">headless CMS</span> websites.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Apps and web apps on JS frameworks like <span class="text-primary">React</span>.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Frontend UI/UX development with <span class="text-primary">custom CSS</span> or customizing CSS frameworks like <span class="text-primary">Bootstrap</span> and <span class="text-primary">TailwindCSS</span>.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Apps backend, on <span class="text-primary">REST API</span>, <span class="text-primary">SQL</span> and <span class="text-primary">noSQL</span> databases.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Apps tests and reports for error and improvements.</p>
		<p><Icon class="text-primary" icon={faCheck}/> <span class="text-primary">SEO</span> optimization and positioning. Also analysis and reports.</p>
		<p><Icon class="text-primary" icon={faCheck}/> <span class="text-primary">Google</span> and <span class="text-primary">Facebook</span> ads creation and management.</p>
		<div class="mb-3"/>
		<a href="projects" class="mt-auto bg-primary hover:bg-primaryDark transition-all duration-300 mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faProjectDiagram}/>Check my projects</a>
	</div>
	<div class="flex flex-col py-4 px-5 flex-1">
		<Icon class="text-primary text-3xl self-center" icon={faRocket}/>
		<h3 class="text-primary text-2xl font-title mb-2 self-center">Social Media Manager</h3>
		<p><Icon class="text-primary" icon={faCheck}/> Social account creations and management.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Social posts creation and advices.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Social management on <span class="text-primary">Facebook</span>, <span class="text-primary">Instagram</span>, <span class="text-primary">Twitter</span>, <span class="text-primary">YouTube</span> and <span class="text-primary">Twitch</span>.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Best <span class="text-primary">hashtags</span> listing.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Managing <span class="text-primary">organic growth</span>.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Social media advertising on <span class="text-primary">Google</span> and <span class="text-primary">Facebook/Instagram</span>.</p>
		<p><Icon class="text-primary" icon={faCheck}/> Basic <span class="text-primary">video editing</span>.</p>
		<div class="mb-3"/>
		<a href="projects" class="mt-auto bg-primary hover:bg-primaryDark transition-all duration-300 mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faProjectDiagram}/>Check my projects</a>
		<a href="articles" class="bg-secondary hover:bg-secondaryDark transition-all duration-300 mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:justify-start"><Icon class="text-light mr-2 text-xl" icon={faNewspaper}/>Check my articles</a>
	</div>
	<div>
		
	</div>
</div>
</div>