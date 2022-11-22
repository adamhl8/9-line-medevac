import { Box, Button, Grid, Group } from "@mantine/core"
import store from "../store.js"

function Navbar() {
  const setView = store((state) => state.setView)
  const view = store((state) => state.view)

  return view === "dispatcher" ? (
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
  ) : (
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
  )
}

export default Navbar
