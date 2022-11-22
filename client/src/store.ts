import ky from "ky"
import create from "zustand"
import { RequestData, ResponderData, TRequestById, TRequestData, TResponderData } from "./schema.js"
import { chunkPages } from "./util"
import dispatcherView from "./dispatcher/DispatcherView";

interface Store {
  pages: TRequestData[] | null
  getAndSetPages: () => Promise<void>

  view: string
  setView: (view: string) => void

  requestSubmitted: boolean
  setRequestSubmitted: (isSubmitted: boolean) => void

  opened: boolean
  setOpened: (opened: boolean) => void

  request: TRequestById | null
  setRequest: (request: TRequestById) => void

  responders: TResponderData | null
  getAndSetResponders: () => Promise<void>

  responderId: number
  setResponderId: (responderId: number) => void

  tableHeaders: string[]
  setTableHeaders: (tableHeaders: string[]) => void

  modalButtons: JSX.Element[]
  setModalButtons: (modalButtons: JSX.Element[]) => void

}

const store = create<Store>((set) => ({
  pages: null,
  getAndSetPages: async () => {
    const responseData = await ky.get("http://localhost:8080/requests").json()
    const data = RequestData.parse(responseData)
    const pages = chunkPages(data)
    set(() => ({ pages }))
  },
  responders: null,
  getAndSetResponders: async () => {
    const responseData = await ky.get("http://localhost:8080/responders").json()
    const data = ResponderData.parse(responseData)
    const responders = data
    set(() => ({ responders }))
  },
  responderId: 0,
  setResponderId: (responderId: number) => set(() => ({responderId})),
  view: "default",
  setView: (view: string) => set(() => ({ view })),
  requestSubmitted: false,
  setRequestSubmitted: (requestSubmitted: boolean) => set(() => ({ requestSubmitted })),
  opened: false,
  setOpened: (opened: boolean) => set(() => ({ opened })),
  request: null,
  setRequest: (request: TRequestById) => set(() => ({ request })),
  tableHeaders: [],
  setTableHeaders: (tableHeaders: string[]) => set(() => ({ tableHeaders })),
  modalButtons: [],
  setModalButtons: (modalButtons: JSX.Element[]) => set(() => ({ modalButtons })),

}))

export default store
