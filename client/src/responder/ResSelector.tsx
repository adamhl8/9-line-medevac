import { Button, Group, Input, TextInput } from "@mantine/core"
import ky from "ky"
import store from "../store.js"

export const ResSelector = () => {
  const [responderId, setResponderId] = store((state) => [state.responderId, state.setResponderId])
  const setSearchData = store((state) => state.setSearchData)

  let inputId: number

  function handleChange(id: number) {
    // set state to 0 so button turns red
    if (store.getState().responderId !== 0) {
      store.getState().setResponderId(0)
    }
    inputId = id
  }

  async function handleSubmit() {
    if (inputId < 1 || inputId === undefined) {
      alert("Responder ID must be greater than 0")
      return
    }

    await ky.post("http://localhost:8080/responders", { json: { responderId: inputId } })
    setResponderId(inputId)
    await store.getState().getAndSetResponders()
    setSearchData(inputId.toString())
  }

  return (
    <form onSubmit={() => void handleSubmit()}>
      <Input.Wrapper sx={{ justify: "flex-right" }}>
        <Group>
          <TextInput
            id="responderId"
            defaultValue={responderId}
            placeholder="Responder Id"
            onChange={(event) => handleChange(Number.parseInt(event.target.value))}
          />
          <Button variant="light" type="submit" color={store.getState().responderId > 0 ? "green" : "red"} radius="xl" size="md" uppercase>
            Set Id
          </Button>
        </Group>
      </Input.Wrapper>
    </form>
  )
}
