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

<div class="block mb-8" in:fly={{ y: 50, delay: 200 }}>
	<div class="w-full h-72 mb-8 relative overflow-clip">
		{#each media as m, idx}
			<object
				onload={(e) => pauseIfUnfocused(idx, e.target)}
				class="w-full h-full rounded object-contain transition-all duration-500 absolute bg-transparent"
				data={m.url}
				title={m.description}
				style={getCalculateTransform(idx)}
			></object>
		{/each}
	</div>

		<div class="flex gap-3 text-sm dark:text-zinc-300 flex-wrap">
			{#each media as m, idx}
				<button onclick={() => currentMedia = idx} class="px-3 py-1 flex rounded-full {idx === currentMedia ? 'bg-neutral-100 text-neutral-900' : ''}">{m.description}</button>
			{/each}
		</div>
</div>

<style lang="postcss">
    .navbtn {
        @apply bg-zinc-200 text-zinc-950 disabled:bg-zinc-100 disabled:text-zinc-700 dark:disabled:bg-zinc-900/80 dark:disabled:text-zinc-600 disabled:active:scale-100 block p-3 w-24 text-sm aspect-video relative dark:bg-zinc-800 rounded-full transition-all active:scale-95;
    }
</style>
