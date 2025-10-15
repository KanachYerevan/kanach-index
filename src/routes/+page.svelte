<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import NarrowDark from '$lib/components/layout/narrow/NarrowDark.svelte';
    import PieChart from '$lib/components/charts/pie/PieChart.svelte';
    import PercentChart from '$lib/components/charts/pie/PercentChart.svelte';
    import ChartGrid from '$lib/components/charts/grid/ChartGrid.svelte';
    import CrownsChart from '$lib/components/charts/metrics/CrownsChart.svelte';
    import HealthChart from '$lib/components/charts/metrics/HealthChart.svelte';
    import DiversityChart from '$lib/components/charts/metrics/DiversityChart.svelte';
    import AgeChart from '$lib/components/charts/metrics/AgeChart.svelte';
    import MainBlock from '$lib/components/blocks/MainBlock.svelte';
</script>

<svelte:head>
    <title>Kanach Index</title>
</svelte:head>

<MainBlock />

<Narrow>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Narrow>

<Narrow>
    <ChartGrid>
        <CrownsChart value={18} />
        <HealthChart value={65} />
        <DiversityChart value={65} />
        <AgeChart value={45} />
    </ChartGrid>
</Narrow>

<style>
.score {
    max-width: 300px;
    margin: 0 auto;
}
</style>
