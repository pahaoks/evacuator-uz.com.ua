export let Country = {
    Austria: "austria",
    Bulgaria: "bulgaria",
    Croatia: "croatia",
    Czech: "czech",
    Germany: "germany",
    Hungary: "hungary",
    Italy: "italy",
    Romania: "romania",
    Slovakia: "slovakia",
    Ukraine: "ukraine",
}

export let allCountries = [
    Country.Austria,
    Country.Bulgaria,
    Country.Croatia,
    Country.Czech,
    Country.Germany,
    Country.Hungary,
    Country.Italy,
    Country.Romania,
    Country.Slovakia,
    Country.Ukraine,
]

export let City = {
    Berlin: "berlin",
    Bratislava: "bratislava",
    Brno: "brno",
    Burgas: "burgas",
    Buharest: "buharest",
    Budapest: "budapest",
    Chop: "chop",
    Chust: "chust",
    Irshava: "irshava",
    Koshitse: "koshitse",
    Milan: "milan",
    Munich: "munich",
    Mukachevo: "mukachevo",
    Nitra: "nitra",
    Perechin: "perechin",
    Prague: "prague",
    Roma: "roma",
    Sofia: "sofia",
    Trnava: "trnava",
    Uzhhorod: "uzhhorod",
    Varna: "varna",
    Vienna: "vienna",
    Vinogradovo: "vinogradovo",
    Zagreb: "zagreb",
}

export const countriesCities = {
    [Country.Austria]: [City.Vienna],
    [Country.Bulgaria]: [City.Burgas, City.Varna, City.Sofia],
    [Country.Croatia]: [City.Zagreb],
    [Country.Czech]: [City.Brno, City.Prague],
    [Country.Germany]: [City.Berlin, City.Munich],
    [Country.Hungary]: [City.Budapest], 
    [Country.Italy]: [City.Roma, City.Milan],
    [Country.Romania]: [City.Buharest],
    [Country.Slovakia]: [City.Koshitse, City.Bratislava],
    [Country.Ukraine]: [City.Uzhhorod, City.Mukachevo, City.Chop, City.Perechin, City.Irshava, City.Chust, City.Vinogradovo],
}

