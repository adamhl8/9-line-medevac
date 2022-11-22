import { Center, Stack, Title } from "@mantine/core"
import { useEffect } from "react"
import Navbar from "../components/Navbar.js"
import SharedTable from "../components/SharedTable"
import store from "../store.js"
import CompleteButton from "./CompleteButton"
import RoleTwoButton from "./RoleTwoButton.js"

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

function ResponderView() {
  const setModalButtons = store((state) => state.setModalButtons)
  const setTableHeaders = store((state) => state.setTableHeaders)
  const getAndSetPages = store((state)=> state.getAndSetPages)

  useEffect(() => {
    setModalButtons([<CompleteButton key="complete-button" />, <RoleTwoButton key="roleTwo-button" />])
    setTableHeaders(["status", "location", "callSign", "precedence", "specialEquipment", "security", "marking", "details"])
    void getAndSetPages()
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Center>
        <Stack>
          <Title order={1}>Respond</Title>
          <SharedTable />
        </Stack>
      </Center>
    </>
  )
}

export default ResponderView
