import { Button } from 'semantic-ui-react'

function SaveOrCancel( {addEntry, description, value, isIncome} ) {
  return(
  <Button.Group style={{ marginTop: 5 }}>
    <Button>Cancel</Button>
    <Button.Or />
    <Button 
      primary
      onClick={() => {
        if (description === '' || isIncome === null || value === '') {
          window.alert('Verify the data of new transaction');
          return
        }
        addEntry(description, value, isIncome)
      }}
    >Create</Button>
  </Button.Group>  
  )
}

export default SaveOrCancel