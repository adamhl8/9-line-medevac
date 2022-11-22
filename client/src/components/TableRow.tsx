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
    if (request.byPriority > request.byUrgent || request.byPriority > request.byRoutine){
      return "Priority"
    } else if (request.byUrgent > request.byPriority || request.byPriority > request.byRoutine){
      return "Urgent"
    } else
      return "Routine"
  }

  return (
    <>
      <tr>
        <td>{request.status}</td>
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
