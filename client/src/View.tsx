import { Group, Loader } from "@mantine/core"
import ky from "ky"
import { useEffect } from "react"
import MainButton from "./components/MainButton.js"
import DispatcherView from "./dispatcher/DispatcherView.js"
import Requestor from "./requestor/Requestor.js"
import ResponderView from "./responder/ResponderView.js"
import { RequestData } from "./schema.js"
import store from "./store.js"
import { getPages } from "./util.js"

function View() {
  const [pages, setPages] = store((state) => [state.pages, state.setPages])
  const view = store((state) => state.view)
  const request = store((state) => state.request)

  async function getData() {
    const responseData = await ky.get("http://localhost:8080/items").json()
    const data = RequestData.parse(responseData)
    setPages(getPages(data))
  }

  useEffect(() => {
    void getData()
  }, [request])

  

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
