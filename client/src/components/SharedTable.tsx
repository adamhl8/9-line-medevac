import { ActionIcon, Pagination, Stack, Table } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"
import SharedModal from "./SharedModal"
import { RequestById, RequestData, TRequestById, TRequestData } from "./View"

interface SharedTableProps {
  pages: TRequestData[]
  headers: string[]
  buttons: JSX.Element[]
}

function SharedTable({ pages, headers, buttons }: SharedTableProps) {
  const page1 = RequestData.parse(pages[0])
  const [pageNumber, setPageNumber] = useState(1)
  const [page, setPage] = useState<TRequestData>(page1)
  const [request, setRequest] = useState<TRequestById>(RequestById.parse(page1[0]))
  const [opened, setOpened] = useState(false)

  const rows = page.map((request, i) => {
    const precedence = "fix me"
    return (
      <tr key={i}>
        <td>{request.status}</td>
        <td>{request.location}</td>
        <td>{request.callSign}</td>
        <td>{precedence}</td>
        <td>{request.specialEquipment}</td>
        <td>{request.security}</td>
        <td>{request.marking}</td>
        <td>
          <ActionIcon
            variant="outline"
            onClick={() => {
              setRequest(request)
              setOpened(true)
            }}
          >
            <IconListDetails size={18} />
          </ActionIcon>
        </td>
      </tr>
    )
  })

  const handleSetPage = (pageNumber: number) => {
    setPageNumber(pageNumber)
    setPage(RequestData.parse(pages[pageNumber - 1]))
  }

  return (
    <>
      <SharedModal request={request} opened={opened} setOpened={setOpened} buttons={buttons} />

      <Stack>
        <Table maw="75vw" striped highlightOnHover captionSide="bottom" fontSize="md">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Pagination page={pageNumber} onChange={handleSetPage} total={pages.length} />
      </Stack>
    </>
  )
}

export default SharedTable
