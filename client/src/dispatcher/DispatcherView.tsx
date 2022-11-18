import { Box, Button, Center, Grid, Group, Stack, Title } from "@mantine/core"
import { useState } from "react"
import SharedTable from "../components/SharedTable"
import { TRequestData } from "../View"
import AssignButton from "./AssignButton.js"

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

interface DispatcherViewProps {
  pages: TRequestData[]
  setView: React.Dispatch<React.SetStateAction<string>>
  view: string
  setResponderArray: React.Dispatch<React.SetStateAction<number>>
  responderArray: number
}

function DispatcherView({ pages, setView, view, responderArray, setResponderArray }: DispatcherViewProps) {
  const [responderID, setResponderID] = useState<string>("")
  const [currentMedevac, setCurrentMedevac] = useState<number>(0)
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Box
        w="100vw"
        h={50}
        mb={25}
        // opacity = {.85}
        sx={(theme) => ({
          backgroundColor: "#488047", //: "#854040",
          textAlign: "center",
          padding: theme.spacing.md,
          border: "",
        })}
      >
        <Grid justify="center">
          <Grid.Col span="auto">
            <Button.Group>
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  setView("default")
                }}
              >
                <b>HOME</b>
              </Button>
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  setView("responder")
                }}
              >
                RESPONDER
              </Button>
            </Button.Group>
          </Grid.Col>
          <Grid.Col span="auto"></Grid.Col>
          <Grid.Col span={2} offset={2}>
            <Group></Group>
          </Grid.Col>
        </Grid>
      </Box>
      <Center>
        <Stack>
          <Title order={1}>MEDEVAC Dispatch</Title>
          <Title order={5}>SE Texas</Title>
          <SharedTable
            pages={pages}
            headers={["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"]}
            responderID={responderID}
            view={view}
            opened={opened}
            setOpened={setOpened}
            setResponderID={setResponderID}
            setCurrentMedevac={setCurrentMedevac}
            buttons={[
              <AssignButton
                key="assign-button"
                responderID={responderID}
                currentMedevac={currentMedevac}
                setOpened={setOpened}
                responderArray={responderArray}
                setResponderArray={setResponderArray}
              />,
            ]}
          />
        </Stack>
      </Center>
    </>
  )
}

export default DispatcherView