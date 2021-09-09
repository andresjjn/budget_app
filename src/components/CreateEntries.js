import NewEntry from './NewEntry'

function CreateEntries( { entries, deleteEntry, editEntry } ) {
  return(
    entries.map(
      (entry) => (
        <NewEntry
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />)
    )
  )
}

export default CreateEntries;