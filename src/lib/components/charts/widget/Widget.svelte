<script lang="ts">
    type Props = {
        title: string;
        subtitle?: string;
    };

    const { title, subtitle, children }: Props = $props();
</script>

<div class="widget">
    <div class="title">{title}</div>
    <div class="subtitle">{subtitle}</div>

    {@render children?.()}
</div>

<style>
.widget {
    display: flex;
    flex-direction: column;
    gap: 5px;

    background-color: rgb(249, 250, 251);
    border-radius: 10px;

    padding: 10px;
    text-align: center;

    .title {
        font-weight: 800;
    }

    .subtitle {
        height: 22px;
        font-size: 0.9em;
        opacity: 0.5;
    }
}
</style>
