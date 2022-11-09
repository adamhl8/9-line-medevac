import { Table } from "@mantine/core"

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

function ResponderView() {
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{element.status}</td>
      <td>{element.location}</td>
      <td>{element.callSign}</td>
      <td>{element.precedence}</td>
      <td>{element.specialEquipment}</td>
      <td>{element.security}</td>
      <td>{element.marking}</td>
      <td>{element.details}</td>
    </tr>
  ))

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Status</th>
          <th>Location</th>
          <th>Call Sign</th>
          <th>Precedence</th>
          <th>Special Equipment</th>
          <th>Security</th>
          <th>Marking</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
export default ResponderView
