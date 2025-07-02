<script lang="ts">
	import { fly } from 'svelte/transition'
	interface Props {
		children?: import('svelte').Snippet;
	}

	let {children}: Props = $props();
</script>

<div class="mb-5" in:fly={{y: 50, delay: 150}}>
	<span class="block text-sm font-semibold mb-1">Contributions</span>
	<div class="flex flex-col text-sm">
		{@render children?.()}
	</div>
</div>