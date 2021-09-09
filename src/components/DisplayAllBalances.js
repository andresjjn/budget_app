import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayAllBalances( {incomeTotal, expenseTotal } ) {
  return(
    <Segment textAlign='center'> 
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
          <DisplayBalance 
              size='tiny'
              color='green'
              style={{textAlign:'center'}}
              label='Income:'
              value={incomeTotal}
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance 
              size='tiny'
              color='red'
              style={{textAlign:'center'}}
              label='Expenses:'
              value={expenseTotal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayAllBalances