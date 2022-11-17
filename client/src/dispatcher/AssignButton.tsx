import { Button } from "@mantine/core"
import ky from "ky"
import React from "react"
import { TRequestById } from "../View"

interface AssignButtonProps {
  responderID: string
  currentMedevac: number
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  setResponderArray: React.Dispatch<React.SetStateAction<number>>
  responderArray: number
  request?: TRequestById
}

function AssignButton(props: AssignButtonProps) {
  const handleClick = async () => {
    if (!props.request) return

    await ky.patch(`http://localhost:8080/items/${props.currentMedevac}`, { json: { responderID: props.responderID } })
    props.setResponderArray((prev) => prev + 1)
    props.request.responderID = Number(props.responderID)
    props.setOpened(false)
  }

  return <Button onClick={() => void handleClick()}>Assign</Button>
}
export default AssignButton
