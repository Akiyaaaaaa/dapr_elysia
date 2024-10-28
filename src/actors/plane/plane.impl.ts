// import { AbstractActor } from '@dapr/dapr';
// import LandingPlaneInterface from './plane.interface';

// export default class LandingPlaneImpl
//   extends AbstractActor
//   implements LandingPlaneInterface
// {
//   private landingStatus: string = 'not landed';

//   async setLandingStatus(status: string): Promise<void> {
//     this.landingStatus = status;
//     await this.getStateManager().setState('landingStatus', status);
//     await this.getStateManager().saveState();
//   }

//   async getLandingStatus(): Promise<string> {
//     const status = await this.getStateManager().getState('landingStatus');
//     return status || this.landingStatus;
//   }
// }
