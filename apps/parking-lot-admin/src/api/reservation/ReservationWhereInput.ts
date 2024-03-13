import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReservationWhereInput = {
  date?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  endTime?: StringNullableFilter;
  id?: StringFilter;
  spotId?: StringNullableFilter;
  startTime?: StringNullableFilter;
  vehicleId?: StringNullableFilter;
};
