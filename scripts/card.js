var neusoft={};
neusoft.matchingGames={};
neusoft.matchingGames.cardWidth=80;
neusoft.matchingGames.cardHeight=120;
neusoft.matchingGames.deck=[
    "cardAK","cardAK",
    "cardAQ","cardAQ",
    "cardAJ","cardAJ",
    "cardBK","cardBK",
    "cardBQ","cardBQ",
    "cardBJ","cardBJ"
];



function shuffle()
{
    return Math.random() > 0.5? -1 : 1
}

function selectCard()
{

    var $fcard = $(".card-flipped");

    if($fcard.length>1)
    {
        return;
    }

    $(this).addClass("card-flipped");
    var $fcards = $(".card-flipped");

    if($fcards.length==2)
    {
        setTimeout(function(){
            checkPattern($fcards);
        },700);

    }

}

function checkPattern(cards)
{

    var pattern1 = $(cards[0]).data("pattern");
    var pattern2 = $(cards[1]).data("pattern");


    if(pattern1!=pattern2)
    {
        $(cards).removeClass("card-flipped");
    }
    else
    {
        $(cards).addClass("card-removed").removeClass("card-flipped");
    }
}



$(function(){

   neusoft.matchingGames.deck.sort(shuffle);
    var $card=$(".card");
    for(var i=0; i<11; i++)
    {
        $card.clone().appendTo($("#cards"));
    }

    $(".card").each(function(index){

        $(this).css({
            "left":(neusoft.matchingGames.cardWidth+20)*(index%4)+"px",
            "top":(neusoft.matchingGames.cardHeight+20)*Math.floor(index/4)+"px"
        });
        var pattern = neusoft.matchingGames.deck.pop();

        $(this).data("pattern",pattern);
        $(this).find(".back").addClass(pattern);

        $(this).click(selectCard);


    });
});








