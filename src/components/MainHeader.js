import { Header } from 'semantic-ui-react'

function MainHeader(props) {
  const { title, type } = props;
  return(<Header as={type}> {title} </Header>)
}

export default MainHeader