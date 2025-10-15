<script lang="ts">
    import PercentChart from '$lib/components/charts/pie/PercentChart.svelte';
    import Widget from '$lib/components/charts/widget/Widget.svelte';
    import { locale } from '$lib/locale';

    type Props = {
        value: number;
    };

    const { value }: Props = $props();
</script>

<Widget title={locale.healthTitle()} subtitle={locale.healthSubtitle()}>
    <PercentChart {value} />
</Widget>
