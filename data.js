export let Country = {
    Austria: "austria",
    Bulgaria: "bulgaria",
    Croatia: "croatia",
    Czech: "czech",
    France: "france",
    Germany: "germany",
    Hungary: "hungary",
    Italy: "italy",
    Poland: "poland",
    Romania: "romania",
    Slovakia: "slovakia",
    Slovenia: "slovenia",
    Spain: "spain",
    Switzerland: "switzerland",
}

export let allCountries = [
    Country.Austria,
    Country.Bulgaria,
    Country.Croatia,
    Country.Czech,
    Country.France,
    Country.Germany,
    Country.Hungary,
    Country.Italy,
    Country.Poland,
    Country.Romania,
    Country.Slovakia,
    Country.Slovenia,
    Country.Spain,
    Country.Switzerland,
]

export let City = {
    // Austria
    Vienna: "vienna",

    // Bulgaria,
    Burgas: "burgas",
    Sofia: "sofia",
    Varna: "varna",
    
    // Croatia,
    Zagreb: "zagreb",
    
    // Czech,
    Brno: "brno",
    Prague: "prague",
    
    // France,
    Lyon: "lyon",
    Marceille: "marceille",
    Nice: "nice",
    Paris: "paris",
    Toulouse: "toulouse",

    // Germany,
    Berlin: "berlin",
    Munich: "munich",
    Nurnberg: "nurnberg",
    
    // Hungary,
    Budapest: "budapest",
    
    // Italy,
    Milan: "milan",
    Roma: "roma",
    
    // Poland,
    Krakow: "krakow",
    Warsaw: "warsaw",
    Wroclav: "wroclav",
    
    // Romania,
    Buharest: "buharest",
    
    // Slovakia,
    BanskaBystrica: "banskabystrica",
    Bratislava: "bratislava",
    Humenne: "humenne",
    Koshitse: "koshitse",
    Levoca: "levoca",
    Levice: "levice",
    Malacky: "malacky",
    Martin: "martin",
    Michalovce: "michalovce",
    Nitra: "nitra",
    NoveZamky: "novezamky",
    Poprad: "poprad",
    Presov: "presov",
    Prievidza: "prievidza",
    Ruzomberok: "ruzomberok",
    Skalica: "skalica",
    Trencin: "trencin",
    Trnava: "trnava",
    Zilina: "zilina",
    Zvolen: "zvolen",
    
    // Slovenia,
    Ljublijana: "ljublijana",
    Maribor: "maribor",
    
    // Spain,
    Barcelona: "barcelona",
    Madrid: "madrid",
    Valencia: "valencia",

    // Switzerland,
    Bern: "bern",
    Zurich: "zurich",
}

export const countriesCities = {
    [Country.Austria]: [City.Vienna],
    [Country.Bulgaria]: [City.Burgas, City.Varna, City.Sofia],
    [Country.Croatia]: [City.Zagreb],
    [Country.Czech]: [City.Prague, City.Brno],
    [Country.France]: [City.Lyon, City.Nice, City.Paris, City.Toulouse, City.Marceille],
    [Country.Germany]: [City.Berlin, City.Munich, City.Nurnberg],
    [Country.Hungary]: [City.Budapest], 
    [Country.Italy]: [City.Roma, City.Milan],
    [Country.Poland]: [City.Warsaw, City.Krakow, City.Wroclav],
    [Country.Romania]: [City.Buharest],
    [Country.Slovakia]: [
        City.Koshitse, 
        City.Bratislava, 
        City.BanskaBystrica, 
        City.Humenne, 
        City.Levoca, 
        City.Levice,
        City.Martin,
        City.Michalovce,
        City.Malacky,
        City.Nitra,
        City.NoveZamky,
        City.Poprad,
        City.Presov,
        City.Prievidza,
        City.Ruzomberok,
        City.Skalica,
        City.Trencin,
        City.Trnava,
        City.Zilina,
        City.Zvolen,
    ],
    [Country.Slovenia]: [City.Maribor,City.Ljublijana],
    [Country.Spain]: [City.Barcelona, City.Madrid, City.Valencia],
    [Country.Switzerland]: [City.Zurich, City.Bern],
}

