import type { StateCreator } from 'zustand'
import { getCategories, getDetails, getRecipes } from '../services/RecipeServices'
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from '../types'



export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    closeModal: () => void
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter : SearchFilter) => Promise<void>
    selectRecipe: (id : Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    modal: false,
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getDetails(id)
        set({
            selectedRecipe,
            modal: true
        })
        
    }
})