import { Button, Segment, Icon } from 'semantic-ui-react'

function PrintButton() {
  return(
  <Segment textAlign='center' style={{ marginTop: 40 }}>  
    <Button
      basic color='red'
      onClick={() => window.print()}
      icon
      labelPosition='right' 
    >Print all
      <Icon
        color='red'
        name='print'
      />
    </Button>
  </Segment>
  )
}

export default PrintButton;
