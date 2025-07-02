<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { projects } from '$lib/projects.ts';
	import { goto } from '$app/navigation';

	interface Props {
		children?: import('svelte').Snippet;
		projectIdentifier: string
	}

	let {children, projectIdentifier}: Props = $props();

	let project = projects.find(p => p.identifier === projectIdentifier)!;

	onMount(() => {
		if (!project){
			goto("/projects")
		}
	})

</script>

<div
	class="absolute h-12 left-0 right-0 top-0 blur-3xl opacity-50"
	style="background: {project.color}"
></div>

<div in:fly={{ y: 50 }} class="flex flex-col mb-3">
	<div class="flex items-center mb-4">
		<img alt="logo" src={project.icon} class="aspect-square h-12 w-12 mr-2 inline-block" />
		<h1 class="text-lg text-balance" style="color: {project.color}">{project.title}</h1>
	</div>

	<p class="block text-sm ml-14">{project.description}</p>
</div>

{@render children?.()}
