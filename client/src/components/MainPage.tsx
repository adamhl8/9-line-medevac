import { Group } from "@mantine/core"
import { useState } from "react"
import MainButton from "./MainButton"
import ResponderView from "./ResponderView"

function MainPage() {
  const [view, setView] = useState("default")

  // eslint-disable-next-line unicorn/prefer-switch
  if (view === "requester") {
    return <h1>:)</h1>
  } else if (view === "responder") {
    return <ResponderView />
  } else if (view === "dispatcher") {
    return <h1>:(</h1>
  } else {
    return (
      <Group position="center" spacing="lg">
        <MainButton text="Requester" color="red" setView={setView} />
        <MainButton text="Responder" color="green" setView={setView} />
        <MainButton text="Dispatcher" color="blue" setView={setView} />
      </Group>
    )
  }
}

export default MainPage
