<script lang="ts">
    type Props = {
        title: string;
        value: number;
        max: number;
    };

    const { title, value, max } = $props();
</script>

<div class="chart">
<div class="title">{title}</div>
Value: {value} / {max}
</div>
