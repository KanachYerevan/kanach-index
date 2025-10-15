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
    import IntroBlock from '$lib/components/blocks/IntroBlock.svelte';
    import CrownsBlock from '$lib/components/blocks/CrownsBlock.svelte';
    import HealthBlock from '$lib/components/blocks/HealthBlock.svelte';
    import DiversityBlock from '$lib/components/blocks/DiversityBlock.svelte';
    import MaturityBlock from '$lib/components/blocks/MaturityBlock.svelte';
</script>

<svelte:head>
    <title>Kanach Index</title>
</svelte:head>

<MainBlock />
<IntroBlock />

<CrownsBlock />
<HealthBlock />
<DiversityBlock />
<MaturityBlock />
