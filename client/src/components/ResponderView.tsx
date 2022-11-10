import { ActionIcon, Button, Divider, Modal, Pagination, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"

const elements = [
  {
    status: "Pending",
    location: "Austin",
    callSign: "[Call Sign]",
    precedence: "Urgent Surgical",
    specialEquipment: "Hoist",
    security: "Possible Enemy",
    marking: "Green Smoke",
    details: "View",
  },
  {
    status: "Complete",
    location: "Cedar Park",
    callSign: "[Call Sign]",
    precedence: "Urgent",
    specialEquipment: "Litter",
    security: "No enemy troops",
    marking: "Panels",
    details: "View",
  },
  {
    status: "Pending",
    location: "Hutto",
    callSign: "[Call Sign]",
    precedence: "Routine",
    specialEquipment: "None",
    security: "Possible Enemy",
    marking: "Pyrotechnic signal",
    details: "View",
  },
  {
    status: "Pending",
    location: "Leander",
    callSign: "[Call Sign]",
    precedence: "Priority",
    specialEquipment: "Ventilator",
    security: "Possible Enemy",
    marking: "Smoke",
    details: "View",
  },
  {
    status: "Pending",
    location: "Waco",
    callSign: "[Call Sign]",
    precedence: "Convenience",
    specialEquipment: "Hoist",
    security: "No enemy troops",
    marking: "Other",
    details: "View",
  },
]

const elements2 = [
  {
    status: "CHANGED",
    location: "Austin",
    callSign: "[Call Sign]",
    precedence: "Urgent Surgical",
    specialEquipment: "Hoist",
    security: "Possible Enemy",
    marking: "Green Smoke",
    details: "View",
  },
  {
    status: "Complete",
    location: "Cedar Park",
    callSign: "[Call Sign]",
    precedence: "Urgent",
    specialEquipment: "Litter",
    security: "No enemy troops",
    marking: "Panels",
    details: "View",
  },
  {
    status: "Pending",
    location: "Hutto",
    callSign: "[Call Sign]",
    precedence: "Routine",
    specialEquipment: "None",
    security: "Possible Enemy",
    marking: "Pyrotechnic signal",
    details: "View",
  },
  {
    status: "Pending",
    location: "Leander",
    callSign: "[Call Sign]",
    precedence: "Priority",
    specialEquipment: "Ventilator",
    security: "Possible Enemy",
    marking: "Smoke",
    details: "View",
  },
  {
    status: "Pending",
    location: "Waco",
    callSign: "[Call Sign]",
    precedence: "Convenience",
    specialEquipment: "Hoist",
    security: "No enemy troops",
    marking: "Other",
    details: "View",
  },
]

const pages = [[...elements], [...elements2], [...elements]]

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

function ResponderView() {
  const [opened, setOpened] = useState(false)
  const [details, setDetails] = useState<typeof elements[0]>()
  const [activePage, setPage] = useState(1)
  const [currentRequests, setCurrentRequest] = useState(pages[0])

  if (!currentRequests) return <></>

  const handleSetPage = (page: number) => {
    setPage(page)
    setCurrentRequest(pages[page - 1])
  }

  const rows = currentRequests.map((element, index) => (
    <tr key={index}>
      <td>{element.status}</td>
      <td>{element.location}</td>
      <td>{element.callSign}</td>
      <td>{element.precedence}</td>
      <td>{element.specialEquipment}</td>
      <td>{element.security}</td>
      <td>{element.marking}</td>
      <td>
        <ActionIcon
          variant="outline"
          onClick={() => {
            setDetails(element)
            setOpened(true)
          }}
        >
          <IconListDetails size={18} />
        </ActionIcon>
      </td>
    </tr>
  ))

  const getDetails = (details: typeof elements[0]) => {
    const detailsArray = []
    for (const [key, value] of Object.entries(details)) {
      detailsArray.push(
        <>
          <Text ta="right">{key}</Text>
          <Text ta="left">{value}</Text>
        </>,
      )
    }
    return detailsArray
  }

  return (
    <>
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
          <SimpleGrid cols={2}>{details && getDetails(details)}</SimpleGrid>
          <Divider mt="md" mb="md" />
          <Button radius="md" onClick={() => console.log("Completed")}>
            Complete
          </Button>
          <Button radius="md" onClick={() => console.log("Role 2")} color={"green"}>
            Role 2
          </Button>
        </Stack>
      </Modal>

      <Stack>
        <Title order={1}>MEDEVAC Assignment</Title>
        <Title order={5}>SE Texas</Title>

        <Table maw="75vw" striped highlightOnHover captionSide="bottom" fontSize="md">
          <thead>
            <tr>
              <th>Status</th>
              <th>Location</th>
              <th>Call Sign</th>
              <th>Precedence</th>
              <th>Special Equipment</th>
              <th>Security</th>
              <th>Marking</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Pagination page={activePage} onChange={handleSetPage} total={pages.length} />
      </Stack>
    </>
  )
}
export default ResponderView
