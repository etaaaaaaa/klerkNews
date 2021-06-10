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
        title: 'Большинство отказывает соискателям с ошибками в резюме'
    },
    1: {
        date: '2021-06-02T17:37:00+03:00',
        href: '/buh/news/514679',
        id: '514754',
        numberOfComments: '0',
        numberOfViews: '862',
        title: 'Новый способ, как узнать, какие проверки ждут компанию. «Клерк» протестировал платформу «Открытый контроль»'
    },
    2: {
        date: '2021-06-02T17:23:00+03:00',
        href: '/buh/news/5146753',
        id: '514753',
        numberOfComments: '4',
        numberOfViews: '173',
        title: '📊 Расходы по рекламе на экранах в магазине нормировать не надо'
    },
    3: {
        date: "2021-06-02T17:15:00+03:00",
        href: '/buh/news/5146753',
        id: '514735',
        numberOfComments: '7',
        numberOfViews: '228',
        title: 'Детям разрешат временно находиться с бабушками, дедушками и другими родственниками. Сейчас этот вопрос не урегулирован'
    },
    4: {
        date: "2021-06-01T16:45:00+03:00",
        href: '/buh/news/5146753',
        id: '514729',
        numberOfComments: '0',
        numberOfViews: '100',
        title: 'Безработных, матерей с детьми и работников старше 50 лет переобучат бесплатно'
    },
    5: {
        date: "2021-06-02T16:45:00+03:00",
        href: '/buh/news/5146753',
        id: '514728',
        numberOfComments: '0',
        numberOfViews: '150',
        title: 'AAAAA'
    },
    6: {
        date: '2021-06-02T17:42:00+03:00',
        href: '/buh/news/514679',
        id: '514710',
        numberOfComments: '0',
        numberOfViews: '850',
        title: 'Большинство отказывает соискателям с ошибками в резюме'
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
let count = 0;
let times = 5;

const loadButton = document.querySelector('.klerk-new-news_load-more-button');
const dateFilterButton = document.getElementById('klerk-new-news_filter-date-button');
const viewsFilterButton = document.getElementById('klerk-new-news_filter-views-button');
const ul = document.getElementById('klerk-new-news_news-list');

fillArray();
display(newsToBeDisplayed);
dateFilterButton.focus();

dateFilterButton.addEventListener('click', () => {
    dateFilterButton.focus()
    dateFilterButton.classList.add('klerk-new-news_button-filter-active');

    viewsFilterButton.blur()
    viewsFilterButton.classList.remove('klerk-new-news_button-filter-active');

    newsToBeDisplayed = newsToBeDisplayed.sort(function (a, b) {
        if (a.date.slice(11, 16) > b.date.slice(11, 16)) {
            return -1;
        }
        if (a.date.slice(11, 16) < b.date.slice(11, 16)) {
            return 1;
        }
        return 0;
    });
    ul.innerHTML = "";
    display(newsToBeDisplayed);
});
viewsFilterButton.addEventListener('click', () => {
    viewsFilterButton.focus();
    viewsFilterButton.classList.add('klerk-new-news_button-filter-active');

    dateFilterButton.blur();
    dateFilterButton.classList.remove('klerk-new-news_button-filter-active');

    newsToBeDisplayed = newsToBeDisplayed.sort(function (a, b) {
        return b.numberOfViews - a.numberOfViews;
    });

    ul.innerHTML = "";
    display(newsToBeDisplayed);

    const timeElements = document.querySelectorAll('.klerk-new-news_li-link-time');

    console.log(timeElements);
    for (let i = 0; i < newsToBeDisplayed.length; i++) {
        const viewsElement = document.createElement("span");
        viewsElement.innerHTML = `<span class="klerk-new-news_li-link-time">${newsToBeDisplayed[i].numberOfViews}</span>`;
        timeElements[i].replaceWith(viewsElement);
    }
});
loadButton.addEventListener('click', () => {
    fillArray();
    console.log(newsToBeDisplayed)
    console.log(newsToBeDisplayed.slice(5, newsToBeDisplayed.length))
    display(newsToBeDisplayed.slice(5));
});


function fillArray() {
    for (count; count < times; count++) {
        newsToBeDisplayed.push(newsObjects[count]);
    }
    times += 5;
}
function display (arraySnippet) {
    const displayLi = arraySnippet.forEach(newsPiece => {
        let displayedNewsPiece = newsPiece.title;
        let comments = '';

        if (newsPiece.numberOfComments !== "0") {
            let lastWord = newsPiece.title.split(' ').pop();
            displayedNewsPiece = displayedNewsPiece.slice(0, displayedNewsPiece.length-lastWord.length);
            comments = `<span class="klerk-new-news_comments-container">
                            <a href="#" class="klerk-new-news_li-link">${lastWord}</a>
                            <a href="#" class="klerk-new-news_comments-link">
                                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 .4c4.42 0 8 2.907 8 6.496 0 2.08-1.204 3.76-3.077 4.95l1.538 3.712-4.615-2.475c-.583.11-1.221.31-1.846.31-4.42 0-8-2.908-8-6.497S3.58.4 8 .4z"/>
                                </svg>
                            ${newsPiece.numberOfComments}
                            </a>
                        </span>
            `;
        }
        ul.innerHTML += `<li class="klerk-new-news_news-list-item">
                             <time class="klerk-new-news_li-link-time" datetime="${newsPiece.date}">${newsPiece.date.slice(11, 16)}</time>
                             <div class="klerk-new-news_li-link-block">
                                 <a href="${newsPiece.href}" class="klerk-new-news_li-link">
                                     ${displayedNewsPiece}
                                 </a>
                             ${comments}
                             </div>
                         </li>
        `;

    })
}

// function display () {
//     const displayLi = newsToBeDisplayed.forEach((newsPiece,) => {
//         let displayedNewsPiece = newsPiece.title;
//         let comments = '';
//
//         if (newsPiece.numberOfComments !== "0") {
//             let lastWord = newsPiece.title.split(' ').pop();
//             displayedNewsPiece = displayedNewsPiece.slice(0, displayedNewsPiece.length-lastWord.length);
//             comments = `<span class="klerk-new-news_comments-container">
//                             <a href="#" class="klerk-new-news_li-link">${lastWord}</a>
//                             <a href="#" class="klerk-new-news_comments-link">
//                                 <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M8 .4c4.42 0 8 2.907 8 6.496 0 2.08-1.204 3.76-3.077 4.95l1.538 3.712-4.615-2.475c-.583.11-1.221.31-1.846.31-4.42 0-8-2.908-8-6.497S3.58.4 8 .4z"/>
//                                 </svg>
//                             ${newsPiece.numberOfComments}
//                             </a>
//                         </span>
//             `;
//         }
//         ul.innerHTML += `<li class="klerk-new-news_news-list-item">
//                              <time class="klerk-new-news_li-link-time" datetime="${newsPiece.date}">${newsPiece.date.slice(11, 16)}</time>
//                              <div class="klerk-new-news_li-link-block">
//                                  <a href="${newsPiece.href}" class="klerk-new-news_li-link">
//                                      ${displayedNewsPiece}
//                                  </a>
//                              ${comments}
//                              </div>
//                          </li>
//         `;
//
//     })
// }

// function display (i) {
//     console.log('display i = ' + i);
//     let comments = '';
//
//     for (i; i < times; i++) {
//         if (newsToBeDisplayed[i].numberOfComments !== "0") {
//             let lastWord = newsToBeDisplayed[i].title.split(' ').pop();
//             newsToBeDisplayed[i].title = newsToBeDisplayed[i].title.slice(0, newsToBeDisplayed[i].title.length-lastWord.length);
//             comments = `<span class="klerk-new-news_comments-container">
//                             <a href="#" class="klerk-new-news_li-link">${lastWord}</a>
//                             <a href="#" class="klerk-new-news_comments-link">
//                                 <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M8 .4c4.42 0 8 2.907 8 6.496 0 2.08-1.204 3.76-3.077 4.95l1.538 3.712-4.615-2.475c-.583.11-1.221.31-1.846.31-4.42 0-8-2.908-8-6.497S3.58.4 8 .4z"/>
//                                 </svg>
//                             ${newsToBeDisplayed[i].numberOfComments}
//                             </a>
//                         </span>
//             `;
//         }
//         ul.innerHTML += `<li class="klerk-new-news_news-list-item">
//                              <time class="klerk-new-news_li-link-time" datetime="${newsToBeDisplayed[i].date}">${newsToBeDisplayed[i].date.slice(11, 16)}</time>
//                              <div class="klerk-new-news_li-link-block">
//                                  <a href="${newsToBeDisplayed[i].href}" class="klerk-new-news_li-link">
//                                      ${newsToBeDisplayed[i].title}
//                                  </a>
//                              ${comments}
//                              </div>
//                          </li>
//         `;
//
//     }
// }