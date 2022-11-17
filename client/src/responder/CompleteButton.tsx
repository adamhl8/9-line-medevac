import { Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import ky from "ky"
import { useState } from "react"
import { URL } from "../App.js"
import { TRequestById } from "../View.js"

interface CompleteButtonProps {
  request?: TRequestById
  setCurrentRequest?: React.Dispatch<React.SetStateAction<TRequestById>>
}

function CompleteButton({ request, setCurrentRequest }: CompleteButtonProps) {
  const [isComplete, setIsComplete] = useState(false)

  const handleClick = async () => {
    if (!request || !setCurrentRequest) return

    await ky.patch(`${URL}/items/${request.id}`, { json: { status: "complete" } })
    setIsComplete(!isComplete)
    request.status = "complete"
    setCurrentRequest(request)
  }

  return (
    <Button leftIcon={isComplete ? <IconCheck size={14} /> : null} color={isComplete ? "green" : ""} onClick={() => void handleClick()}>
      Complete
    </Button>
  )
}

export default CompleteButton
