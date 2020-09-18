<script>
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from '../components/GlobalStyle.svelte';
	import Footer from '../components/Footer.svelte';
	import Background from '../components/Background.svelte';

	export let segment;
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