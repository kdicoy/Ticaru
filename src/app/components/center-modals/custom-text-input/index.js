import React, { PureComponent } from "react";
import { Form, Text } from "informed";
const validate = value => {
  return !value || value.length < 5
    ? "Field must be at least five characters"
    : null;
};

const CustomTextInput = () => {
  return (
    <Form id="state-form">
      {({ formState }) => (
        <div class="centered">
          <div class="group">
            <Text field="key" id="name" validate={validate} />

            <label for="name">Name</label>
            <div class="bar" />
          </div>
          <code>{JSON.stringify(formState)}</code>
          <button type="submit">Submit</button>
        </div>
      )}
    </Form>
  );
};

export default CustomTextInput;
