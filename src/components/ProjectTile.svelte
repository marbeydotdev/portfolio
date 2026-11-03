<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Project } from '#lib/types.ts';
	import { resolve } from '$app/paths';

	let {projects}: {projects: Project[]} = $props()

</script>

<div in:fly={{ y: 50, delay: 50 }} class="mb-8 flex flex-col gap-4">
	<div class="grid grid-cols-1 gap-2">
		{#each projects as project, i (i)}
			<a
				href={resolve(`project/${project.identifier}`)}
				class="fancy-hover relative col-span-2 flex items-center gap-3 overflow-clip rounded border border-white/20 p-3 text-sm sm:col-span-1"
			>
				<img
					alt="logo-blurred"
					src={project.icon}
					class="absolute hidden aspect-square h-12 w-12 blur-2xl dark:block"
				/>
				<img alt="logo" src={project.icon} class="aspect-square h-12 w-12" />
				<span class="block">{project.title}</span>
			</a>
		{/each}
	</div>
</div>
