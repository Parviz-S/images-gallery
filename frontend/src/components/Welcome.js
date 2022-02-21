import React from "react";
import { Card, Button } from "react-bootstrap";

const Welcome = () => (
  <Card className="text-center">
    {/* <Card.Header>Featured</Card.Header> */}
    <Card.Body>
      <h1>Images Gallery</h1>
      <Card.Text>
        This is a simple application that searches for images using Unsplash
        API. In order to start enter any serach term in the input field and
        press Search.
      </Card.Text>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
    </Card.Body>
    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
  </Card>
);

export default Welcome;
