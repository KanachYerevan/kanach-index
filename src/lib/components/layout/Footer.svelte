<script lang="ts">
    import NarrowDark from '$lib/components/layout/narrow/NarrowDark.svelte';
</script>

<NarrowDark color="#27181d">
    <footer>
        <div class="left">&copy; 2025 Kanach Yerevan</div>
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Donate</a></li>
        </ul>
    </footer>
</NarrowDark>

<style>
footer {
    display: flex;
    flex-direction: row;

    color: #fff;
    opacity: 0.75;

    line-height: 20px;
    padding: 10px 0;

    a {
        color: inherit;
    }

    .left {
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
}
</style>
