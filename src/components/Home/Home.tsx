import React from "react";
import { observer } from "mobx-react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
};

export default observer(Home);
