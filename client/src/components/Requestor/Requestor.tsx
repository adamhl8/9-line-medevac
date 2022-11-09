import { Grid } from '@mantine/core';
import Fourm from './Fourm'

const Requestor = () =>{

    return (<>
        <Grid>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={5}><Fourm /></Grid.Col>
            <Grid.Col span={3}></Grid.Col>
        </Grid>
        </>)
}

export default Requestor;