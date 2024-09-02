<script lang="ts">
    export let link
    export let text
</script>

<a class="nav" class:nav-active={true} href="{link}">{text}</a>