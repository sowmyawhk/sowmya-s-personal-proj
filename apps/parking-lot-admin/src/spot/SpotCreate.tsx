import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SpotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Floor" source="floor" />
        <NumberInput label="spot_price" source="spotPrice" />
      </SimpleForm>
    </Create>
  );
};
