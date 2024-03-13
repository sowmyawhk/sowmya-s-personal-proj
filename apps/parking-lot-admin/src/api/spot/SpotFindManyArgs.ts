import { SpotWhereInput } from "./SpotWhereInput";
import { SpotOrderByInput } from "./SpotOrderByInput";

export type SpotFindManyArgs = {
  where?: SpotWhereInput;
  orderBy?: Array<SpotOrderByInput>;
  skip?: number;
  take?: number;
};
