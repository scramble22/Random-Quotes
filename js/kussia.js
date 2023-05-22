var photos = [
      "../imgs/funny-kussia/1.png",
      "../imgs/funny-kussia/2.png",
      "../imgs/funny-kussia/3.png",
      "../imgs/funny-kussia/4.png",
      "../imgs/funny-kussia/5.png",
      "../imgs/funny-kussia/6.png",
      "../imgs/funny-kussia/7.png",
      "../imgs/funny-kussia/8.png",
      "../imgs/funny-kussia/9.png",
      "../imgs/funny-kussia/10.png",
      "../imgs/funny-kussia/11.png",
      "../imgs/funny-kussia/12.png",
      "../imgs/funny-kussia/13.png",
      "../imgs/funny-kussia/14.png",
      "../imgs/funny-kussia/15.png",
      "../imgs/funny-kussia/16.png",
      "../imgs/funny-kussia/17.png",
      "../imgs/funny-kussia/18.png",
      "../imgs/funny-kussia/19.png",
      "../imgs/funny-kussia/20.png",
      "../imgs/funny-kussia/21.png",
      "../imgs/funny-kussia/22.png",
      "../imgs/funny-kussia/23.png",
      "../imgs/funny-kussia/24.png",
    ];

document.getElementById("changeQuote").addEventListener("click", function() { 
    a = document.getElementById("photo");
    a.setAttribute("src", "");  
    var p = photos[ Math.floor( Math.random() * photos.length ) ];
    setTimeout(() => {
        a = document.getElementById("photo");
        a.setAttribute("src", p);   
    }, 1500); 
});

//quotes.push("smth"); после введения чего-то пользователя это надо добавить
