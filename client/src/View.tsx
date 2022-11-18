import { Group, Loader } from "@mantine/core"
import ky from "ky"
import { useEffect, useState } from "react"
import { z } from "zod"
import MainButton from "./components/MainButton.js"
import DispatcherView from "./dispatcher/DispatcherView.js"
import Requestor from "./requestor/Requestor.js"
import ResponderView from "./responder/ResponderView.js"
import { getPages } from "./util.js"

export const RequestById = z.object({
  id: z.number(),
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
  const [view, setView] = useState("default")
  const [pages, setPages] = useState<TRequestData[]>()
  const [responderArray, setResponderArray] = useState<number>(0)

  async function getData() {
    const responseData = await ky.get("http://localhost:8080/items").json()
    const data = RequestData.parse(responseData)
    console.log(data)
    setPages(getPages(data))
  }

  useEffect(() => {
    void getData()
    console.log(responderArray)
  }, [responderArray])

  if (!pages) return <Loader size="xl" />

  if (view === "requester") return <Requestor setView={setView} />
  else if (view === "responder") return <ResponderView pages={pages} view={view} setView={setView} />
  else if (view === "dispatcher")
    return (
      <DispatcherView pages={pages} view={view} setView={setView} responderArray={responderArray} setResponderArray={setResponderArray} />
    )
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
