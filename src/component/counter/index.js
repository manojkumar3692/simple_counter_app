import React, {useEffect,useState} from 'react';
import './counter.scss'

const MAX_VALUE = 1000
export default function Counter(props) {
    const [value, setValue] = useState(1);
    const [validationMessage, setValidationMessage] = useState(null)

    useEffect(() => {
        setValue(props.counterValue)
    }, [props.counterValue])    

    const triggerDecrement = () => {
        setValue(value - 1)
    }
    const triggerIncrement = () => {
        if(value === MAX_VALUE) {
            return 
        }
        setValue(value + 1)
    }

  const onInputChange = async (value) => {
    if (await checkMaxValue(value)) {
      setValue(value)
      setValidationMessage('')
    } else {
      setValidationMessage('you can not enter value greater than 1K')
    }
  }


  const checkMaxValue = (value) => {
    if (value <= MAX_VALUE) {
      return true
    }
    return false
  }
    return (
        <div className="counter">
        <div className="counterContainer">
            <div className="counterContainer__decrement onhover">
                <h1 onClick={() => triggerDecrement()}>-</h1>
            </div>
            <div className="counterContainer__value">
            <input type="text" value={value} onChange={(e) => onInputChange(Number(e.target.value))} />
            </div>
            <div className="counterContainer__increment onhover">
                <h1 onClick={() => triggerIncrement()}>+</h1>
            </div>
        </div>
        {
           validationMessage && <p>{validationMessage}</p>
        }
        </div>
    )
}
