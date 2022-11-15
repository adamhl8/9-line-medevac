import { Group } from "@mantine/core"
import ky from "ky"
import { useEffect, useState } from "react"
import { z } from "zod"
import DispatcherView from "./DispatcherView"
import MainButton from "./MainButton"
import Requestor from "./Requestor/Requestor"
import ResponderView from "./ResponderView"

const RequestById = z.object({
  status: z.string().min(1),
  // location:z.string(),
  // callSign:z.string(),
  // frequency:z.number(),
  // byAmbulatory:z.number(),
  // byLitter:z.number(),
  // specialEquipment:z.string(),
  // byUrgent:z.number(),
  // byPriority:z.number(),
  // byRoutine:z.number(),
  // security:z.string(),
  // marking:z.string(),
  // usMil:z.number(),
  // usCiv:z.number(),
  // nonUSMil:z.number(),
  // nonUSCiv:z.number(),
  // nbc:z.string(),
  // responderID:z.number(),
  // dispatcherID:z.number()
})
export type TRequestById = z.infer<typeof RequestById>

export const RequestData = RequestById.array()
export type TRequestData = z.infer<typeof RequestData>

function View() {
  const [view, setView] = useState("default")
  const [pages, setPages] = useState<TRequestData[]>([[]])

  async function getData() {
    const responseData = await ky.get("http://localhost:8080/items").json()
    const data = RequestData.parse(responseData)
    const chunkedData = []
    const chunkSize = 10
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize)
      chunkedData.push(chunk)
    }
    setPages(chunkedData)
  }

  useEffect(() => {
    void getData()
  }, [])

  if (view === "requester") return <Requestor setView={setView} />
  else if (view === "responder") return <ResponderView view={view} pages={pages} setPages={setPages} />
  else if (view === "dispatcher") return <DispatcherView view={view} pages={pages} setPages={setPages} />
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
