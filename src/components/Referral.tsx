import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Referral.css'

const Referral = () => {
  const navigate = useNavigate()
  const [referralCode] = useState('KALORIY2024')
  const [invitedCount] = useState(0)
  const targetCount = 10

  const handleShare = () => {
    const text = `Привет! Я использую Калорийник - умное приложение для подсчёта калорий по фото. Приглашаю тебя! Используй мой код: ${referralCode}`
    
    if (navigator.share) {
      navigator.share({
        title: 'Калорийник',
        text: text,
        url: 'https://t.me/kaloriynik_bot'
      })
    } else {
      navigator.clipboard.writeText(text)
      alert('Текст скопирован в буфер обмена!')
    }
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode)
    alert('Код скопирован!')
  }

  return (
    <div className="referral">
      <button className="btn-back" onClick={() => navigate('/paywall')}>
        ← Назад
      </button>
      
      <h1>Пригласи друзей</h1>
      <p className="subtitle">Получи 3 месяца бесплатно за 10 приглашённых</p>
      
      <div className="referral-card">
        <div className="referral-header">
          <h2>Ваш прогресс</h2>
          <div className="progress-circle">
            <span className="progress-number">{invitedCount}</span>
            <span className="progress-label">из {targetCount}</span>
          </div>
        </div>
        
        <div className="referral-benefits">
          <h3>Что получаете:</h3>
          <ul>
            <li>🎁 +3 дня за каждого друга</li>
            <li>🏆 3 месяца бесплатно при 10 друзьях</li>
            <li>📱 Друг должен зарегистрироваться и сделать одну запись</li>
          </ul>
        </div>
        
        <div className="referral-code">
          <h3>Ваш код приглашения:</h3>
          <div className="code-display">
            <span className="code">{referralCode}</span>
            <button className="btn-copy" onClick={handleCopyCode}>
              📋
            </button>
          </div>
        </div>
      </div>
      
      <div className="referral-actions">
        <button className="btn-primary btn-large" onClick={handleShare}>
          Поделиться ссылкой
        </button>
        
        <button className="btn-secondary" onClick={() => navigate('/paywall')}>
          Вернуться к тарифам
        </button>
      </div>
      
      <div className="referral-tips">
        <h3>Как приглашать:</h3>
        <ol>
          <li>Отправьте другу ссылку на бота</li>
          <li>Попросите использовать ваш код при регистрации</li>
          <li>Друг должен пройти онбординг и добавить первый приём пищи</li>
          <li>Получите +3 дня и двигайтесь к цели в 10 друзей</li>
        </ol>
      </div>
    </div>
  )
}

export default Referral
