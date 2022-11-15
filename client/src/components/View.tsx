import { Group } from "@mantine/core"
import { useState } from "react"
import MainButton from "./MainButton"
import Requestor from "./Requestor/Requestor"
import ResponderView from "./ResponderView"

function View() {
  const [view, setView] = useState("default")

  if (view === "requester") return <Requestor setView={setView} />
  else if (view === "responder") return <ResponderView />
  else if (view === "dispatcher") return <h1>:(</h1>
  else {
    return (
      <Group position="center" spacing="lg">
        <MainButton text="Requester" color="red" setView={setView} />
        <MainButton text="Responder" color="green" setView={setView} />
        <MainButton text="Dispatcher" color="blue" setView={setView} />
      </Group>
    )
  }
}

export default View
