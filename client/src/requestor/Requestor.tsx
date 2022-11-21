import { ActionIcon, Box, Button, Grid, Group, Stack } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import store from "../store.js"
import Form from "./Form"

const Requestor = () => {
  const setView = store((state) => state.setView)
  const [requestSubmitted, setRequestSubmitted] = store((state) => [state.requestSubmitted, state.setRequestSubmitted])
  const setOpened = store((state) => state.setOpened)

  return (
    <>
      <Box
        w="100vw"
        h={50}
        mb={25}
        // opacity = {.85}
        sx={(theme) => ({
          backgroundColor: requestSubmitted ? "#488047" : "#854040",
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
                  setRequestSubmitted(false)
                }}
              >
                NEW REQUEST
              </Button>
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  setView("default")
                }}
              >
                HOME
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
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  setView("dispatcher")
                }}
              >
                DISPATCER
              </Button>
            </Button.Group>
          </Grid.Col>
          <Grid.Col span="auto">
            <b>{requestSubmitted ? "9-LINE HAS BEEN SUBMITTED" : "9-LINE HAS NOT BEEN SUBMITTED"} </b>
          </Grid.Col>
          <Grid.Col span={2} offset={2}>
            <Group>
              <b>Current Request: </b>

              <ActionIcon
                variant="outline"
                aria-label="Current"
                onClick={() => {
                  setOpened(true)
                }}
              >
                <IconListDetails size={18} />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>
      </Box>
      <Stack align="center">
        <Form />
      </Stack>
    </>
  )
}

export default Requestor
