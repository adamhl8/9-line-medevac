import { Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import ky from "ky"
import { useState } from "react"
import { URL } from "../App.js"
import store from "../store.js"

function CompleteButton() {
  const [request, setRequest] = store((state) => [state.request, state.setRequest])
  const [isComplete, setIsComplete] = useState(false)

  const handleClick = async () => {
    if (!request || !request.id) return

    await ky.patch(`${URL}/requests/${request.id}`, { json: { status: "complete" } })
    setIsComplete(!isComplete)
    request.status = "complete"
    setRequest(request)
  }

  return (
    <Button leftIcon={isComplete ? <IconCheck size={14} /> : null} color={isComplete ? "green" : ""} onClick={() => void handleClick()}>
      Complete
    </Button>
  )
}

export default CompleteButton
