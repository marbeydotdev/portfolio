<script lang="ts">
	import {fly} from 'svelte/transition';
	import {page} from '$app/state';
	import { goto } from '$app/navigation';
	import { projects } from '$lib/projects.ts';
	import MediaViewer from '../../../components/MediaViewer.svelte';

	if (!Object.keys(projects).includes(page.params.slug)){
		goto("/")
	}
	let project = projects[page.params.slug];
</script>

<div class="absolute h-12 left-0 right-0 top-0 blur-3xl opacity-50" style="background: {project.color}">
</div>

<div in:fly={{y: 50}} class="flex flex-col mb-3">

	<div class="flex items-center mb-4">
		<img alt="logo" src="{project.icon}" class="aspect-square h-12 w-12 mr-2 inline-block">
		<h1 class="text-lg text-balance" style="color: {project.color}">{project.name}
		</h1>
	</div>

	<p class="block text-sm ml-14">{project.short}</p>
</div>

<p in:fly={{y: 50, delay: 100}} class="mb-8 text-balance text-sm border-t pt-4 mt-4 border-white/10">{project.description}</p>

<MediaViewer media={project.media} />

<div in:fly={{y: 50, delay: 300}} class="block relative before:inset-0 before:bg-gradient-to-r before:to-50% before:from-white/20">
	<h2 class="project-color mb-4 text-xl">Features</h2>

	<div class="block mb-6 text-sm">
		{#each project.features as feature}
			<span class='block p-5 mb-3 rounded border border-neutral-400 dark:text-neutral-200 backdrop-blur'>{feature}</span>
		{/each}
	</div>
</div>


<div in:fly={{y: 50, delay: 400}} class="block text-sm">
<h2 class="mb-4 text-xl">Contributions</h2>
	{#each project.contributions as contribution, index}
		<span in:fly|global={{y: 50, delay: (400 + (index * 100))}} class="block p-5 mb-3 rounded border border-neutral-400 dark:text-neutral-200 ">{contribution}</span>
		{/each}
</div>

<style>
	.project-color {
      color: var(--project-color)
	}
</style>