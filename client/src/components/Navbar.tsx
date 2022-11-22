import {Box, Button, Grid, Group} from "@mantine/core"
import store from "../store.js"

function Navbar() {
    const setView = store((state) => state.setView)
    const view = store((state) => state.view)
    const getAndSetPages = store ((state) => state.getAndSetPages)

    const handleClickHome = async () => {
        await getAndSetPages()
        setView("default")
    }

    const handleClickResponder = async () => {
        await getAndSetPages()
        setView("responder")
    }

    const handleClickDispatcher = async () => {
        await getAndSetPages()
        setView("dispatcher")
    }

    return view === "dispatcher" ? (
        <Box
            w="100vw"
            h={50}
            mb={25}
            // opacity = {.85}
            sx={(theme) => ({
                backgroundColor: "#488047", //: "#854040",
                textAlign: "center",
                padding: theme.spacing.md,
                border: "",
            })}
        >
            <Grid justify="center">
                <Grid.Col span="auto">
                    <Button.Group>
                        <Button
                            variant="light"
                            color="gray"
                            onClick={
                                () => void handleClickHome()
                            }
                        >
                            <b>HOME</b>
                        </Button>
                        <Button
                            variant="light"
                            color="gray"
                            onClick={
                                () => void handleClickResponder()
                            }
                        >
                            RESPONDER
                        </Button>
                    </Button.Group>
                </Grid.Col>
                <Grid.Col span="auto"></Grid.Col>
                <Grid.Col span={2} offset={2}>
                    <Group></Group>
                </Grid.Col>
            </Grid>
        </Box>
    ) : (
        <Box
            w="100vw"
            h={50}
            mb={25}
            // opacity = {.85}
            sx={(theme) => ({
                backgroundColor: "#488047", //: "#854040",
                textAlign: "center",
                padding: theme.spacing.md,
                border: "",
            })}
        >
            <Grid justify="center">
                <Grid.Col span="auto">
                    <Button.Group>
                        <Button
                            variant="light"
                            color="gray"
                            onClick={
                                () => void handleClickHome()
                            }
                        >
                            <b>HOME</b>
                        </Button>
                        <Button
                            variant="light"
                            color="gray"
                            onClick={
                                () => void handleClickDispatcher()
                            }
                        >
                            DISPATCHER
                        </Button>
                    </Button.Group>
                </Grid.Col>
                <Grid.Col span="auto"></Grid.Col>
                <Grid.Col span={2} offset={2}>
                    <Group></Group>
                </Grid.Col>
            </Grid>
        </Box>
    );
}

export default Navbar
