const neilQuotes = [
    "I have to at least try",
    "For the choice was between submission and breaking, although he didn't know if he could pull himself together again, he wasn't that strong, and he never had been",
    "Thank you... you were amazing",
    "I'm fine",
    "22 cities, Neil said, without specifying that they are located in 16 different countries",
    "It's always 'yes' with you" ,
    "You know, I get it",
    "It's not the world that's cruel, but people",
    "Ich bin dumm, hast du es vergessen?",
    "Among the strong people I know, there are quite a few women",
    "Victory is victory no matter what the cost",
    "Calculate the price of your fear and if it is too high, fight it",
    "Isn't it better to die fighting than not to fight at all?",
    "Die free or broken, the choice is yours",
    "Ich hasse dich",
    "Who was killed there?",
    "Home.. Welcome home, Neil",
    "Poof, and he was gone. Impressive, isn't it? How easy it is for these monsters to die in the end",
    "Nathaniel wasn't like everyone else"
];

const div = document.getElementById("d");
let i = 0;
function neilWords(){
    $("#d").fadeOut(4000, function(){
        $(this).text(neilQuotes[i]).fadeIn(4000);
        i = (i + 1) % neilQuotes.length;
    });
};
setInterval(neilWords, 6000);

neilWords();


$("#btn1").click(function(){
    $("body").css("background-color", "#d9d9d9");
    $("body").css("color", "#e67300");
});

$("#btn2").click(function(){
    $("body").css("background-color", "#0d0d0d");
    $("body").css("color", "#990000");
});


$("#btn3").click(function(){
    $("body").css("background-color", "#e6ac00");
    $("body").css("color", "#cc2900");
});