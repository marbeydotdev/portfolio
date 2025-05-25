<script lang="ts">
	import { projects } from '$lib/projects.ts';
	import {fly} from 'svelte/transition';
	import {base} from '$app/paths';
</script>

<div in:fly|global={{y: 50, duration:300}} class="p-5 flex items-center gap-2 border rounded-lg border-black/10 dark:border-white/10 dark:bg-yellow-200/[3%] text-sm dark:text-neutral-50 mb-7 mt-5">
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
	<span>Vertalingen zijn onderweg.</span>
</div>

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
