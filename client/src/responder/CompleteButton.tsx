import { Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import ky from "ky"
import { URL } from "../App.js"
import store from "../store.js"

function CompleteButton() {
  const [request, setRequest] = store((state) => [state.request, state.setRequest])
  if (!request) return <></>
  const completeAssign = request.status === "Complete"

  const handleClick = async () => {
    if (request.status === "Pending" || request.status === "Role 2") {
      await ky.patch(`${URL}/requests/${request.id}`, {json: {status: "Complete"}})
      request.status = "Complete"
      setRequest(request)

    } else if (completeAssign) {
      await ky.patch(`${URL}/requests/${request.id}`, {json: {status: "Pending"}})
      request.status = "Pending"
      setRequest(request)
    }

  }

  return (
    <Button
      leftIcon={completeAssign ? <IconCheck size={14} /> : null}
      color={completeAssign ? "green" : ""}
      onClick={() => void handleClick()}
    >
      Complete
    </Button>
  )
}

export default CompleteButton
