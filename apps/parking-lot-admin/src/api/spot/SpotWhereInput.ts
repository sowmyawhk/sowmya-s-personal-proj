import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SpotWhereInput = {
  floor?: StringNullableFilter;
  id?: StringFilter;
  spotPrice?: FloatNullableFilter;
};
