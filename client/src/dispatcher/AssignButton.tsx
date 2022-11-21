import { Button } from "@mantine/core"
import ky from "ky"
import store from "../store.js"

function AssignButton() {
  const request = store((state) => state.request)
  const responderId = store((state) => state.responderId)

  const handleClick = async () => {
    if (!request || !request.id) return
    await ky.patch(`http://localhost:8080/items/${request.id}`, { json: { responderId } })
    request.responderID = Number(responderId)
  }

  return <Button onClick={() => void handleClick()}>Assign</Button>
}
export default AssignButton
