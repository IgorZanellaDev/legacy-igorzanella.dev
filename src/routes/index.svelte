<style>
</style>

<svelte:head>
	<title>Home - igorzanella.dev</title>
</svelte:head>

<div class="py-2">
	<div class="flex flex-col justify-content-center items-center">
		<div class="h-56">
			<img class="rounded-full object-cover object-top h-full w-auto" src="img/igor.jpeg" alt="Igor Zanella"/>
		</div>
		<div class="bg-white w-5/6 rounded-lg shadow-lg p-4 -mt-16">
			<p class="text-center text-2xl font-bold text-dark">Hi, I'm Igor Zanella!</p>
			<p class="text-center font-semibold text-primary">Full Stack Developer<br/>IT Consultant</p>
		</div>
	</div>
	<div class="my-2 flex justify-center items-center flex-col">
		<a href="projects" class="w-5/6 h-72 m-5 bg-light shadow-2xl rounded-lg flex flex-col md:flex-row">
			<img class="rounded-t-lg object-cover w-full h-48 object-center md:w-1/2 md:rounded-none md:rounded-l-lg md:h-full" src="img/bod_home.jpeg" alt="Developer Projects"/>
			<div class="p-3 md:flex-grow">
				<h3 class="font-semibold text-primary mb-2 text-xl">Projects</h3>
				<p>Discover my projects in the dedicated section.</p>
			</div>
		</a>
		<a href="articles" class="w-5/6 h-72 m-5 bg-light shadow-2xl rounded-lg flex flex-col md:flex-row-reverse">
			<img class="rounded-t-lg object-cover w-full h-48 object-center md:w-1/2 md:rounded-none md:rounded-r-lg md:h-full" src="img/article.jpg" alt="Articles"/>
			<div class="p-3 md:flex-grow ">
				<h3 class="font-semibold text-primary mb-2 text-xl">Articles</h3>
				<p>Read the articles I written on the web.</p>
			</div>
		</a>
	</div>
</div>