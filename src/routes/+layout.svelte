<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Header from '$lib/components/layout/header/Header.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';

    import '$lib/styles/main.css';
    import '$lib/styles/fonts.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
    <Header />

    {@render children?.()}

    <Footer />
</div>

<style>
.layout {
    display: flex;
    flex-direction: column;
    gap: 50px;
}
</style>
