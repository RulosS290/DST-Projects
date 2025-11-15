import { z } from 'zod'
import { CurrencySchema, CryptoCurrenciesResponseSchema, PairSchema, CryptoPriceShema } from "../schemas/crypto-schemas"

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceShema>