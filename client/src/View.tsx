import { Group, Loader } from "@mantine/core"
import { useEffect } from "react"
import MainButton from "./components/MainButton.js"
import DispatcherView from "./dispatcher/DispatcherView.js"
import Requestor from "./requestor/Requestor.js"
import ResponderView from "./responder/ResponderView.js"
import store from "./store.js"

function View() {
  const [pages, getAndSetPages] = store((state) => [state.pages, state.getAndSetPages])
  const view = store((state) => state.view)

  useEffect(() => {
    void getAndSetPages()
  }, [])

  if (!pages) return <Loader size="xl" />

  if (view === "requester") return <Requestor />
  else if (view === "responder") return <ResponderView />
  else if (view === "dispatcher") return <DispatcherView />
  else {
    return (
      <Group position="center" spacing="lg">
        <MainButton text="Requester" color="red" />
        <MainButton text="Responder" color="green" />
        <MainButton text="Dispatcher" color="blue" />
      </Group>
    )
  }
}

export default View
