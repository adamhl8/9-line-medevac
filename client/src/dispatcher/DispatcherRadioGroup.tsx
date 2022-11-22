import { Radio } from "@mantine/core"
import { TResponder } from "../schema.js"
import store from "../store.js"

export const DispatcherRadioGroup = () => {
  const view = store((state) => state.view)
  const [responderId, setResponderId] = store((state) => [state.responderId, state.setResponderId])
  const responders = store.getState().responders

  if (!responders) return <></>

  return view === "dispatcher" ? (
    <div>
      <Radio.Group name="ResponderMap" label="Responder ID" withAsterisk onChange={(event) => setResponderId(Number.parseInt(event))}>
        {responders.map((responder: TResponder, i) => {
          return <Radio key={i} value={`${responder.responderId}`} label={`${responder.responderId}`} />
        })}
      </Radio.Group>
    </div>
  ) : (
    <></>
  )
}
