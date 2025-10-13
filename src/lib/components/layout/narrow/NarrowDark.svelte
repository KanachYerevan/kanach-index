<script lang="ts">
    const { children } = $props();
</script>

<div class="narrow">
    <div class="content">
        {@render children?.()}
    </div>
</div>

<style>
.narrow {
    background-color: #cee4c5;
    padding: 10px 0;

    .content {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }
}
</style>
