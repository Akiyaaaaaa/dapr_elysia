export default interface LandingPlaneInterface {
  setLandingStatus(status: string): Promise<void>;
  getLandingStatus(): Promise<string>;
}
