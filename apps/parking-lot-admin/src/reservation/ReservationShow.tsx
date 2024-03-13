import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="start_date" source="date" />
        <TextField label="end_date" source="endDate" />
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="spot_id" source="spotId" />
        <TextField label="start_time" source="startTime" />
        <DateField source="updatedAt" label="User_id" />
        <TextField label="Vehicle_id" source="vehicleId" />
      </SimpleShowLayout>
    </Show>
  );
};
