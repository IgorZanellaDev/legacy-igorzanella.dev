<script context="module">
	import { getProjectBySlug } from "../../assets/projects.js";
	export async function preload({ params, query }) {
		return { project: getProjectBySlug(params.slug) }
	}
</script>

<script>
	import Tag from "../../components/Tag.svelte";
	import Icon from 'fa-svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { fade } from 'svelte/transition';
	export let project;
</script>

<svelte:head>
	<title>{project.title} - igorzanella.dev</title>
</svelte:head>

<div class="sm:max-w-4xl" in:fade={{duration: 300}}>
	<h1 class="text-light text-2xl font-title pt-2 px-2">{project.title}</h1>
	<div class="flex flex-row flex-grow-0 flex-wrap pb-2 px-2">
		{#each project.tags as tag}
			<Tag tag={tag} classes="mr-2 my-2"/>
		{/each}
	</div>
	<img class="w-full h-40 object-cover mt-1 md:h-80" src="/img/projects/{project.image}" alt="{project.title}"/>
	{#if project.link}
		<h3 class="text-light text-lg pt-2 px-2">Link: <a href={project.link} class="text-accent underline">{project.link}</a></h3>
	{/if}
	{#if project.github}
		<h3 class="text-light text-lg pt-2 px-2 align-middle"><Icon icon={faGithub} class="align-items mr-1"/>Code: <a href={project.github} class="text-accent underline">{project.title}</a></h3>
	{/if}
	<div class="p-2 flex flex-col">
		{@html project.html}
	</div>
</div>

