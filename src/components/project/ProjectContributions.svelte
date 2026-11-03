<script lang="ts">
	import { fly } from 'svelte/transition';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="mb-5" in:fly={{ y: 50, delay: 150 }}>
	<span class="mb-1 block text-sm font-semibold">Contributions</span>
	<div class="flex flex-col text-sm">
		{@render children?.()}
	</div>
</div>
