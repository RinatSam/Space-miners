import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ShipTitle } from "../ship/ShipTitle";
import { SquadronTitle } from "../squadron/SquadronTitle";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="level" source="level" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="experience" source="experience" />
        <NumberInput step={1} label="currency" source="currency" />
        <div />
        <ReferenceArrayInput
          source="ships"
          reference="Ship"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShipTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="squadrons"
          reference="Squadron"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SquadronTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
