import {ActionIcon, Pagination, Stack, Table, Text} from "@mantine/core"
import {IconListDetails} from "@tabler/icons"
import {useState} from "react"
import SharedModal from "./SharedModal"
import {RequestData, TRequestById, TRequestData} from "./View"

interface ViewProps {
    pages: TRequestData[]
    headers: string[]
    view: string
    buttons: JSX.Element[]
    setPages: React.Dispatch<React.SetStateAction<TRequestData[]>>
}

function SharedTable(props: ViewProps) {
    const [opened, setOpened] = useState(false)
    const [details, setDetails] = useState<TRequestById>({status: "empty"})
    const [page, setPage] = useState(1)
    const [currentRequests, setCurrentRequests] = useState<TRequestData>(RequestData.parse(props.pages[0]))

    const handleSetPage = (page: number) => {
        setPage(page)
        setCurrentRequests(RequestData.parse(props.pages[page - 1]))
    }

    const rows = currentRequests.map((element, index) => {
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
                        <IconListDetails size={18}/>
                    </ActionIcon>
                </td>
            </tr>
        )
    })

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
                buttons={props.buttons}
            />

            <Stack>
                <Table maw="75vw" striped highlightOnHover captionSide="bottom" fontSize="md">
                    <thead>
                    <tr>
                        {props.headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
                <Pagination page={page} onChange={handleSetPage} total={props.pages.length}/>
            </Stack>
        </>
    )
}

export default SharedTable
