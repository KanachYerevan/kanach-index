<script lang="ts">
    type Props = {
        title: string;
        subtitle?: string;
        help?: string;
        width?: number;
    };

    const { title, subtitle, children, help, width = 1 }: Props = $props();
</script>

<div class={`widget width_${width}`}>
    <div class="title">{title}{#if help} <a class="help" href={help}>ⓘ</a>{/if}</div>

    <div class="subtitle">{subtitle}</div>

    {@render children?.()}
</div>

<style>
.widget {
    box-sizing: border-box;
    width: 100%;

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

    .help {
        text-decoration: none;
        margin-left: 5px;
        color: inherit;
        opacity: 0.5;
    }
}

.width_2 {
    grid-column: span 2;
}
</style>
