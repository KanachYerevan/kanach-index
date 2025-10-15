<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import DiversityChart from '$lib/components/charts/metrics/DiversityChart.svelte';
    import { locale } from '$lib/locale';
</script>

<Narrow>
    <div class="wrapper">
        <div class="chart">
            <DiversityChart value={57} />
        </div>
        <div class="text">
            <p>{locale.diversityDescription()}</p>
            <p><a href="/">{locale.metricDetails()}</a></p>
        </div>
    </div>
</Narrow>

<style>
.wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;

    & > *:first-child {
        flex-basis: 250px;
        flex-grow: 0;
        flex-shrink: 0;

        /* Somehow this prevents the block from growing, which we need. */
        min-width: 0;
    }

    p {
        margin: 0 0 1rem;
    }
}
</style>
