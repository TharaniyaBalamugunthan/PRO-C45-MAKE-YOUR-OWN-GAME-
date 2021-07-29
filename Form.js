class Form {
    constructor(){
        this.button = createButton('PLAY');
        this.title = createElement('h2');
    }

    hide(){
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Ghost Hunt");
        this.title.position(400,50);
        this.title.style('font-size','70px');
        this.title.style('color','black');
        this.button.positon(500,400);
        this.button.style('width','200px');
        this.button.style('height','40px');
        this.button.style('background','black');
        
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            playerCount+=1;
            player.index=playerCount;
            player.updateCount(playerCount);
        })
    }
}