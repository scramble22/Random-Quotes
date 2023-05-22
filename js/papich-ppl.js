var quotes = [
      "<strong>Дядя Богдан</strong><br>культовый, но мифический персонаж. Появился в первые шесть месяцев стримов Папича. В один из моментов ему работяга кинул донат з рофлом про дядю Богдана и ключ на 9.",
      "<strong>МИКРОЧЕЛИК</strong><br>папич так называет все мелкое и то, что похоже на ребёнка.",
      "<strong>Падай трон,падай, упади..</strong><br>победный папич",
      "<strong>Добрый почанток.</strong><br>фраза из его любимых червей, которых он до сих пор играет и устраивает турниры. Повторяет ее когда слышит и тогда, когда у него все налаживается в игре з самого начала.",
      "<strong>АХАХАХАХА ЛЕГЧАЙШАЯ, ДЛЯ КОГО? ДЛЯ ВЕЛИЧАЙШЕГО!</strong><br>Легенда",
      "<strong>Крабочел</strong><br>Папич любит играть в казино (на лудоманычах). И в некоторое время назад он начал играть в Монополию, там человек крутит колесо. Среди тех был мужик, который очень фартово крутит то колесо",
      "<strong>Помойка 2</strong><br>Дота. Для этого слова он придумал отдельный смайлик.",
      "<strong>ЛЕЖАТЬ + СОСАТЬ</strong><br>Папаня в рассвете сил.",
      "<strong>Опа, Ф ку</strong><br>Обычно Папич так здоровается.",
      "<strong>Рофланпоминки</strong><br>символично, что сразу за Отлетаешь очередняра. Когда все очень плохо.",
      "<strong>Надо доту удалять. В эту игру играть - себя не уважать. Просто игра для ублюдков.</strong><br>xd!",
    ];

var photos = [
        "../imgs/papich-ppl/1.png",
        "../imgs/papich-ppl/2.png",
        "../imgs/papich-ppl/3.png",
        "../imgs/papich-ppl/4.png",
        "../imgs/papich-ppl/5.png",
        "../imgs/papich-ppl/6.png",
        "../imgs/papich-ppl/7.png",
        "../imgs/papich-ppl/8.png",
        "../imgs/papich-ppl/9.png",
        "../imgs/papich-ppl/10.png",
        "../imgs/papich-ppl/11.png",
    ];

document.getElementById("changeQuote").addEventListener("click", function() {
    document.getElementById("test").innerHTML = "";   
    a = document.getElementById("photo");
    a.setAttribute("src", "");  
    var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
    var p = photos[ Math.floor( Math.random() * photos.length ) ];
    setTimeout(() => {
        document.getElementById("test").innerHTML = q; 
        a = document.getElementById("photo");
        a.setAttribute("src", p);   
    }, 1500); 
});