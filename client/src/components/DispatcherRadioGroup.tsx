import { Radio } from "@mantine/core"

interface DispatcherRadioGroupProps {
  view: string
  responderID: string
  setResponderID: React.Dispatch<React.SetStateAction<string>>
}

export const DispatcherRadioGroup = (props: DispatcherRadioGroupProps) => {
  const responders = [1234, 4321, 6643, 5555, 4223, 9770]

  /* const testingMap =  ():Array<ReactNode> => {
    return (
    responders.map((responder)=>{
      return <Radio value= {`${responder}`} label = {`${responder}`} />
  
    }))
  
  }*/
  if (props.view === "dispatcher") {
    return (
      <div>
        <Radio.Group name="testingMapForResoponder" label="test" withAsterisk value={props.responderID} onChange={props.setResponderID}>
          {responders.map((responder, i) => {
            return <Radio key={i} value={`${responder}`} label={`${responder}`} />
          })}
        </Radio.Group>
      </div>
    )
  } else {
    return <></>
  }
}
