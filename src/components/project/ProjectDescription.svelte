<script lang="ts">
	import { fly } from 'svelte/transition';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<p
	in:fly={{ y: 50, delay: 100 }}
	class="mt-4 mb-8 border-t border-white/10 pt-4 text-sm text-balance"
>
	{@render children?.()}
</p>
