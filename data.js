export let Country = {
    Austria: "austria",
    Bulgaria: "bulgaria",
    Croatia: "croatia",
    Czech: "czech",
    Germany: "germany",
    Hungary: "hungary",
    Italy: "italy",
    Poland: "poland",
    Romania: "romania",
    Slovakia: "slovakia",
    Slovenia: "slovenia",
}

export let allCountries = [
    Country.Austria,
    Country.Bulgaria,
    Country.Croatia,
    Country.Czech,
    Country.Germany,
    Country.Hungary,
    Country.Italy,
    Country.Poland,
    Country.Romania,
    Country.Slovakia,
    Country.Slovenia,
]

export let City = {
    Berlin: "berlin",
    Bratislava: "bratislava",
    Brno: "brno",
    Burgas: "burgas",
    Buharest: "buharest",
    Budapest: "budapest",
    Koshitse: "koshitse",
    Krakow: "krakow",
    Ljublijana: "ljublijana",
    Maribor: "maribor",
    Milan: "milan",
    Munich: "munich",
    Nitra: "nitra",
    Nurnberg: "nurnberg",
    Prague: "prague",
    Roma: "roma",
    Sofia: "sofia",
    Trnava: "trnava",
    Varna: "varna",
    Vienna: "vienna",
    Zagreb: "zagreb",
    Warsaw: "warsaw",
    Wroclav: "wroclav",
}

export const countriesCities = {
    [Country.Austria]: [City.Vienna],
    [Country.Bulgaria]: [City.Burgas, City.Varna, City.Sofia],
    [Country.Croatia]: [City.Zagreb],
    [Country.Czech]: [City.Prague, City.Brno],
    [Country.Germany]: [City.Berlin, City.Munich, City.Nurnberg],
    [Country.Hungary]: [City.Budapest], 
    [Country.Italy]: [City.Roma, City.Milan],
    [Country.Poland]: [City.Warsaw, City.Krakow, City.Wroclav],
    [Country.Romania]: [City.Buharest],
    [Country.Slovakia]: [City.Koshitse, City.Bratislava],
    [Country.Slovenia]: [City.Maribor,City.Ljublijana],
}

// Кто? Где? Куда? Откуда?
export const translateCountry = {
    ua: {
        [Country.Austria]: ["Австрія","Австрії","Австрію","Австрії"],
        [Country.Bulgaria]: ["Болгарія", "Болгарії","Болгарію","Болгарії"],
        [Country.Croatia]: ["Хорватія", "Хорватії","Хорватію","Хорватії"],
        [Country.Czech]: ["Чехія","Чехії","Чехію","Чехії"],
        [Country.Germany]: ["Німеччина","Німеччині","Німеччину","Німеччини"],
        [Country.Hungary]: ["Угорщина","Угорщині","Угорщину","Угорщини"],
        [Country.Italy]: ["Італія","Італії","Італію","Італії"],
        [Country.Poland]: ["Польща","Польщі","Польщу","Польщі"],
        [Country.Romania]: ["Румунія","Румунії","Румунію","Румунії"],
        [Country.Slovakia]: ["Словаччина","Словаччині","Словаччину","Словаччини"],
        [Country.Slovenia]: ["Словенія","Словенії","Словенію","Словенії"],
    },
    ru: {
        [Country.Austria]: ["Австрия","Австрии","Австрию","Австрии"],
        [Country.Bulgaria]: ["Болгарія","Болгарии","Болгарию","Болгарии"],
        [Country.Croatia]: ["Хорватия","Хорватии","Хорватию","Хорватии"],
        [Country.Czech]: ["Чехия","Чехии","Чехию","Чехии"],
        [Country.Germany]: ["Германия","Германии","Германию","Германии"],
        [Country.Hungary]: ["Венгрия","Венгрии","Венгрию","Венгрии"],
        [Country.Italy]: ["Италия","Италии","Италию","Италии"],
        [Country.Poland]: ["Польша","Польши","Польшу","Польши"],
        [Country.Romania]: ["Румыния","Румынии","Румынию","Румынии"],
        [Country.Slovakia]: ["Словакия","Словакии","Словакию","Словакии"],
        [Country.Slovenia]: ["Словения","Словении","Словению","Словении"],
    }, 
    en: {
        [Country.Austria]: ["Austria","Austria","Austria","Austria"],
        [Country.Bulgaria]: ["Bulgaria","Bulgaria","Bulgaria","Bulgaria"],
        [Country.Croatia]: ["Croatia","Croatia","Croatia","Croatia"],
        [Country.Czech]: ["Czech Republic","Czech Republic","Czech Republic","Czech Republic"],
        [Country.Germany]: ["Germany","Germany","Germany","Germany"],
        [Country.Hungary]: ["Hungary","Hungary","Hungary","Hungary"],
        [Country.Italy]: ["Italy","Italy","Italy","Italy"],
        [Country.Poland]: ["Poland","Poland","Poland","Poland"],
        [Country.Romania]: ["Romania","Romania","Romania","Romania"],
        [Country.Slovakia]: ["Slovakia","Slovakia","Slovakia","Slovakia"],
        [Country.Slovenia]: ["Slovenia","Slovenia","Slovenia","Slovenia"],
    },
    t(locale, country, element) {
        if (!this[locale]) {
            return 'country locale ' + locale + ' not found' 
        }

        if (!this[locale][country]) {
            return 'country ' + country + ' not found' 
        }

        if (!this[locale][country][element]) {
            return 'country ' + country + ', element ' + element + ' not found' 
        }

        return this[locale][country][element]
    }
}

