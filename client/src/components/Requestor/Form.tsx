import {
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Input,
  Modal,
  MultiSelect,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import ky from "ky"
import React, { Fragment } from "react"
import { RequestById, TRequestData } from "../View"
import { TRequestBody } from "./Requestor"

const locationValidatorTwo = (value: string) => (value.length !== 2 ? "Needs to be Two Characters" : null)
const locationValidatorFive = (value: string) =>
  value.length < 2 || value.length > 5 ? "Needs to be between Two and Five Characters" : null
const locationValidatorThree = (value: string) => (value.length !== 3 ? "Needs to be Three Characters" : null)

interface FormProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  submitted: boolean
  opened: boolean
  request: TRequestBody
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  setRequest: React.Dispatch<React.SetStateAction<TRequestBody>>
}

const Form = (props: FormProps) => {
  const SecurityAtPickupSite = [
    { value: "NoEnemyTroops", label: "No Enemy Troops" },
    { value: "PossibleEnemy", label: "Possible Enemy" },
    { value: "EnemyInAreaCaution", label: "Enemy In Area: Proceed with Caution" },
    { value: "EnemyInAreaEscort", label: "Enemy In Area: Armed Escort Required" },
  ]
  const NBCContamination = [
    // Something possibly wrong here
    { value: "Nuclear", label: "Nuclear" },
    { value: "Biological", label: "Biological" },
    { value: "Chemical", label: "Chemical" },
  ]

  const form = useForm({
    initialValues: {
      status: "",
      location1: "",
      location2: "",
      location3: "",
      location4: "",
      CallFrequency: "",
      CallSign: "",
      UrgentNumber: 0,
      PriorityNumber: 0,
      RoutineNumber: 0,
      SpecialEquipment: "",
      LitterPatientNumber: 0,
      AmbulatoryPatientNumber: 0,
      MethodOfMarkingPickupSite: "",
      SecurityAtPickupSite: "",
      USMilitary: 0,
      USCivilian: 0,
      NonUSMilitary: 0,
      NonUSCivilian: 0,
      NBCContamination: "",
    },
    validate: {
      location1: locationValidatorThree,
      location2: locationValidatorTwo,
      location3: locationValidatorFive,
      location4: locationValidatorFive,
      CallFrequency: (value) => (value.length === 0 ? "Cannot be Empty" : null),
      CallSign: (value) => (value.length === 0 ? "Cannot be Empty" : null),
      UrgentNumber: (value) => (value === 0 ? "Must be more than 0" : null),
      PriorityNumber: (value) => (value === 0 ? "Must be more than 0" : null),
      RoutineNumber: (value) => (value === 0 ? "Must be more than 0" : null),
    },
  })

  async function handleSubmit(): Promise<void> {
    const requestBody = {
      status: "pending",
      location: form.values.location1 + " " + form.values.location2 + " " + form.values.location3 + " " + form.values.location4,
      callSign: form.values.CallSign,
      frequency: form.values.CallFrequency,
      byAmbulatory: form.values.AmbulatoryPatientNumber,
      byLitter: form.values.LitterPatientNumber,
      specialEquipment: form.values.SpecialEquipment[0],
      byUrgent: form.values.UrgentNumber,
      byPriority: form.values.PriorityNumber,
      byRoutine: form.values.RoutineNumber,
      security: form.values.SecurityAtPickupSite[0],
      marking: form.values.MethodOfMarkingPickupSite[0],
      usMil: form.values.USMilitary,
      usCiv: form.values.USCivilian,
      nonUSMil: form.values.NonUSMilitary,
      nonUSCiv: form.values.NonUSCivilian,
      nbc: form.values.NBCContamination[0], // this does not actually populate data
    }

    const validatedRequest = RequestById.parse(requestBody) 

    const response: TRequestData = await ky.post("http://localhost:8080/items", { json: validatedRequest }).json()

    console.log(response)
    props.setSubmitted(true)
    props.setRequest(validatedRequest)
    form.reset()
  }

  const buildRequestDetails = (details: TRequestBody) => {
    const requestDetails = []
    for (const [key, value] of Object.entries(details)) {
      requestDetails.push(
        <Fragment key={key}>
          <Text ta="right">{key}</Text>
          <Text ta="left">{value}</Text>
        </Fragment>,
      )
    }
    return requestDetails
  }

  return (
    <Box w={900}>
      <Modal
        styles={(theme) => ({ modal: { border: `thin solid ${theme.colors.dark[4]}` } })}
        radius="md"
        centered
        overlayOpacity={0.55}
        overlayBlur={3}
        shadow="md"
        opened={props.opened}
        onClose={() => props.setOpened(false)}
        title={"Details"}
      >
        <Stack justify="flex-start">
          <SimpleGrid cols={2}>{!props.request ? <></> : buildRequestDetails(props.request)}</SimpleGrid>
          <Divider mt="md" mb="md" />
        </Stack>
      </Modal>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="lg">
          <Group>
            <Input.Wrapper id="Location" label="Location" size="xl">
              <Group>
                <TextInput id="Location1" placeholder="Grid Zone" {...form.getInputProps("location1")} />
                <TextInput id="Location2" placeholder="Square ID" {...form.getInputProps("location2")} />
                <TextInput id="Location3" placeholder="E/W: 00000" {...form.getInputProps("location3")} />
                <TextInput id="Location4" placeholder="N/S: 00000" {...form.getInputProps("location4")} />
              </Group>
            </Input.Wrapper>
          </Group>
          <Input.Wrapper id="Call Frequency" label="Call Frequency / Call Sign" size="xl">
            <Group>
              <TextInput id="Call Frequency" placeholder="Call Frequency" {...form.getInputProps("CallFrequency")} />
              <TextInput id="Call Sign" placeholder="Call Sign" {...form.getInputProps("CallSign")} />
            </Group>
          </Input.Wrapper>
          <Group>
            <Input.Wrapper id="Urgent Patients" label="Urgent Patients" size="lg">
              <NumberInput mt="sm" min={0} max={10} {...form.getInputProps("UrgentNumber")} />
            </Input.Wrapper>
            <Input.Wrapper id="Priority Patients" label="Priority Patients" size="lg">
              <NumberInput mt="sm" min={0} max={10} {...form.getInputProps("PriorityNumber")} />
            </Input.Wrapper>
            <Input.Wrapper id="Routine Patients" label="Routine Patients" size="lg">
              <NumberInput mt="sm" min={0} max={10} {...form.getInputProps("RoutineNumber")} />
            </Input.Wrapper>
          </Group>
          <Input.Wrapper id="Special Equipment" label="Special Equipment" size="xl">
            <Checkbox.Group orientation="vertical" onChan spacing="xs" defaultValue={["None"]} {...form.getInputProps("SpecialEquipment")}>
              <Checkbox value="None" label="None" />
              <Checkbox value="Hoist" label="Hoist" />
              <Checkbox value="Extraction Equipment" label="Extraction Equipment" />
              <Checkbox value="Ventilator" label="Ventilator" />
            </Checkbox.Group>
          </Input.Wrapper>
          <Group>
            <Input.Wrapper id="Litter" label="Litter Patient Number" size="xl">
              <NumberInput mt="sm" placeholder="Litter Patient Number" min={0} max={10} {...form.getInputProps("LitterPatientNumber")} />
            </Input.Wrapper>
            <Input.Wrapper id="Ambulatory" label="Ambulatory Patient Number" size="xl">
              <NumberInput
                mt="sm"
                placeholder="Ambulatory Patient Number"
                min={0}
                max={10}
                {...form.getInputProps("AmbulatoryPatientNumber")}
              />
            </Input.Wrapper>
          </Group>
          <Input.Wrapper id="Marking" label="Method of Marking Pick-Up Site" size="xl">
            <Checkbox.Group orientation="vertical" spacing="xs" {...form.getInputProps("MethodOfMarkingPickupSite")}>
              <Checkbox value="None" label="None" />
              <Checkbox value="Panels" label="Panels" />
              <Checkbox value="PyrotechnicSignal" label="Pyrotechnic Signal" />
              <Checkbox value="SmokeSignal" label="Smoke Signal" />
              <Checkbox value="Other" label="Other" />
            </Checkbox.Group>
          </Input.Wrapper>
          <Input.Wrapper id="Security" label="Security at Pick-Up Site" size="xl">
            <MultiSelect
              data={SecurityAtPickupSite}
              placeholder="Security at Pick-Up Site"
              {...form.getInputProps("SecurityAtPickupSite")}
            />
          </Input.Wrapper>
          <Group>
            <Input.Wrapper id="US Military" label="US Military" size="lg">
              <NumberInput mt="sm" min={0} max={10} {...form.getInputProps("USMilitary")} />
            </Input.Wrapper>
            <Input.Wrapper id="US Civilian" label="US Civilian" size="lg">
              <NumberInput mt="sm" min={0} max={10} {...form.getInputProps("USCivilian")} />
            </Input.Wrapper>
            <Input.Wrapper id="Non-US Military" label="Non-US Military" size="lg">
              <NumberInput mt="sm" min={0} max={10} {...form.getInputProps("NonUSMilitary")} />
            </Input.Wrapper>
            <Input.Wrapper id="Non-US Civilian" label="Non-US Civilian" size="lg">
              <NumberInput mt="sm" min={0} max={10} {...form.getInputProps("NonUSCivilian")} />
            </Input.Wrapper>
          </Group>
          {/* This seems to be broken */}
          <Input.Wrapper id="NBC" label="NBC Contamination" size="xl">
            <MultiSelect data={NBCContamination} placeholder="NBC Contamination" {...form.getInputProps("NBCContamination")} />
          </Input.Wrapper>
          <Group>
            <Button style={{ marginBottom: 100 }} type="submit" variant="light" color="red" radius="xl" size="md" uppercase>
              Submit
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  )
}
export default Form
