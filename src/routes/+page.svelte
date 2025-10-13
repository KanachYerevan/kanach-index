<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import PieChart from '$lib/components/charts/pie/PieChart.svelte';
    import PercentChart from '$lib/components/charts/pie/PercentChart.svelte';
    import ChartGrid from '$lib/components/charts/grid/ChartGrid.svelte';
    import CrownsChart from '$lib/components/charts/metrics/CrownsChart.svelte';
    import HealthChart from '$lib/components/charts/metrics/HealthChart.svelte';
    import DiversityChart from '$lib/components/charts/metrics/DiversityChart.svelte';
    import AgeChart from '$lib/components/charts/metrics/AgeChart.svelte';
    import ScoreChart from '$lib/components/charts/metrics/ScoreChart.svelte';
</script>

<h1>Kanach Index</h1>

<Narrow>
    <div class="score">
        <ScoreChart value={2.8} />
    </div>
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
