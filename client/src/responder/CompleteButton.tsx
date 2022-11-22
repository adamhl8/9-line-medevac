import { Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import ky from "ky"
import { URL } from "../App.js"
import store from "../store.js"

function CompleteButton() {
  const [request, setRequest] = store((state) => [state.request, state.setRequest])
  if (!request) return <></>
  const completeAssign = request.status === "Complete" || request.status === "complete" // status should never be null, assigned as "Pending" in Form on every new Form

  const handleClick = async () => {
    if (!request || !request.id) return

    await ky.patch(`${URL}/requests/${request.id}`, { json: { status: "complete" } })
    request.status = "Complete"
    setRequest(request)
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
