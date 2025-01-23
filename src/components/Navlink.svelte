<script lang="ts">
	import {page} from '$app/stores';
	import {base} from "$app/paths"

	export let link
	export let text
</script>

<a class="nav special-select !text-sm" class:nav-active={$page.url.pathname===link} href="{base}{link}">{text}</a>