import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header as SHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../components/Header";

export default function LoginUI({
  form: { form, onChange, loginValidForm, onSubmit, error, loading },
}) {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column>
          <SHeader>Login here</SHeader>
          <Segment>
            <Form>
              {error && <Message content={error?.detail} negative />}
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button
                onClick={onSubmit}
                loading={loading}
                disabled={loginValidForm || loading}
                fluid
                primary
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
