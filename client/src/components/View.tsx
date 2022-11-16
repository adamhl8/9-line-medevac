import { Group, Loader } from "@mantine/core"
import ky from "ky"
import { useEffect, useState } from "react"
import { z } from "zod"
import { getPages } from "../util.js"
import DispatcherView from "./DispatcherView"
import MainButton from "./MainButton"
import Requestor from "./Requestor/Requestor"
import ResponderView from "./ResponderView"

export const RequestById = z.object({
  id: z.number(),
  status: z.string().min(1),
  location:z.string().default("Austin"),
  callSign:z.string().default("Nik"),
  frequency:z.number().default(0),
  byAmbulatory:z.number().default(0),
  byLitter:z.number().default(0),
  specialEquipment:z.string().default("jungle PENETRATOR"),
  byUrgent:z.number().default(0),
  byPriority:z.number().default(0),
  byRoutine:z.number().default(0),
  security:z.string().default("No Enemy in the Area"),
  marking:z.string().default("None"),
  usMil:z.number().default(0),
  usCiv:z.number().default(0),
  nonUSMil:z.number().default(0),
  nonUSCiv:z.number().default(0),
  nbc:z.string().default("None"),
  responderID:z.number().default(0),
  dispatcherID:z.number().default(0)
})

export type TRequestById = z.infer<typeof RequestById>

export const RequestData = RequestById.array()
export type TRequestData = z.infer<typeof RequestData>

function View() {
  const [view, setView] = useState("default")
  const [pages, setPages] = useState<TRequestData[]>()

  async function getData() {
    const responseData = await ky.get("http://localhost:8080/items").json()
    const data = RequestData.parse(responseData)
    setPages(getPages(data))
  }

  useEffect(() => {
    void getData()
  }, [])

  if (!pages) return <Loader size="xl" />

  if (view === "requester") return <Requestor setView={setView} />
  else if (view === "responder") return <ResponderView pages={pages} />
  else if (view === "dispatcher") return <DispatcherView pages={pages} setView={setView}/>
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
