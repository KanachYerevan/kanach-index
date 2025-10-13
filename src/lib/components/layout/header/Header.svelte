<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
</script>

<Narrow>
    <header>
        <h1>Kanach Index</h1>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Donate</a></li>
        </ul>
    </header>
</Narrow>

<style>
header {
    display: flex;
    flex-direction: row;

    line-height: 20px;
    padding: 10px 0;
}

h1 {
    font-size: 20px;
    margin: 0;

    flex-grow: 1;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>
