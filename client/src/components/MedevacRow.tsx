import { ActionIcon } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { TRequestById } from "./View"

interface MedevacRowProps {
  request: TRequestById
  setRequest: React.Dispatch<React.SetStateAction<TRequestById>>
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentMedevac: React.Dispatch<React.SetStateAction<number>>
}

export const MedevacRow = ({ request, setRequest, setOpened, setCurrentMedevac }: MedevacRowProps) => {
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
              setCurrentMedevac(request.id)
            }}
          >
            <IconListDetails size={18} />
          </ActionIcon>
        </td>
      </tr>
    </>
  )
}
