import {Distributor} from './distributor';

export interface State
{
    insertCoin():void;
    ejectCoin():void;
    turnButton():void;
    pickupItem():void;
    getTitle() : string;
    getImageUrl() : string;
}

export class StateNoCoin implements State
{
    constructor(private distributor : Distributor)
    {
    }
    
    // a coin is inserted, change the state to State 'Coin'
    insertCoin()
    {
        console.log("no coin: Insert Coin");
        this.distributor.setState(this.distributor.getStateCoin());
    }

    ejectCoin()
    {
        console.log("no coin: no coin");
    }

    turnButton()
    {
        console.log("no coin: you turned the button but no Coin");
    }

    pickupItem()
    {
        console.log('no coin: no item');
    }

    getTitle()
    {
        return "State No Coin";
    }

    getImageUrl()
    {
        return '/assets/insert-coin-to-continue.png';
    }
}

export class StateCoin implements State
{
    constructor(private distributor : Distributor)
    {
    }

    insertCoin()
    {
        console.log("coin: you cannot add more coin");
    }

    // the user want the coin to be ejected. change state to State 'no coin' 
    ejectCoin()
    {
        console.log("coin: eject coin");
        this.distributor.setState(this.distributor.getStateNoCoin());
    }

    // the user validates the purchase so we go to State 'Sold' 
    turnButton()
    {
        console.log("coin: you turned the button");
        this.distributor.setState(this.distributor.getStateSold());
    }

    pickupItem()
    {
        console.log('coin: no item');
    }

    getTitle()
    {
        return "State Coin";
    }

    getImageUrl()
    {
        return '/assets/green-button.png';
    }
}

export class StateSold implements State
{
    private currentImage : string;
    constructor(private distributor : Distributor)
    {
        this.currentImage = this.getNextImage();
    }

    insertCoin()
    {
        console.log("sold: you cannot add more coin");
    }

    ejectCoin()
    {
        console.log("sold: no coin");
    }

    turnButton()
    {
        console.log("sold: you turned the button");
    }

    // the user picked up his purchase. So back to the state 'no coin'
    pickupItem()
    {
        console.log('sold: pickup item');
        this.distributor.setState(this.distributor.getStateNoCoin());
        // we get the next item for next time
        this.currentImage = this.getNextImage();
    }

    getTitle()
    {
        return "State Sold";
    }

    // get a random image for next time
    getNextImage() : string 
    {
        let random = Math.round(Math.random() * 2);
        switch(random)
        {
            case 0:
                return '/assets/heroes/cap-america.jpg';
            case 1:
                return '/assets/heroes/hulk.jpg';
            case 2:
                return '/assets/heroes/ironman.jpg';
            default:
                return '/assets/heroes/ironman.jpg';
        }
    }

    getImageUrl()
    {
        return this.currentImage;
    }
}