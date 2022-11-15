import { ActionIcon, Button, Divider, Modal, Pagination, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"
import { TRequestById, TRequestData } from "./View"

interface ResponderViewProps {
  requestData:TRequestData
  headers:String[]
  view:string
}

function SharedTable(props:ResponderViewProps) {

    const [opened, setOpened] = useState(false)
    const [details, setDetails] = useState<TRequestById>()
    const [activePage, setPage] = useState(1)
    const [currentRequests, setCurrentRequests] = useState<TRequestData>()

    const pages: TRequestData[] | undefined = []

    const handleSetPage = (page: number) => {
      setPage(page)
      //if (!pages) return
      setCurrentRequests(pages[page - 1])
    }
    const chunkSize = 10;
    for (let i = 0; i < props.requestData.length; i += chunkSize) {
      const chunk = props.requestData.slice(i, i + chunkSize);
      pages.push(chunk)
     
    }
    
    async function handleComplete(role: string) {
      // if dispatcher: this will patch to assign a responder to record

      // if responder: this will patch to update status to either complete or role 2

    }
    

    const rows = props.requestData.map((element, index) => {
      const precedence = "fix me"
      return (
      
      <tr key={index}>
        <td>{element.status}</td>
        <td>{element.location}</td>
        <td>{element.callSign}</td>
        <td>{precedence}</td>
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
    )})

    console.log(rows)
  
    const getDetails = (details: TRequestById) => {
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
        
          
          {props.view === "responder" ? 
          // this is the responder modal content
          <Stack justify="flex-start">
            <SimpleGrid cols={2}>{details && getDetails(details)}</SimpleGrid>
            <Divider mt="md" mb="md" />
            <Button radius="md" onClick={() => handleComplete("responder")}>
              Complete
            </Button>
            <Button radius="md" onClick={() => console.log("Role 2")} color={"green"}>
              Role 2
            </Button>
          </Stack>
          
          // This is the dipatcher modal content
          :
          <Stack justify="flex-start">
            <SimpleGrid cols={2}>{details && getDetails(details)}</SimpleGrid>
            <Divider mt="md" mb="md" />
            <Button radius="md" onClick={() => handleComplete("dispatcher")}>
              Complete
            </Button>
            <Button radius="md" onClick={() => console.log("Role 2")} color={"green"}>
              Role 2
            </Button>
          </Stack>
          }
          
          
        
      </Modal>

      <Stack>
        <Table maw="75vw" striped highlightOnHover captionSide="bottom" fontSize="md">
          <thead>
            <tr>
              {props.headers.map((header) =>  <th>{header}</th>)}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Pagination page={activePage} onChange={handleSetPage} total={pages.length} />
      </Stack>
    </>
    )

}export default SharedTable