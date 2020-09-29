<script>
	import { onMount } from 'svelte';
	import { chatOnline } from '../components/stores.js';
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from '../components/GlobalStyle.svelte';
	import Footer from '../components/Footer.svelte';
	import Background from '../components/Background.svelte';

	export let segment;

	onMount(() => {
		(function waitTawk(){
			if(typeof window.Tawk_API !== "undefined" && typeof window.Tawk_API.getStatus() !== "undefined"){
				if(window.Tawk_API.getStatus() === "online") chatOnline.set(true);
			} else setTimeout(waitTawk, 100);
		})();
		(function(){
			var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
			s1.async=true;
			s1.src='https://embed.tawk.to/5f5969184704467e89eda1f9/default';
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
		})();
	});
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