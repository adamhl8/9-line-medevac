import { Divider, Modal, SimpleGrid, Stack, Text } from "@mantine/core"
import { cloneElement, Fragment, useState } from "react"
import { DispatcherRadioGroup } from "../dispatcher/DispatcherRadioGroup.js"
import { TRequestById } from "../View"

interface SharedModalProps {
  view: string
  opened: boolean
  setOpened: (value: React.SetStateAction<boolean>) => void
  request: TRequestById
  buttons: JSX.Element[]
  responderID: string
  setResponderID: React.Dispatch<React.SetStateAction<string>>
}

function SharedModal({ opened, setOpened, request, buttons, responderID, setResponderID, view }: SharedModalProps) {
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
        <DispatcherRadioGroup view={view} responderID={responderID} setResponderID={setResponderID} />
        {buttons.map((button) => {
          if (button.key === "complete-button") return cloneElement(button, { request, setCurrentRequest })
          if (button.key === "assign-button") return cloneElement(button, { request })
          return button
        })}
      </Stack>
    </Modal>
  )
}
export default SharedModal
