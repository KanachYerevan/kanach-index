<script lang="ts">
    import PercentChart from '$lib/components/charts/pie/PercentChart.svelte';
    import Widget from '$lib/components/charts/widget/Widget.svelte';

    type Props = {
        value: number;
    };

    const { value }: Props = $props();
</script>

<Widget title="Покрытие крон" subtitle="Цель: 30%" help="/">
    <PercentChart {value} />
</Widget>
