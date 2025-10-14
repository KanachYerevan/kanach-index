<script lang="ts">
    import PercentChart from '$lib/components/charts/pie/PercentChart.svelte';
    import Widget from '$lib/components/charts/widget/Widget.svelte';
    import Chart from '$lib/components/charts/Chart.svelte';

    type Props = {
        value: number;
    };

    const { value }: Props = $props();
</script>

<Widget title="Индекс зрелости" subtitle="Возрастная структура" help="/">
    <div class="chart">
        <Chart
            type='bar'

            data={{
                labels: ['Взрослые', 'Зреющие', 'Молодые'],
                datasets: [{
                    labels: 'Доля деревьев',
                    data: [25, 45, 30],
                    backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
                    borderColor: ['#f9fafb'],
                    borderWidth: 2,
                    borderRadius: 4,
                }],
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
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                }
            }}
        />
    </div>
</Widget>

<style>
.chart {
    height: 210px;
}
</style>
