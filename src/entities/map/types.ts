export type Config = {
  id: string;
  d: string;
}[];

export type Zoom = '1' | '2';

export type MapState = {
  image: string;
  zoom: Zoom;
};