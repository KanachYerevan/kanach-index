<script lang="ts">
    const { children } = $props();
</script>

<div class="chart-grid">
    {@render children?.()}
</div>

<style>
.chart-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}
</style>
