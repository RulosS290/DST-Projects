import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    const { result, loading } = useCryptoStore()
    const hasResult = useMemo(() => Object.keys(result).length > 0, [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotizacion</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com${result.IMAGEURL}`}  />
                        <div>
                            <p>
                                The price is: <span>{result.PRICE}</span>
                            </p>
                            <p>
                                Highest price of the day: <span>{result.HIGHDAY}</span>
                            </p>
                            <p>
                                Lowest price of the day: <span>{result.LOWDAY}</span>
                            </p>
                            <p>
                                24-hour change: <span>{result.CHANGEPCT24HOUR}</span>
                            </p>
                            <p>
                                Last update: <span>{result.LASTUPDATE}</span>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
