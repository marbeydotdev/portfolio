<script lang="ts">
	import { fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="flex flex-col gap-2 not-even:bg-base-100">
	{#each data.blogs as post, idx (idx)}
		<a
			href={resolve(`blog/${post.identifier}`)}
			in:fly|global={{ y: 50, delay: idx * 50 }}
			class="fancy-hover relative flex flex-col"
		>
			<p class="block text-2xl font-semibold">{post.title}</p>

		</a>
	{/each}
</div>
