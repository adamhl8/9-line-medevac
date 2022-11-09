import {Grid, Stack, Button, Group, Input, Title, MultiSelect, Checkbox} from '@mantine/core';


const Fourm = () =>{

    const patientNumber = [
        {value: "1", label: "1"},
        {value: "2", label: "2"},
        {value: "3", label: "3"},
        {value: "4", label: "4"},
        {value: "5", label: "5"},
    ]
    const LitterPatientNumber = [
        {value: "1", label: "1"},
        {value: "2", label: "2"},
        {value: "3", label: "3"},
        {value: "4", label: "4"},
        {value: "5", label: "5"},
    ]
    const AmbulatoryPatientNumber = [
        {value: "1", label: "1"},
        {value: "2", label: "2"},
        {value: "3", label: "3"},
        {value: "4", label: "4"},
        {value: "5", label: "5"},
    ]

    const Precedence = [
        {value: 'Urgent', label: 'Urgent'},
        {value: 'UrgentSurgical', label: 'Urgent Surgical'},
        {value: 'Priority', label: 'Priority'},
        {value: 'Routine', label: 'Routine'},
    ]
    const SecurityAtPickupSite = [
        {value: 'NoEnemyTroops', label: 'No Enemy Troops'},
        {value: 'PossibleEnemy', label: 'Possible Enemy'},
        {value: 'EnemyInAreaCaution', label: 'Enemy In Area: Proceed with Caution'},
        {value: 'EnemyInAreaEscort', label: 'Enemy In Area: Armed Escort Required'},
    ]
    const PatientNationalityandStatus = [
        {value: 'USMilitary', label: 'US Military'},
        {value: 'USCivilian', label: 'US Civilian'},
        {value: 'Non-US Military', label: 'Non-US Military'},
        {value: 'Non-USCivilian', label: 'Non-USCivilian'},
        {value: 'EPW', label: 'EPW'},
    ]
    const NCBCContamination = [
        {value: 'NoEnemyTroops', label: 'No Enemy Troops'},
        {value: 'PossibleEnemy', label: 'Possible Enemy'},
        {value: 'EnemyInAreaCaution', label: 'Enemy In Area: Proceed with Caution'},
        {value: 'EnemyInAreaEscort', label: 'Enemy In Area: Armed Escort Required'},
    ]

    return (<>
        <Stack spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
            {/*<Title order={2} align={'left'}>Location</Title>*/}
            <Group>
                <Input.Wrapper
                    id="Location"
                    label="Location"
                    size="xl"
                >
                    <Group>
                        <Input id="Location" />
                        <Input id="Location" />
                        <Input id="Location" />
                        <Input id="Location" />
                    </Group>
                </Input.Wrapper>
            </Group>
            <Input.Wrapper
                id="Call Frequency / Call Sign / Suffix"
                label="Call Frequency / Call Sign / Suffix"
                size="xl"
            >
                    <Input id="Call Frequency / Call Sign / Suffix" />
            </Input.Wrapper>
            <Group>
                <Input.Wrapper
                    id="Call Frequency / Call Sign / Suffix"
                    label="Patient Number"
                    size="xl"
                >
                    <MultiSelect
                        data={patientNumber}
                        placeholder = "0"
                    />
                </Input.Wrapper>
                <Input.Wrapper
                    id="Call Frequency / Call Sign / Suffix"
                    label="Precedence"
                    size="xl"
                >
                    <MultiSelect
                        data={Precedence}
                        placeholder="Precedence"
                    />
                    </Input.Wrapper>
            </Group>
            <Input.Wrapper
                id="Call Frequency / Call Sign / Suffix"
                label="Special Equipment"
                size="xl"
            >
                <Checkbox.Group
                    defaultValue={['react']}
                    orientation="vertical"
                    spacing="xs"

                >
                    <Checkbox value="None" label="None" />
                    <Checkbox value="Hoist" label="Hoist" />
                    <Checkbox value="Extraction Equipment" label="ExtractionEquipment" />
                    <Checkbox value="Ventilator" label="Ventilator" />
                </Checkbox.Group>
            </Input.Wrapper>


            <Group>
                <Input.Wrapper
                    id="Litter"
                    label="Litter Patient Number"
                    size="xl"
                >
                <MultiSelect
                    data={LitterPatientNumber}
                    placeholder = "0"
                />
                </Input.Wrapper>
                <Input.Wrapper
                    id="Ambulatory"
                    label="Ambulatory Patient Number"
                    size="xl"
                >
                <MultiSelect
                    data={AmbulatoryPatientNumber}
                    placeholder="Precedence"
                />
                </Input.Wrapper>
            </Group>


            <Input.Wrapper
                id="Marking"
                label="Method of Marking Pick-Up Site"
                size="xl"
            >
            <Checkbox.Group
                defaultValue={['react']}
                orientation="vertical"
                spacing="xs"
            >
                <Checkbox value="None" label="None" />
                <Checkbox value="Panels" label="Panels" />
                <Checkbox value="PyrotechnicSignal" label="Pyrotechnic Signal" />
                <Checkbox value="SmokeSignal" label="Smoke Signal" />
                <Checkbox value="Other" label="Other"/>
            </Checkbox.Group>
            </Input.Wrapper>

            <Input.Wrapper
                id="Nationality"
                label="Patient Nationality and Status"
                size="xl"
            >
            <MultiSelect
                data={PatientNationalityandStatus}
                placeholder = "No Enemy Troops at Pick-up-Site"
            />
            </Input.Wrapper>

            <Input.Wrapper
                id="NBC"
                label="Patient Nationality and Status"
                size="xl"
            >
            <MultiSelect
                data={NCBCContamination }
                placeholder = "No Enemy Troops at Pick-up-Site"
            />
            </Input.Wrapper>
        <Group>
            <Button variant="light" color="red" radius="xl" size="md" uppercase>
                Submit
            </Button>
        </Group>
        </Stack>
        </>)
}
export default Fourm;