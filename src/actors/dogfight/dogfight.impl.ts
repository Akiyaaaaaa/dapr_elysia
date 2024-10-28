// parking-sensor-actor.ts
import { AbstractActor } from '@dapr/dapr';
import DogFightInterface from './dogfitgh.interface';

export default class DogFightActorImpl
  extends AbstractActor
  implements DogFightInterface
{
  async dogBite(): Promise<void> {
    console.log('Dog Biting!!!!!');
    await this.getStateManager().setState('occupied', true);
    await this.getStateManager().saveState();
  }
  async dogBark(): Promise<void> {
    console.log('Dog Barking!!!!!');
    await this.getStateManager().setState('occupied', true);
    await this.getStateManager().saveState();
  }

  async onActivate(): Promise<void> {
    console.log('Actor activated.');
  }
}
