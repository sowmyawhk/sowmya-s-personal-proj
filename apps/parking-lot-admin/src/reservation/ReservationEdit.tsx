import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="start_date" source="date" />
        <DateTimeInput label="end_date" source="endDate" />
        <TextInput label="end_time" source="endTime" />
        <TextInput label="spot_id" source="spotId" />
        <TextInput label="start_time" source="startTime" />
        <TextInput label="Vehicle_id" source="vehicleId" />
      </SimpleForm>
    </Edit>
  );
};
