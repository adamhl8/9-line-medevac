import { Box, MantineProvider, Stack } from "@mantine/core"
import View from "./View"

export const URL = "https://9-line.adamhl.dev"

const App = () => {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
      <Stack spacing={0}>
        <Box
          w="100vw"
          h={60}
          sx={(theme) => ({
            backgroundColor: "#3b473d",
            textAlign: "center",
            padding: theme.spacing.md,
            border: "",
          })}
        >
          <b>9-Line</b>
        </Box>
        <View />
      </Stack>
    </MantineProvider>
  )
}

export default App
