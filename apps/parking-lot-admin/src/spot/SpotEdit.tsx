import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SpotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Floor" source="floor" />
        <NumberInput label="spot_price" source="spotPrice" />
      </SimpleForm>
    </Edit>
  );
};
