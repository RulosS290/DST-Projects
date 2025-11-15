import { useState, type ChangeEvent, type FormEvent } from "react"
import { useCryptoStore } from "../store"
import { currencies } from "../data"
import type { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {
    const { cryptoCurrencies, fetchData } = useCryptoStore()
    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptoCurrency: ''
    })

    const [error, setError] = useState('')
    
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('All fields are required')
            return
        }
        setError('')
        fetchData(pair)
    }

    
    return (
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Currency:</label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">-- Select --</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptoCurrency">Cryptocurrency:</label>
                <select 
                    name="criptoCurrency" 
                    id="criptoCurrency"
                    onChange={handleChange}
                    value={pair.criptoCurrency}
                >
                    <option value="">-- Select --</option>
                    {cryptoCurrencies.map((cryptoCurrency) => (
                        <option key={cryptoCurrency.CoinInfo.Name} value={cryptoCurrency.CoinInfo.Name}>{cryptoCurrency.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Quote" />
        </form>
    )
}