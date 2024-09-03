<script lang="ts">
    export let link
    export let text
</script>

<a class="nav special-select" class:nav-active={true} href="{link}">{text}</a>