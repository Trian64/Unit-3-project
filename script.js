let imageOne = document.querySelector(".hidden");
let box = document.querySelector(".container");
let button2 = document.querySelector(".btntwo");
let text2 = document.querySelector('.text2');
let button1 = document.querySelector(".btnone");
let text1 = document.querySelector(".text1");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let buttons2 = document.getElementsByClassName("buttons2");
let buttons = document.querySelector(".buttons")
let htext = document.getElementById ("text")
let text3 = document.querySelector('.text3')
let text4 = document.querySelector('.text4')
button2.addEventListener("click", function()
{ buttons.remove ();
    
htext.innerHTML = "You found a sword in the clearing"
document.body.style.backgroundImage = "url('https://static1.srcdn.com/wordpress/wp-content/uploads/2021/04/The-Legend-of-Zelda-Master-Sword-in-its-Pedestal.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5')";
buttons2[0].removeAttribute("hidden");
});

button1.addEventListener("click", function() {
    box.remove();
    text1.innerHTML = "You went home and watched netflix alone"
    document.body.style.backgroundImage = "url('https://imageio.forbes.com/blogs-images/jaymcgregor/files/2014/07/11243566003_e50ae60bad_h.jpg?format=jpg&width=1440')";
    });

    button3.addEventListener("click", function() {
        box.remove();
        text3.innerHTML = "You continued on your walk"
        document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/450px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg')";
    });
    
    button4.addEventListener("click", function() {
        box.remove();
        text4.innerHTML = "You picked up the really cool sword"
        document.body.style.backgroundImage = "url('https://www.zeldadungeon.net/wp-content/uploads/2015/01/Toon-Link-Master-Sword-300x168.jpg')";
    });
    
