<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
    {@render children?.()}
</div>

<style>
.layout {
    display: flex;
    flex-direction: column;
    gap: 50px;
}
</style>
