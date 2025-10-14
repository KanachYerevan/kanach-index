<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import PercentChart from './PercentChart.svelte';

    const { Story } = defineMeta({
        title: 'Components/Charts/PercentChart',
        component: PercentChart,
        argTypes: {
            value: { control: 'number', min: 0, max: 100, step: 1 }
        }
    });
</script>

<Story
    name="Primary"
    args={{
        value: 75,
    }}
/>
