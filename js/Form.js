class Form{
    constructor(){       
    }
    display(){
        var title = createElement("h2");
        var input = createInput("name");
        var button = createButton("play");
        var greetings = createElement("h3");
        title.html("Car Racing Game");
        title.position(130,0);
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            playerCount = playerCount + 1;
            player.updateCount(playerCount);
            var name = input.value();
            player.update(name);
            greetings.html("Hello " + name);
            greetings.position(130,160);
        })
    }
}