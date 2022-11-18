import { Divider, Modal, SimpleGrid, Stack, Text } from "@mantine/core"
import { cloneElement, Fragment } from "react"
import { DispatcherRadioGroup } from "../dispatcher/DispatcherRadioGroup.js"
import store from "../store.js"
import { TRequestById } from "../View"

function SharedModal() {
  const [request, setRequest] = store((state) => [state.request, state.setRequest])
  if (!request) return <></>
  const [opened, setOpened] = store((state) => [state.opened, state.setOpened])
  const modalButtons = store((state) => state.modalButtons)

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
        <DispatcherRadioGroup />
        {modalButtons.map((button) => {
          if (button.key === "complete-button") return cloneElement(button, { request, setRequest })
          if (button.key === "assign-button") return cloneElement(button, { request })
          return button
        })}
      </Stack>
    </Modal>
  )
}
export default SharedModal
