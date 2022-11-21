import { z } from "zod"

const defaultString = (value: unknown) => value ?? ""
const defaultNumber = (value: unknown) => value ?? 0

export const RequestById = z.object({
  id: z.number().transform(defaultNumber),
  status: z.string().transform(defaultString),
  location: z.string().transform(defaultString),
  callSign: z.string().transform(defaultString),
  frequency: z.number().transform(defaultNumber),
  byAmbulatory: z.number().transform(defaultNumber),
  byLitter: z.number().transform(defaultNumber),
  specialEquipment: z.string().transform(defaultString),
  byUrgent: z.number().transform(defaultNumber),
  byPriority: z.number().transform(defaultNumber),
  byRoutine: z.number().transform(defaultNumber),
  security: z.string().transform(defaultString),
  marking: z.string().transform(defaultString),
  usMil: z.number().transform(defaultNumber),
  usCiv: z.number().transform(defaultNumber),
  nonUSMil: z.number().transform(defaultNumber),
  nonUSCiv: z.number().transform(defaultNumber),
  nbc: z.string().transform(defaultString).nullish(),
  responderID: z.number().transform(defaultNumber),
  dispatcherID: z.number().transform(defaultNumber),
})
export type TRequestById = z.infer<typeof RequestById>

export const RequestData = RequestById.array()
export type TRequestData = z.infer<typeof RequestData>
