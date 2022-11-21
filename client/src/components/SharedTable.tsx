import { Pagination, Stack, Table } from "@mantine/core"
import { useState } from "react"
import { RequestData, TRequestData } from "../schema.js"
import store from "../store.js"
import SharedModal from "./SharedModal"
import TableRow from "./TableRow"

function SharedTable() {
  const pages = store((state) => state.pages)
  const tableHeaders = store((state) => state.tableHeaders)
  const page1 = RequestData.parse((pages && pages[0]) || pages) // if pages exists, pass in first page array, otherwise pages must be empty array
  const [pageNumber, setPageNumber] = useState(1)
  const [page, setPage] = useState<TRequestData>(page1)

  if (!pages) return <></>

  const rows = page.map((request, i) => {
    return <TableRow key={i} request={request} />
  })

  const handleSetPage = (pageNumber: number) => {
    setPageNumber(pageNumber)
    setPage(RequestData.parse(pages[pageNumber - 1]))
  }

  return (
    <>
      <SharedModal />
      <Stack>
        <Table maw="75vw" striped highlightOnHover captionSide="bottom" fontSize="md">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th key={header}>{header.replace(/([a-z](?=[A-Z]))/g, "$1 ").toUpperCase()}</th>
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
