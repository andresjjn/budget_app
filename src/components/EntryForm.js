import { Form } from 'semantic-ui-react'
import SaveOrCancel from './SaveOrCancel'

function EntryForm() {
  return(
    <Form unstackable>
      <Form.Group>
        <Form.Input 
          placeholder='New thing'
          width={12}
          label='Description'
          icon='tags'
        />
        <Form.Input
          label='Value'
          width={4}
          placeholder='100.00'
          icon='dollar'
          type='number'
          iconPosition='left'
        />
      </Form.Group>
      <SaveOrCancel />
    </Form>
  )
}

export default EntryForm