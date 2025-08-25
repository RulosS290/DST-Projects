import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/orderReducer"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageProps = {
    dispatch: Dispatch<OrderActions>
    tip: Number
}

export default function TipPercentage( { dispatch, tip }: TipPercentageProps ) {
    return (
        <div>
            <h3 className='font-black text-2xl'>Propina:</h3>

            <form>
                {tipOptions.map(option => (
                    <div 
                        key={option.id}
                        className='flex gap-2'
                    >
                        <label htmlFor={option.id}>{option.label}</label>
                        <input 
                            id={option.id}
                            type="radio"
                            name="tip"
                            value={option.value}
                            onChange={ e => dispatch({type: 'addTip', payload:{value: +e.target.value}})}
                            checked={tip === option.value}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
