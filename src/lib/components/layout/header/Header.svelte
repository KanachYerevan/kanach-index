<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
    import LOGO from '$lib/assets/logo.jpeg';
    import { locale } from '$lib/locale';
</script>

<Narrow>
    <header>
        <img src={LOGO} alt="Kanach Logo" />
        <h1>{locale.title()}</h1>
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Donate</a></li>
        </ul>
    </header>
</Narrow>

<style>
header {
    display: flex;
    flex-direction: row;
    gap: 20px;

    line-height: 50px;
    padding: 10px 0;

    /** This hack lets us remove the unnecessary space after the header */
    margin-bottom: -50px;
}

img {
    width: 50px;
    height: 50px;
}

h1 {
    font-size: 30px;
    font-weight: 400;
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
