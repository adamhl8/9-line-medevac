import { Radio } from "@mantine/core"
import store from "../store.js"

export const DispatcherRadioGroup = () => {
  const view = store((state) => state.view)
  const [responderId, setResponderId] = store((state) => [state.responderId, state.setResponderId])
  const responders = [1234, 4321, 6643, 5555, 4223, 9770]

  return view === "dispatcher" ? (
    <div>
      <Radio.Group name="testingMapForResoponder" label="test" withAsterisk value={responderId} onChange={setResponderId}>
        {responders.map((responder, i) => {
          return <Radio key={i} value={`${responder}`} label={`${responder}`} />
        })}
      </Radio.Group>
    </div>
  ) : (
    <></>
  )
}
