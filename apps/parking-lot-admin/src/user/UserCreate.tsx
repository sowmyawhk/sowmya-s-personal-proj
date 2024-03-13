import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Bookings" source="booking" />
        <PasswordInput label="Password" source="Password" />
        <TextInput label="Vehicle_number" source="vehicleId" />
      </SimpleForm>
    </Create>
  );
};
