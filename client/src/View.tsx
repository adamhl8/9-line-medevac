import { Group, Loader } from "@mantine/core"
import ky from "ky"
import { useEffect } from "react"
import { z } from "zod"
import MainButton from "./components/MainButton.js"
import DispatcherView from "./dispatcher/DispatcherView.js"
import Requestor from "./requestor/Requestor.js"
import ResponderView from "./responder/ResponderView.js"
import store from "./store.js"
import { getPages } from "./util.js"

export const RequestById = z.object({
  id: z.number().default(0),
  status: z.string().min(1),
  location: z.string().default("Austin"),
  callSign: z.string().default("Nik"),
  frequency: z.number().default(0),
  byAmbulatory: z.number().default(0),
  byLitter: z.number().default(0),
  specialEquipment: z.string().default("jungle PENETRATOR"),
  byUrgent: z.number().default(0),
  byPriority: z.number().default(0),
  byRoutine: z.number().default(0),
  security: z.string().default("No Enemy in the Area").nullable(),
  marking: z.string().default("None").nullable(),
  usMil: z.number().default(0).nullable(),
  usCiv: z.number().default(0).nullable(),
  nonUSMil: z.number().default(0).nullable(),
  nonUSCiv: z.number().default(0).nullable(),
  nbc: z.string().default("None").nullable(),
  responderID: z.number().default(0).nullable(),
  dispatcherID: z.number().default(0).nullable(),
})

export type TRequestById = z.infer<typeof RequestById>

export const RequestData = RequestById.array()
export type TRequestData = z.infer<typeof RequestData>

function View() {
  const [pages, setPages] = store((state) => [state.pages, state.setPages])
  const view = store((state) => state.view)

  async function getData() {
    const responseData = await ky.get("http://localhost:8080/items").json()
    const data = RequestData.parse(responseData)
    console.log(data)
    setPages(getPages(data))
  }

  useEffect(() => {
    void getData()
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
