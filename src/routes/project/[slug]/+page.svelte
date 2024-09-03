<script>
	import {fly} from 'svelte/transition';
	import {page} from '$app/stores';
	import {projects} from '$lib/projects';
	import { goto } from '$app/navigation';

	if (!Object.keys(projects).includes($page.params.slug)){
		goto("/")
	}

	let project = projects[$page.params.slug];
</script>

<div in:fly={{y: 50}} class=" flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
	<h1 class="text-3xl grow inline-block">{project.name}</h1>
	<small class="">{project.short}</small>
</div>

<p in:fly={{y: 50, delay: 100}} class="mb-8 text-balance">{project.description}</p>

<div in:fly={{y: 50, delay: 200}} class="block relative before:inset-0 before:bg-gradient-to-r before:to-50% before:from-white/20">
	<h2>Features</h2>

	<div class="block mb-8 ">
		{#each project.features as feature}
			<span class="block">{feature}</span>
		{/each}
	</div>
</div>


<div in:fly={{y: 50, delay: 300}} class="block text-right">
<h2>Contributions</h2>
	{#each project.contributions as contribution, index}
		<span in:fly|global={{y: 50, delay: (300 + (index * 100))}} class="block">{contribution}</span>
		{/each}
</div>