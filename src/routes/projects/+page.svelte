<script lang="ts">
	import { projects } from '$lib/projects';
	import {fly} from 'svelte/transition';
</script>

<div class="flex flex-col gap-5">
	{#each Object.keys(projects) as project, index}
		<div in:fly|global={{y: 50, delay: index*100}} class="block relative rounded-xl cursor-pointer before:-inset-4 before:absolute before:rounded before:transition-all hover:before:bg-black/10 dark:hover:before:bg-white/10 before:translate-y-16 hover:before:translate-y-0">
			<span class="font-semibold text-lg">{projects[project].name}</span>
			<p>{projects[project].short}</p>
		</div>
	{/each}
</div>
