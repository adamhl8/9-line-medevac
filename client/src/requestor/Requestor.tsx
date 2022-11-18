import { ActionIcon, Box, Button, Grid, Group, Stack } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"
import { z } from "zod"
import Form from "./Form"

export const RequestBody = z.object({
  status: z.string(),
  location: z.string(),
  callSign: z.string(),
  frequency: z.number(),
  byAmbulatory: z.number(),
  byLitter: z.number(),
  specialEquipment: z.string(),
  byUrgent: z.number(),
  byPriority: z.number(),
  byRoutine: z.number(),
  security: z.string().nullish(),
  marking: z.string().nullish(),
  usMil: z.number().nullish(),
  usCiv: z.number().nullish(),
  nonUSMil: z.number().nullish(),
  nonUSCiv: z.number().nullish(),
  nbc: z.string().nullish(),
  responderID: z.number().nullish(),
  dispatcherID: z.number().nullish(),
})

export type TRequestBody = z.infer<typeof RequestBody>

interface settingView {
  setView: React.Dispatch<React.SetStateAction<string>>
}

const Requestor = (props: settingView) => {
  const [submitted, setSubmitted] = useState(false)
  const [opened, setOpened] = useState(false)
  const [request, setRequest] = useState<TRequestBody>()

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
          <Grid.Col span="auto">
            <Button.Group>
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  setSubmitted(false)
                }}
              >
                NEW REQUEST
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
          <Grid.Col span="auto">
            <b>{submitted ? "9-LINE HAS BEEN SUBMITTED" : "9-LINE HAS NOT BEEN SUBMITTED"} </b>
          </Grid.Col>
          <Grid.Col span={2} offset={2}>
            <Group>
              <b>Current Request: </b>

              <ActionIcon
                variant="outline"
                aria-label="Current"
                onClick={() => {
                  console.log(request)
                  setRequest(request)
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
        <Form
          setSubmitted={setSubmitted}
          submitted={submitted}
          opened={opened}
          setOpened={setOpened}
          request={request}
          setRequest={setRequest}
        />
      </Stack>
    </>
  )
}

export default Requestor
