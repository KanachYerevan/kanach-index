<script lang="ts">
    const { children } = $props();
</script>

<div class="narrow">
    {@render children?.()}
</div>

<style>
.narrow {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}
</style>
