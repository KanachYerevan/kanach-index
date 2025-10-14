<script lang="ts">
    const { children } = $props();
</script>

<div class="chart-grid">
    {@render children?.()}
</div>

<style>
.chart-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
