import type { Dispatch, SetStateAction } from "react"

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
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipPercentage( { setTip, tip }: TipPercentageProps ) {
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
                            onChange={ e => setTip(+e.target.value)}
                            checked={tip === option.value}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
