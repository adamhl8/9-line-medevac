import { Loader } from "@mantine/core"
import { useEffect } from "react"
import DispatcherView from "./dispatcher/DispatcherView.js"
import Requestor from "./requestor/Requestor.js"
import ResponderView from "./responder/ResponderView.js"
import store from "./store.js"

function View() {
  const [pages, getAndSetPages] = store((state) => [state.pages, state.getAndSetPages])
  const getAndSetResponders = store((state) => state.getAndSetResponders)
  const view = store((state) => state.view)
  
  useEffect(() => {
    void getAndSetPages()
    void getAndSetResponders()
  }, [])

  if (!pages) return <Loader size="xl" />

  if (view === "requester") return <Requestor />
  else if (view === "responder") return <ResponderView />
  else if (view === "dispatcher") return <DispatcherView />
  else {
    return <Requestor />
  }
}

export default View
