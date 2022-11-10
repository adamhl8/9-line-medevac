import {Grid, Stack, Button, Group, Input, Title, MultiSelect, Checkbox, TextInput, NumberInput} from '@mantine/core';
import {useForm} from "@mantine/form";



const Fourm = () =>{



    // const patientNumber = [
    //     {value: "1", label: "1"},
    //     {value: "2", label: "2"},
    //     {value: "3", label: "3"},
    //     {value: "4", label: "4"},
    //     {value: "5", label: "5"},
    // ]
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
        {value: 'Urgent Surgical', label: 'Urgent Surgical'},
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

    const locationValidatorTwo = (value: string)=>(value.length < 2 ? "Cannot be Less Than Two Characters": null)
    const locationValidatorThree = (value: string)=>(value.length < 3 ? "Cannot be Less Than Three Characters": null)

    const form = useForm({
        initialValues:{
            location1:"",
            location2:"",
            location3:"",
            location4:"",
            CallFrequencyCallSignSuffix: "",
            PatientNumber: 0,
            Precedence:"",
            SpecialEquipment:"None",
            LitterPatientNumber:0,
            AmbulatoryPatientNumber:0,
            MethodOfMarkingPickupSite:"None",
            SecurityAtPickupSite:"None",
            PatientNationalityAndStatus: "None",
            NBC:"None"
        },
        validate:{
            location1:locationValidatorThree,
            location2:locationValidatorTwo,
            location3:locationValidatorTwo,
            location4:locationValidatorTwo,
            CallFrequencyCallSignSuffix: (value)=>(value.length === 0 ? 'Cannot be Empty': null),
            PatientNumber: (value)=>(value === 0 ? 'Must be more than 0' : null),
            Precedence: (value)=>(Precedence.some((obj) => obj.value === value) ? null : 'Must Select A Precedence'),
            LitterPatientNumber: (value)=>(value === 0 ? 'Must be more than 0' : null),
            AmbulatoryPatientNumber: (value)=>(value === 0 ? 'Must be more than 0' : null),
        },
    })

    return (<>
        <form  onSubmit={form.onSubmit(console.log)}>
        {/*<form  onSubmit={form.onSubmit((value) => console.log(value))}>*/}
            <Stack spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
                {/*<Title order={2} align={'left'}>Location</Title>*/}
                <Group>
                    <Input.Wrapper
                        id="Location"
                        label="Location"
                        size="xl"
                    >
                        <Group>
                            <TextInput id="Location1"  {...form.getInputProps('location1')}/>
                            <TextInput id="Location2"  {...form.getInputProps('location2')}/>
                            <TextInput id="Location3"  {...form.getInputProps('location3')}/>
                            <TextInput id="Location4"  {...form.getInputProps('location4')}/>
                        </Group>
                    </Input.Wrapper>
                </Group>
                <Input.Wrapper
                    id="Call Frequency / Call Sign / Suffix"
                    label="Call Frequency / Call Sign / Suffix"
                    size="xl"
                >
                        <TextInput id="Call Frequency / Call Sign / Suffix"
                                   {...form.getInputProps('CallFrequencyCallSignSuffix')}
                        />
                </Input.Wrapper>
                <Group>
                    <Input.Wrapper
                        id="Call Frequency / Call Sign / Suffix"
                        label="Number of Patients"
                        size="xl"
                    >
                        <NumberInput
                                        mt="sm"
                                        // label="Patient Number"
                                        placeholder="Patient Number"
                                        min={0}
                                        max={10}
                                        {...form.getInputProps('PatientNumber')}
                                    />
                    </Input.Wrapper>
                    <Input.Wrapper
                        id="Call Frequency / Call Sign / Suffix"
                        label="Precedence"
                        size="xl"
                    >
                        <MultiSelect
                            // error="Pick at least one item"
                            mt="sm"
                            data={Precedence}
                            // Precedence
                            {...form.getInputProps('Precedence')}
                        />

                        </Input.Wrapper>
                </Group>
                <Input.Wrapper
                    id="Special Equipment"
                    label="Special Equipment"
                    size="xl"
                >
                    <Checkbox.Group
                        orientation="vertical"
                        spacing="xs"
                        defaultValue={['None']}
                    >
                        <Checkbox value="None" label="None" />
                        <Checkbox value="Hoist" label="Hoist" />
                        <Checkbox value="Extraction Equipment" label="Extraction Equipment" />
                        <Checkbox value="Ventilator" label="Ventilator" />
                    </Checkbox.Group>
                </Input.Wrapper>


                <Group>
                    <Input.Wrapper
                        id="Litter"
                        label="Litter Patient Number"
                        size="xl"
                    >
                        <NumberInput
                            mt="sm"
                            // label="Patient Number"
                            placeholder="Litter Patient Number"
                            min={0}
                            max={10}
                            {...form.getInputProps('LitterPatientNumber')}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper
                        id="Ambulatory"
                        label="Ambulatory Patient Number"
                        size="xl"
                    >
                        <NumberInput
                            mt="sm"
                            // label="Patient Number"
                            placeholder="Ambulatory Patient Number"
                            min={0}
                            max={10}
                            {...form.getInputProps('AmbulatoryPatientNumber')}
                        />

                    </Input.Wrapper>
                </Group>


                <Input.Wrapper
                    id="Marking"
                    label="Method of Marking Pick-Up Site"
                    size="xl"
                >
                <Checkbox.Group
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
                    id="Security"
                    label="Security at Pick-Up Site"
                    size="xl"
                >
                    <MultiSelect
                        data={SecurityAtPickupSite}
                        placeholder = "Security at Pick-Up Site"
                    />
                </Input.Wrapper>

                <Input.Wrapper
                    id="Nationality"
                    label="Patient Nationality and Status"
                    size="xl"
                >
                <MultiSelect
                    data={PatientNationalityandStatus}
                    placeholder = "Patient Nationality"
                />
                </Input.Wrapper>

                <Input.Wrapper
                    id="NBC"
                    label="NBC Contamination"
                    size="xl"
                >
                <MultiSelect
                    data={NCBCContamination }
                    placeholder = "NBC Contamination"
                />
                </Input.Wrapper>
            <Group>
                <Button type="submit"  variant="light" color="red" radius="xl" size="md" uppercase >
                    Submit
                </Button>
            </Group>
            </Stack>
        </form>

        </>)
}
export default Fourm;

// import { useForm } from '@mantine/form';
// import { NumberInput, TextInput, Button } from '@mantine/core';
//
// function Form() {
//     const form = useForm({
//         initialValues: { name: '', email: '', age: 0 },
//
//         // functions will be used to validate values at corresponding key
//         validate: {
//             name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
//             email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//             age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
//         },
//     });
//
//     return (
//         <form onSubmit={form.onSubmit(console.log)}>
//             <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
//             <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
//             <NumberInput
//                 mt="sm"
//                 label="Age"
//                 placeholder="Age"
//                 min={0}
//                 max={99}
//                 {...form.getInputProps('age')}
//             />
//             <Button type="submit" mt="sm">
//                 Submit
//             </Button>
//         </form>
//     );
// }
// export default Form;