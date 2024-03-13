import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SpotList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Spots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Address" />
        <TextField label="Floor" source="floor" />
        <TextField label="ID" source="id" />
        <TextField label="spot_price" source="spotPrice" />
        <DateField source="updatedAt" label="spot_size" />
      </Datagrid>
    </List>
  );
};
