import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../store/onboardingStore'
import './Plan.css'

const Plan = () => {
  const navigate = useNavigate()
  const { goal, height, weight, sport } = useOnboardingStore()

  // Мок-расчёт плана (потом заменим на реальную формулу)
  const calculatePlan = () => {
    if (!height || !weight) return null
    
    const bmr = 10 * weight + 6.25 * height - 5 * 25 // базовая формула
    let tdee = bmr
    
    // Множитель активности
    if (sport === '0') tdee *= 1.2
    else if (sport === '1-2') tdee *= 1.375
    else if (sport === '3-5+') tdee *= 1.55
    
    // Корректировка по цели
    if (goal === 'lose') tdee *= 0.85
    else if (goal === 'gain') tdee *= 1.15
    
    const calories = Math.round(tdee)
    const protein = Math.round(weight * 1.6) // 1.6г на кг веса
    const fat = Math.round(calories * 0.25 / 9) // 25% от ккал
    const carbs = Math.round((calories - protein * 4 - fat * 9) / 4)
    
    return { calories, protein, fat, carbs }
  }

  const plan = calculatePlan()

  if (!plan) {
    return <div>Загрузка...</div>
  }

  return (
    <div className="plan">
      <h1>Ваш план на 7 дней</h1>
      <p className="subtitle">Персональные рекомендации для достижения цели</p>
      
      <div className="plan-card">
        <div className="plan-header">
          <h2>Ежедневная норма</h2>
          <div className="goal-badge">
            {goal === 'lose' && '📉 Похудение'}
            {goal === 'gain' && '📈 Набор массы'}
            {goal === 'maintain' && '⚖️ Поддержание'}
          </div>
        </div>
        
        <div className="plan-metrics">
          <div className="metric">
            <div className="metric-icon">🔥</div>
            <div className="metric-content">
              <span className="metric-value">{plan.calories}</span>
              <span className="metric-label">ккал</span>
            </div>
          </div>
          
          <div className="metric">
            <div className="metric-icon">💪</div>
            <div className="metric-content">
              <span className="metric-value">{plan.protein}</span>
              <span className="metric-label">г белка</span>
            </div>
          </div>
          
          <div className="metric">
            <div className="metric-icon">🥑</div>
            <div className="metric-content">
              <span className="metric-value">{plan.fat}</span>
              <span className="metric-label">г жиров</span>
            </div>
          </div>
          
          <div className="metric">
            <div className="metric-icon">🍞</div>
            <div className="metric-content">
              <span className="metric-value">{plan.carbs}</span>
              <span className="metric-label">г углеводов</span>
            </div>
          </div>
        </div>
        
        <div className="plan-benefits">
          <h3>Что даёт этот план:</h3>
          <ul>
            <li>🎯 Точный расчёт под ваши параметры</li>
            <li>📱 Удобное отслеживание приёмов пищи</li>
            <li>🤖 ИИ-помощник для распознавания еды</li>
            <li>📊 Детальная статистика прогресса</li>
          </ul>
        </div>
      </div>
      
      <button 
        className="btn-primary btn-large"
        onClick={() => navigate('/paywall')}
      >
        Продолжить
      </button>
    </div>
  )
}

export default Plan
