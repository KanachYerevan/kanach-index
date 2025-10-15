<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import AgeChart from '$lib/components/charts/metrics/AgeChart.svelte';
</script>

<Narrow>
    <div class="wrapper">
        <div class="chart">
            <AgeChart value={45} />
        </div>
        <div class="text">
            <p>Этот показатель отражает возрастной баланс зелёного фонда города — соотношение молодых, подрастающих и взрослых деревьев. Именно взрослые, зрелые деревья приносят максимальную пользу: дают густую тень, эффективно очищают воздух и формируют устойчивый зелёный каркас. Низкая доля таких деревьев — тревожный сигнал, который может указывать на проблемы с массовой заменой или потерей самых ценных зелёных активов города.</p>
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
        flex-basis: 450px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    p {
        margin: 0 0 1rem;
    }
}
</style>
