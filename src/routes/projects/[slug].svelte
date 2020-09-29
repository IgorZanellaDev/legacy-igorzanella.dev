<script context="module">
	import { getProjectBySlug } from "../../assets/projects.js";
	export async function preload({ params, query }) {
		return { project: getProjectBySlug(params.slug) }
	}
</script>

<script>
	import Tag from "../../components/Tag.svelte";
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
	import { fade } from 'svelte/transition';
	import Image from "svelte-image";
	
	export let project;
</script>

<svelte:head>
	<title>{project.title} - igorzanella.dev</title>
</svelte:head>

<div class="sm:max-w-4xl" in:fade={{duration: 300}}>
	<h1 class="text-light text-2xl font-title font-bold pt-2 px-2">{project.title}</h1>
	<div class="flex flex-row flex-grow-0 flex-wrap pb-2 px-2">
		{#each project.tags as tag}
			<Tag tag={tag} classes="mr-2 my-2"/>
		{/each}
	</div>
	<img class="w-full h-40 object-cover mt-1 md:h-80" src="/img/projects/{project.image}" alt="{project.title}"/>
	{#if project.link}
		<h3 class="text-light text-xl pt-2 px-2 flex items-center"><Fa fw icon={faGlobeEurope} class="w-6 align-items mr-1"/>Link: <a href={project.link} class="text-accent underline ml-2">{project.link.replace("https://", "")}</a></h3>
	{/if}
	{#if project.github}
		<h3 class="text-light text-xl pt-2 px-2 flex items-center"><Fa fw icon={faGithub} class="w-6 align-items mr-1"/>GitHub: <a href={project.github} class="text-accent underline ml-2">{project.title}</a></h3>
	{/if}
	{#if project.socials}
		{#each project.socials as social}
			<p class="text-light px-2 text-xl flex items-center"><Fa fw class="w-6 mr-1" color={social.color} icon={social.icon}/>{social.name}:<a class="text-accent underline ml-2" target="_blank" rel="noopener noreferrer" href={social.link}>{social.user}</a></p>
		{/each}
	{/if}
	<div class="p-2 flex flex-col">
		{@html project.html}
	</div>
</div>

