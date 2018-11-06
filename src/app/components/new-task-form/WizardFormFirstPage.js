import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate } from '../../helpers'
import renderField from './renderField'
import { FormField, TextInput } from 'grommet'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <FormField label={label} htmlFor="text-input" error={touched && error}>
    <TextInput id="text-input" placeholder={label} {...input} {...custom} />
  </FormField>
)
const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="goal" type="text" component={renderTextField} label="What is your goal?" />
      <Field name="lastName" type="text" component={renderTextField} label="Last Name" />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}



export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)
