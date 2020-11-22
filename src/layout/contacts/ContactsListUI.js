import * as React from "react";
import Header from "../../components/Header";
import { Placeholder, List, Image, Container } from "semantic-ui-react";

export default function ContactsListUI({
  contacts: {
    contacts: { loading, error, data },
  },
}) {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {loading && (
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        )}
        <List>
          {data.length &&
            data.map((contact) => (
              <List.Item key={contact.id}>
                <List.Content floated="right">
                  <span>{contact.phone_number}</span>
                </List.Content>
                <List.Content style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    circular
                    width={45}
                    height={45}
                    src={contact.contact_picture}
                  />
                  <span>
                    {contact.first_name} {contact.last_name}
                  </span>
                </List.Content>
              </List.Item>
            ))}
        </List>
      </Container>
    </React.Fragment>
  );
}
