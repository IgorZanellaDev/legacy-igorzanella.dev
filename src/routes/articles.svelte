<script context="module">
	import { getArticles } from "../assets/articles.js";
	export function preload({ params, query }) {
		return { articles: getArticles() }
	}
</script>

<script>
	import Tag from "../components/Tag.svelte";
	import { fade } from "svelte/transition";
	import { goto } from "@sapper/app";
	import Image from "svelte-image";
	import MetaTags from "../components/MetaTags.svelte";

	export let articles;
	let animate;

	function handleClick(i){
		articles.forEach(article => {
			article.clicked = false;
			article.animateOut = false;
		})
		articles[i].clicked = true;
		articles.forEach((article, z) => {
			if(z !== i){
				article.animateOut = true;
			}
		});
		animate = true;
		setTimeout(() => goto(articles[i].link), 300);
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

<MetaTags
	path="articles"
	page="articles"
	description = "The articles I written. I love social networks and I like writing tutorials and guides online. Check out them now."
	descriptionCard = "My articles, they are tutorials, guides and much more! Check them out now!"
/>

<div class="p-2 sm:px-6 w-full sm:max-w-5xl" in:fade={{duration: 300}}>
	<h1 class="text-light text-3xl font-title font-bold">My <span class="text-primary">articles</span></h1>
	<div class="w-full flex flex-col items-center justify-center perspective-500">
		{#each articles as article, i}
			<button on:click={() => handleClick(i)} class="bg-light w-5/6 m-2 rounded-lg flex flex-col focus:outline-none sm:m-4 {i%2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} {article.clicked && animate ? "fade-out-fwd z-50" : article.animateOut && animate ? "fade-out" : "hover:float-animation"} sm:w-full">
				<a class="hidden" href="/articles/{article.slug}">{article.slug}</a>
				<Image wrapperClass="rounded-t-lg h-48 sm:w-1/2-i sm:h-56" class="w-full h-full object-cover object-center sm:rounded-none {i%2 === 0 ? "sm:rounded-l-lg" : "sm:rounded-r-lg"}" placeholderClass="w-full h-full object-cover object-center sm:rounded-none {i%2 === 0 ? "sm:rounded-l-lg" : "sm:rounded-r-lg"}" src="img/articles/{article.image}" alt={article.title}/>
				<div class="p-3 text-left w-full sm:w-1/2 h-full">
					<h2 class="font-semibold text-primary text-xl">{article.title}</h2>
					<div class="flex flex-row flex-grow-0 flex-wrap -px-1">
						{#each article.tags as tag}
							<Tag tag={tag} clickable={false} classes="mr-2 my-2"/>
						{/each}
					</div>
					<p class="mt-2">{article.description}</p>
				</div>
			</button>
		{/each}
	</div>
</div>