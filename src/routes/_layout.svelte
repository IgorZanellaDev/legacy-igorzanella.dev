<script>
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from '../components/GlobalStyle.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<GlobalStyle/>

<style>
</style>

<Nav {segment} />
<main class="bg-light flex-grow">
	<slot></slot>
</main>
<Footer/>