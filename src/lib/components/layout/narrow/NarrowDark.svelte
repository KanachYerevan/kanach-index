<script lang="ts">
    const { color = '#cee4c5', children } = $props();
</script>

<div class="narrow" style:background-color={color}>
    <div class="content">
        {@render children?.()}
    </div>
</div>

<style>
.narrow {
    padding: 10px 0;

    .content {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }
}
</style>
