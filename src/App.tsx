import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import OnboardingGoal from './components/OnboardingGoal'
import OnboardingParams from './components/OnboardingParams'
import OnboardingHabits from './components/OnboardingHabits'
import Plan from './components/Plan'
import Paywall from './components/Paywall'
import Referral from './components/Referral'
import './App.css'

function App() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    WebApp.ready()
    WebApp.expand()
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OnboardingGoal />} />
        <Route path="/onboarding/goal" element={<OnboardingGoal />} />
        <Route path="/onboarding/params" element={<OnboardingParams />} />
        <Route path="/onboarding/habits" element={<OnboardingHabits />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/paywall" element={<Paywall />} />
        <Route path="/referral" element={<Referral />} />
      </Routes>
    </div>
  )
}

export default App
