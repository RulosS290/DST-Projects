import { create } from "zustand"
import { devtools } from "zustand/middleware";
import type { CryptoCurrencies, CryptoPrice, Pair } from "./types";
import { fetchCurrenCryptoPrice, getCryptos } from "./services/CryptoServices";

type CrytoStore = {
    cryptoCurrencies: CryptoCurrencies
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CrytoStore>()((devtools)((set) => ({
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    loading: false,
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrenCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))

    }
})))

