import { SortOrder } from "../../util/SortOrder";

export type SpotOrderByInput = {
  createdAt?: SortOrder;
  floor?: SortOrder;
  id?: SortOrder;
  spotPrice?: SortOrder;
  updatedAt?: SortOrder;
};
