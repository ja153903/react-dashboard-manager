import React, { useState, ChangeEvent, FormEvent } from "react";
import { observer } from "mobx-react";
import {
  Form,
  Message,
  Grid,
  GridColumn,
  Segment,
  Header,
  Image
} from "semantic-ui-react";
import { History } from "history";
import { withRouter } from "react-router";

import { useGlobalStore } from "../../hooks/useStores";

type AuthorizationProps = {
  history: History;
};

const Authorization: React.FC<AuthorizationProps> = ({ history }) => {
  const { authorizationStore } = useGlobalStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const clearInputFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authorizationStore.validatePayload({
      email,
      password
    });

    clearInputFields();

    if (authorizationStore.successfulAuth) {
      history?.push("/home");
    }
  };

  const renderSuccessfulAuthorizationMessage = () => {
    if (authorizationStore.successfulAuth) {
      return (
        <Message
          success
          header="Successful Authorization"
          content="You will be redirected to the dashboard in 5 seconds"
        />
      );
    }

    return null;
  };

  const renderFailedAuthorizationMessage = () => {
    if (authorizationStore.failedAuth) {
      return (
        <Message
          error
          header="Failed Authorization"
          content="You should walk away from this page"
        />
      );
    }
  };

  return (
    <div className="authorization">
      <Grid
        textAlign="center"
        verticalAlign="middle"
        style={{ height: "50vh" }}
      >
        <GridColumn style={{ maxWidth: 450 }}>
          <Header color="teal">
            <Image src="logo192.png" />
            No Trespassing. Beware of Dog
          </Header>
          <Form
            onSubmit={handleSubmit}
            success={authorizationStore.successfulAuth}
            error={authorizationStore.failedAuth}
            size="large"
          >
            <Segment stacked>
              <Form.Input
                required
                icon="user"
                iconPosition="left"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <Form.Input
                required
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePassword}
              />
              {renderSuccessfulAuthorizationMessage()}
              {renderFailedAuthorizationMessage()}
              <Form.Button color="teal" type="submit" fluid>
                Sign in
              </Form.Button>
            </Segment>
          </Form>
        </GridColumn>
      </Grid>
    </div>
  );
};

export default observer(withRouter(Authorization));
