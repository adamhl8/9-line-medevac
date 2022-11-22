import { Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import ky from "ky"
import { useState } from "react"
import { URL } from "../App.js"
import store from "../store.js"

function RoleTwoButton() {
  const [request, setRequest] = store((state) => [state.request, state.setRequest])
  const [isRole2Checked, setIsRole2Checked] = store((state)=> [state.isRole2Checked, state.setIsRole2Checked])
  const [isRole2, setIsRole2] = useState(false)

  const handleClick = async () => {
    if (!request || !request.id) return

    await ky.patch(`${URL}/items/${request.id}`, { json: { status: "Role 2" } })
    setIsRole2Checked(!isRole2Checked)
    setIsRole2(!isRole2)
    request.status = "Role 2"
    setRequest(request)

  }

  return (
      <Button leftIcon={isRole2 ? <IconCheck size={14} /> : null} color={isRole2 ? "green" : ""} onClick={() => void handleClick()}>
        Role 2
      </Button>

  )
}
export default RoleTwoButton
