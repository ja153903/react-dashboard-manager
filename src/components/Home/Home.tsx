import React from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router";
import { History } from "history";

import { useGlobalStore } from "../../hooks/useStores";
import SideMenu from "../SideMenu";

type HomeProps = {
  history: History;
};

const Home: React.FC<HomeProps> = ({ history }) => {
  const { authorizationStore } = useGlobalStore();

  if (authorizationStore.userToken === null) {
    history.push("/");
  }

  return (
    <div>
      <SideMenu />
    </div>
  );
};

export default observer(withRouter(Home));
