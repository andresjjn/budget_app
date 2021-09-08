import { Form } from 'semantic-ui-react'


function BasicForm( { description, value, setDescription, setValue, setIsIncome }){

  const options = [
    { key: 1, text: 'Income', value: true },
    { key: 2, text: 'Expense', value: false },
  ]

  return(
    <Form unstackable>
      <Form.Group>
        <Form.Input 
          placeholder='New thing'
          width={10}
          label='Description'
          icon='tags'
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <Form.Input
          label='Value'
          width={3}
          placeholder='100.00'
          icon='dollar'
          type='number'
          iconPosition='left'
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <Form.Dropdown
          selection
          placeholder='Income or expense'
          label='Type of entry'
          direction='right'
          options={options}
          onChange={() => setIsIncome((oldValue) => !oldValue) }
        />
      </Form.Group>
    </Form>
  )
}

export default BasicForm