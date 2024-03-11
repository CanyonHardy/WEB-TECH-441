var nutSelector = "#nut";
var allNuts = new Array();
class NutInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var nut = new NutInfo("#nut", "../images/mariposa.jpg");
    allNuts.push(nut);

}
$(document).ready(function(){
    initializeArray();
    console.log(allNuts.length);
    console.log(allNuts[0].toString());
    console.log(allNuts[0].theSelector);
    console.log(allNuts[0].theImagePath);
    
    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allNuts[0].theSelector).attr("src", allNuts[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").toggle();
        setInterval(moveSquare, 1000);

        $("#third").toggle();
           setInterval(moveSquare, 1000);
        
        $(allNuts[0].theSelector).fadeOut().fadeIn();
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:1800}).animate({left:0}).animate({top:0});
}
