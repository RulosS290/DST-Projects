import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

const openRouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system: 'You are a bartender with several years of experience. After giving the recipe, provide some history about the cocktail.',
            temperature: 0
        })

        return result.textStream
    }
}