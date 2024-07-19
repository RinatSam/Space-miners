import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TechnologyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
