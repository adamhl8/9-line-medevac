import {Box, Button, Center, Grid, Group, Stack, Title} from "@mantine/core"
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
  setView: React.Dispatch<React.SetStateAction<string>>
}

function ResponderView({ pages, view, setView }: ResponderViewProps) {
  const [responderID, setResponderID] = useState<string>("")
  const [currentMedevac, setCurrentMedevac] = useState<number>(0)
  const [opened, setOpened] = useState(false)

  return (

    <Center>
        <Stack>
      <Box
          w="100vw"
          h={50}
          mb={25}
          // opacity = {.85}
          sx={(theme) => ({
            backgroundColor: "#488047" ,//: "#854040",
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
                    setView("default")}}
              >
                <b>HOME</b>
              </Button>
              <Button
                  variant="light"
                  color="gray"
                  onClick={() => {
                    setView("dispatcher")
                  }}
              >
                RESPONDER
              </Button>
            </Button.Group>
          </Grid.Col>
          <Grid.Col span="auto">
          </Grid.Col>
          <Grid.Col span={2} offset={2}>
            <Group>
            </Group>
          </Grid.Col>
        </Grid>
      </Box>
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
        </Stack>
    </Center>
  )
}

export default ResponderView
