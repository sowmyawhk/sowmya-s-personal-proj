import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const SpotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Address" />
        <TextField label="Floor" source="floor" />
        <TextField label="ID" source="id" />
        <TextField label="spot_price" source="spotPrice" />
        <DateField source="updatedAt" label="spot_size" />
      </SimpleShowLayout>
    </Show>
  );
};
