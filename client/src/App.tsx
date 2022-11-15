import {AppShell, Center, Header, MantineProvider, Stack, Box} from "@mantine/core"
import View from "./components/View"
const App = () => {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
      {/*<AppShell*/}
      {/*  padding="md"*/}
      {/*  header={*/}
      {/*    <Header height={60} p="xs">*/}
      {/*      test test*/}
      {/*    </Header>*/}
      {/*  }*/}
      {/*  styles={(theme) => ({*/}
      {/*    main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },*/}
      {/*  })}*/}
      {/*>*/}
      {/*  <Center>*/}
      {/*    <View />*/}
      {/*  </Center>*/}
      {/*</AppShell>*/}

        <Stack spacing={0}>
            <Box
                w="100vw"
                h={60}
                sx={(theme) => ({
                    backgroundColor: '#3b473d' ,
                    textAlign: 'center',
                    padding: theme.spacing.md,
                    border: ""
                })}

            >
                <b>9-Line</b>
            </Box>
            <View/>


        </Stack>
    </MantineProvider>
  )
}

export default App
