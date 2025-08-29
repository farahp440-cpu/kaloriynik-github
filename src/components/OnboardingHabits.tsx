import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../store/onboardingStore'
import './Onboarding.css'

const OnboardingHabits = () => {
  const navigate = useNavigate()
  const { setHabits } = useOnboardingStore()
  const [mealsPerDay, setMealsPerDay] = useState<'1-2' | '3-4' | '5+' | null>(null)
  const [sport, setSport] = useState<'0' | '1-2' | '3-5+' | null>(null)

  const handleSubmit = () => {
    if (mealsPerDay && sport) {
      setHabits(mealsPerDay, sport)
      navigate('/plan')
    }
  }

  return (
    <div className="onboarding">
      <div className="progress-bar">
        <div className="progress-step completed">1</div>
        <div className="progress-line"></div>
        <div className="progress-step completed">2</div>
        <div className="progress-line"></div>
        <div className="progress-step active">3</div>
      </div>
      
      <h1>О привычках</h1>
      <p className="subtitle">Расскажите о своём образе жизни</p>
      
      <div className="habits-section">
        <h3>Частота питания</h3>
        <div className="habits-options">
          <button
            className={`habit-option ${mealsPerDay === '1-2' ? 'active' : ''}`}
            onClick={() => setMealsPerDay('1-2')}
          >
            <span className="habit-icon">🍽️</span>
            <span>1-2 раза в день</span>
          </button>
          
          <button
            className={`habit-option ${mealsPerDay === '3-4' ? 'active' : ''}`}
            onClick={() => setMealsPerDay('3-4')}
          >
            <span className="habit-icon">🍽️</span>
            <span>3-4 раза в день</span>
          </button>
          
          <button
            className={`habit-option ${mealsPerDay === '5+' ? 'active' : ''}`}
            onClick={() => setMealsPerDay('5+')}
          >
            <span className="habit-icon">🍽️</span>
            <span>5+ раз в день</span>
          </button>
        </div>
      </div>
      
      <div className="habits-section">
        <h3>Спортивная активность</h3>
        <div className="habits-options">
          <button
            className={`habit-option ${sport === '0' ? 'active' : ''}`}
            onClick={() => setSport('0')}
          >
            <span className="habit-icon">🛋️</span>
            <span>Не занимаюсь</span>
          </button>
          
          <button
            className={`habit-option ${sport === '1-2' ? 'active' : ''}`}
            onClick={() => setSport('1-2')}
          >
            <span className="habit-icon">🏃‍♂️</span>
            <span>1-2 раза в неделю</span>
          </button>
          
          <button
            className={`habit-option ${sport === '3-5+' ? 'active' : ''}`}
            onClick={() => setSport('3-5+')}
          >
            <span className="habit-icon">💪</span>
            <span>3-5+ раз в неделю</span>
          </button>
        </div>
      </div>
      
      <button 
        className="btn-primary"
        onClick={handleSubmit}
        disabled={!mealsPerDay || !sport}
      >
        Сформировать план
      </button>
    </div>
  )
}

export default OnboardingHabits
