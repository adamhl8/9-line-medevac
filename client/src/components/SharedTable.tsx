import { Pagination, Stack, Table } from "@mantine/core"
import React, { useState } from "react"
import { MedevacRow } from "./MedevacRow"
import SharedModal from "./SharedModal"
import { RequestById, RequestData, TRequestById, TRequestData } from "./View"

interface SharedTableProps {
  view: string
  pages: TRequestData[]
  headers: string[]
  buttons: JSX.Element[]
  responderID: string
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  setResponderID: React.Dispatch<React.SetStateAction<string>>
  setCurrentMedevac: React.Dispatch<React.SetStateAction<number>>
}

function SharedTable({
  pages,
  headers,
  buttons,
  responderID,
  setCurrentMedevac,
  setResponderID,
  view,
  opened,
  setOpened,
}: SharedTableProps) {
  const page1 = RequestData.parse(pages[0])
  const [pageNumber, setPageNumber] = useState(1)
  const [page, setPage] = useState<TRequestData>(page1)
  const [request, setRequest] = useState<TRequestById>(RequestById.parse(page1[0]))
  // const [opened, setOpened] = useState(false)

  const rows = page.map((request, i) => {
    const precedence = "fix me"
    return (
      <MedevacRow key={request.id} request={request} setRequest={setRequest} setOpened={setOpened} setCurrentMedevac={setCurrentMedevac} />
    )
  })

  const handleSetPage = (pageNumber: number) => {
    setPageNumber(pageNumber)
    setPage(RequestData.parse(pages[pageNumber - 1]))
  }

  return (
    <>
      <SharedModal
        request={request}
        opened={opened}
        setOpened={setOpened}
        buttons={buttons}
        responderID={responderID}
        view={view}
        setResponderID={setResponderID}
      />

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
