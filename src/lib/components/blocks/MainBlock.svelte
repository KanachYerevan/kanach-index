<script lang="ts">
    import { locale } from '$lib/locale';
    import IMAGE from '$lib/assets/home.jpg';
</script>

<div class="block">
    <img src={IMAGE} alt="Trees in Yerevan"/>

    <div class="content">
        <div class="padded">
            <h1>{locale.howGreenIs()}</h1>
            <p>{locale.mainIntro()}</p>

            <div class="score">
                <div class="fill" style:width="56%"></div>
                <div class="value">Score: 2.8 / 5</div>
            </div>

            <p>{locale.mainScroll()}</p>
        </div>
    </div>
</div>

<style>
.block {
    background-color: #cee4c5;
    min-height: 400px;
    position: relative;
}

img {
    position: absolute;
    top: 0;
    left: 60%;
    right: 0;
    height: 400px;
    width: 40%;

    border-bottom-left-radius: 400px 100%;
    object-position: right center;
}

.content {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;

    .padded {
        width: 50%;
        margin-top: 90px;
    }

    p {
        opacity: 0.8;
    }
}

.score {
    background-color: #e0e0e0;
    border: 1px solid #ccc;
    font-size: 20px;
    line-height: 30px;
    padding: 10px 20px;
    position: relative;
    height: 30px;

    .fill {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #080;
        z-index: 1;
    }

    .value {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 100%;
        line-height: 30px;
        z-index: 2;
        padding: 10px 20px;
        text-align: center;
    }
}

@media (max-width: 600px) {
    .block {
        padding: 10px 10px;
    }

    img {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        border-radius: 0;
    }

    .content {
        .padded {
            width: 100%;
            margin-top: 20px;
        }
    }
}
</style>
