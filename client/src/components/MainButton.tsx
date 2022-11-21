import { Button } from "@mantine/core"
import store from "../store.js"

interface MainButtonProps {
  text: string
  color: string
}

function MainButton({ text, color }: MainButtonProps) {
  const setView = store((state) => state.setView)
  const getAndSetPages = store((state) => state.getAndSetPages)

  const handleClick = async () => {
    await getAndSetPages()
    setView(text.toLowerCase())
  }

  return (
    <Button mt={"40vh"} color={color} variant="light" radius="xl" size="lg" onClick={() => void handleClick()}>
      {text}
    </Button>
  )
}

export default MainButton
