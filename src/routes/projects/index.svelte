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
	import Image from "svelte-image";

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
	:global(.wrapper *){
		@apply h-48;
	}

	@screen sm {
		:global(.wrapper *){
			@apply h-56;
		}	
	}
</style>

<svelte:head>
	<title>Projects - igorzanella.dev</title>
</svelte:head>

<div class="p-2 sm:px-6 w-full sm:max-w-5xl" in:fade={{duration: 300}}>
	<h1 class="text-light text-3xl font-title font-bold">My <span class="text-primary">projects</span></h1>
	<div class="w-full flex flex-col items-center justify-center perspective-500">
		{#each projects as project, i}
			<button on:click={() => handleClick(i)} class="bg-light w-5/6 m-2 rounded-lg flex flex-col focus:outline-none sm:m-4 {i%2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} {project.clicked && animate ? "fade-out-fwd z-50" : project.animateOut && animate ? "fade-out" : "hover:float-animation"} sm:w-full">
				<a class="hidden" href="/projects/{project.slug}">{project.slug}</a>
				<Image wrapperClass="rounded-t-lg h-48 sm:w-1/2-i sm:h-56" class="w-full h-full object-cover object-center sm:rounded-none {i%2 === 0 ? "sm:rounded-l-lg" : "sm:rounded-r-lg"}" placeholderClass="w-full h-full object-cover object-center sm:rounded-none {i%2 === 0 ? "sm:rounded-l-lg" : "sm:rounded-r-lg"}" src="img/projects/{project.image}" alt={project.title}/>
				<div class="p-3 text-left w-full sm:w-1/2 h-full">
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
		<div class="bg-light m-2 rounded-lg flex items-center w-5/6 sm:w-full px-6 py-4 {animate ? "fade-out": ""}">
			<h3 class="text-center w-full text-xl">I didn't post all of my <span class="text-primary">projects</span>, <a href="TODO" class="text-accent underline">contact me</a> to discover the other ones.</h3>
		</div>
	</div>
</div>