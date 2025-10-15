<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import HealthChart from '$lib/components/charts/metrics/HealthChart.svelte';
</script>

<Narrow>
    <div class="wrapper">
        <div class="chart">
            <HealthChart value={65} />
        </div>
        <div class="text">
            <p>Этот показатель отражает процент деревьев, не имеющих серьёзных повреждений, болезней или признаков угнетения. Здоровое дерево — это не только эстетика, но и максимальная польза для города в виде тени и чистого воздуха. Состояние деревьев является прямым индикатором качества ухода за ними и общих условий среды, поэтому низкий показатель может сигнализировать о системных проблемах, требующих нашего общего внимания.</p>
            <p><a href="/">Подробнее об этом показателе</a></p>
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