// Кто? Где? Куда? Откуда?
export const translateCity = {
    ua: {
        [City.Berlin]: ["Берлін","Берліні","Берлін","Берліна"],
        [City.Bratislava]: ["Братислава","Братиславі","Братиславу","Братислави"],
        [City.Brno]: ["Брно","Брно","Брно","Брно"],
        [City.Budapest]: ["Будапешт", "Будапешті", "Будапешт","Будапешта"],
        [City.Buharest]: ["Бухарест","Бухаресті","Бухарест","Бухареста"],
        [City.Burgas]: ["Бургас","Бургасі","Бургас","Бургаса"],
        [City.Koshitse]: ["Кошице","Кошице","Кошице","Кошице"],
        [City.Krakow]: ["Краків","Кракові","Краків","Кракова"],
        [City.Maribor]: ["Марібор","Маріборі","Марібор","Марібора"],
        [City.Milan]: ["Мілан","Мілані","Мілан","Мілана"],
        [City.Munich]: ["Мюнхен","Мюнхені","Мюнхен","Мюнхена"],
        [City.Ljublijana]: ["Любляна","Любляні","Любляну","Любляни"],
        [City.Nitra]: ["Нітра","Нітрі","Нітру","Нітри"],
        [City.Nurnberg]: ["Нюрнберг","Нюрнберзі","Нюрнберг","Нюрнберга"],
        [City.Prague]: ["Прага","Празі","Прагу","Праги"],
        [City.Roma]: ["Рим","Римі", "Рим","Рима"],
        [City.Sofia]: ["Софія","Софії","Софію","Софії"],
        [City.Trnava]: ["Трнава","Трнаві","Трнаву","Трнави"],
        [City.Varna]: ["Варна","Варні","Варну","Варни"],
        [City.Vienna]: ["Відень","Відні","Відень","Відня"],
        [City.Zagreb]: ["Загреб","Загребі","Загреб","Загреба"],
        [City.Warsaw]: ["Варшава","Варшаві","Варшаву","Варшави"],
        [City.Wroclav]: ["Вроцлав","Вроцлаві","Вроцлав","Вроцлава"],
    },
    ru: {
        [City.Berlin]: ["Берлин","Берлине","Берлин","Берлина"],
        [City.Bratislava]: ["Братислава","Братиславе","Братиславу","Братиславы"],
        [City.Brno]: ["Брно","Брно","Брно","Брно"],
        [City.Budapest]: ["Будапешт", "Будапеште", "Будапешт","Будапешта"],
        [City.Buharest]: ["Бухарест","Бухаресте","Бухарест","Бухареста"],
        [City.Burgas]: ["Бургас","Бургасе","Бургасе","Бургаса"],
        [City.Koshitse]: ["Кошице","Кошице","Кошице","Кошице"],
        [City.Krakow]: ["Краков","Кракове","Краков","Кракова"],
        [City.Maribor]: ["Марибор","Мариборе","Марибор","Марибора"],
        [City.Milan]: ["Милан","Милане","Милан","Милана"],
        [City.Munich]: ["Мюнхен","Мюнхене","Мюнхен","Мюнхена"],
        [City.Ljublijana]: ["Любляна","Любляне","Любляну","Любляны"],
        [City.Nitra]: ["Нитра","Нитре","Нитру","Нитры"],
        [City.Nurnberg]: ["Нюрнберг","Нюрнберге","Нюрнберг","Нюрнберга"],
        [City.Prague]: ["Прага","Праге","Прагу","Праги"],
        [City.Roma]: ["Рим","Риме", "Рим","Рима"],
        [City.Sofia]: ["София","Софии","Софию","Софии"],
        [City.Trnava]: ["Трнава","Трнаве","Трнаву","Трнавы"],
        [City.Varna]: ["Варна","Варне","Варну","Варны"],
        [City.Vienna]: ["Вена","Вене","Вену","Вены"],
        [City.Zagreb]: ["Загреб","Загребе","Загреб","Загреба"],
        [City.Warsaw]: ["Варшава","Варшаве","Варшаву","Варшавы"],
        [City.Wroclav]: ["Вроцлав","Вроцлаві","Вроцлав","Вроцлава"],
    },
    en: {
        [City.Bratislava]: ["Bratislava","Bratislava","Bratislava","Bratislava"],
        [City.Brno]: ["Brno","Brno","Brno","Brno"],
        [City.Budapest]: ["Budapest", "Budapest", "Budapest","Budapest"],
        [City.Buharest]: ["Buharest","Buharest","Buharest","Buharest"],
        [City.Burgas]: ["Burgas","Burgas","Burgas","Burgas"],
        [City.Koshitse]: ["Koshitse","Koshitse","Koshitse","Koshitse"],
        [City.Krakow]: ["Krakow","Krakow","Krakow","Krakow"],
        [City.Maribor]: ["Maribor","Maribor","Maribor","Maribor"],
        [City.Milan]: ["Milan","Milan","Milan","Milan"],
        [City.Munich]: ["Munich","Munich","Munich","Munich"],
        [City.Ljublijana]: ["Ljublijana","Ljublijana","Ljublijana","Ljublijana"],
        [City.Nitra]: ["Nitra","Nitra","Nitra","Nitra"],
        [City.Nurnberg]: ["Nurnberg","Nurnberg","Nurnberg","Nurnberg"],
        [City.Prague]: ["Prague","Prague","Prague","Prague"],
        [City.Roma]: ["Rome","Rome", "Rome","Rome"],
        [City.Sofia]: ["Sofia","Sofia","Sofia","Sofia"],
        [City.Trnava]: ["Trnava","Trnava","Trnava","Trnava"],
        [City.Varna]: ["Varna","Varna","Varna","Varna"],
        [City.Vienna]: ["Vienna","Vienna","Vienna","Vienna"],
        [City.Zagreb]: ["Zagreb","Zagreb","Zagreb","Zagreb"],
        [City.Warsaw]: ["Warsaw","Warsaw","Warsaw","Warsaw"],
        [City.Wroclav]: ["Wroclav","Wroclav","Wroclav","Wroclav"],
    },
    t(locale, city, element) {
        if (!this[locale]) {
            return 'city locale ' + locale + ' not found' 
        }

        if (!this[locale][city]) {
            return 'city ' + city + ' not found' 
        }

        if (!this[locale][city][element]) {
            return 'city ' + city + ', element ' + element + ' not found' 
        }

        return this[locale][city][element]
    }
}
