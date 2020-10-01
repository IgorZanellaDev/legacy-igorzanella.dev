<script>
	import Typewriter from "../components/Typewriter.svelte";
	import MetaTags from "../components/MetaTags.svelte";
	import * as animateScroll from "svelte-scrollto";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	import { animations as animationsState, chatOnline as chatOnlineState } from "../components/stores.js";
	import { colors } from "../assets/theme";
	
	import Fa from "svelte-fa";
	import { faMobileAlt, faRocket, faCheck, faNewspaper, faProjectDiagram, faUserCircle } from "@fortawesome/free-solid-svg-icons";

	let animation_home = true;
	let animation_home2 = true;
	let tw_interval = [60,80,100];
	let mounted = false;
	let chatOnline = false;
	var Tawk_API = {};
	const max_tawk = 100;
	let tawk_count = 0;

	onMount(() => {
		mounted = true;
		(function waitTawk(){
			if(typeof window.Tawk_API !== "undefined" && typeof window.Tawk_API.maximize === "function"){
				Tawk_API = window.Tawk_API;
			} else if (tawk_count < max_tawk) {
				setTimeout(() => {
					waitTawk();
					tawk_count++;
				}, 100);
			}
		})();
	});

	function openChat(){
		Tawk_API.maximize();
	}

	const animations_unsubscribe = animationsState.subscribe((value) => {
		animation_home = value.home;
		animation_home2 = value.home2;
	});

	const chatOnline_unsubscribe = chatOnlineState.subscribe((value) => {
		chatOnline = value;
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

<MetaTags
	description = "Hi, I am a web developer and social media manager. I work as a freelancer on commission, creating entire projects or giving advice on existing ones." 
	descriptionCard = "Web is my job. Freelance specialized in Web Developing and Social Media."
/>

<div in:fade={{duration: 300}} class="overflow-hidden">
	<div class="text-light flex flex-col items-center justify-center px-2 h-screen">
		<div class="text-center text-4xl transition-all duration-300 font-title font-bold sm:text-6xl lg:text-7xl">
			<Typewriter cursor={colors.light} interval={tw_interval} cascade active={animation_home} on:done={handleAnimationDone}>
				<p class="slide"><span>Hi! I'm </span><span class="text-primary">Igor Zanella</span></p>
				<p><span class="text-accent">Web </span><span>is my </span><span class="text-secondary">job</span></p>
			</Typewriter>
		</div>
		{#if mounted}
			<div class="flex mt-8">
				<button on:click={() => animateScroll.scrollTo({element: "#services", offset: -50})} class="mx-2 sm:mx-4 bg-primary hover:bg-primaryDark transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg focus:outline-none {!animation_home ? animation_home2 ? "visible scale-in-center" : "visible" : "invisible"} text-2xl sm:text-3xl lg:text-5xl">
					What I do
				</button>
				{#if chatOnline}
					<button on:click={openChat} class="mx-2 sm:mx-4 bg-secondary hover:bg-secondaryDark transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg focus:outline-none {!animation_home ? animation_home2 ? "visible slide-in-blurred-br" : "visible" : "invisible"} text-2xl sm:text-3xl lg:text-5xl">
						Chat with me
					</button>
				{/if}
			</div>
		{/if}
	</div>
	<div class="mx-4 bg-light rounded-lg flex flex-col sm:mx-10 sm:p-4" id="services">
		<div class="flex flex-col sm:flex-row">
			<div class="flex flex-col py-4 px-5 sm:py-2 sm:px-3 flex-1">
				<Fa class="text-primary text-3xl self-center" icon={faMobileAlt}/>
				<h3 class="text-primary text-2xl font-title font-bold mb-2 self-center">Full Stack Developer</h3>
				<p><Fa class="text-primary inline" icon={faCheck}/> Static websites on pure <span class="text-primary">HTML</span>, <span class="text-primary">CSS</span> and <span class="text-primary">JavaScript</span>.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> Websites and ecommerce on <span class="text-primary">CMS</span> like <span class="text-primary">Wordpress</span>.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> Fast <span class="text-primary">headless CMS</span> websites.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> Apps and web apps on JS frameworks like <span class="text-primary">React</span>.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> Frontend UI/UX development with <span class="text-primary">custom CSS</span> or customizing CSS frameworks like <span class="text-primary">Bootstrap</span> and <span class="text-primary">TailwindCSS</span>.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> Apps backend, on <span class="text-primary">REST API</span>, <span class="text-primary">SQL</span> and <span class="text-primary">noSQL</span> databases.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> Apps tests and reports for error and improvements.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> <span class="text-primary">SEO</span> optimization and positioning. Also analysis and reports.</p>
				<p><Fa class="text-primary inline" icon={faCheck}/> <span class="text-primary">Google</span> and <span class="text-primary">Facebook</span> ads creation and management.</p>
				<div class="mb-3"/>
				<a href="projects" class="mt-auto bg-primary hover:bg-primaryDark transition-all duration-300 mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:hidden"><Fa class="text-light mr-2 text-xl" icon={faProjectDiagram}/>Check my projects</a>
				<a href="articles" class="mt-auto bg-secondary hover:bg-secondaryDark transition-all duration-300 mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:hidden"><Fa class="text-light mr-2 text-xl" icon={faNewspaper}/>Check my articles</a>
			</div>
			<div class="flex flex-col py-4 px-5 sm:py-2 sm:px-3 flex-1">
				<Fa class="text-secondary text-3xl self-center" icon={faRocket}/>
				<h3 class="text-secondary text-2xl font-title font-bold mb-2 self-center">Social Media Manager</h3>
				<p><Fa class="text-secondary inline" icon={faCheck}/> Social account creations and management.</p>
				<p><Fa class="text-secondary inline" icon={faCheck}/> Social posts creation and advices.</p>
				<p><Fa class="text-secondary inline" icon={faCheck}/> Social management on <span class="text-secondary">Facebook</span>, <span class="text-secondary">Instagram</span>, <span class="text-secondary">Twitter</span>, <span class="text-secondary">YouTube</span> and <span class="text-secondary">Twitch</span>.</p>
				<p><Fa class="text-secondary inline" icon={faCheck}/> Best <span class="text-secondary">hashtags</span> listing.</p>
				<p><Fa class="text-secondary inline" icon={faCheck}/> Managing <span class="text-secondary">organic growth</span>.</p>
				<p><Fa class="text-secondary inline" icon={faCheck}/> Social media advertising on <span class="text-secondary">Google</span> and <span class="text-secondary">Facebook/Instagram</span>.</p>
				<p><Fa class="text-secondary inline" icon={faCheck}/> Basic <span class="text-secondary">video editing</span>.</p>
				<div class="mb-3"/>
				<a href="projects" class="bg-primary hover:bg-primaryDark transition-all duration-300 mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:hidden"><Fa class="text-light mr-2 text-xl" icon={faProjectDiagram}/>Check my projects</a>
				<a href="articles" class="mt-auto bg-secondary hover:bg-secondaryDark transition-all duration-300 mb-1 px-4 py-2 rounded-lg text-light flex items-center justify-center sm:hidden"><Fa class="text-light mr-2 text-xl" icon={faNewspaper}/>Check my articles</a>
			</div>
		</div>
		<div class="hidden sm:flex items-center justify-center">
			<a href="projects" class="mx-3 bg-primary text-center px-8 py-4 text-light rounded-lg shadow-xl hover:bg-primaryDark transition-all duration-300 flex items-center justify-center text-xl"><Fa class="text-light mr-2 text-xl" icon={faProjectDiagram}/>Check my projects</a>
			<a href="articles" class="mx-3 bg-secondary text-center px-8 py-4 text-light rounded-lg shadow-xl hover:bg-secondaryDark transition-all duration-300 flex items-center justify-center text-xl"><Fa class="text-light mr-2 text-xl" icon={faNewspaper}/>Check my articles</a>
			<a href="about" class="mx-3 bg-accent text-center px-8 py-4 text-light rounded-lg shadow-xl hover:bg-accentDark transition-all duration-300 flex items-center justify-center text-xl"><Fa class="text-light mr-2 text-xl" icon={faUserCircle}/>About me</a>
		</div>
	</div>
</div>