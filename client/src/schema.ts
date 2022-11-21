import { z } from "zod"

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
