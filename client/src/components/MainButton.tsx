import { Button } from "@mantine/core"
import store from "../store.js"

interface MainButtonProps {
  text: string
  color: string
}

function MainButton({ text, color }: MainButtonProps) {
  const setView = store((state) => state.setView)

  return (
    <Button mt={"40vh"} color={color} variant="light" radius="xl" size="lg" onClick={() => setView(text.toLowerCase())}>
      {text}
    </Button>
  )
}

export default MainButton
