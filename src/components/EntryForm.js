import { Form } from 'semantic-ui-react'
import BasicForm from './BasicForm'
import SaveOrCancel from './SaveOrCancel'

function EntryForm(
  { 
    addEntry, 
    description, 
    value, 
    isIncome, 
    setDescription, 
    setValue, 
    setIsIncome 
  }) {
  
  return(
    <Form unstackable>
      <BasicForm 
        description={description}
        value={value}
        isIncome={isIncome}
        setDescription={setDescription}
        setValue={setValue}
        setIsIncome={setIsIncome} 
      />
      <SaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isIncome={isIncome}
      />
    </Form>
  )
}

export default EntryForm