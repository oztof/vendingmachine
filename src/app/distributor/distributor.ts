import {State, StateCoin, StateNoCoin, StateSold} from './State'

export class Distributor
{
    stateCurrent : State;
    stateNoCoin : State;
    stateCoin : State;
    stateSold: State;

    nbItems : number = 0;
    constructor()
    {
        this.stateNoCoin = new StateNoCoin(this);
        this.stateCoin = new StateCoin(this); 
        this.stateSold = new StateSold(this);
        this.stateCurrent = this.stateNoCoin;
    }

    insertCoin() : void
    {
        this.stateCurrent.insertCoin();
    }

    ejectCoin() : void
    {
        this.stateCurrent.ejectCoin();
    }

    turnButton() : void
    {
        this.stateCurrent.turnButton();
    }

    pickupItem() : void
    {
        this.stateCurrent.pickupItem();
    }

    setState(newState:State) : void {
        this.stateCurrent = newState;
    }

    getStateNoCoin() : State
    {
        return this.stateNoCoin;
    }

    getStateCoin() : State
    {
        return this.stateCoin;
    }

    getStateSold() : State
    {
        return this.stateSold;
    }

    getCurrentStateTitle() : string {
        return this.stateCurrent.getTitle();
    }

    getCurrentStateImageUrl() : string {
        return this.stateCurrent.getImageUrl();
    }
}