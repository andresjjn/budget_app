import { Button } from 'semantic-ui-react'

function SaveOrCancel() {
  return(
  <Button.Group style={{ marginTop: 5 }}>
    <Button>Cancel</Button>
    <Button.Or />
    <Button primary>Apply</Button>
  </Button.Group>  
  )
}

export default SaveOrCancel