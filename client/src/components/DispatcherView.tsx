import { ActionIcon, Button, Divider, Modal, Pagination, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"
import SharedTable from "./SharedTable"
import { TRequestById, TRequestData } from "./View"


// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

interface ResponderViewProps {
  requestData:TRequestData
}

function DispatcherView(props:ResponderViewProps) {
  
  return (
    <>
      <Stack>
        <Title order={1}>MEDEVAC Dispatch</Title>
        <Title order={5}>SE Texas</Title>
        <SharedTable requestData={props.requestData} headers={[
          "status",
          "location",
          "callSign",
          "precedence",
          "specialEquipment",
          "security",
          "marking",
          "details"]}/>

      </Stack>
    </>
  )
}
export default DispatcherView
