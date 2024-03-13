import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "address";

export const UserTitle = (record: TUser): string => {
  return record.address?.toString() || String(record.id);
};
