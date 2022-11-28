import {Pagination, Stack, Table, TextInput} from "@mantine/core"
import {ChangeEvent, useState} from "react"
import {RequestData, TRequestData} from "../schema.js"
import store from "../store.js"
import SharedModal from "./SharedModal"
import TableRow from "./TableRow"

function SharedTable() {
    const pages = store((state) => state.pages)
    const tableHeaders = store((state) => state.tableHeaders)
    const page1 = RequestData.parse((pages && pages[0]) || pages) // if pages exists, pass in first page array, otherwise pages must be empty array
    const [pageNumber, setPageNumber] = useState(1)
    const [page, setPage] = useState<TRequestData>(page1)
    const [searchData, setSearchData] = store((state) => [state.searchData, state.setSearchData])


    if (!pages) return <></>

    const rows = page
        .filter((filterData)=>{
           if (filterData.status.toLowerCase().toString().includes(searchData)){
               return filterData
           } else if (filterData.location.toLowerCase().toString().includes(searchData)){
               return filterData
           } else if (filterData.callSign.toLowerCase().toString().includes(searchData)){
               return filterData
           } else if (filterData.frequency.toString().includes(searchData)){
               return filterData
           } else if (filterData.security.toLowerCase().toString().includes(searchData)){
               return filterData
           } else if (filterData.marking.toLowerCase().toString().includes(searchData)){
               return filterData
           } else if (filterData.responderID.toString().includes(searchData)){
               return filterData
           } else if (filterData.specialEquipment.toLowerCase().toString().includes(searchData)){
               return filterData

               // need to figure out how to get a number to be searchable as "Urgent", "Priority", "Routine"
           }   else if (filterData.byUrgent.toString().includes(searchData || "Urgent")) {
               return filterData
           }
        })
        .map((request, i) => {
        return <TableRow key={i} request={request}/>
    })

    const handleSetPage = (pageNumber: number) => {
        setPageNumber(pageNumber)
        setPage(RequestData.parse(pages[pageNumber - 1]))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchData(e.target.value)
    }

    return (
        <>
            <SharedModal/>
            <TextInput
                onChange={handleChange}
                value={searchData.toLowerCase()}

            >
            </TextInput>
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
                <Pagination page={pageNumber} onChange={handleSetPage} total={pages.length}/>
            </Stack>
        </>
    )

}

export default SharedTable
