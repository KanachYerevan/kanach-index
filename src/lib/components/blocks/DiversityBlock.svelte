<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import DiversityChart from '$lib/components/charts/metrics/DiversityChart.svelte';
</script>

<Narrow>
    <div class="wrapper">
        <div class="chart">
            <DiversityChart value={57} />
        </div>
        <div class="text">
            <p>Этот показатель оценивает, насколько равномерно в городе распределены различные виды деревьев. Высокое разнообразие — это залог устойчивости: город, где не преобладает один-единственный вид, гораздо лучше защищён от эпидемий и вредителей, способных уничтожить конкретную породу. Наша цель — избежать рисков монокультуры и создать здоровую, стабильную и самодостаточную зелёную экосистему для будущих поколений.</p>
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

        /* Somehow this prevents the block from growing, which we need. */
        min-width: 0;
    }

    p {
        margin: 0 0 1rem;
    }
}
</style>
