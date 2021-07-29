class Player{
    constructor(){
        this.index = null;
        this.score = 0;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        }
            )
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    updateScore(){
        var playerIndex = "player/player"+this.index;
        database.ref(playerIndex).set({
            score:this.score
        })
    }
    

        
    
}