import { DaprServer } from '@dapr/dapr';
import DogFightActorImpl from './dogfight.impl';

const daprHost = '127.0.0.1';
const daprPort = '3500';
const serverHost = '127.0.0.1';
const serverPort = '3099';

const server = new DaprServer({
  serverHost,
  serverPort,
  clientOptions: {
    daprHost,
    daprPort,
  },
});

export async function registerActor() {
  await server.actor.init();
  server.actor.registerActor(DogFightActorImpl);
  await server.start();
  console.log('Actor registered');
}

const resRegisteredActors = await server.actor.getRegisteredActors();
console.log(`Registered Actors: ${JSON.stringify(resRegisteredActors)}`);
