import { ActionIcon, Button, Divider, Modal, Pagination, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"



function SharedTable() {

    const [opened, setOpened] = useState(false)
    const [details, setDetails] = useState<typeof elements[0]>()
    const [activePage, setPage] = useState(1)
    const [currentRequests, setCurrentRequest] = useState(pages[0])

    if (!currentRequests) return <></>

    const handleSetPage = (page: number) => {
        setPage(page)
        setCurrentRequest(pages[page - 1])
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
        <Title order={1}>MEDEVAC {role}</Title>
        <Title order={5}>SE Texas</Title>

        <Table maw="75vw" striped highlightOnHover captionSide="bottom" fontSize="md">
          <thead>
            <tr>
              {headers.map((header) =>  <th>{header}</th>)}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Pagination page={activePage} onChange={handleSetPage} total={pages.length} />
      </Stack>
    </>
    )

}export default SharedTable