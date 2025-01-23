<script lang="ts">
	import { fly } from 'svelte/transition';
	import {projects} from '$lib/projects.ts';
</script>

<div in:fly={{y: 50, delay: 50}} class="mb-8 flex gap-4 flex-col">
	<div class="grid grid-cols-2 gap-2">
		{#each Object.keys(projects) as project}
			<a href="/project/{project}" class="flex relative items-center gap-3 p-3 rounded border text-sm">
				<img alt="logo" src="{projects[project].icon}" class="aspect-square h-12 w-12">
				<span class="block">{projects[project].name}</span>
			</a>
		{/each}
		<a href="/projects" class="p-3 border col-span-2 rounded text-zinc-50 text-sm transition-all active:scale-95 items-center justify-center flex">View all projects</a>

	</div>

</div>