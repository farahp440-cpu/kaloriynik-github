# 🚀 Деплой Mini App "Калорийник"

## Способ 1: Через Vercel Dashboard (Рекомендуется)

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Войдите в аккаунт** (или создайте новый)
3. **Нажмите "New Project"**
4. **Выберите "Import Git Repository"**
5. **Подключите ваш GitHub репозиторий**
6. **Настройте проект:**
   - Framework Preset: `Vite`
   - Root Directory: `apps/kaloriynik-miniapp`
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. **Нажмите "Deploy"**

## Способ 2: Drag & Drop

1. **Соберите проект:** `npm run build`
2. **Перейдите на [vercel.com](https://vercel.com)**
3. **Нажмите "New Project"**
4. **Выберите "Upload Template"**
5. **Перетащите папку `dist`** в браузер
6. **Нажмите "Deploy"**

## Способ 3: Через GitHub Actions

1. **Создайте файл `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
    paths: ['apps/kaloriynik-miniapp/**']
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: cd apps/kaloriynik-miniapp && npm ci
      - run: cd apps/kaloriynik-miniapp && npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./apps/kaloriynik-miniapp
```

## После деплоя

1. **Скопируйте URL** (например: `https://kaloriynik-miniapp.vercel.app`)
2. **Обновите `WEBAPP_URL` в боте:**
   ```python
   WEBAPP_URL = "https://your-new-url.vercel.app"
   ```
3. **Перезапустите бота**

## Проверка

1. **Откройте Mini App в браузере**
2. **Проверьте все экраны:**
   - Онбординг (3 шага)
   - План
   - Пейволл
   - Рефералы
3. **Протестируйте в Telegram** через кнопку "🍽️ Открыть Калорийник"

## Troubleshooting

- **Если Mini App не обновляется:** Подождите 1-2 минуты, Vercel кэширует
- **Если ошибки в консоли:** Проверьте Network tab в DevTools
- **Если бот не отвечает:** Проверьте логи бота и перезапустите
