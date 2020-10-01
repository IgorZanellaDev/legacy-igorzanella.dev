<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
	<title>{status} - igorzanella.dev</title>
</svelte:head>

<div class="absolute w-full h-full flex flex-col items-center justify-center flicker-1 transition-all duration-300">
	<h1 class="text-light text-5xl font-title font-bold sm:text-6xl lg:text-7xl">ERROR {status}</h1>
	<h2 class="text-light text-4xl font-bold sm:text-5xl lg:text-6xl">{error.message}</h2>
	<a class="text-light mt-2 bg-primary hover:bg-primaryDark transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg text-2xl sm:text-3xl lg:text-4xl" href=".">Go to home</a>
</div>