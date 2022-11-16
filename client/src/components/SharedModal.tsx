import { Divider, Modal, Radio, SimpleGrid, Stack, Text } from "@mantine/core"
import { cloneElement, Fragment, ReactNode, useState } from "react"
import { TRequestById } from "./View"

interface SharedModalProps {
  opened: boolean
  setOpened: (value: React.SetStateAction<boolean>) => void
  request: TRequestById
  buttons: JSX.Element[]
  responders: number[]
  responderID: string
  setResponderID: React.Dispatch<React.SetStateAction<string>>
}

async function handleComplete(role: string) {
  // if dispatcher: this will patch to assign a responder to record
  // if responder: this will patch to update status to either complete or role 2
}

function SharedModal({ opened, setOpened, request, buttons, responders, responderID, setResponderID }: SharedModalProps) {
  const [currentRequest, setCurrentRequest] = useState(request)

  const buildRequestDetails = (details: TRequestById) => {
    const requestDetails = []
    for (const [key, value] of Object.entries(details)) {
      requestDetails.push(
        <Fragment key={key}>
          <Text ta="right">{key}</Text>
          <Text ta="left">{value}</Text>
        </Fragment>,
      )
    }
    return requestDetails
  }

  const testingMap = (): Array<ReactNode> => {
    return responders.map((responder, i) => {
      return <Radio key={i} value={`${responder}`} label={`${responder}`} />
    })
  }

  return (
    <Modal
      styles={(theme) => ({ modal: { border: `thin solid ${theme.colors.dark[4]}` } })}
      radius="md"
      centered
      overlayOpacity={0.55}
      overlayBlur={3}
      shadow="md"
      opened={opened}
      onClose={() => setOpened(false)}
      title={"Details"}
    >
      <Stack justify="flex-start">
        <SimpleGrid cols={2}>{buildRequestDetails(request)}</SimpleGrid>
        <Divider mt="md" mb="md" />
        <Radio.Group name="testingMapForResoponder" label="test" withAsterisk value={responderID} onChange={setResponderID}>
          {testingMap()}
        </Radio.Group>
        {buttons.map((button) => {
          if (button.key === "complete-button") return cloneElement(button, { request, setCurrentRequest })
          return button
        })}
      </Stack>
    </Modal>
  )
}
export default SharedModal
