import { AppShell, Center, Header, MantineProvider } from "@mantine/core"
import View from "./components/View"
const App = () => {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            test test
          </Header>
        }
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Center>
          <View />
        </Center>
      </AppShell>
    </MantineProvider>
  )
}

export default App
