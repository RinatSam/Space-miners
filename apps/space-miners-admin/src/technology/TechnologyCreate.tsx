import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TechnologyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="cost" source="cost" />
        <NumberInput
          step={1}
          label="playerLevelRequirement"
          source="playerLevelRequirement"
        />
      </SimpleForm>
    </Create>
  );
};
