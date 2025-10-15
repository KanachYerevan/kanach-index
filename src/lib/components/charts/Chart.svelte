<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';
    import type { ChartOptions } from 'chart.js';

	type Props = {
		type: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		data: any;
		options?: ChartOptions;
	};

	const { type, data, options }: Props = $props();

	let canvas: HTMLCanvasElement;
	let chartInstance: Chart;

	// Use onMount to ensure the canvas element is in the DOM
	onMount(() => {
		const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

        if (ctx !== null) {
            chartInstance = new Chart(ctx, {
                // @ts-ignore
                type,
                data: JSON.parse(JSON.stringify(data)),
                options
            });
        }
	});

	// Use onDestroy to clean up the chart instance when the component is removed
	onDestroy(() => {
		if (chartInstance) {
			chartInstance.destroy();
		}
	});

	// Reactive statement to update the chart when data changes
	$effect(() => {
		if (chartInstance && data) {
			chartInstance.data = JSON.parse(JSON.stringify(data));
			chartInstance.update();
		}
	});
</script>

<canvas bind:this={canvas}></canvas>
