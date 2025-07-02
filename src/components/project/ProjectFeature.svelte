<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let {children}: Props = $props();
</script>

<div class="p-4 flex items-center gap-5 bg-base-100 border-b last:border-b-0 border-base-content/30">
	<svg class="w-5 h-5 min-w-5 min-h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7L10 17l-5-5"/></svg>
	<div>
		{@render children?.()}
	</div>
</div>