import { Center, Stack, Title } from "@mantine/core"
import CompleteButton from "./CompleteButton"
import RoleTwoButton from "./RoleTwoButton"
import SharedTable from "./SharedTable"
import { TRequestData } from "./View"

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

interface ResponderViewProps {
  pages: TRequestData[]
}

function ResponderView({ pages }: ResponderViewProps) {
  return (
    <Center>
      <Stack>
        <Title order={1}>MEDEVAC Assignment</Title>
        <Title order={5}>SE Texas</Title>
        <SharedTable
          pages={pages}
          headers={["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"]}
          buttons={[<CompleteButton key="complete-button" />, <RoleTwoButton key="roleTwo-button" />]}
        />
      </Stack>
    </Center>
  )
}

export default ResponderView
