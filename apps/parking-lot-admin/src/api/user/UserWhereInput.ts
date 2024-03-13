import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  booking?: StringNullableFilter;
  id?: StringFilter;
  vehicleId?: StringNullableFilter;
};
