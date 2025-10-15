<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import CrownsChart from '$lib/components/charts/metrics/CrownsChart.svelte';
</script>

<Narrow>
    <div class="wrapper">
        <div class="chart">
            <CrownsChart value={18} />
        </div>
        <div class="text">
            <p>Этот показатель отражает, какой процент территории города укрыт тенью древесных крон, создавая своего рода «зелёный щит». Для солнечного Еревана это один из важнейших параметров, напрямую влияющий на борьбу с эффектом «теплового острова», очистку воздуха и создание комфортной городской среды. Особенно большой вклад вносят взрослые, здоровые деревья с широкой кроной, сохранение которых является ключевой задачей.</p>
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
