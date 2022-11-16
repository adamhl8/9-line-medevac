import { Center, Stack, Title } from "@mantine/core"
import AssignButton from "./AssignButton"
import SharedTable from "./SharedTable"
import { TRequestData } from "./View"

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

interface ViewProps {
  requestData: TRequestData
  view: string
}

function DispatcherView(props: ViewProps) {
  return (
    <Center>
      <Stack>
        <Title order={1}>MEDEVAC Dispatch</Title>
        <Title order={5}>SE Texas</Title>
        <SharedTable
          view={props.view}
          buttons={[<AssignButton />]}
          requestData={props.requestData}
          headers={["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"]}
        />
      </Stack>
    </Center>
  )
}
export default DispatcherView
