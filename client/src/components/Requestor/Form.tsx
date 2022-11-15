import { Box, Button, Checkbox, Group, Input, MultiSelect, NumberInput, Stack, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import React from "react"

const locationValidatorTwo = (value: string) => (value.length < 2 ? "Cannot be Less Than Two Characters" : null)
const locationValidatorThree = (value: string) => (value.length < 3 ? "Cannot be Less Than Three Characters" : null)

interface FormProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  submitted: boolean
}

const Form = (props: FormProps) => {
  const Precedence = [
    { value: "Urgent", label: "Urgent" },
    { value: "Urgent Surgical", label: "Urgent Surgical" },
    { value: "Priority", label: "Priority" },
    { value: "Routine", label: "Routine" },
  ]
  const SecurityAtPickupSite = [
    { value: "NoEnemyTroops", label: "No Enemy Troops" },
    { value: "PossibleEnemy", label: "Possible Enemy" },
    { value: "EnemyInAreaCaution", label: "Enemy In Area: Proceed with Caution" },
    { value: "EnemyInAreaEscort", label: "Enemy In Area: Armed Escort Required" },
  ]
  const PatientNationalityandStatus = [
    { value: "USMilitary", label: "US Military" },
    { value: "USCivilian", label: "US Civilian" },
    { value: "Non-US Military", label: "Non-US Military" },
    { value: "Non-USCivilian", label: "Non-USCivilian" },
    { value: "EPW", label: "EPW" },
  ]
  const NCBCContamination = [
    { value: "Nuclear", label: "Nuclear" },
    { value: "Biological", label: "Biological" },
    { value: "Chemical", label: "Chemical" },
  ]
  const form = useForm({
    initialValues: {
      location1: "",
      location2: "",
      location3: "",
      location4: "",
      CallFrequencyCallSignSuffix: "",
      PatientNumber: 0,
      Precedence: "",
      SpecialEquipment: "",
      LitterPatientNumber: 0,
      AmbulatoryPatientNumber: 0,
      MethodOfMarkingPickupSite: "",
      SecurityAtPickupSite: "",
      PatientNationalityAndStatus: "",
      NBC: "",
    },
    validate: {
      location1: locationValidatorThree,
      location2: locationValidatorTwo,
      location3: locationValidatorTwo,
      location4: locationValidatorTwo,
      CallFrequencyCallSignSuffix: (value) => (value.length === 0 ? "Cannot be Empty" : null),
      PatientNumber: (value) => (value === 0 ? "Must be more than 0" : null),
      Precedence: (value) => (value.length === 0 ? "Cannot be Empty" : null),
    },
  })

  return (
    <Box w={800}>
      <form onSubmit={form.onSubmit(console.log)}>
        <Stack
          spacing="lg"
          sx={(theme) => ({ backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}
        >
          <Group>
            <Input.Wrapper id="Location" label="Location" size="xl">
              <Group>
                <TextInput id="Location1" {...form.getInputProps("location1")} />
                <TextInput id="Location2" {...form.getInputProps("location2")} />
                <TextInput id="Location3" {...form.getInputProps("location3")} />
                <TextInput id="Location4" {...form.getInputProps("location4")} />
              </Group>
            </Input.Wrapper>
          </Group>
          <Input.Wrapper id="Call Frequency / Call Sign / Suffix" label="Call Frequency / Call Sign / Suffix" size="xl">
            <TextInput id="Call Frequency / Call Sign / Suffix" {...form.getInputProps("CallFrequencyCallSignSuffix")} />
          </Input.Wrapper>
          <Group>
            <Input.Wrapper id="Call Frequency / Call Sign / Suffix" label="Number of Patients" size="xl">
              <NumberInput mt="sm" placeholder="Patient Number" min={0} max={10} {...form.getInputProps("PatientNumber")} />
            </Input.Wrapper>
            <Input.Wrapper id="Call Frequency / Call Sign / Suffix" label="Precedence" size="xl">
              <MultiSelect mt="sm" data={Precedence} {...form.getInputProps("Precedence")} />
            </Input.Wrapper>
          </Group>
          <Input.Wrapper id="Special Equipment" label="Special Equipment" size="xl">
            <Checkbox.Group orientation="vertical" spacing="xs" defaultValue={["None"]} {...form.getInputProps("SpecialEquipment")}>
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
          <Input.Wrapper id="Nationality" label="Patient Nationality and Status" size="xl">
            <MultiSelect
              data={PatientNationalityandStatus}
              placeholder="Patient Nationality"
              {...form.getInputProps("PatientNationalityAndStatus")}
            />
          </Input.Wrapper>
          <Input.Wrapper id="NBC" label="NBC Contamination" size="xl">
            <MultiSelect data={NCBCContamination} placeholder="NBC Contamination" {...form.getInputProps("NCBCContamination")} />
          </Input.Wrapper>
          <Group>
            <Button
              type="submit"
              variant="light"
              color="red"
              radius="xl"
              size="md"
              uppercase
              onClick={() => {
                props.setSubmitted(true)
              }}
            >
              Submit
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  )
}
export default Form
