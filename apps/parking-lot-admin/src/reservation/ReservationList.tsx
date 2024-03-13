import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReservationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reservations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="start_date" source="date" />
        <TextField label="end_date" source="endDate" />
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="spot_id" source="spotId" />
        <TextField label="start_time" source="startTime" />
        <DateField source="updatedAt" label="User_id" />
        <TextField label="Vehicle_id" source="vehicleId" />
      </Datagrid>
    </List>
  );
};
