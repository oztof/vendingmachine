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

    ejectCoin()
    {
        console.log("coin: eject coin");
        this.distributor.setState(this.distributor.getStateNoCoin());
    }

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

    pickupItem()
    {
        console.log('sold: pickup item');
        this.distributor.setState(this.distributor.getStateNoCoin());
        this.currentImage = this.getNextImage();
    }

    getTitle()
    {
        return "State Sold";
    }

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