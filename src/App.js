import './App.css';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import EntryForm from './components/EntryForm';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import PrintButton from './components/PrintButton';
import DisplayAllBalances from './components/DisplayAllBalances';
import CreateEntries from './components/CreateEntries';
import ModalEdit from './components/ModalEdit'

const initialEntries = [
  {
    id: 'ktan6rjn5af0eimzou',
    description: 'Salary',
    isIncome: true,
    value: 1500
  },
  {
    id: 'ktan80gf173h5lxizym',
    description: 'Rent',
    isIncome: false,
    value: 500
  }
] 

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isIncome, setIsIncome] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() =>{
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isIncome = isIncome;
      setEntries(newEntries);
      resetEntries();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let incomeTotal = 0;
    let expenseTotal = 0;
    entries.map(entry => {
      if (!entry.isIncome) {
        return expenseTotal += Number(entry.value);
      } else {
        return incomeTotal += Number(entry.value);
      }
    });
    setTotal(incomeTotal - expenseTotal);
    setExpenseTotal(expenseTotal);
    setIncomeTotal(incomeTotal);
  }, [entries])

  function deleteEntry(id) {
    const filtered = entries.filter((entry) => entry.id !== id);
    setEntries(filtered);
  }

  function addEntry() {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);  
    const newEntry = entries.concat({
      id: id,
      description,
      value,
      isIncome
    });
    setEntries(newEntry);
    resetEntries()
  }

  function resetEntries() {
    setDescription('');
    setValue('');
    setIsIncome(true);
  }
  
  function editEntry(id) {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id)
      setDescription(entry.description);
      setValue(entry.value);
      setIsIncome(entry.isIncome);
      setIsOpen(true)
    }
  }
  return (
    <Container>
      
      <MainHeader title={'BudgetApp'} type={'h1'} />    
      <DisplayBalance 
        size='small'
        color='black'
        label='Your Balance'
        value={total}
      />
      <DisplayAllBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}  />
      <PrintButton />

      <MainHeader title={'Add new transaction'} type={'h3'} />
      <EntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isIncome={isIncome}
        setDescription={setDescription}
        setValue={setValue}
        setIsIncome={setIsIncome} 
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isIncome={isIncome}
        setDescription={setDescription}
        setValue={setValue}
        setIsIncome={setIsIncome} 
      />

      <MainHeader title={'History'} type={'h3'} />
      <CreateEntries
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />

    </Container>
  );
}

export default App;
