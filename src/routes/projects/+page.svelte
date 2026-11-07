<script lang="ts">
	import { fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	import { tagColor } from '#lib/helpers.ts';
	let { data }: PageProps = $props();
</script>

<div class="flex flex-col gap-14">
	{#each data.projects as project, index (index)}
		<a
			href={resolve(`project/${project.identifier}`)}
			in:fly|global={{ y: 50, delay: index * 100 }}
			class="fancy-hover relative flex cursor-pointer flex-col items-center rounded-xl from-[hsl({project.colorHue}deg_40%_40%] bg-linear-to-b to-transparent"
		>
			<div class="flex w-full grow flex-row">
				<div class="grow">
					<span class="text-lg font-semibold">{project.title}</span>
					<p>{project.description}</p>
				</div>
				<img class="ml-10 aspect-square w-14 object-contain" alt="icon" src={project.icon} />
			</div>
			<div class="mt-3 flex w-full gap-2 text-sm">
				{#each project.tags as technology, i (i)}
					<span
						style="background: {tagColor(technology)}"
						class="flex items-center justify-center rounded-full px-3 py-1 font-mono text-xs"
						>{technology}</span
					>
				{/each}
			</div>
		</a>
	{/each}
</div>
