import { Box, Button, Grid, Stack } from "@mantine/core"
import { useState } from "react"
import Form from "./Form"

interface settingView {
  setView: React.Dispatch<React.SetStateAction<string>>
}

const Requestor = (props: settingView) => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Box
        w="100vw"
        h={50}
        mb={25}
        // opacity = {.85}
        sx={(theme) => ({
          backgroundColor: submitted ? "#488047" : "#854040",
          textAlign: "center",
          padding: theme.spacing.md,
          border: "",
        })}
      >
        <Grid justify="center">
          <Grid.Col span={4}>
            <Button.Group>
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  setSubmitted(false)
                }}
              >
                NEW FORM
              </Button>
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  props.setView("responder")
                }}
              >
                RESPONDER
              </Button>
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  props.setView("dispatcher")
                }}
              >
                DISPATCER
              </Button>
            </Button.Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <b>{submitted ? "9-LINE HAS BEEN SUBMITTED" : "9-LINE HAS NOT BEEN SUBMITTED" } </b>
          </Grid.Col>
          <Grid.Col span={4}></Grid.Col>
        </Grid>
      </Box>
      <Stack align="center">
        <Form setSubmitted={setSubmitted} submitted={submitted} />
      </Stack>
    </>
  ) 
}

export default Requestor
