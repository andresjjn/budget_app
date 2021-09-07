import { Container } from 'semantic-ui-react';
import './App.css';
import EntryForm from './components/EntryForm';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import PrintButton from './components/PrintButton';
import DisplayAllBalances from './components/DisplayAllBalances';
import NewEntry from './components/NewEntry';

function App() {
  return (
    <Container>
      
      <MainHeader title={'BudgetApp'} type={'h1'} />    
      <DisplayBalance 
        size='small'
        color='black'
        label='Your Balance'
        value='6000'
      />
      <DisplayAllBalances />
      <MainHeader title={'History'} type={'h3'} />
      <NewEntry 
        income={true}
        description='House rent'
        value='6000'
      />
      <MainHeader title={'Add new transaction'} type={'h3'} />
      <EntryForm />
      <PrintButton />

    </Container>
  );
}

 

export default App;
