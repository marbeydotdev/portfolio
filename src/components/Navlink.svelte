<script lang="ts">
	import {page} from '$app/stores';
	import {base} from "$app/paths"

	interface Props {
		link: any;
		text: any;
	}

	let { link, text }: Props = $props();
</script>

<a class="nav special-select !text-sm" class:nav-active={$page.url.pathname===link} href="{base}{link}">{text}</a>