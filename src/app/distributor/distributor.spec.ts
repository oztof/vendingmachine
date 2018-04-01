
import { Distributor } from './distributor';

describe('Distributor', () => {
  let distributor: Distributor;

  beforeEach(() => {
    distributor = new Distributor();
  });
  
  it('should have initial state to "no coin"', () => {
    expect(distributor.getCurrentStateTitle()).toBe("State No Coin");
  });

  it('should go to the state "coin" if a coin is inserted', () => {
    distributor.insertCoin();
    expect(distributor.getCurrentStateTitle()).toBe("State Coin");
  });
});
