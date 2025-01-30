<script lang="ts">
	import { projects } from '$lib/projects.ts';
	import {fly} from 'svelte/transition';
	import {base} from '$app/paths';
</script>

<div class="flex flex-col gap-14">
	{#each Object.keys(projects) as project, index}
		<a href="{base.replace('.','')}/project/{project}" in:fly|global={{y: 50, delay: index*100}} class="flex flex-col items-center relative rounded-xl cursor-pointer fancy-hover">
			<div class="flex flex-row flex-grow w-full">
			<div class="flex-grow">
				<span class="font-semibold text-lg">{projects[project].name}</span>
				<p>{projects[project].short}</p>
			</div>
			<img class="object-contain w-14 aspect-square ml-10" alt="icon" src="{projects[project].icon}">
			</div>
			<div class="flex gap-2 w-full text-sm mt-3">
				{#each projects[project].technologies as technology}
					<span class="flex items-center justify-center px-3 py-2 border rounded-sm">{technology}</span>
				{/each}
			</div>
		</a>
	{/each}
</div>
