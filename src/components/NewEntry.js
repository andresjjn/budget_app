import { Segment, Grid, Icon} from 'semantic-ui-react';

function NewEntry(props) {
  const { income, description, value } = props;
  return(
    <Segment color={income ? 'green' : 'red'}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'> { description } </Grid.Column>
          <Grid.Column width={3} textAlign='right'> { value } </Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered/>
            <Icon name='trash' bordered/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default NewEntry