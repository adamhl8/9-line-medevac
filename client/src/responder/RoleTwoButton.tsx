import { Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import ky from "ky"
import { useState } from "react"
import { URL } from "../App.js"
import store from "../store.js"

function RoleTwoButton() {
  const [request, setRequest] = store((state) => [state.request, state.setRequest])
  if (!request) return <></>
  const role2Assign = request.status === "Role 2"


  const handleClick = async () => {
    if (!request || !request.id) return

    await ky.patch(`${URL}/items/${request.id}`, { json: { status: "Role 2" } })
    request.status = "Role 2"
    setRequest(request)

  }

  return (
      <Button
          leftIcon={role2Assign ? <IconCheck size={14} /> : null}
          color={role2Assign ? "green" : ""}
          onClick={() => void handleClick()
      }>
        Role 2
      </Button>

  )
}
export default RoleTwoButton
