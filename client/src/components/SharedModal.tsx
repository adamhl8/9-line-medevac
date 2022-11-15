import { Divider, Modal, SimpleGrid, Stack } from "@mantine/core"
import { TRequestById, TRequestData } from "./View"

interface ViewProps {
  requestData: TRequestData
  view: string
  opened: boolean
  setOpened: (value: React.SetStateAction<boolean>) => void
  getDetails: (details: TRequestById) => JSX.Element[]
  details: TRequestById
  buttons: JSX.Element[]
}

async function handleComplete(role: string) {
  // if dispatcher: this will patch to assign a responder to record
  // if responder: this will patch to update status to either complete or role 2
}

function SharedModal(props: ViewProps) {
  return (
    <Modal
      styles={(theme) => ({ modal: { border: `thin solid ${theme.colors.dark[4]}` } })}
      radius="md"
      centered
      overlayOpacity={0.55}
      overlayBlur={3}
      shadow="md"
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      title={"Details"}
    >
      <Stack justify="flex-start">
        <SimpleGrid cols={2}>{props.details && props.getDetails(props.details)}</SimpleGrid>
        <Divider mt="md" mb="md" />

        {props.buttons.map((button) => {
          return button
        })}
      </Stack>
    </Modal>
  )
}
export default SharedModal
