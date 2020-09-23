<script>
	import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from '../components/GlobalStyle.svelte';
	import Footer from '../components/Footer.svelte';
	import Background from '../components/Background.svelte';

	export let segment;

	onMount(() => {
		var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
		(function(){
			var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
			s1.async=true;
			s1.src='https://embed.tawk.to/5f5969184704467e89eda1f9/default';
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
		})();
	})
</script>

<GlobalStyle/>

<style>
</style>


<Background/>
<Nav {segment}/>
<main class="flex-grow z-10 flex flex-col items-center">
	<slot></slot>
</main>
<Footer/>