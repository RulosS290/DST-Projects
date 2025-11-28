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
            system: 'Eres un bartender que tiene varios años de experiencia, además de proporcionar algo de historia del coctel después de servirlo',
            temperature: 0
        })

        return result.textStream
    }
}