import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../store/onboardingStore'
import './Onboarding.css'

const OnboardingGoal = () => {
  const navigate = useNavigate()
  const { setGoal } = useOnboardingStore()

  const handleGoalSelect = (goal: 'lose' | 'gain' | 'maintain') => {
    setGoal(goal)
    navigate('/onboarding/params')
  }

  return (
    <div className="onboarding">
      <div className="progress-bar">
        <div className="progress-step active">1</div>
        <div className="progress-line"></div>
        <div className="progress-step">2</div>
        <div className="progress-line"></div>
        <div className="progress-step">3</div>
      </div>
      
      <h1>Начнём с цели</h1>
      <p className="subtitle">Что вы хотите достичь?</p>
      
      <div className="goal-options">
        <button 
          className="goal-option"
          onClick={() => handleGoalSelect('lose')}
        >
          <div className="goal-icon">📉</div>
          <div className="goal-text">
            <h3>Похудеть</h3>
            <p>Сбросить лишние килограммы</p>
          </div>
        </button>
        
        <button 
          className="goal-option"
          onClick={() => handleGoalSelect('gain')}
        >
          <div className="goal-icon">📈</div>
          <div className="goal-text">
            <h3>Набрать вес</h3>
            <p>Увеличить мышечную массу</p>
          </div>
        </button>
        
        <button 
          className="goal-option"
          onClick={() => handleGoalSelect('maintain')}
        >
          <div className="goal-icon">⚖️</div>
          <div className="goal-text">
            <h3>Поддерживать вес</h3>
            <p>Сохранить текущую форму</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default OnboardingGoal
