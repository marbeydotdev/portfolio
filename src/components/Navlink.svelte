<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	interface Props {
		link: string;
		text: string;
	}

	let { link, text }: Props = $props();
</script>

<a
	class="nav special-select !text-sm"
	class:nav-active={page.url.pathname === link}
	href="{resolve(link)}">{text}</a
>
