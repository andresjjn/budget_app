import { Fragment } from 'react/cjs/react.production.min';
import { Segment, Grid, Icon} from 'semantic-ui-react';

function NewEntry( { id, description, value, isIncome, deleteEntry, editEntry} ) {

  return(
    <Fragment>
      <Segment color={isIncome ? 'green' : 'red'}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'> { description } </Grid.Column>
            <Grid.Column width={3} textAlign='right'> { value } </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick={() => editEntry(id)} />
              <Icon name='trash' bordered onClick={() => deleteEntry(id) } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default NewEntry