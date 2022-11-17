import { Center, Stack, Title } from "@mantine/core"
import { useState } from "react"
import SharedTable from "../components/SharedTable"
import { TRequestData } from "../View"
import CompleteButton from "./CompleteButton"
import RoleTwoButton from "./RoleTwoButton.js"

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

interface ResponderViewProps {
  pages: TRequestData[]
  view: string
}

function ResponderView({ pages, view }: ResponderViewProps) {
  const [responderID, setResponderID] = useState<string>("")
  const [currentMedevac, setCurrentMedevac] = useState<number>(0)
  const [opened, setOpened] = useState(false)

  return (
    <Center>
      <Stack>
        <Title order={1}>MEDEVAC Assignment</Title>
        <Title order={5}>SE Texas</Title>
        <SharedTable
          pages={pages}
          headers={["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"]}
          buttons={[<CompleteButton key="complete-button" />, <RoleTwoButton key="roleTwo-button" />]}
          responderID={responderID}
          view={view}
          opened={opened}
          setOpened={setOpened}
          setResponderID={setResponderID}
          setCurrentMedevac={setCurrentMedevac}
        />
      </Stack>
    </Center>
  )
}

export default ResponderView
