import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../store/onboardingStore'
import './Onboarding.css'

const OnboardingParams = () => {
  const navigate = useNavigate()
  const { setParams } = useOnboardingStore()
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = () => {
    const newErrors: string[] = []
    
    if (!height || !weight) {
      newErrors.push('Заполните все поля')
    }
    
    const heightNum = parseInt(height)
    const weightNum = parseInt(weight)
    
    if (heightNum < 100 || heightNum > 250) {
      newErrors.push('Рост должен быть от 100 до 250 см')
    }
    
    if (weightNum < 30 || weightNum > 300) {
      newErrors.push('Вес должен быть от 30 до 300 кг')
    }
    
    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    }
    
    setParams(heightNum, weightNum)
    navigate('/onboarding/habits')
  }

  return (
    <div className="onboarding">
      <div className="progress-bar">
        <div className="progress-step completed">1</div>
        <div className="progress-line"></div>
        <div className="progress-step active">2</div>
        <div className="progress-line"></div>
        <div className="progress-step">3</div>
      </div>
      
      <h1>Ваши параметры</h1>
      <p className="subtitle">Введите рост и вес для точного расчёта</p>
      
      <div className="form-group">
        <label htmlFor="height">Рост (см)</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="170"
          min="100"
          max="250"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="weight">Вес (кг)</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="70"
          min="30"
          max="300"
        />
      </div>
      
      {errors.length > 0 && (
        <div className="errors">
          {errors.map((error, index) => (
            <p key={index} className="error">{error}</p>
          ))}
        </div>
      )}
      
      <button 
        className="btn-primary"
        onClick={handleSubmit}
        disabled={!height || !weight}
      >
        Далее
      </button>
    </div>
  )
}

export default OnboardingParams
