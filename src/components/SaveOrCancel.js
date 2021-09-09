import { Button } from 'semantic-ui-react'

function SaveOrCancel( {addEntry} ) {
  return(
  <Button.Group style={{ marginTop: 5 }}>
    <Button>Cancel</Button>
    <Button.Or />
    <Button 
      primary
      onClick={() => {
        addEntry()
      }}
    >Create</Button>
  </Button.Group>  
  )
}

export default SaveOrCancel