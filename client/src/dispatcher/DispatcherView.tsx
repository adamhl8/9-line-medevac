import { Center, Stack, Title } from "@mantine/core"
import { useEffect } from "react"
import Navbar from "../components/Navbar.js"
import SharedTable from "../components/SharedTable"
import store from "../store.js"
import AssignButton from "./AssignButton.js"

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

function DispatcherView() {
  const setModalButtons = store((state) => state.setModalButtons)
  const setTableHeaders = store((state) => state.setTableHeaders)

  useEffect(() => {
    setModalButtons([<AssignButton key="assign-button" />])
    setTableHeaders(["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"])
  }, [])

  return (
    <>
      <Navbar />
      <Center>
        <Stack>
          <Title order={1}>Dispatch</Title>
          <SharedTable />
        </Stack>
      </Center>
    </>
  )
}

export default DispatcherView
