import { Button } from "@mantine/core"
import axios from 'axios'

interface AssignButtonProps {
  responderID:string
  currentMedevac: number
}


function AssignButton(props:AssignButtonProps) {
  //sends a patch request with the desired responderID 
  const handleClick = () => {
    alert('you are hitting this')
    console.log(props.responderID)
    console.log(props.currentMedevac)
    axios.patch(`http://localhost:8080/items/${props.currentMedevac}`, {"responderID": props.responderID})
  }
  return <Button onClick={handleClick}>Assign</Button>
}
export default AssignButton
