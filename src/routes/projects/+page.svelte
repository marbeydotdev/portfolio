<script lang="ts">
	import { projects } from '$lib/projects';
	import {fly} from 'svelte/transition';
	import {base} from '$app/paths';
</script>

<div class="flex flex-col gap-5">
	{#each Object.keys(projects) as project, index}
		<a href="{base.replace('.','')}/project/{project}" in:fly|global={{y: 50, delay: index*100}} class="block relative rounded-xl cursor-pointer fancy-hover">
			<span class="font-semibold text-lg">{projects[project].name}</span>
			<p>{projects[project].short}</p>
		</a>
	{/each}
</div>
