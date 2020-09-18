<script>
	import Typewriter from '../components/Typewriter.svelte';
	import { animations as animations_wr } from '../components/stores.js';

	let animations;

	const animations_unsubscribe = animations_wr.subscribe((value) => {
		animations = value;
	});

	function handleAnimationMobileDone (){
		animations_wr.update((value) => {
			return {...value, home_mobile: false}
		});
	}

	function handleAnimationDesktopDone (){
		animations_wr.update((value) => {
			return {...value, home_desktop: false}
		});
	}
</script>

<style>
</style>

<svelte:head>
	<title>Home - igorzanella.dev</title>
</svelte:head>

<div class="py-2">
	<div class="flex flex-col justify-content-center items-center sm:flex-row sm:px-2">
		<div class="h-56 sm:flex-grow sm:flex sm:items-center sm:justify-center {animations.home_mobile ? "animate__animated animate__fadeInLeft" : ""}">
			<img class="rounded-full object-cover object-top h-full w-auto" src="img/igor.jpeg" alt="Igor Zanella"/>
		</div>
		<div class="bg-white w-5/6 rounded-lg shadow-lg p-4 -mt-16 border-none {animations.home_mobile ? "animate__animated animate__fadeInRight" : ""} sm:hidden">
			<Typewriter interval={50} delay={100} cascade active={animations.home_mobile} on:done={handleAnimationMobileDone}>
			<p class="text-center text-2xl font-bold text-dark"><span>Hi, I'm </span> <span class="text-primary">Igor Zanella</span><span>!</span></p>
			<p class="text-center font-semibold text-secondary">Full Stack Developer</p>
			<p class="text-center font-semibold text-secondary">IT Consultant</p>
			</Typewriter>
		</div>
		<div class="hidden sm:flex sm:items-center sm:flex-grow">
			<Typewriter cascade active={animations.home_desktop} on:done={handleAnimationDesktopDone}>
				<h2>Hi, I'm Igor Zanella!</h2>
			</Typewriter>
		</div>
	</div>
	<div class="my-2 flex justify-center items-center flex-col">
		<a href="projects" class="w-5/6 m-5 bg-light shadow-2xl rounded-lg flex flex-col sm:flex-row">
			<img class="rounded-t-lg object-cover w-full h-48 object-center sm:w-1/2 sm:rounded-none sm:rounded-l-lg sm:h-full" src="img/bod_home.jpeg" alt="Developer Projects"/>
			<div class="p-3 sm:flex-grow">
				<h3 class="font-semibold text-primary mb-2 text-xl">Projects</h3>
				<p>Discover my projects in the dedicated section.</p>
			</div>
		</a>
		<a href="articles" class="w-5/6 m-5 bg-light shadow-2xl rounded-lg flex flex-col sm:flex-row-reverse">
			<img class="rounded-t-lg object-cover w-full h-48 object-center sm:w-1/2 sm:rounded-none sm:rounded-r-lg sm:h-full" src="img/article.jpg" alt="Articles"/>
			<div class="p-3 sm:flex-grow">
				<h3 class="font-semibold text-primary mb-2 text-xl">Articles</h3>
				<p>Read the articles I written on the web.</p>
			</div>
		</a>
	</div>
</div>