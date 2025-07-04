<script lang="ts">
	import { projects } from '$lib/projects.ts';
	import { fly } from 'svelte/transition';
</script>

<div class="flex flex-col gap-14">
	{#each projects as project, index}
		<a
			href="/project/{project.identifier}"
			in:fly|global={{ y: 50, delay: index * 100 }}
			class="flex flex-col items-center relative rounded-xl cursor-pointer fancy-hover from-[{project.color}] to-transparent bg-gradient-to-b"
		>
			<div class="flex flex-row flex-grow w-full">
				<div class="flex-grow">
					<span class="font-semibold text-lg">{project.title}</span>
					<p>{project.description}</p>
				</div>
				<img
					class="object-contain w-14 aspect-square ml-10"
					alt="icon"
					src={project.icon}
				/>
			</div>
			<div class="flex gap-2 w-full text-sm mt-3">
				{#each project.technologies as technology}
					<span class="flex font-mono items-center justify-center px-3 py-1 text-xs rounded-full bg-base-200"
						>{technology}</span
					>
				{/each}
			</div>
		</a>
	{/each}
</div>
