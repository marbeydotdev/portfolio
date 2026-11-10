<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Media } from '#lib/types.ts';

	interface Props {
		media: Media[];
	}

	let { media }: Props = $props();

	let currentMedia = $state(0);

	function pauseIfUnfocused(idx: number, element: EventTarget | null) {
		if (idx !== currentMedia && element instanceof HTMLObjectElement) {
			element.contentDocument?.querySelector('video')?.pause();
		}
	}

	function getCalculateTransform(index: number) {
		let offset = index - currentMedia;
		return `transform: translateX(${offset * 100}%); z-index: ${index === currentMedia ? 10 : 0}; blur: ${offset === 0 ? 0 : 10}px;`;
	}
</script>

<div class="mb-8 block" in:fly={{ y: 50, delay: 200 }}>
	<div class="relative mb-8 h-72 w-full overflow-clip">
		{#each media as m, idx (idx)}
			<object
				onload={(e) => pauseIfUnfocused(idx, e.target)}
				class="absolute h-full w-full rounded bg-transparent object-contain transition-all duration-500"
				data={"/assets/" + m.filename}
				title={m.name}
				style={getCalculateTransform(idx)}
			></object>
		{/each}
	</div>

	<div class="flex flex-wrap gap-3 text-sm dark:text-zinc-300">
		{#each media as m, idx (idx)}
			<button
				onclick={() => (currentMedia = idx)}
				class="hover:bg-base-200 flex cursor-pointer rounded-sm px-3 py-2 transition-all duration-100 active:scale-95 {idx ===
				currentMedia
					? '!bg-base-content text-base-100'
					: ''}">{m.alt}</button
			>
		{/each}
	</div>
</div>
