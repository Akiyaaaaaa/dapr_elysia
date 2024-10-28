import { ActorId, ActorProxyBuilder, DaprClient } from '@dapr/dapr';
import DogFightInterface from './dogfitgh.interface';
import DogFightActorImpl from './dogfight.impl';

export async function dogBark(): Promise<string> {
  const daprHost = '127.0.0.1';
  const daprPort = '3500';

  try {
    const client = new DaprClient({ daprHost, daprPort });

    const builder = new ActorProxyBuilder<DogFightInterface>(
      DogFightActorImpl,
      client
    );

    const actor = builder.build(new ActorId('my-actor'));
    await actor.dogBark();
    console.log('Success when calling dogBark at  ' + Date.now());
    return 'Success when calling dogBark at  ' + Date.now();
  } catch (error) {
    console.log(
      'Error when calling dogBark at  ' + Date.now() + ' with error ' + error
    );
    return (
      'Error when calling dogBark at  ' + Date.now() + ' with error ' + error
    );
  }
}
