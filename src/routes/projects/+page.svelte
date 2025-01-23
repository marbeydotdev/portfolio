<script lang="ts">
	import { projects } from '$lib/projects.ts';
	import {fly} from 'svelte/transition';
	import {base} from '$app/paths';
</script>

<div class="flex flex-col gap-5">
	{#each Object.keys(projects) as project, index}
		<a href="{base.replace('.','')}/project/{project}" in:fly|global={{y: 50, delay: index*100}} class="flex flex-row items-center relative rounded-xl cursor-pointer fancy-hover">
			<div class="flex-grow">
				<span class="font-semibold text-lg">{projects[project].name}</span>
				<p>{projects[project].short}</p>
			</div>
			<img class="object-contain w-14 aspect-square ml-10" alt="icon" src="{projects[project].icon}">
		</a>
	{/each}
</div>
