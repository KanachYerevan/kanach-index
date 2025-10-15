<script lang="ts">
    import PercentChart from '$lib/components/charts/pie/PercentChart.svelte';
    import Widget from '$lib/components/charts/widget/Widget.svelte';
    import Chart from '$lib/components/charts/Chart.svelte';
    import { locale } from '$lib/locale';

    type Props = {
        value: number;
    };

    const { value }: Props = $props();
</script>

<Widget title={locale.maturityTitle()} subtitle={locale.maturitySubtitle()} width={2}>
    <div class="chart">
        <Chart
            type='bar'

            data={{
                labels: [locale.ageMature(), locale.ageGrowing(), locale.ageYoung()],
                datasets: [
                    {
                        label: locale.ageMature(),
                        data: [15],
                        backgroundColor: ['#16A34A'],
                        borderColor: ['#f9fafb'],
                        borderWidth: 2,
                        borderRadius: 4,
                        barThickness: 30,
                    },
                    {
                        label: locale.ageGrowing(),
                        data: [45],
                        backgroundColor: ['#FBBF24'],
                        borderColor: ['#f9fafb'],
                        borderWidth: 2,
                        borderRadius: 4,
                        barThickness: 30,
                    },
                    {
                        label: locale.ageYoung(),
                        data: [40],
                        backgroundColor: ['#F97316'],
                        borderColor: ['#f9fafb'],
                        borderWidth: 2,
                        borderRadius: 4,
                        barThickness: 30,
                    },
                ],
            }}

            options={{
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        display: false,
                        grid: {
                            display: false,
                        },
                        stacked: true,
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false,
                        },
                        stacked: true,
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 20,
                        },
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                events: []
            }}
        />
    </div>
</Widget>

<style>
.chart {
    height: 110px;
    width: 100%;
    margin: 50px auto 0;
}
</style>
