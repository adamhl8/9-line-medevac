import { ActionIcon, Button, Divider, Modal, Pagination, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"
import SharedModal from "./SharedModal"
import { TRequestById, TRequestData } from "./View"

interface ViewProps {
  requestData:TRequestData
  headers:String[]
  view:string
  buttons: JSX.Element[]
}

function SharedTable(props:ViewProps) {

    const [opened, setOpened] = useState(false)
    const [details, setDetails] = useState<TRequestById>({status: "empty"})
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
      <SharedModal 
        view={props.view} 
        details={details} 
        getDetails={getDetails} 
        opened={opened} 
        setOpened={setOpened} 
        requestData={props.requestData}
        buttons={props.buttons}
        />

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