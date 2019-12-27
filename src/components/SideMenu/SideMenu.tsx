import React, { useState, MouseEvent as ReactMouseEvent } from "react";
import { Menu, MenuItemProps, Grid, Segment } from "semantic-ui-react";

const SideMenu: React.FC = () => {
  const [active, setActive] = useState<string | undefined>("stats");

  const handleClick = (
    e: ReactMouseEvent<HTMLAnchorElement, MouseEvent>,
    props: MenuItemProps
  ) => {
    setActive(props.name);
  };

  return (
    <Grid container className="sideMenuNav">
      <Grid.Column width={16}>
        <Menu attached="top" size="large" fluid tabular>
          <Menu.Item
            name="stats"
            active={active === "stats"}
            onClick={handleClick}
          />
          <Menu.Item
            name="logs"
            active={active === "logs"}
            onClick={handleClick}
          />
        </Menu>
        {active === "stats" ? (
          <Segment>This is where we will render the Stats component</Segment>
        ) : null}
        {active === "logs" ? (
          <Segment>This is where we will render the Logs component</Segment>
        ) : null}
      </Grid.Column>
    </Grid>
  );
};

export default SideMenu;
