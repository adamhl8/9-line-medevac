import { z } from "zod"

const defaultString = (value: string) => value ?? ""
const defaultNumber = (value: number) => value ?? 0
const notSubmitted = "Not Submitted"

export const RequestById = z.object({
  id: z.number().default(0).transform(defaultNumber),
  status: z.string().default("").transform(defaultString),
  location: z.string().default("").transform(defaultString),
  callSign: z.string().default("").transform(defaultString),
  frequency: z.number().default(0).transform(defaultNumber),
  byAmbulatory: z.number().default(0).transform(defaultNumber),
  byLitter: z.number().default(0).transform(defaultNumber),
  specialEquipment: z.string().default("").transform(defaultString),
  byUrgent: z.number().default(0).transform(defaultNumber),
  byPriority: z.number().default(0).transform(defaultNumber),
  byRoutine: z.number().default(0).transform(defaultNumber),
  security: z.string().default(notSubmitted).transform(defaultString),
  marking: z.string().default(notSubmitted).transform(defaultString),
  usMil: z.number().default(0).transform(defaultNumber),
  usCiv: z.number().default(0).transform(defaultNumber),
  nonUSMil: z.number().default(0).transform(defaultNumber),
  nonUSCiv: z.number().default(0).transform(defaultNumber),
  nbc: z.string().default(notSubmitted).transform(defaultString),
  responderID: z.number().default(0).transform(defaultNumber),
  dispatcherID: z.number().default(0).transform(defaultNumber),
})
export type TRequestById = z.infer<typeof RequestById>

export const RequestData = RequestById.array()
export type TRequestData = z.infer<typeof RequestData>
