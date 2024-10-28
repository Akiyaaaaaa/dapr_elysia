import { Elysia } from 'elysia';
import { registerActor } from './actors/dogfight/dogfight.actor.init';
import { dogBark } from './actors/dogfight/dogfight.service';

(async () => {
  const app = new Elysia();

  app.get('/actors', () => {
    try {
      console.log('getting actors ' + Date.now());
      return dogBark();
    } catch (error) {
      console.log('error getting actors' + Date.now() + '' + error);
    }
  });

  await registerActor();
  app.listen(3000);

  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
})();
