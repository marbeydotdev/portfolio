<script lang="ts">
	import { onMount } from 'svelte';
	import { decodeSlug, posts } from '$lib/blog.ts';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { marked } from 'marked';

	let post = {};

	onMount(() => {
		post = posts.find(p => p.slug === decodeSlug(page.params.slug));
		if (!post) {
			goto("/blog")
		}
	})
</script>

<h1 class="mb-5">{post.slug}</h1>

{@html marked.parse(post.content ?? "")}