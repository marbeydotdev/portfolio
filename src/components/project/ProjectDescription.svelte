<script lang="ts">
	import {fly} from 'svelte/transition';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let {children}: Props = $props()
</script>

<p
	in:fly={{ y: 50, delay: 100 }}
	class="mb-8 text-balance text-sm border-t pt-4 mt-4 border-white/10"
>
	{@render children?.()}
</p>

