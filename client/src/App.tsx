import { MantineProvider } from "@mantine/core"

const App = () => {

  return (
    <MantineProvider theme={{ colorScheme: "light" }} withGlobalStyles withNormalizeCSS>
    </MantineProvider>
  )
}

export default App
