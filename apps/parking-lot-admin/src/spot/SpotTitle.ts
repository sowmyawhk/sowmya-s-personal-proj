import { Spot as TSpot } from "../api/spot/Spot";

export const SPOT_TITLE_FIELD = "floor";

export const SpotTitle = (record: TSpot): string => {
  return record.floor?.toString() || String(record.id);
};
