export type RegionData = {
  id: number;
  d: string;
};

export type Zoom = '1' | '2';

export type MapState = {
  activeRegion: ModuleId;
  image: SrcString;
  zoom: Zoom;
};
