<script>
	import { onMount } from 'svelte';
	import { chatOnline } from '../components/stores.js';
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from '../components/GlobalStyle.svelte';
	import Footer from '../components/Footer.svelte';
	import Background from '../components/Background.svelte';
	import { stores } from '@sapper/app';
  	const { page } = stores();

	export let segment;
	const max_tawk = 100;
	let tawk_count = 0;

	onMount(() => {
		(function waitTawk(){
			if(typeof window.Tawk_API !== "undefined" && typeof window.Tawk_API.getStatus() !== "undefined"){
				if(window.Tawk_API.getStatus() === "online") chatOnline.set(true);
			} else if (tawk_count < max_tawk) {
				setTimeout(() => {
					waitTawk();
					tawk_count++;
				}, 100);
			}
		})();
	});

	$:{
		if (typeof gtag !== "undefined"){
			gtag("config", "UA-SOMEANALYTICSID-1", {
				page_path: $page.path
			});
		}
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Inter&family=Ubuntu:wght@400;500;700" rel="stylesheet">
</svelte:head>

<GlobalStyle/>

<Background/>
<Nav {segment}/>
<main class="flex-grow z-10 flex flex-col items-center">
	<slot></slot>
</main>
<Footer/>