<script context="module">
	import {getProjects} from "../../assets/projects.js";
	export function preload({ params, query }) {
		return { projects: getProjects() }
	}
</script>

<script>
	import Tag from '../../components/Tag.svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '@sapper/app';
	export let projects;
	let animate = false;

	function handleClick(i){
		projects.forEach(project => {
			project.clicked = false;
			project.animateOut = false;
		})
		projects[i].clicked = true;
		projects.forEach((project, z) => {
			if(z !== i){
				project.animateOut = true;
			}
		});
		animate = true;
		setTimeout(() => goto('/projects/'+projects[i].slug), 400);
	}
</script>

<style>
</style>

<svelte:head>
	<title>Projects - igorzanella.dev</title>
</svelte:head>

<div class="p-2 sm:max-w-5xl" in:fade={{duration: 300}} >
	<h1 class="text-light text-3xl font-title">My <span class="text-primary">projects</span></h1>
	<div class="w-full flex flex-col items-center justify-center perspective-500">
		{#each projects as project, i}
			<button on:click={() => handleClick(i)} class="bg-light w-5/6 m-2 rounded-lg flex flex-col focus:outline-none sm:m-4 {i % 2 ? "sm:flex-row-reverse" : "sm:flex-row"} {project.clicked && animate ? "fade-out-fwd z-50" : project.animateOut && animate ? "fade-out" : "hover:vibrate-1"} sm:w-full">
				<a class="hidden" href="/projects/{project.slug}">{project.slug}</a>
				<img class="rounded-t-lg object-cover w-full h-48 object-center sm:flex-grow sm:w-1/2 sm:h-56 {i % 2 ? "sm:rounded-none sm:rounded-r-lg" : "sm:rounded-none sm:rounded-l-lg"}" src="img/projects/{project.image}" alt={project.title}/>
				<div class="p-3 text-left">
					<h2 class="font-semibold text-primary text-xl">{project.title}</h2>
					<div class="flex flex-row flex-grow-0 flex-wrap -px-1">
						{#each project.tags as tag}
							<Tag tag={tag} clickable={false} classes="mr-2 my-2"/>
						{/each}
					</div>
					<p class="mt-2">{project.description}</p>
				</div>
			</button>
		{/each}
	</div>
</div>