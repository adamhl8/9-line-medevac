import { Grid, Box, Stack } from '@mantine/core';
import Fourm from './Fourm'
import {useState} from "react";

const Requestor = () =>{
    const [submitted, setSubmitted] = useState(false)

    return (<>
        <Stack>
            <Box
                sx={(theme) => ({
                    backgroundColor: submitted ? 'green' : 'red',
                    textAlign: 'center',
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                    // cursor: 'pointer',

                    // '&:hover': {
                    //     backgroundColor:
                    //         theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                    // },
                })}
            >
                <b>YOU HAVE NOT SUBMITTED YOUR 9-LINE</b>
            </Box>
            <Grid>
                <Grid.Col span={2}></Grid.Col>
                <Grid.Col span={12}><Fourm /></Grid.Col>
                <Grid.Col span={2}></Grid.Col>
            </Grid>
        </Stack>
        </>)
}

export default Requestor;