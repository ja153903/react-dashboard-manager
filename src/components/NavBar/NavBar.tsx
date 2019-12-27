import React from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { Menu, Button, Icon, Header } from "semantic-ui-react";
import { History } from "history";

import { useGlobalStore } from "../../hooks/useStores";

type NavBarProps = {
  children?: React.ReactNode;
  history: History;
};

const NavBar: React.FC<NavBarProps> = ({ children, history }) => {
  const { authorizationStore } = useGlobalStore();

  const handleLogout = () => {
    authorizationStore.logout();
    history.push("/");
  };

  const renderLogout = () => {
    return authorizationStore.successfulAuth ? (
      <Menu.Item>
        <Button color="teal" onClick={handleLogout}>
          <Icon name="log out" />
          Log Out
        </Button>
      </Menu.Item>
    ) : null;
  };

  return (
    <div className="navbar">
      <Menu>
        <Menu.Item>
          <Header as="h2" color="teal">
            <Icon name="dashboard" />
            Jaime's Bouldering Dashboard
          </Header>
        </Menu.Item>
        <Menu.Menu position="right">
          {renderLogout()}
          <Menu.Item>
            <Icon name="setting" /> Setting
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {children}
    </div>
  );
};

export default observer(withRouter(NavBar));
