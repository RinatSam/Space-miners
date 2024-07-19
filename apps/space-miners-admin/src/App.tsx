import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ShipList } from "./ship/ShipList";
import { ShipCreate } from "./ship/ShipCreate";
import { ShipEdit } from "./ship/ShipEdit";
import { ShipShow } from "./ship/ShipShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { TechnologyList } from "./technology/TechnologyList";
import { TechnologyCreate } from "./technology/TechnologyCreate";
import { TechnologyEdit } from "./technology/TechnologyEdit";
import { TechnologyShow } from "./technology/TechnologyShow";
import { SquadronList } from "./squadron/SquadronList";
import { SquadronCreate } from "./squadron/SquadronCreate";
import { SquadronEdit } from "./squadron/SquadronEdit";
import { SquadronShow } from "./squadron/SquadronShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Space Miners"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ship"
          list={ShipList}
          edit={ShipEdit}
          create={ShipCreate}
          show={ShipShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Technology"
          list={TechnologyList}
          edit={TechnologyEdit}
          create={TechnologyCreate}
          show={TechnologyShow}
        />
        <Resource
          name="Squadron"
          list={SquadronList}
          edit={SquadronEdit}
          create={SquadronCreate}
          show={SquadronShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
