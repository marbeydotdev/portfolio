<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	interface Props {
		media: { url: string; description: string }[];
	}

	let { media }: Props = $props();

	let currentMedia = $state(0);

	function mediaPrev() {
		currentMedia = currentMedia > 0 ? currentMedia - 1 : media.length - 1;
	}

	function mediaNext() {
		currentMedia = currentMedia < media.length - 1 ? currentMedia + 1 : 0;
	}

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
	<div class="relative mb-4 h-72 w-full overflow-clip">
		{#each media as m, idx}
			<object
				onload={(e) => pauseIfUnfocused(idx, e.target)}
				class="absolute h-full w-full rounded object-contain transition-all duration-500"
				data={m.url}
				title={m.description}
				style={getCalculateTransform(idx)}
			></object>
		{/each}
	</div>
	<div class="mt-5 mb-4 flex items-center justify-between text-neutral-300">
		<button disabled={media.length <= 1} class="navbtn" onclick={mediaPrev}>{'<--'}</button>
		<span class="block text-xs text-zinc-600 dark:text-zinc-400"
			>viewing {currentMedia + 1} of {media.length}</span
		>
		<button disabled={media.length <= 1} class="navbtn" onclick={mediaNext}>{'-->'}</button>
	</div>
	{#key currentMedia}
		<small class="block text-zinc-700 dark:text-zinc-300" in:fade
			>{media.at(currentMedia)?.description}</small
		>
	{/key}
</div>

<style lang="postcss">
	.navbtn {
		@apply relative block aspect-video w-24 rounded-full bg-zinc-200 p-3 text-sm text-zinc-950 transition-all active:scale-95 disabled:bg-zinc-100 disabled:text-zinc-700 disabled:active:scale-100 dark:bg-zinc-800 dark:disabled:bg-zinc-900/80 dark:disabled:text-zinc-600;
	}
</style>