export const translateCountry = {
    ua: {
        [Country.Austria]: ["Австрія","Австрії","Австрію","Австрії"],
        [Country.Bulgaria]: ["Болгарія", "Болгарії","Болгарію","Болгарії"],
        [Country.Croatia]: ["Хорватія", "Хорватії","Хорватію","Хорватії"],
        [Country.Czech]: ["Чехія","Чехії","Чехію","Чехії"],
        [Country.Germany]: ["Німеччина","Німеччині","Німеччину","Німеччини"],
        [Country.Hungary]: ["Угорщина","Угорщині","Угорщину","Угорщини"],
        [Country.Italy]: ["Італія","Італії","Італію","Італії"],
        [Country.Romania]: ["Румунія","Румунії","Румунію","Румунії"],
        [Country.Slovakia]: ["Словаччина","Словаччині","Словаччину","Словаччини"],
        [Country.Ukraine]: ["Україна", "Українї","Україну","України"],
    },
    ru: {
        [Country.Austria]: ["Австрия","Австрии","Австрию","Австрии"],
        [Country.Bulgaria]: ["Болгарія","Болгарии","Болгарию","Болгарии"],
        [Country.Croatia]: ["Хорватия","Хорватии","Хорватию","Хорватии"],
        [Country.Czech]: ["Чехия","Чехии","Чехию","Чехии"],
        [Country.Germany]: ["Германия","Германии","Германию","Германии"],
        [Country.Hungary]: ["Венгрия","Венгрии","Венгрию","Венгрии"],
        [Country.Italy]: ["Италия","Италии","Италию","Италии"],
        [Country.Romania]: ["Румыния","Румынии","Румынию","Румынии"],
        [Country.Slovakia]: ["Словакия","Словакии","Словакию","Словакии"],
        [Country.Ukraine]: ["Украина","Украине","Украину","Украины"],
    }, 
    en: {
        [Country.Austria]: ["Austria","Austria","Austria","Austria"],
        [Country.Bulgaria]: ["Bulgaria","Bulgaria","Bulgaria","Bulgaria"],
        [Country.Croatia]: ["Croatia","Croatia","Croatia","Croatia"],
        [Country.Czech]: ["Czech Republic","Czech Republic","Czech Republic","Czech Republic"],
        [Country.Germany]: ["Germany","Germany","Germany","Germany"],
        [Country.Hungary]: ["Hungary","Hungary","Hungary","Hungary"],
        [Country.Italy]: ["Italy","Italy","Italy","Italy"],
        [Country.Romania]: ["Romania","Romania","Romania","Romania"],
        [Country.Slovakia]: ["Slovakia","Slovakia","Slovakia","Slovakia"],
        [Country.Ukraine]: ["Ukraine","Ukraine","Ukraine","Ukraine"],
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
        [City.Chop]: ["Чоп","Чопі","Чоп","Чопа"],
        [City.Chust]: ["Хуст","Хусті","Хуст","Хуста"],
        [City.Irshava]: ["Іршава","Іршаві","Іршаву","Іршави"],
        [City.Koshitse]: ["Кошице","Кошице","Кошице","Кошице"],
        [City.Milan]: ["Мілан","Мілані","Мілан","Мілана"],
        [City.Munich]: ["Мюнхен","Мюнхені","Мюнхен","Мюнхена"],
        [City.Mukachevo]: ["Мукачево","Мукачево","Мукачево","Мукачево"],
        [City.Nitra]: ["Нітра","Нітрі","Нітру","Нітри"],
        [City.Perechin]: ["Перечин","Перечині","Перечин","Перечина"],
        [City.Prague]: ["Прага","Празі","Прагу","Праги"],
        [City.Roma]: ["Рим","Римі", "Рим","Рима"],
        [City.Sofia]: ["Софія","Софії","Софію","Софії"],
        [City.Trnava]: ["Трнава","Трнаві","Трнаву","Трнави"],
        [City.Uzhhorod]: ["Ужгород","Ужгороді","Ужгород","Ужгорода"],
        [City.Varna]: ["Варна","Варні","Варну","Варни"],
        [City.Vienna]: ["Відень","Відні","Відень","Відня"],
        [City.Vinogradovo]: ["Виноградово","Виноградово","Виноградово","Виноградово"],
        [City.Zagreb]: ["Загреб","Загребі","Загреб","Загреба"],
    },
    ru: {
        [City.Berlin]: ["Берлин","Берлине","Берлин","Берлина"],
        [City.Bratislava]: ["Братислава","Братиславе","Братиславу","Братиславы"],
        [City.Brno]: ["Брно","Брно","Брно","Брно"],
        [City.Budapest]: ["Будапешт", "Будапеште", "Будапешт","Будапешта"],
        [City.Buharest]: ["Бухарест","Бухаресте","Бухарест","Бухареста"],
        [City.Burgas]: ["Бургас","Бургасе","Бургасе","Бургаса"],
        [City.Chop]: ["Чоп","Чопе","Чоп","Чопа"],
        [City.Chust]: ["Хуст","Хусте","Хуст","Хуста"],
        [City.Irshava]: ["Иршава","Иршаве","Иршаву","Иршавы"],
        [City.Koshitse]: ["Кошице","Кошице","Кошице","Кошице"],
        [City.Milan]: ["Милан","Милане","Милан","Милана"],
        [City.Munich]: ["Мюнхен","Мюнхене","Мюнхен","Мюнхена"],
        [City.Mukachevo]: ["Мукачево","Мукачево","Мукачево","Мукачево"],
        [City.Nitra]: ["Нитра","Нитре","Нитру","Нитры"],
        [City.Perechin]: ["Перечин","Перечине","Перечин","Перечина"],
        [City.Prague]: ["Прага","Праге","Прагу","Праги"],
        [City.Roma]: ["Рим","Риме", "Рим","Рима"],
        [City.Sofia]: ["София","Софии","Софию","Софии"],
        [City.Trnava]: ["Трнава","Трнаве","Трнаву","Трнавы"],
        [City.Uzhhorod]: ["Ужгород","Ужгороде","Ужгороде","Ужгорода"],
        [City.Varna]: ["Варна","Варне","Варну","Варны"],
        [City.Vienna]: ["Вена","Вене","Вену","Вены"],
        [City.Vinogradovo]: ["Виноградово","Виноградово","Виноградово","Виноградово"],
        [City.Zagreb]: ["Загреб","Загребе","Загреб","Загреба"],
    },
    en: {
        [City.Berlin]: ["Berlin","Berlin","Berlin","Berlin"],
        [City.Bratislava]: ["Bratislava","Bratislava","Bratislava","Bratislava"],
        [City.Brno]: ["Brno","Brno","Brno","Brno"],
        [City.Budapest]: ["Budapest", "Budapest", "Budapest","Budapest"],
        [City.Buharest]: ["Buharest","Buharest","Buharest","Buharest"],
        [City.Burgas]: ["Burgas","Burgas","Burgas","Burgas"],
        [City.Chop]: ["Chop","Chop","Chop","Chop"],
        [City.Chust]: ["Chust","Chust","Chust","Chust"],
        [City.Irshava]: ["Irshava","Irshava","Irshava","Irshava"],
        [City.Koshitse]: ["Koshitse","Koshitse","Koshitse","Koshitse"],
        [City.Milan]: ["Milan","Milan","Milan","Milan"],
        [City.Munich]: ["Munich","Munich","Munich","Munich"],
        [City.Mukachevo]: ["Mukachevo","Mukachevo","Mukachevo","Mukachevo"],
        [City.Nitra]: ["Nitra","Nitra","Nitra","Nitra"],
        [City.Perechin]: ["Perechin","Perechin","Perechin","Perechin"],
        [City.Prague]: ["Prague","Prague","Prague","Prague"],
        [City.Roma]: ["Rome","Rome", "Rome","Rome"],
        [City.Sofia]: ["Sofia","Sofia","Sofia","Sofia"],
        [City.Trnava]: ["Trnava","Trnava","Trnava","Trnava"],
        [City.Uzhhorod]: ["Uzhhorod","Uzhhorod","Uzhhorod","Uzhhorod"],
        [City.Varna]: ["Varna","Varna","Varna","Varna"],
        [City.Vienna]: ["Vienna","Vienna","Vienna","Vienna"],
        [City.Vinogradovo]: ["Vinogradovo","Vinogradovo","Vinogradovo","Vinogradovo"],
        [City.Zagreb]: ["Zagreb","Zagreb","Zagreb","Zagreb"],
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
