<script lang="ts">
	import { posts } from '#lib/blog.ts';
	import { fly } from 'svelte/transition';
	import { encodeSlug } from '#lib/blog.js';
</script>

<div class="flex flex-col gap-2">
	{#each posts as post, idx}
		<a
			href="/blog/{encodeSlug(post.slug)}"
			in:fly|global={{ y: 50, delay: idx * 50 }}
			class="fancy-hover relative flex flex-col"
		>
			<span class="block text-2xl font-semibold">{post.slug}</span>
		</a>
	{/each}
</div>