// Кто? Где? Куда? Откуда?
export const translateCountry = {
    ua: {
        [Country.Austria]: ["Австрія","Австрії","Австрію","Австрії"],
        [Country.Bulgaria]: ["Болгарія", "Болгарії","Болгарію","Болгарії"],
        [Country.Croatia]: ["Хорватія", "Хорватії","Хорватію","Хорватії"],
        [Country.Czech]: ["Чехія","Чехії","Чехію","Чехії"],
        [Country.France]: ["Франція","Франції","Францію","Франції"],
        [Country.Germany]: ["Німеччина","Німеччині","Німеччину","Німеччини"],
        [Country.Hungary]: ["Угорщина","Угорщині","Угорщину","Угорщини"],
        [Country.Italy]: ["Італія","Італії","Італію","Італії"],
        [Country.Poland]: ["Польща","Польщі","Польщу","Польщі"],
        [Country.Romania]: ["Румунія","Румунії","Румунію","Румунії"],
        [Country.Slovakia]: ["Словаччина","Словаччині","Словаччину","Словаччини"],
        [Country.Slovenia]: ["Словенія","Словенії","Словенію","Словенії"],
        [Country.Spain]: ["Іспанія","Іспанії","Іспанію","Іспанії"],
        [Country.Switzerland]: ["Швейцарія","Швейцарії","Швейцарію","Швейцарії"],
    },
    ru: {
        [Country.Austria]: ["Австрия","Австрии","Австрию","Австрии"],
        [Country.Bulgaria]: ["Болгарія","Болгарии","Болгарию","Болгарии"],
        [Country.Croatia]: ["Хорватия","Хорватии","Хорватию","Хорватии"],
        [Country.Czech]: ["Чехия","Чехии","Чехию","Чехии"],
        [Country.France]: ["Франция","Франции","Францию","Франции"],
        [Country.Germany]: ["Германия","Германии","Германию","Германии"],
        [Country.Hungary]: ["Венгрия","Венгрии","Венгрию","Венгрии"],
        [Country.Italy]: ["Италия","Италии","Италию","Италии"],
        [Country.Poland]: ["Польша","Польши","Польшу","Польши"],
        [Country.Romania]: ["Румыния","Румынии","Румынию","Румынии"],
        [Country.Slovakia]: ["Словакия","Словакии","Словакию","Словакии"],
        [Country.Slovenia]: ["Словения","Словении","Словению","Словении"],
        [Country.Spain]: ["Испания","Испании","Испанию","Испании"],
        [Country.Switzerland]: ["Швейцария","Швейцарии","Швейцарию","Швейцарии"],
    }, 
    en: {
        [Country.Austria]: ["Austria","Austria","Austria","Austria"],
        [Country.Bulgaria]: ["Bulgaria","Bulgaria","Bulgaria","Bulgaria"],
        [Country.Croatia]: ["Croatia","Croatia","Croatia","Croatia"],
        [Country.Czech]: ["Czech Republic","Czech Republic","Czech Republic","Czech Republic"],
        [Country.France]: ["France","France","France","France"],
        [Country.Germany]: ["Germany","Germany","Germany","Germany"],
        [Country.Hungary]: ["Hungary","Hungary","Hungary","Hungary"],
        [Country.Italy]: ["Italy","Italy","Italy","Italy"],
        [Country.Poland]: ["Poland","Poland","Poland","Poland"],
        [Country.Romania]: ["Romania","Romania","Romania","Romania"],
        [Country.Slovakia]: ["Slovakia","Slovakia","Slovakia","Slovakia"],
        [Country.Slovenia]: ["Slovenia","Slovenia","Slovenia","Slovenia"],
        [Country.Spain]: ["Spain","Spain","Spain","Spain"],
        [Country.Switzerland]: ["Switzerland","Switzerland","Switzerland","Switzerland"],
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
        // Austria,
        [City.Vienna]: ["Відень","Відні","Відень","Відня"],

        // Bulgaria,
        [City.Burgas]: ["Бургас","Бургасі","Бургас","Бургаса"],
        [City.Sofia]: ["Софія","Софії","Софію","Софії"],
        [City.Varna]: ["Варна","Варні","Варну","Варни"],
        
        // Croatia,
        [City.Zagreb]: ["Загреб","Загребі","Загреб","Загреба"],
        
        // Czech,
        [City.Brno]: ["Брно","Брно","Брно","Брно"],
        [City.Prague]: ["Прага","Празі","Прагу","Праги"],
        
        // France,
        [City.Marceille]: ["Марсель","Марселі","Марсель","Марселя"],
        [City.Lyon]: ["Ліон","Ліоні","Ліон","Ліона"],
        [City.Nice]: ["Ніцца","Ніцці","Ніццу","Ніцци"],
        [City.Paris]: ["Париж","Парижі","Париж","Парижа"],
        [City.Toulouse]: ["Тулуза","Тулузі","Тулузу","Тулузи"],
        
        // Germany,
        [City.Berlin]: ["Берлін","Берліні","Берлін","Берліна"],
        [City.Munich]: ["Мюнхен","Мюнхені","Мюнхен","Мюнхена"],
        [City.Nurnberg]: ["Нюрнберг","Нюрнберзі","Нюрнберг","Нюрнберга"],
        
        // Hungary,
        [City.Budapest]: ["Будапешт", "Будапешті", "Будапешт","Будапешта"],
        
        // Italy,
        [City.Milan]: ["Мілан","Мілані","Мілан","Мілана"],
        [City.Roma]: ["Рим","Римі", "Рим","Рима"],
        
        // Poland,
        [City.Krakow]: ["Краків","Кракові","Краків","Кракова"],
        [City.Warsaw]: ["Варшава","Варшаві","Варшаву","Варшави"],
        [City.Wroclav]: ["Вроцлав","Вроцлаві","Вроцлав","Вроцлава"],
        
        // Romania,
        [City.Buharest]: ["Бухарест","Бухаресті","Бухарест","Бухареста"],
        
        // Slovakia,
        [City.Bratislava]: ["Братислава","Братиславі","Братиславу","Братислави"], 
        [City.Koshitse]: ["Кошице","Кошице","Кошице","Кошице"],
        [City.Nitra]: ["Нітра","Нітрі","Нітру","Нітри"],
        [City.Trnava]: ["Трнава","Трнаві","Трнаву","Трнави"],
        [City.BanskaBystrica]: ["Банська-бистриця","Банській-бистриці","Банську-бистрицю", "Банської-бистриці"],
        [City.Humenne]: ["Гуменне","Гуменному","Гуменне","Гуменного"],
        [City.Levoca]: ["Левоча","Левочі","Левочу","Левочі"],
        [City.Levice]: ["Левіце","Левіце","Левіце","Левіце"],
        [City.Martin]: ["Мартін","Мартіні","Мартін","Мартіна"],
        [City.Michalovce]: ["Михаловце","Михаловце","Михаловце","Михаловце"],
        [City.Malacky]: ["Малацки","Малацки","Малацки","Малацки"],
        [City.NoveZamky]: ["Нове-Замки","Нове-Замки","Нове-Замки","Нове-Замки"],
        [City.Poprad]: ["Попрад","Попраді","Попрад","Попрада"],
        [City.Presov]: ["Прешов","Прешові","Прешов","Прешова"],
        [City.Prievidza]: ["Прієвідза","Прієвідзі","Прієвідзу","Прієвідзи"],
        [City.Ruzomberok]: ["Ружомберок","Ружомбероку","Ружомберок","Ружомберока"],
        [City.Skalica]: ["Скаліца","Скаліці","Скаліцу","Скаліці"],
        [City.Trencin]: ["Тренчин","Тренчині","Тренчин","Тренчина"],
        [City.Zilina]: ["Жиліна","Жиліні","Жиліну","Жиліни"],
        [City.Zvolen]: ["Зволен","Зволені","Зволен","Зволена"],
        
        // Slovenia,
        [City.Maribor]: ["Марібор","Маріборі","Марібор","Марібора"],
        [City.Ljublijana]: ["Любляна","Любляні","Любляну","Любляни"],
        
        // Spain,
        [City.Barcelona]: ["Барселона","Барселоні","Барселону","Барселони"],
        [City.Madrid]: ["Мадрид","Мадриді","Мадрид","Мадрида"],
        [City.Valencia]: ["Валенсія","Валенсії","Валенсію","Валенсії"],
        
        // Switzerland,
        [City.Bern]: ["Берн","Берні","Берн","Берна"],  
        [City.Zurich]: ["Цюрих","Цюриху","Цюрих","Цюриха"],
    },
    ru: {
        // Austria,
        [City.Vienna]: ["Вена","Вене","Вену","Вены"],
        
        // Bulgaria,
        [City.Burgas]: ["Бургас","Бургасе","Бургасе","Бургаса"],
        [City.Sofia]: ["София","Софии","Софию","Софии"],
        [City.Varna]: ["Варна","Варне","Варну","Варны"],
        
        // Croatia,
        [City.Zagreb]: ["Загреб","Загребе","Загреб","Загреба"],
        
        // Czech,
        [City.Brno]: ["Брно","Брно","Брно","Брно"],
        [City.Prague]: ["Прага","Праге","Прагу","Праги"],
        
        // France,
        [City.Marceille]: ["Марсель","Марселе","Марсель","Марселя"],
        [City.Lyon]: ["Лион","Лионе","Лион","Лиона"],
        [City.Nice]: ["Ницца","Ницце","Ниццу","Ниццы"],
        [City.Paris]: ["Париж","Париже","Париж","Парижа"],
        [City.Toulouse]: ["Тулуза","Тулузе","Тулузу","Тулузы"],
        
        // Germany,
        [City.Berlin]: ["Берлин","Берлине","Берлин","Берлина"],
        [City.Munich]: ["Мюнхен","Мюнхене","Мюнхен","Мюнхена"],
        [City.Nurnberg]: ["Нюрнберг","Нюрнберге","Нюрнберг","Нюрнберга"],
        
        // Hungary,
        [City.Budapest]: ["Будапешт", "Будапеште", "Будапешт","Будапешта"],
        
        // Italy,
        [City.Milan]: ["Милан","Милане","Милан","Милана"],
        [City.Roma]: ["Рим","Риме", "Рим","Рима"],
        
        // Poland,
        [City.Krakow]: ["Краков","Кракове","Краков","Кракова"],
        [City.Warsaw]: ["Варшава","Варшаве","Варшаву","Варшавы"],
        [City.Wroclav]: ["Вроцлав","Вроцлаві","Вроцлав","Вроцлава"],

        // Romania,
        [City.Buharest]: ["Бухарест","Бухаресте","Бухарест","Бухареста"],
        
        // Slovakia,
        [City.Bratislava]: ["Братислава","Братиславе","Братиславу","Братиславы"],
        [City.Koshitse]: ["Кошице","Кошице","Кошице","Кошице"],
        [City.Nitra]: ["Нитра","Нитре","Нитру","Нитры"],
        [City.Trnava]: ["Трнава","Трнаве","Трнаву","Трнавы"],
        [City.BanskaBystrica]: ["Банска-бистрица","Банськой-бистрице","Банску-бистрицу", "Банской-бистрицы"],
        [City.Humenne]: ["Гуменное","Гуменном","Гуменное","Гуменного"],
        [City.Levoca]: ["Левоча","Левоче","Левочу","Левочи"],
        [City.Levice]: ["Левице","Левице","Левице","Левице"],
        [City.Martin]: ["Мартин","Мартине","Мартин","Мартина"],
        [City.Michalovce]: ["Михаловце","Михаловце","Михаловце","Михаловце"],
        [City.Malacky]: ["Малацки","Малацки","Малацки","Малацки"],
        [City.NoveZamky]: ["Нове-Замки","Нове-Замки","Нове-Замки","Нове-Замки"],
        [City.Poprad]: ["Попрад","Попраде","Попрад","Попрада"],
        [City.Presov]: ["Прешов","Прешове","Прешов","Прешова"],
        [City.Prievidza]: ["Приевидза","Приевидзе","Приевидзу","Приєвидзы"],
        [City.Ruzomberok]: ["Ружомберок","Ружомбероке","Ружомберок","Ружомберока"],
        [City.Skalica]: ["Скалица","Скалице","Скалицу","Скалици"],
        [City.Trencin]: ["Тренчин","Тренчине","Тренчин","Тренчина"],
        [City.Zilina]: ["Жилина","Жилине","Жилину","Жилини"],
        [City.Zvolen]: ["Зволен","Зволене","Зволен","Зволена"],
        
        // Slovenia,
        [City.Maribor]: ["Марибор","Мариборе","Марибор","Марибора"],
        [City.Ljublijana]: ["Любляна","Любляне","Любляну","Любляны"],
        
        // Spain,
        [City.Barcelona]: ["Барселона","Барселоне","Барселону","Барселоны"],
        [City.Madrid]: ["Мадрид","Мадриде","Мадрид","Мадрида"],
        [City.Valencia]: ["Валенсия","Валенсии","Валенсию","Валенсии"],
        
        // Switzerland,
        [City.Bern]: ["Берн","Берне","Берн","Берна"],
        [City.Zurich]: ["Цюрих","Цюрихе","Цюрих","Цюриха"],
    },
    en: {
        // Austria,
        [City.Vienna]: ["Vienna","Vienna","Vienna","Vienna"],
        
        // Bulgaria,
        [City.Burgas]: ["Burgas","Burgas","Burgas","Burgas"],
        [City.Sofia]: ["Sofia","Sofia","Sofia","Sofia"],
        [City.Varna]: ["Varna","Varna","Varna","Varna"],
        
        // Croatia,
        [City.Zagreb]: ["Zagreb","Zagreb","Zagreb","Zagreb"],
        
        // Czech,
        [City.Brno]: ["Brno","Brno","Brno","Brno"],
        [City.Prague]: ["Prague","Prague","Prague","Prague"],
        
        // France,
        [City.Marceille]: ["Marceille","Marceille","Marceille","Marceille"],
        [City.Lyon]: ["Lyon","Lyon","Lyon","Lyon"], 
        [City.Nice]: ["Nice","Nice","Nice","Nice"],
        [City.Paris]: ["Paris","Paris","Paris","Paris"],
        [City.Toulouse]: ["Toulouse","Toulouse","Toulouse","Toulouse"],
        
        // Germany,
        [City.Berlin]: ["Berlin","Berlin","Berlin","Berlin"],
        [City.Munich]: ["Munich","Munich","Munich","Munich"],
        [City.Nurnberg]: ["Nurnberg","Nurnberg","Nurnberg","Nurnberg"],
        
        // Hungary,
        [City.Budapest]: ["Budapest", "Budapest", "Budapest","Budapest"],
        
        // Italy,
        [City.Milan]: ["Milan","Milan","Milan","Milan"],
        [City.Roma]: ["Rome","Rome", "Rome","Rome"],
        
        // Poland,
        [City.Krakow]: ["Krakow","Krakow","Krakow","Krakow"],
        [City.Warsaw]: ["Warsaw","Warsaw","Warsaw","Warsaw"],
        [City.Wroclav]: ["Wroclav","Wroclav","Wroclav","Wroclav"],
        
        // Romania,
        [City.Buharest]: ["Buharest","Buharest","Buharest","Buharest"],
        
        // Slovakia,
        [City.Bratislava]: ["Bratislava","Bratislava","Bratislava","Bratislava"],
        [City.Koshitse]: ["Koshitse","Koshitse","Koshitse","Koshitse"],
        [City.Nitra]: ["Nitra","Nitra","Nitra","Nitra"],
        [City.Trnava]: ["Trnava","Trnava","Trnava","Trnava"],
        [City.BanskaBystrica]: ["Banska-Bystrica","Banska-Bystrica","Banska-Bystrica","Banska-Bystrica"],
        [City.Humenne]: ["Humenne","Humenne","Humenne","Humenne"],
        [City.Levoca]: ["Levoсa","Levoсa","Levoca","Levoca"],
        [City.Levice]: ["Levice","Levice","Levice","Levice"],
        [City.Martin]: ["Martin","Martin","Martin","Martin"],
        [City.Michalovce]: ["Michalovce","Michalovce","Michalovce","Michalovce"],
        [City.Malacky]: ["Malacky","Malacky","Malacky","Malacky"],
        [City.NoveZamky]: ["Nove-Zamky","Nove-Zamky","Nove-Zamky","Nove-Zamky"],
        [City.Poprad]: ["Poprad","Poprad","Poprad","Poprad"],
        [City.Presov]: ["Presov","Presov","Presov","Presov"],
        [City.Prievidza]: ["Prievidza","Prievidza","Prievidza","Prievidza"],
        [City.Ruzomberok]: ["Ruzomberok","Ruzomberok","Ruzomberok","Ruzomberok"],
        [City.Skalica]: ["Skalica","Skalica","Skalica","Skalica"],
        [City.Trencin]: ["Trencin","Trencin","Trencin","Trencin"],
        [City.Zilina]: ["Zilina","Zilina","Zilina","Zilina"],
        [City.Zvolen]: ["Zvolen","Zvolen","Zvolen","Zvolen"],
        
        // Slovenia,
        [City.Maribor]: ["Maribor","Maribor","Maribor","Maribor"],
        [City.Ljublijana]: ["Ljublijana","Ljublijana","Ljublijana","Ljublijana"],
        
        // Spain,
        [City.Barcelona]: ["Barcelona","Barcelona","Barcelona","Barcelona"],
        [City.Madrid]: ["Madrid","Madrid","Madrid","Madrid"],
        [City.Valencia]: ["Valencia","Valencia","Valencia","Valencia"],
        
        // Switzerland,
        [City.Bern]: ["Bern","Bern","Bern","Bern"],
        [City.Zurich]: ["Zurich","Zurich","Zurich","Zurich"],
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
