<script lang="ts">
	import { fly } from 'svelte/transition';
	import { projects } from '$lib/projects.ts';
</script>


<div in:fly={{y: 50, delay: 50}} class="flex gap-2 w-full overflow-clip select-none">
	{#each Object.keys(projects) as project}
		<a href="/project/{project}"
			 class="flex flex-col text-center w-44 min-w-44 min-h-44 h-44 relative items-center group gap-3 p-3 rounded border text-sm">
			<img alt="logo" src="{projects[project].icon}"
					 class="aspect-square h-24 w-24 grayscale group-hover:filter-none transition-all">
			<span class="block">{projects[project].name}</span>
		</a>
	{/each}
</div>