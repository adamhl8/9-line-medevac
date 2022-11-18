import { Box, Button, Center, Grid, Group, Stack, Title } from "@mantine/core"
import SharedTable from "../components/SharedTable"
import store from "../store.js"
import CompleteButton from "./CompleteButton"
import RoleTwoButton from "./RoleTwoButton.js"

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

function ResponderView() {
  const setView = store((state) => state.setView)

  const setModalButtons = store((state) => state.setModalButtons)
  setModalButtons([<CompleteButton key="complete-button" />, <RoleTwoButton key="roleTwo-button" />])

  const setTableHeaders = store((state) => state.setTableHeaders)
  setTableHeaders(["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"])

  return (
    <Center>
      <Stack>
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
                    setView("dispatcher")
                  }}
                >
                  DISPATCHER
                </Button>
              </Button.Group>
            </Grid.Col>
            <Grid.Col span="auto"></Grid.Col>
            <Grid.Col span={2} offset={2}>
              <Group></Group>
            </Grid.Col>
          </Grid>
        </Box>
        <Stack>
          <Title order={1}>MEDEVAC Assignment</Title>
          <Title order={5}>SE Texas</Title>
          <SharedTable />
        </Stack>
      </Stack>
    </Center>
  )
}

export default ResponderView
