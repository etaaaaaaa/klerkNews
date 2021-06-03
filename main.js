const news = ['Большинство отказывает соискателям с ошибками в резюме',
    'Новый способ, как узнать, какие проверки ждут компанию. «Клерк» протестировал платформу «Открытый контроль»',
'📊 Расходы по рекламе на экранах в магазине нормировать не надо',
'Детям разрешат временно находиться с бабушками, дедушками и другими родственниками. Сейчас этот вопрос не урегулирован',
'Безработных, матерей с детьми и работников старше 50 лет переобучат бесплатно',
'Каждый третий в стране занят в малом и среднем бизнесе. Это считая детей?',
'🔎 Новый способ, как узнать, какие проверки ждут компанию. «Клерк» протестировал платформу «Открытый контроль»',
'🔎 Новый способ, как узнать, какие проверки ждут компанию. «Клерк» протестировал платформу «Открытый контроль»',
'Соучастника дела об обнулении НДС отпустили под подписку о невыезде',
'Материалы дела по дисциплинарке показывать работнику необязательно',
'💵 России хватит финансов, чтобы выдержать любые геополитические сценарии, считает глава ЦБ',
'В НК пропишут налоговые вычеты для участников СЗПК',
'Если США еще больше ужесточат санкции — это уже будет война, считает глава «Ростеха»'];

const newsObjects = {
    0: {
        date: '2021-06-02T17:42:00+03:00',
        href: '/buh/news/514679',
        id: '814756',
        numberOfComments: '0',
        numberOfViews: '852',
        title: '1 Большинство отказывает соискателям с ошибками в резюме'
    },
    1: {
        date: '2021-06-02T17:37:00+03:00',
        href: '/buh/news/514679',
        id: '514754',
        numberOfComments: '0',
        numberOfViews: '862',
        title: '2 Новый способ, как узнать, какие проверки ждут компанию. «Клерк» протестировал платформу «Открытый контроль»'
    },
    2: {
        date: '2021-06-02T17:23:00+03:00',
        href: '/buh/news/5146753',
        id: '514753',
        numberOfComments: '4',
        numberOfViews: '173',
        title: '3 📊 Расходы по рекламе на экранах в магазине нормировать не надо'
    },
    3: {
        date: "2021-06-02T17:15:00+03:00",
        href: '/buh/news/5146753',
        id: '514735',
        numberOfComments: '7',
        numberOfViews: '228',
        title: '4 Детям разрешат временно находиться с бабушками, дедушками и другими родственниками. Сейчас этот вопрос не урегулирован'
    },
    4: {
        date: "2021-06-02T16:45:00+03:00",
        href: '/buh/news/5146753',
        id: '514729',
        numberOfComments: '0',
        numberOfViews: '100',
        title: '5 Безработных, матерей с детьми и работников старше 50 лет переобучат бесплатно'
    },
    5: {
        date: "2021-06-02T16:45:00+03:00",
        href: '/buh/news/5146753',
        id: '514728',
        numberOfComments: '0',
        numberOfViews: '150',
        title: '6 AAAAA'
    },
    6: {
        date: '2021-06-02T17:42:00+03:00',
        href: '/buh/news/514679',
        id: '514710',
        numberOfComments: '0',
        numberOfViews: '850',
        title: '7 Большинство отказывает соискателям с ошибками в резюме'
    },
    7: {
        date: '2021-06-02T17:37:00+03:00',
        href: '/buh/news/514679',
        id: '514690',
        numberOfComments: '0',
        numberOfViews: '82',
        title: '8 Новый способ, как узнать, какие проверки ждут компанию. «Клерк» протестировал платформу «Открытый контроль»'
    },
    8: {
        date: '2021-06-02T17:23:00+03:00',
        href: '/buh/news/5146753',
        id: '514680',
        numberOfComments: '4',
        numberOfViews: '373',
        title: '9 📊 Расходы по рекламе на экранах в магазине нормировать не надо'
    },
    9: {
        date: "2021-06-02T17:15:00+03:00",
        href: '/buh/news/5146753',
        id: '514635',
        numberOfComments: '7',
        numberOfViews: '208',
        title: '10 Детям разрешат временно находиться с бабушками, дедушками и другими родственниками. Сейчас этот вопрос не урегулирован'
    },
    10: {
        date: "2021-06-02T16:45:00+03:00",
        href: '/buh/news/5146753',
        id: '514629',
        numberOfComments: '0',
        numberOfViews: '101',
        title: '11 Безработных, матерей с детьми и работников старше 50 лет переобучат бесплатно'
    },
    11: {
        date: "2021-06-02T16:45:00+03:00",
        href: '/buh/news/5146753',
        id: '514529',
        numberOfComments: '0',
        numberOfViews: '600',
        title: '12 AAAAA'
    }
};

let newsToBeDisplayed = [];
let countStart = 0; //THIS DOESNT WORK, SAVED TO REMEMBER THE IDEA

const loadButton = document.querySelector('.load_more_button');
const dateFilterButton = document.querySelector('.filter_date_button');
const viewsFilterButton = document.querySelector('.filter_views_button');
const ul = document.querySelector('.news_list');


for (let i = 0; i < 5; i++) {
    newsToBeDisplayed.push(newsObjects[i]);
}
display();

loadButton.addEventListener('click', () => {
    countStart+=6; //THIS DOESNT WORK X2
    console.log(countStart);
    display();
});

dateFilterButton.addEventListener('click', () => {

});

viewsFilterButton.addEventListener('click', () => {
   filterViews();
});

function display () {
    const displayLi = newsToBeDisplayed.map(newsPiece => {
        ul.innerHTML += `<li class="news_list_item">
                             <a href="${newsPiece.href}" class="li_link">
                                 <span class="date">${newsPiece.date.slice(11,16)}</span>
                                 <span class="headline">${newsPiece.title}</span>
                             </a>
                         </li>`;
    });
}

function filterDate () {

}

function filterViews () {
    //create array for storing number of views
    let viewsArr = [];
    //iterate the newsObjects to find all the views and put them into the array
    for (let object in newsObjects) {
        viewsArr.push(Number(newsObjects[object].numberOfViews));
    }
    //sort the array
    viewsArr.sort(function(a,b){return a-b});
    console.log(viewsArr);
    //find the objects that have that number of views
    for (let object in newsObjects) {
        if ()
    }
    // display();
}

// console.log('-----');
// for (ids in newsObjects) {
//     console.log(newsObjects[ids].id);
// }

function filter () {
    newsToBeDisplayed = [];



}