import { Pagination, Stack, Table } from "@mantine/core"
import { useState } from "react"
import store from "../store.js"
import { RequestData, TRequestData } from "../View"
import SharedModal from "./SharedModal"
import TableRow from "./TableRow"

function SharedTable() {
  const pages = store((state) => state.pages)
  if (!pages) return <></>
  const tableHeaders = store((state) => state.tableHeaders)

  const page1 = RequestData.parse(pages[0])
  const [pageNumber, setPageNumber] = useState(1)
  const [page, setPage] = useState<TRequestData>(page1)

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
