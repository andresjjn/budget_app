import { Container, Segment, Statistic, Grid, GridRow, GridColumn, Icon, Form, Button, Header, ButtonOr } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'> Budget </Header>

      <Statistic size='small'>
        <Statistic.Label>Your balance</Statistic.Label>
        <Statistic.Value>10.000</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'> 
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign:'center'}}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>6.000</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:'center'}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>4.000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Rent</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100.000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Public Services</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$200.000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Salary</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$200.000</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'> Add new transaction </Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
            placeholder='New thing'
            width={12}
            label='Description'
            icon='tags'
          />
          <Form.Input
          label='Value'
          width={4}
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Apply</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

 

export default App;
