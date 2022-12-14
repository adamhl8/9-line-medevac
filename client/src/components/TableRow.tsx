import { ActionIcon } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { TRequestById } from "../schema.js"
import store from "../store.js"

interface TableRowProps {
  request: TRequestById
}

const TableRow = ({ request }: TableRowProps) => {
  const setOpened = store((state) => state.setOpened)
  const setRequest = store((state) => state.setRequest)

  if (!request) return <></>

  const precedence = () => {
    if (request.byPriority > request.byUrgent && request.byPriority > request.byRoutine) {
      return "Priority"
    } else if (request.byUrgent > request.byPriority && request.byUrgent > request.byRoutine) {
      return "Urgent"
    } else if (request.byRoutine > request.byUrgent && request.byRoutine > request.byPriority) {
      return "Routine"
    }
  }

  const colorizeStatus = () => {
    const lowerStatus = request.status.toLowerCase()
    const pending = lowerStatus === "pending" && request.responderID !== 0 ? "orange" : "red"
    const statusColor = lowerStatus === "complete" ? "green" : pending

    if (lowerStatus === "role 2" || lowerStatus === "role rwo") return "cyan"
    return statusColor
  }

  return (
    <>
      <tr>
        <td style={{ color: colorizeStatus() }}>{request.status.toUpperCase()}</td>
        <td>{request.location}</td>
        <td>{request.callSign}</td>
        <td>{precedence()}</td>
        <td>{request.specialEquipment}</td>
        <td>{request.security.replace(/([a-z](?=[A-Z]))/g, "$1 ")}</td>
        <td>{request.marking.replace(/([a-z](?=[A-Z]))/g, "$1 ")}</td>
        <td>
          <ActionIcon
            variant="outline"
            onClick={() => {
              setRequest(request)
              setOpened(true)
            }}
          >
            <IconListDetails size={18} />
          </ActionIcon>
        </td>
      </tr>
    </>
  )
}

export default TableRow
