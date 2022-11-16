import { Center, Stack, Title } from "@mantine/core"
import AssignButton from "./AssignButton"
import SharedTable from "./SharedTable"
import { TRequestData } from "./View"
import {useState} from 'react'

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

interface DispatcherViewProps {
  pages: TRequestData[]
  setView:React.Dispatch<React.SetStateAction<string>>
}

const responders = [1234, 4321, 6643]

function DispatcherView({ pages, setView }: DispatcherViewProps) {
  const [responderID, setResponderID] = useState<string>("")
  const [currentMedevac, setCurrentMedevac] = useState<number>(0)

  return (
    <>
    <Center>
      <Stack>
        <Title order={1}>MEDEVAC Dispatch</Title>
        <Title order={5}>SE Texas</Title>
        <SharedTable
          pages={pages}
          headers={["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"]}
          responders={responders}
          responderID={responderID}
          setResponderID={setResponderID}
          setCurrentMedevac={setCurrentMedevac}
          buttons={[<AssignButton key="assign-button" responderID={responderID} currentMedevac={currentMedevac} />]}
        />
      </Stack>
    </Center>        
          <button onClick={() => setView("Home")}>
          Home Page
        </button>
        </>
  )
}

export default DispatcherView
