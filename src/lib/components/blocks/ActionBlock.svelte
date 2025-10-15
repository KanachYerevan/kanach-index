<script lang="ts">
    import Narrow from '$lib/components/layout/narrow/Narrow.svelte';
</script>

<Narrow>
    <div id="contact"></div>

    {#if navigator.language === 'ru-RU'}
        <h2>Как вы можете помочь?</h2>
        <p>Kanach Index — это не просто цифры, а инструмент для реальных изменений. Самый ценный вклад, который вы можете сделать прямо сейчас, — помочь нам собрать больше точных данных.</p>
        <ul>
            <li><strong>Станьте нашим волонтёром — начните со своей улицы.</strong> установите приложение <a href="https://yerevan.treemaps.app/">Trees of Yerevan</a> и каталогизируйте деревья, мимо которых ходите каждый день. Это самый простой и мощный способ помочь: вам не нужно никуда ехать, а ваш вклад сделает нашу общую картину города невероятно точной.</li>
            <li>Распространяйте информацию: поделитесь ссылкой на этот дашборд с друзьями, в социальных сетях или в районном чате. Чем больше людей увидят реальную картину, тем громче будет наш общий голос.</li>
            <li>Используйте данные: если вы готовьте публикацию или идёте на встречу с представителями муниципалитета, используйте Kanach Index как источник объективных аргументов.</li>
        </ul>
        <p>Вместе мы можем сделать Ереван по-настоящему зелёным и здоровым городом.</p>
    {:else}
        <h2>How can you help?</h2>
        <p>The Kanach Index is not just numbers, but a tool for real change. The most valuable contribution you can make right now is to help us collect more accurate data.</p>
        <ul>
            <li><strong>Become our volunteer — start with your street.</strong> Install the <a href="https://yerevan.treemaps.app/">Trees of Yerevan</a> app and catalog the trees you pass by every day. This is the simplest and most powerful way to help: you don't need to go anywhere, and your contribution will make our overall picture of the city incredibly accurate.</li>
            <li>Spread the word: share the link to this dashboard with friends, on social media, or in your neighborhood chat. The more people see the real picture, the louder our collective voice will be.</li>
            <li>Use the data: if you're preparing a publication or going to a meeting with municipal representatives, use the Kanach Index as a source of objective arguments.</li>
        </ul>
        <p>Together we can make Yerevan a truly green and healthy city.</p>
    {/if}
</Narrow>

<style>
li {
    margin: .5em 0;
}
</style>
