import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Login({ setAuthenticate }) {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Form onSubmit={loginUser} className="loginForm">
      <FormGroup>
        <Label for="exampleAddress">Email address</Label>
        <Input id="exampleAddress" name="address" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="exampleAddress2"
          name="address2"
          placeholder="password"
          type="password"
        />
      </FormGroup>

      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
