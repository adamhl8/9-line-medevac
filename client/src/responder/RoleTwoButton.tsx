import { Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import ky from "ky"
import { URL } from "../App.js"
import store from "../store.js"

function RoleTwoButton() {
  const [request, setRequest] = store((state) => [state.request, state.setRequest])
  if (!request) return <></>
  const role2Assign = request.status === "Role 2"

  const handleClick = async () => {
    if (request.status === "Pending" || request.status === "Complete") {
      await ky.patch(`${URL}/requests/${request.id}`, { json: { status: "Role 2" } })
      request.status = "Role 2"
      setRequest(request)
    } else if (role2Assign) {
      await ky.patch(`${URL}/requests/${request.id}`, { json: { status: "Pending" } })
      request.status = "Pending"
      setRequest(request)
    }
  }

  return (
    <Button leftIcon={role2Assign ? <IconCheck size={14} /> : null} color={role2Assign ? "green" : ""} onClick={() => void handleClick()}>
      Role 2
    </Button>
  )
}
export default RoleTwoButton
