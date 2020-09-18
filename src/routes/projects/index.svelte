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

<div class="p-2">
	<h1 class="text-light text-3xl font-title">My projects</h1>
	<div class="w-full flex flex-col items-center justify-center">
		{#each projects as project}
			<div class="bg-light w-5/6 m-2 rounded-lg">
				<img class="rounded-t-lg object-cover w-full h-48 object-center" src="img/projects/{project.image}"/>
				<div class="p-3">
					<h2 class="font-semibold text-primary text-xl">{project.title}</h2>
					<div class="flex flex-row flex-grow-0 flex-wrap -px-1">
						{#each project.tags as tag}
							<Tag tag={tag} classes="m-1"/>
						{/each}
					</div>
					<p>{project.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>