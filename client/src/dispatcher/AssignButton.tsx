import { Button } from "@mantine/core"
import ky from "ky"
import { URL } from "../App.js"
import store from "../store.js"

function AssignButton() {
  const request = store((state) => state.request)
  const [responderId, setResponderId] = store((state) => [state.responderId, state.setResponderId])

  const handleClick = async () => {
    if (!request || !request.id) return

    await ky.patch(`${URL}/requests/${request.id}`, {
      headers: {
        "content-type": "application/json",
      },
      json: { responderID: responderId.toString() },
    })
    request.responderID = responderId
    setResponderId(Number(responderId))
    await store.getState().getAndSetPages()
  }

  return <Button onClick={() => void handleClick()}>Assign</Button>
}
export default AssignButton
