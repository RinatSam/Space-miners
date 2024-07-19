import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PlayerTitle } from "../player/PlayerTitle";

export const ShipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="speed" source="speed" />
        <NumberInput step={1} label="cargoCapacity" source="cargoCapacity" />
        <NumberInput step={1} label="power" source="power" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
