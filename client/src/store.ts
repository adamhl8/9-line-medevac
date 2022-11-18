import create from "zustand"
import { TRequestById, TRequestData } from "./View.js"

interface Store {
  pages: TRequestData[] | null
  setPages: (pages: TRequestData[]) => void

  view: string
  setView: (view: string) => void

  requestSubmitted: boolean
  setRequestSubmitted: (isSubmitted: boolean) => void

  opened: boolean
  setOpened: (opened: boolean) => void

  request: TRequestById | null
  setRequest: (request: TRequestById) => void

  responderId: string
  setResponderId: (responderId: string) => void

  tableHeaders: string[]
  setTableHeaders: (tableHeaders: string[]) => void

  modalButtons: JSX.Element[]
  setModalButtons: (modalButtons: JSX.Element[]) => void
}

const store = create<Store>((set) => ({
  pages: null,
  setPages: (pages: TRequestData[]) => set(() => ({ pages })),
  view: "default",
  setView: (view: string) => set(() => ({ view })),
  requestSubmitted: false,
  setRequestSubmitted: (requestSubmitted: boolean) => set(() => ({ requestSubmitted })),
  opened: false,
  setOpened: (opened: boolean) => set(() => ({ opened })),
  request: null,
  setRequest: (request: TRequestById) => set(() => ({ request })),
  responderId: "",
  setResponderId: (responderId: string) => set(() => ({ responderId })),
  tableHeaders: [],
  setTableHeaders: (tableHeaders: string[]) => set(() => ({ tableHeaders })),
  modalButtons: [],
  setModalButtons: (modalButtons: JSX.Element[]) => set(() => ({ modalButtons })),
}))

export default store
