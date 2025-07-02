<script lang="ts">
	import { fly } from 'svelte/transition';
	import { projects } from '$lib/projects.ts';
</script>

<div in:fly={{ y: 50, delay: 50 }} class="mb-8 flex gap-4 flex-col">
	<div class="grid grid-cols-1 gap-2">
		{#each projects as project}
			<a
				href="/project/{project.identifier}"
				class="flex overflow-clip relative items-center gap-3 p-3 rounded fancy-hover border border-white/20 text-sm sm:col-span-1 col-span-2"
			>
				<img
					alt="logo-blurred"
					src={project.icon}
					class="aspect-square h-12 w-12 blur-2xl absolute dark:block hidden"
				/>
				<img alt="logo" src={project.icon} class="aspect-square h-12 w-12" />
				<span class="block">{project.title}</span>
			</a>
		{/each}
	</div>
</div>
