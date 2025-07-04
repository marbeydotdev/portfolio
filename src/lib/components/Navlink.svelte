<script>
	import { page } from '$app/state';
	import { base } from '$app/paths';

	let { link, text } = $props();
</script>

<a
	class="nav special-select !text-sm"
	class:nav-active={page.url.pathname === link}
	href="{base}{link}">{text}</a
>
