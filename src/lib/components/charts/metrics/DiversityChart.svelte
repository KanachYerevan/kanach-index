<script lang="ts">
    import Chart from '$lib/components/charts/Chart.svelte';
    import Widget from '$lib/components/charts/widget/Widget.svelte';
    import { locale } from '$lib/locale';

    type Props = {
        value: number;
    };

    const { value }: Props = $props();

    const getRate = (value: number): string => {
        if (value <= 40) {
            return 'bad';
        }

        if (value <= 70) {
            return 'average';
        }

        return 'good';
    };

    const getColor = (value: number): string => {
        switch (getRate(value)) {
            case 'bad':
                return 'red';
            case 'average':
                return 'yellow';
            case 'good':
                return 'green';
            default:
                return 'Unknown';
        }
    };

    const getLabel = (value: number): string => {
        switch (getRate(value)) {
            case 'bad':
                return locale.diversityLow();
            case 'average':
                return locale.diversityMedium();
            case 'good':
                return locale.diversityHigh();
            default:
                return 'Unknown';
        }
    };
</script>

<Widget title={locale.diversityTitle()}>
    <div class={`wrapper rate_${getRate(value)}`}>
        <div class="chart">
            <Chart
                type='bar'

                data={{
                    labels: ['', ''],
                    datasets: [
                        {
                            label: '',
                            data: [65],
                            backgroundColor: ['#16A34A'],
                            borderColor: ['#f9fafb'],
                            borderWidth: 2,
                            borderRadius: 4,
                            barThickness: 30,
                        },
                        {
                            label: 'Empty',
                            data: [45],
                            backgroundColor: ['#E0E0E0'],
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
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    events: []
                }}
            />
        </div>

        <div class="value">{getLabel(value)}</div>
    </div>
</Widget>

<style>
.wrapper {
    position: relative;
    width: 100%;

    &.rate_bad {
        color: #DC2626;
    }

    &.rate_average {
        color: #D97706;
    }

    &.rate_good {
        color: #16A34A;
    }
}

.chart {
    margin: 10px auto 0;
    height: 50px;
}

.value {
    font-size: 2rem;
}
</style>
