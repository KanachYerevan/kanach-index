<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import HealthChart from '$lib/components/charts/metrics/HealthChart.svelte';
    import { locale } from '$lib/locale';
</script>

<Narrow>
    <div class="wrapper">
        <div class="chart">
            <HealthChart value={65} />
        </div>
        <div class="text">
            <p>{locale.healthDescription()}</p>
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
    }

    p {
        margin: 0 0 1rem;
    }
}
</style>
