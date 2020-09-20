<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	import Tag from '../../components/Tag.svelte';
	export let projects;
</script>

<style>
</style>

<svelte:head>
	<title>Projects - igorzanella.dev</title>
</svelte:head>

<div class="p-2 sm:max-w-5xl">
	<h1 class="text-light text-3xl font-title">My <span class="text-primary">projects</span></h1>
	<div class="w-full flex flex-col items-center justify-center">
		{#each projects as project, i}
			<a href="/projects/{project.slug}" class="bg-light w-5/6 m-2 rounded-lg flex flex-col hover:pulsate-fwd sm:m-4 {i % 2 ? "sm:flex-row-reverse" : "sm:flex-row"} sm:w-full">
				<img class="rounded-t-lg object-cover w-full h-48 object-center sm:flex-grow sm:w-1/2 sm:h-56 {i % 2 ? "sm:rounded-none sm:rounded-r-lg" : "sm:rounded-none sm:rounded-l-lg"}" src="img/projects/{project.image}" alt={project.title}/>
				<div class="p-3">
					<h2 class="font-semibold text-primary text-xl">{project.title}</h2>
					<div class="flex flex-row flex-grow-0 flex-wrap -px-1">
						{#each project.tags as tag}
							<Tag tag={tag} classes="mr-2 my-2"/>
						{/each}
					</div>
					<p class="mt-2">{project.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>