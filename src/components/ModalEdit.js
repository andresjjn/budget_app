import { Modal, Button } from 'semantic-ui-react';
import BasicForm from './BasicForm';

function ModalEdit(
  {
    isOpen,
    setIsOpen,
    addEntry,
    description,
    value,
    isIncome,
    setDescription,
    setValue,
    setIsIncome
  }) {

  return(
    <Modal open={ isOpen }>
      <Modal.Header> Edit Entry </Modal.Header>
      <Modal.Content>
        <BasicForm 
          description={description}
          value={value}
          isIncome={isIncome}
          setDescription={setDescription}
          setValue={setValue}
          setIsIncome={setIsIncome}    
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}> Close </Button>
        <Button positive onClick={() => setIsOpen(false)}> Update </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit