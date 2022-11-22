import { Button } from "@mantine/core"
import ky from "ky"
import store from "../store.js"

function AssignButton() {
  const request = store((state) => state.request)
  const responderId = store((state) => state.responderId)

  const handleClick = async () => {
    if (!request || !request.id) return

    await ky.patch(`http://localhost:8080/requests/${request.id}`, {
      headers: {
        "content-type": "application/json",
      },
      json: { responderID: responderId.toString() },
    })

    request.responderID = Number(responderId)
  }

  return <Button onClick={() => void handleClick()}>Assign</Button>
}
export default AssignButton
