import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Paywall.css'

const Paywall = () => {
  const navigate = useNavigate()
  const [selectedTariff, setSelectedTariff] = useState<'month' | 'quarter' | 'year'>('year')
  const [aiAddon, setAiAddon] = useState(false)

  const tariffs = {
    month: { price: 399, aiPrice: 200, period: 'месяц' },
    quarter: { price: 959, aiPrice: 0, period: '3 месяца', discount: '24%' },
    year: { price: 2799, aiPrice: 0, period: 'год', discount: '71%', trial: '7 дней' }
  }

  const selected = tariffs[selectedTariff]
  const totalPrice = selected.price + (aiAddon && selected.aiPrice > 0 ? selected.aiPrice : 0)

  const handleSubscribe = () => {
    // TODO: Подключить ЮKassa
    console.log('Подписка:', selectedTariff, 'AI:', aiAddon, 'Цена:', totalPrice)
    // Пока что редирект на рефералку
    navigate('/referral')
  }

  return (
    <div className="paywall">
      <h1>Продолжите с персональным планом</h1>
      <p className="subtitle">Выберите подходящий тариф и начните достигать цели</p>
      
      <div className="trust-triggers">
        <div className="trigger">
          <span className="trigger-icon">⏰</span>
          <span>Предложение до конца дня</span>
        </div>
        <div className="trigger">
          <span className="trigger-icon">✅</span>
          <span>7 дней гарантия возврата</span>
        </div>
        <div className="trigger">
          <span className="trigger-icon">👥</span>
          <span>12 247 пользователей в месяц</span>
        </div>
      </div>
      
      <div className="tariffs">
        <div 
          className={`tariff ${selectedTariff === 'month' ? 'active' : ''}`}
          onClick={() => setSelectedTariff('month')}
        >
          <div className="tariff-header">
            <h3>1 месяц</h3>
            <div className="tariff-price">
              <span className="price">{tariffs.month.price} ₽</span>
              <span className="period">/месяц</span>
            </div>
          </div>
          {selectedTariff === 'month' && selected.aiPrice > 0 && (
            <div className="ai-addon">
              <label>
                <input 
                  type="checkbox" 
                  checked={aiAddon}
                  onChange={(e) => setAiAddon(e.target.checked)}
                />
                ИИ-помощник +{selected.aiPrice} ₽/месяц
              </label>
            </div>
          )}
        </div>
        
        <div 
          className={`tariff ${selectedTariff === 'quarter' ? 'active' : ''}`}
          onClick={() => setSelectedTariff('quarter')}
        >
          <div className="tariff-header">
            <h3>3 месяца</h3>
            <div className="tariff-badge">Рекомендуем</div>
            <div className="tariff-price">
              <span className="price">{tariffs.quarter.price} ₽</span>
              <span className="period">/3 месяца</span>
              <span className="discount">-{tariffs.quarter.discount}</span>
            </div>
          </div>
        </div>
        
        <div 
          className={`tariff ${selectedTariff === 'year' ? 'active' : ''}`}
          onClick={() => setSelectedTariff('year')}
        >
          <div className="tariff-header">
            <h3>1 год</h3>
            <div className="tariff-badge trial">Trial {tariffs.year.trial}</div>
            <div className="tariff-price">
              <span className="price">{tariffs.year.price} ₽</span>
              <span className="period">/год</span>
              <span className="discount">-{tariffs.year.discount}</span>
            </div>
          </div>
          <div className="tariff-feature">
            <span className="feature-icon">🤖</span>
            <span>ИИ-помощник включён бесплатно</span>
          </div>
        </div>
      </div>
      
      <div className="total-price">
        <span>Итого: {totalPrice} ₽</span>
        {selectedTariff === 'year' && (
          <span className="trial-note">Первый {tariffs.year.trial} бесплатно</span>
        )}
      </div>
      
      <button 
        className="btn-primary btn-large"
        onClick={handleSubscribe}
      >
        Начать план
      </button>
      
      <button 
        className="btn-secondary"
        onClick={() => navigate('/referral')}
      >
        Персональная консультация с тренером
      </button>
    </div>
  )
}

export default Paywall
