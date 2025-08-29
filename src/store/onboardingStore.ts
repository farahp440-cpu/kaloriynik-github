import { create } from 'zustand'

export interface OnboardingState {
  goal: 'lose' | 'gain' | 'maintain' | null
  height: number | null
  weight: number | null
  mealsPerDay: '1-2' | '3-4' | '5+' | null
  sport: '0' | '1-2' | '3-5+' | null
  setGoal: (goal: 'lose' | 'gain' | 'maintain') => void
  setParams: (height: number, weight: number) => void
  setHabits: (mealsPerDay: '1-2' | '3-4' | '5+', sport: '0' | '1-2' | '3-5+') => void
  reset: () => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  goal: null,
  height: null,
  weight: null,
  mealsPerDay: null,
  sport: null,
  
  setGoal: (goal) => set({ goal }),
  
  setParams: (height, weight) => set({ height, weight }),
  
  setHabits: (mealsPerDay, sport) => set({ mealsPerDay, sport }),
  
  reset: () => set({
    goal: null,
    height: null,
    weight: null,
    mealsPerDay: null,
    sport: null
  })
}))
