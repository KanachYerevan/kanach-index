class EnglishLocale {
	public title(): string {
		return 'Kanach Index';
	}

	public howGreenIs(): string {
		return 'How Green is Yerevan?';
	}

    public mainIntro(): string {
        return 'We collected data on thousands of trees, measured their different aspects, and calculated the Kanach Index to give you an idea of how green your city is.';
    }

    public mainScroll(): string {
        return 'Scroll down to understand how we calculated this score and what it means.';
    }

    public crownsTitle(): string {
        return 'Crown coverage';
    }

    public crownsTarget(value: number): string {
        return `Target: ${value}%`;
    }

    public crownsDescription(): string {
        return 'This metric reflects what percentage of the city area is covered by the shade of tree crowns, creating a kind of "green shield". For sunny Yerevan, this is one of the most important parameters directly affecting the fight against the "heat island" effect, air purification, and the creation of a comfortable urban environment. Mature, healthy trees with wide crowns make a particularly significant contribution, and their preservation is a key task.';
    }

    public healthTitle(): string {
        return 'Tree health';
    }

    public healthSubtitle(): string {
        return 'In good shape';
    }

    public healthDescription(): string {
        return 'This metric reflects the percentage of trees that do not have serious damage, diseases, or signs of stress. A healthy tree is not only an aesthetic asset but also provides maximum benefits to the city in terms of shade and clean air. The condition of trees is a direct indicator of the quality of care they receive and the overall environmental conditions, so a low score may signal systemic issues that require our collective attention.';
    }

    public diversityTitle(): string {
        return 'Biodiversity';
    }

    public diversityDescription(): string {
        return 'This metric reflects the variety of tree species in the city. A diverse urban forest is more resilient to pests, diseases, and environmental changes, and it supports a wider range of wildlife. Promoting biodiversity is essential for creating a healthy and sustainable urban ecosystem.';
    }

    public maturityTitle(): string {
        return 'Maturity';
    }

    public maturitySubtitle(): string {
        return 'Age structure';
    }

    public maturityDescription(): string {
        return 'This metric reflects the age balance of the city\'s green space—the ratio of young, growing, and mature trees. Mature trees provide the greatest benefits: they provide dense shade, effectively purify the air, and form a stable green framework. A low proportion of such trees is a warning sign that may indicate problems with the mass replacement or loss of the city\'s most valuable green assets.';
    }

    public metricDetails(): string {
        return 'More on this metric';
    }

    public ageYoung(): string {
        return 'Young';
    }

    public ageGrowing(): string {
        return 'Growing';
    }

    public ageMature(): string {
        return 'Mature';
    }
}

class RussianLocale extends EnglishLocale {
	public title(): string {
		return 'Зелёный индекс';
	}

	public howGreenIs(): string {
		return 'Насколько зелёный Ереван?';
	}

    public mainIntro(): string {
        return 'Мы собрали данные о тысячах деревьев, измерили их различные аспекты и рассчитали Зелёный индекс, чтобы дать вам представление о том, насколько зелёный ваш город.';
    }

    public mainScroll(): string {
        return 'Крутите вниз, чтобы понять, как мы рассчитали этот показатель и что он означает.';
    }

    public crownsTitle(): string {
        return 'Покрытие крон' ;
    }

    public crownsTarget(value: number): string {
        return `Цель: ${value}%`;
    }

    public crownsDescription(): string {
        return 'Этот показатель отражает, какой процент территории города укрыт тенью древесных крон, создавая своего рода «зелёный щит». Для солнечного Еревана это один из важнейших параметров, напрямую влияющий на борьбу с эффектом «теплового острова», очистку воздуха и создание комфортной городской среды. Особенно большой вклад вносят взрослые, здоровые деревья с широкой кроной, сохранение которых является ключевой задачей.';
    }

    public healthTitle(): string {
        return 'Здоровье деревьев';
    }

    public healthSubtitle(): string {
        return 'В хорошем состоянии';
    }

    public healthDescription(): string {
        return 'Этот показатель отражает процент деревьев, не имеющих серьёзных повреждений, болезней или признаков угнетения. Здоровое дерево — это не только эстетика, но и максимальная польза для города в виде тени и чистого воздуха. Состояние деревьев является прямым индикатором качества ухода за ними и общих условий среды, поэтому низкий показатель может сигнализировать о системных проблемах, требующих нашего общего внимания.';
    }

    public diversityTitle(): string {
        return 'Видовое разнообразие';
    }

    public diversityDescription(): string {
        return 'Этот показатель отражает процент деревьев, не имеющих серьёзных повреждений, болезней или признаков угнетения. Здоровое дерево — это не только эстетика, но и максимальная польза для города в виде тени и чистого воздуха. Состояние деревьев является прямым индикатором качества ухода за ними и общих условий среды, поэтому низкий показатель может сигнализировать о системных проблемах, требующих нашего общего внимания.';
    }

    public maturityTitle(): string {
        return 'Индекс зрелости';
    }

    public maturitySubtitle(): string {
        return 'Возрастная структура';
    }

    public maturityDescription(): string {
        return 'Этот показатель отражает возрастной баланс зелёного фонда города — соотношение молодых, подрастающих и взрослых деревьев. Именно взрослые, зрелые деревья приносят максимальную пользу: дают густую тень, эффективно очищают воздух и формируют устойчивый зелёный каркас. Низкая доля таких деревьев — тревожный сигнал, который может указывать на проблемы с массовой заменой или потерей самых ценных зелёных активов города.';
    }

    public metricDetails(): string {
        return 'Подробнее об этом показателе';
    }
}

class ArmenianLocale extends EnglishLocale {
}

const guessLocale = () => {
	const lang = navigator.language || 'en-US';

	if (lang === 'ru-RU') {
		return new RussianLocale();
	}

	if (lang === 'hy-AM') {
		return new ArmenianLocale();
	}

	return new EnglishLocale();
};

export const locale = guessLocale();
