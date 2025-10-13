<script lang="ts">
    type Props = {
        value: number;
    };

    const { value } = $props();
</script>

<div class="value">Value: {value}%</div>
