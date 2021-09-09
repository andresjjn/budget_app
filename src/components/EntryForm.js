import { Fragment } from 'react/cjs/react.production.min'
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
    <Fragment>
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
      />
    </Fragment>
  )
}

export default EntryForm