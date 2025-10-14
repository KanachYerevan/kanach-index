<script lang="ts">
    import Chart from '$lib/components/charts/Chart.svelte';

    type Props = {
        value: number;
    };

    const { value } = $props();
</script>

<div class="chart">
    <Chart
        type='doughnut'
        data={{
            datasets: [{
                data: [value, 100 - value],
                backgroundColor: ['#4CAF50', '#E0E0E0'],
                borderWidth: 4,
                borderColor: ['#FFFFFF'],
                circumference: 360,
            }]
        }}

        options={{
            responsive: true,
            maintainAspectRatio: false,
            cutout: '80%',
            plugins: {
                tooltip: {
                    enabled: false,
                }
            },
            events: []
        }}
    />

    <div class="value">{value}%</div>
</div>

<style>
.chart {
    max-width: 210px;
    margin: 0 auto;

    /* Pre-allocate space to avoid layout shift */
    aspect-ratio: 1 / 1;

    position: relative;

    .value {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 3rem;

        color: rgb(21, 128, 61);
        font-weight: normal;
    }
}
</style>
