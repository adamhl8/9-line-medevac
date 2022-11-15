import {Grid, Box, Stack, Container, Button, Space} from '@mantine/core';
import Fourm from './Fourm'
import {useState} from "react";

interface settingView {
    setView: React.Dispatch<React.SetStateAction<string>>,
}

const Requestor = (props : settingView) => {
    const [submitted, setSubmitted] = useState(false)

    const subNavBar = () => {

        if (submitted === true) {
            return (<>
                <Box
                    w="100vw"
                    h={50}
                    mb={25}
                    // opacity = {.85}
                    sx={(theme) => ({
                        backgroundColor: '#488047',
                        textAlign: 'center',
                        padding: theme.spacing.md,
                        border: ""
                    })}
                >
                    <Grid justify="center">
                        <Grid.Col span={4}>
                            <Button.Group>
                                <Button  variant="light" color="gray" onClick={()=>{props.setView('requester')}}>NEW FORM</Button>
                                <Button  variant="light" color="gray"  onClick={()=>{props.setView('responder')}}>RESPONDER</Button>
                                <Button  variant="light" color="gray" onClick={()=>{props.setView('dispatcher')}}>DISPATCER</Button>
                            </Button.Group>
                        </Grid.Col>
                        <Grid.Col span={4}><b>9-LINE HAS BEEN SUBMITTED</b></Grid.Col>
                        <Grid.Col span={4}></Grid.Col>
                    </Grid>
                </Box>
                <Stack align="center">
                    <Fourm setSubmitted={setSubmitted} submitted={submitted}/>
                    {/*<Fourm />*/}
                </Stack>
            </>)
        }
        if (submitted === false) {
            return (<>
                <Box
                    w="100vw"
                    h={50}
                    mb={25}
                    // opacity = {.85}
                    sx={(theme) => ({
                        backgroundColor: '#854040',
                        textAlign: 'center',
                        padding: theme.spacing.md,
                        border: ""
                    })}
                >
                    <Grid justify="center" align="center">
                        <Grid.Col span={4}  >
                            <Button.Group>
                                <Button  variant="light" color="gray" size="xs" radius="xl" uppercase onClick={()=>{props.setView('requester')}}>NEW FORM</Button>
                                <Button  variant="light" color="gray"  size="xs" radius="xl" uppercase onClick={()=>{props.setView('responder')}} >RESPONDER</Button>
                                <Button  variant="light" color="gray" size="xs" radius="xl" uppercase onClick={()=>{props.setView('dispatcher')}} > DISPATCER</Button>
                            </Button.Group>
                        </Grid.Col>
                        <Grid.Col span={4}><b>9-LINE HAS NOT BEEN SUBMITTED</b></Grid.Col>
                        <Grid.Col span={4}></Grid.Col>
                    </Grid>
                </Box>
                <Stack align="center">
                    <Fourm setSubmitted={setSubmitted} submitted={submitted}/>
                    {/*<Fourm />*/}
                </Stack>

            </>)
        }

    }

    return (<>
        {subNavBar()}


    </>)
}

export default Requestor;