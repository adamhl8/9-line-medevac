import { Button } from "@mantine/core"
interface MainButtonProps {
  text: string
  color: string
  setView: React.Dispatch<React.SetStateAction<string>>
}

function MainButton({ text, color, setView }: MainButtonProps) {
  return (
    <Button color={color} radius="md" size="lg" onClick={() => setView(text.toLowerCase())}>
      {text}
    </Button>
  )
}
export default MainButton
