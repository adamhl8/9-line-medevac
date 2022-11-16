import { Divider, Modal, SimpleGrid, Stack, Text } from "@mantine/core"
import React, { Fragment } from "react"
import { TRequestById } from "./View"

interface SharedModalProps {
  opened: boolean
  setOpened: (value: React.SetStateAction<boolean>) => void
  request: TRequestById
  buttons: JSX.Element[]
}

async function handleComplete(role: string) {
  // if dispatcher: this will patch to assign a responder to record
  // if responder: this will patch to update status to either complete or role 2
}

function SharedModal({ opened, setOpened, request, buttons }: SharedModalProps) {
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
        {buttons}
      </Stack>
    </Modal>
  )
}
export default SharedModal
