import { ActionIcon, Button, Divider, Modal, Pagination, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core"
import { IconListDetails } from "@tabler/icons"
import { useState } from "react"
import SharedTable from "./SharedTable"
import { TRequestById, TRequestData } from "./View"

const elements = [
  {
    status: "Pending",
    location: "Austin",
    callSign: "[Call Sign]",
    precedence: "Urgent Surgical",
    specialEquipment: "Hoist",
    security: "Possible Enemy",
    marking: "Green Smoke",
    details: "View",
  },
  {
    status: "Complete",
    location: "Cedar Park",
    callSign: "[Call Sign]",
    precedence: "Urgent",
    specialEquipment: "Litter",
    security: "No enemy troops",
    marking: "Panels",
    details: "View",
  },
  {
    status: "Pending",
    location: "Hutto",
    callSign: "[Call Sign]",
    precedence: "Routine",
    specialEquipment: "None",
    security: "Possible Enemy",
    marking: "Pyrotechnic signal",
    details: "View",
  },
  {
    status: "Pending",
    location: "Leander",
    callSign: "[Call Sign]",
    precedence: "Priority",
    specialEquipment: "Ventilator",
    security: "Possible Enemy",
    marking: "Smoke",
    details: "View",
  },
  {
    status: "Pending",
    location: "Waco",
    callSign: "[Call Sign]",
    precedence: "Convenience",
    specialEquipment: "Hoist",
    security: "No enemy troops",
    marking: "Other",
    details: "View",
  },
]

const elements2 = [
  {
    status: "CHANGED",
    location: "Austin",
    callSign: "[Call Sign]",
    precedence: "Urgent Surgical",
    specialEquipment: "Hoist",
    security: "Possible Enemy",
    marking: "Green Smoke",
    details: "View",
  },
  {
    status: "Complete",
    location: "Cedar Park",
    callSign: "[Call Sign]",
    precedence: "Urgent",
    specialEquipment: "Litter",
    security: "No enemy troops",
    marking: "Panels",
    details: "View",
  },
  {
    status: "Pending",
    location: "Hutto",
    callSign: "[Call Sign]",
    precedence: "Routine",
    specialEquipment: "None",
    security: "Possible Enemy",
    marking: "Pyrotechnic signal",
    details: "View",
  },
  {
    status: "Pending",
    location: "Leander",
    callSign: "[Call Sign]",
    precedence: "Priority",
    specialEquipment: "Ventilator",
    security: "Possible Enemy",
    marking: "Smoke",
    details: "View",
  },
  {
    status: "Pending",
    location: "Waco",
    callSign: "[Call Sign]",
    precedence: "Convenience",
    specialEquipment: "Hoist",
    security: "No enemy troops",
    marking: "Other",
    details: "View",
  },
]

const pages = [[...elements], [...elements2], [...elements]]

// Color text based on content: Possible Enemy is red, No enemy is green, Precendence is colored based on content,
// status is colored based on content.
// maybe color the entire row based on a conditon.

interface ResponderViewProps {
  requestData:TRequestData
}

function ResponderView(props:ResponderViewProps) {
  
  return (
    <>
      <Stack>
        <Title order={1}>MEDEVAC Assignment</Title>
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
export default ResponderView
