export let Country = {
    Austria: "austria",
    Bulgaria: "bulgaria",
    Croatia: "croatia",
    Czech: "czech",
    Germany: "germany",
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
    [Country.Italy]: [City.Roma, City.Milan],
    [Country.Romania]: [City.Buharest],
    [Country.Slovakia]: [City.Koshitse, City.Bratislava],
    [Country.Ukraine]: [City.Uzhhorod, City.Mukachevo, City.Chop, City.Perechin, City.Irshava, City.Chust, City.Vinogradovo],
}

export const translateCountry = {
    ua: {
        [Country.Austria]: ["Австрія","Австрії","Австрію"],
        [Country.Bulgaria]: ["Болгарія", "Болгарії","Болгарію"],
        [Country.Croatia]: ["Хорватія", "Хорватії","Хорватію"],
        [Country.Czech]: ["Чехія","Чехії","Чехію"],
        [Country.Germany]: ["Німеччина","Німеччині","Німеччину"],
        [Country.Italy]: ["Італія","Італії","Італію"],
        [Country.Romania]: ["Румунія","Румунії","Румунію"],
        [Country.Slovakia]: ["Словакія","Словакії","Словакію"],
        [Country.Ukraine]: ["Україна", "Українї","Україну"],
    },
    ru: {
        [Country.Austria]: ["Австрия","Австрии","Австрию"],
        [Country.Bulgaria]: ["Болгарія","Болгарии","Болгарию"],
        [Country.Croatia]: ["Хорватия","Хорватии","Хорватию"],
        [Country.Czech]: ["Чехия","Чехии","Чехию"],
        [Country.Germany]: ["Германия","Германии","Германию"],
        [Country.Italy]: ["Італия","Італии","Італию"],
        [Country.Romania]: ["Румыния","Румынии","Румынию"],
        [Country.Slovakia]: ["Словакия","Словакии","Словакию"],
        [Country.Ukraine]: ["Украина","Украине","Украину"],
    }, 
    en: {
        [Country.Austria]: ["Austria","Austria","Austria"],
        [Country.Bulgaria]: ["Bulgaria","Bulgaria","Bulgaria"],
        [Country.Croatia]: ["Croatia","Croatia","Croatia"],
        [Country.Czech]: ["Czech Republic","Czech Republic","Czech Republic"],
        [Country.Germany]: ["Germany","Germany","Germany"],
        [Country.Italy]: ["Italy","Italy","Italy"],
        [Country.Romania]: ["Romania","Romania","Romania"],
        [Country.Slovakia]: ["Slovakia","Slovakia","Slovakia"],
        [Country.Ukraine]: ["Ukraine","Ukraine","Ukraine"],
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

export const translateCity = {
    ua: {
        [City.Berlin]: ["Берлін","Берліні","Берлін"],
        [City.Bratislava]: ["Братислава","Братиславі","Братиславу"],
        [City.Brno]: ["Брно","Брно","Брно"],
        [City.Buharest]: ["Бухарест","Бухаресті","Бухарест"],
        [City.Burgas]: ["Бургас","Бургасі","Бургас"],
        [City.Chop]: ["Чоп","Чопі","Чоп"],
        [City.Chust]: ["Хуст","Хусті","Хуст"],
        [City.Irshava]: ["Іршава","Іршаві","Іршаву"],
        [City.Koshitse]: ["Кошице","Кошице","Кошице"],
        [City.Milan]: ["Мілан","Мілані","Мілан"],
        [City.Munich]: ["Мюнхен","Мюнхені","Мюнхен"],
        [City.Mukachevo]: ["Мукачево","Мукачево","Мукачево"],
        [City.Nitra]: ["Нітра","Нітрі","Нітру"],
        [City.Perechin]: ["Перечин","Перечині","Перечин"],
        [City.Prague]: ["Прага","Празі","Прагу"],
        [City.Roma]: ["Рим","Римі", "Рим"],
        [City.Sofia]: ["Софія","Софії","Софію"],
        [City.Trnava]: ["Трнава","Трнаві","Трнаву"],
        [City.Uzhhorod]: ["Ужгород","Ужгороді","Ужгород"],
        [City.Varna]: ["Варна","Варні","Варну"],
        [City.Vienna]: ["Відень","Відні","Відень"],
        [City.Vinogradovo]: ["Виноградово","Виноградово","Виноградово"],
        [City.Zagreb]: ["Загреб","Загребі","Загреб"],
    },
    ru: {
        [City.Berlin]: ["Берлин","Берлине","Берлин"],
        [City.Bratislava]: ["Братислава","Братиславе","Братиславу"],
        [City.Brno]: ["Брно","Брно","Брно"],
        [City.Buharest]: ["Бухарест","Бухаресте","Бухарест"],
        [City.Burgas]: ["Бургас","Бургасе","Бургасе"],
        [City.Chop]: ["Чоп","Чопе","Чоп"],
        [City.Chust]: ["Хуст","Хусте","Хуст"],
        [City.Irshava]: ["Иршава","Иршаве","Иршаву"],
        [City.Koshitse]: ["Кошице","Кошице","Кошице"],
        [City.Milan]: ["Милан","Милане","Милан"],
        [City.Munich]: ["Мюнхен","Мюнхене","Мюнхен"],
        [City.Mukachevo]: ["Мукачево","Мукачево","Мукачево"],
        [City.Nitra]: ["Нітра","Нітре","Нітру"],
        [City.Perechin]: ["Перечин","Перечине","Перечин"],
        [City.Prague]: ["Прага","Праге","Прагу"],
        [City.Roma]: ["Рим","Риме", "Рим"],
        [City.Sofia]: ["София","Софии","Софию"],
        [City.Trnava]: ["Трнава","Трнаве","Трнаву"],
        [City.Uzhhorod]: ["Ужгород","Ужгороде","Ужгороде"],
        [City.Varna]: ["Варна","Варне","Варну"],
        [City.Vienna]: ["Вена","Вене","Вену"],
        [City.Vinogradovo]: ["Виноградово","Виноградово","Виноградово"],
        [City.Zagreb]: ["Загреб","Загребе","Загреб"],
    },
    en: {
        [City.Berlin]: ["Berlin","Berlin","Berlin"],
        [City.Bratislava]: ["Bratislava","Bratislava","Bratislava"],
        [City.Brno]: ["Brno","Brno","Brno"],
        [City.Buharest]: ["Buharest","Buharest","Buharest"],
        [City.Burgas]: ["Burgas","Burgas","Burgas"],
        [City.Chop]: ["Chop","Chop","Chop"],
        [City.Chust]: ["Chust","Chust","Chust"],
        [City.Irshava]: ["Irshava","Irshava","Irshava"],
        [City.Koshitse]: ["Koshitse","Koshitse","Koshitse"],
        [City.Milan]: ["Milan","Milan","Milan"],
        [City.Munich]: ["Munich","Munich","Munich"],
        [City.Mukachevo]: ["Mukachevo","Mukachevo","Mukachevo"],
        [City.Nitra]: ["Nitra","Nitra","Nitra"],
        [City.Perechin]: ["Perechin","Perechin","Perechin"],
        [City.Prague]: ["Prague","Prague","Prague"],
        [City.Roma]: ["Rome","Rome", "Rome"],
        [City.Sofia]: ["Sofia","Sofia","Sofia"],
        [City.Trnava]: ["Trnava","Trnava","Trnava"],
        [City.Uzhhorod]: ["Uzhhorod","Uzhhorod","Uzhhorod"],
        [City.Varna]: ["Varna","Varna","Varna"],
        [City.Vienna]: ["Vienna","Vienna","Vienna"],
        [City.Vinogradovo]: ["Vinogradovo","Vinogradovo","Vinogradovo"],
        [City.Zagreb]: ["Zagreb","Zagreb","Zagreb"],
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
