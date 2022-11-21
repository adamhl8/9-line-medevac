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

  const precedence = "fix me"
  return (
    <>
      <tr>
        <td>{request.status}</td>
        <td>{request.location}</td>
        <td>{request.callSign}</td>
        <td>{precedence}</td>
        <td>{request.specialEquipment}</td>
        <td>{request.security}</td>
        <td>{request.marking}</td>
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
