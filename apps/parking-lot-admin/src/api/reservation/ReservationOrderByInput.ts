import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  endDate?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  spotId?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
