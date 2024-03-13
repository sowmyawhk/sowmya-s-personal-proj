import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Bookings" source="booking" />
        <PasswordInput label="Password" source="Password" />
        <TextInput label="Vehicle_number" source="vehicleId" />
      </SimpleForm>
    </Edit>
  );
};
