import { Group } from "@mantine/core"
import { z } from 'zod'
import { useState, useEffect } from "react"
import MainButton from "./MainButton"
import Requestor from "./Requestor/Requestor"
import ResponderView from "./ResponderView"
import ky from 'ky'
import DispatcherView from "./DispatcherView"

const RequestById = z.object({
  status:z.string().min(1),
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

const RequestData = RequestById.array()
export type TRequestData = z.infer<typeof RequestData>

function View() {
  const [view, setView] = useState("default")
  const [requestData, setRequestData] = useState<TRequestData>([])

  async function getData() {
    const responseData = await ky.get("http://localhost:8080/items").json()
    setRequestData(RequestData.parse(responseData))
  }

  useEffect(() => {
    getData()
  }, [])

  if (view === "requester") return <Requestor setView={setView} />  
  else if (view === "responder") return <ResponderView view={view} requestData={requestData} />
  else if (view === "dispatcher") return <DispatcherView view={view} requestData={requestData} />
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
