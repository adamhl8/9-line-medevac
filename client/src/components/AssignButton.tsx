import { Button } from "@mantine/core"
import axios from "axios"
import React from "react"
import { TRequestById } from "./View"

interface AssignButtonProps {
  responderID: string
  currentMedevac: number
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  setResponderArray: React.Dispatch<React.SetStateAction<number>>
  responderArray: number
  request: TRequestById
}

function AssignButton(props: AssignButtonProps) {
  //sends a patch request with the desired responderID
  const handleClick = async () => {
    alert("you are hitting this")
    console.log(props.responderID)
    console.log(props.currentMedevac)
    await axios.patch(`http://localhost:8080/items/${props.currentMedevac}`, { responderID: props.responderID })

    // this needs to be implemented in the useEffect setAssignedResponders
    //await axios.get('http://localhost:8080/items')
    await props.setResponderArray((prev) => prev + 1)
    props.request.responderID = Number(props.responderID)
    //console.log(props.responderArray)
    props.setOpened(false)
  }
  return <Button onClick={handleClick}>Assign</Button>
}
export default AssignButton
