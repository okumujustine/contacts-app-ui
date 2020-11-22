import React from "react";
import Header from "../../components/Header";
import {
  Grid,
  Header as SemanticHeader,
  Card,
  Form,
  Button,
  Select,
} from "semantic-ui-react";

import "./contactsLayout.css";
import countries from "../../utils/countries";

export default function Create({ onChange, formInValid, onSubmit, loading }) {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>Create Contact</SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <div className="contactpicture">
                  <span>chose picture</span>
                </div>
                <Form.Group widths={2}>
                  <Form.Input
                    name="firstName"
                    onChange={onChange}
                    label="Last Name"
                    placeholder="First Name"
                  />
                  <Form.Input
                    name="lastName"
                    onChange={onChange}
                    label="Last Name"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    name="countryCode"
                    onChange={onChange}
                    control={Select}
                    options={countries}
                    label="Country"
                    placeholder="Country"
                  />
                  <Form.Input
                    name="phoneNumber"
                    onChange={onChange}
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <Form.Checkbox
                  name="isFavorite"
                  onChange={(e, data) => {
                    onChange(e, { name: "isFavorite", value: data.checked });
                  }}
                  label="Add Favorite"
                />
                <Button
                  disabled={formInValid || loading}
                  onClick={onSubmit}
                  primary
                  type="submit"
                  loading={loading}
                >
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}
