# Next.js Authentication System - Praktika Qo'llanmasi

## 📋 Loyiha Strukturasi

\`\`\`
nextjs-auth-system/
├── app/
│ ├── layout.jsx # Asosiy layout
│ ├── page.jsx # Bosh sahifa
│ ├── login/page.jsx # Login sahifasi
│ ├── register/page.jsx # Ro'yxatdan o'tish
│ ├── dashboard/page.jsx # Himoyalangan dashboard
│ ├── profile/page.jsx # Profil sahifasi
│ └── settings/page.jsx # Sozlamalar
├── components/
│ ├── auth/ # Auth komponentlari
│ ├── dashboard/ # Dashboard komponentlari
│ └── navigation/ # Navigatsiya
├── contexts/
│ └── auth-context.jsx # Auth konteksti
├── hooks/
│ └── use-auth-form.js # Custom hooks
└── lib/
└── auth-utils.js # Yordamchi funksiyalar
\`\`\`

## 🚀 Bosqichma-bosqich Qo'llanma

### 1-Bosqich: Auth Context Yaratish

**Maqsad:** Ilovada authentication holatini boshqarish uchun React Context yaratish.

**Kod tushuntirish:**
\`\`\`jsx
// contexts/auth-context.jsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

// User ma'lumotlari uchun interface
interface User {
id: string
name: string
email: string
avatar?: string
}

// Auth konteksti uchun interface
interface AuthContextType {
user: User | null
isAuthenticated: boolean
isLoading: boolean
login: (email: string, password: string) => Promise<boolean>
register: (name: string, email: string, password: string) => Promise<boolean>
logout: () => void
}
\`\`\`

**Asosiy tushunchalar:**

- **Context API**: React'da global state boshqarish
- **TypeScript interfaces**: Type safety ta'minlash
- **Local Storage**: Ma'lumotlarni brauzerda saqlash

### 2-Bosqich: Login va Register Formalar

**Maqsad:** Foydalanuvchi kirishi va ro'yxatdan o'tishi uchun formalar yaratish.

**Form Validation:**
\`\`\`jsx
const validateForm = (data: FormData) => {
const errors: Record<string, string> = {}

if (!data.email) errors.email = 'Email majburiy'
if (!data.password) errors.password = 'Parol majburiy'
if (data.password && data.password.length < 6) {
errors.password = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'
}

return errors
}
\`\`\`

**Asosiy tushunchalar:**

- **Form handling**: React'da formalar bilan ishlash
- **Validation**: Ma'lumotlarni tekshirish
- **Error handling**: Xatoliklarni boshqarish
- **Loading states**: Yuklash holatlarini ko'rsatish

### 3-Bosqich: Protected Routes

**Maqsad:** Faqat autentifikatsiya qilingan foydalanuvchilar kira oladigan sahifalar yaratish.

**Route Protection Pattern:**
\`\`\`jsx
// components/auth/protected-route.jsx
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
const { isAuthenticated, isLoading } = useAuth()

if (isLoading) return <LoadingSpinner />
if (!isAuthenticated) return <Navigate to="/login" />

return <>{children}</>
}
\`\`\`

**Asosiy tushunchalar:**

- **Higher-Order Components (HOC)**: Komponentlarni o'rash
- **Conditional rendering**: Shartli render qilish
- **Route guards**: Sahifalarni himoya qilish

### 4-Bosqich: User Dashboard

**Maqsad:** Foydalanuvchi ma'lumotlarini ko'rsatadigan dashboard yaratish.

**Dashboard komponentlari:**

- **Stats Cards**: Statistika kartalari
- **Recent Activity**: So'nggi faoliyat
- **Profile Settings**: Profil sozlamalari

### 5-Bosqich: Navigation va Logout

**Maqsad:** Sayt bo'ylab navigatsiya va chiqish funksiyasini qo'shish.

**Navigation Pattern:**
\`\`\`jsx
// Dropdown menu bilan user profili
<DropdownMenu>
<DropdownMenuTrigger>
<Avatar />
</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuItem onClick={logout}>
Chiqish
</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
\`\`\`

## 🎨 Design Principles

### Rang Tizimi

- **Primary**: Blue (#3B82F6) - Asosiy rang
- **Secondary**: Gray (#6B7280) - Ikkinchi darajali
- **Success**: Green (#10B981) - Muvaffaqiyat
- **Error**: Red (#EF4444) - Xato
- **Background**: White/Gray - Fon

### Typography

- **Headings**: GeistSans Bold
- **Body**: GeistSans Regular
- **Code**: GeistMono

### Layout

- **Mobile-first**: Avval mobil, keyin desktop
- **Flexbox**: Asosiy layout usuli
- **Grid**: Murakkab layoutlar uchun
- **Responsive**: Barcha ekran o'lchamlari uchun

## 🔧 Texnik Tafsilotlar

### State Management

\`\`\`jsx
// Auth holatini boshqarish
const [user, setUser] = useState<User | null>(null)
const [isLoading, setIsLoading] = useState(true)

// Local storage bilan sinxronlash
useEffect(() => {
const savedUser = localStorage.getItem('user')
if (savedUser) {
setUser(JSON.parse(savedUser))
}
setIsLoading(false)
}, [])
\`\`\`

### Error Handling

\`\`\`jsx
// Xatoliklarni boshqarish
const [errors, setErrors] = useState<Record<string, string>>({})

const handleSubmit = async (data: FormData) => {
try {
setErrors({})
await login(data.email, data.password)
} catch (error) {
setErrors({ general: 'Login xatosi yuz berdi' })
}
}
\`\`\`

### Performance Optimization

- **Lazy loading**: Komponentlarni kerak bo'lganda yuklash
- **Memoization**: Qayta render qilishni kamaytirish
- **Code splitting**: Kodni bo'laklarga ajratish

## 📝 Amaliy Mashqlar

### Mashq 1: Custom Hook Yaratish

\`\`\`jsx
// hooks/use-form-validation.ts
export function useFormValidation(validationRules: ValidationRules) {
const [errors, setErrors] = useState({})

const validate = (data: FormData) => {
// Validation logic
}

return { errors, validate }
}
\`\`\`

### Mashq 2: Theme Switching

\`\`\`jsx
// Dark/Light mode qo'shish
const [theme, setTheme] = useState<'light' | 'dark'>('light')

const toggleTheme = () => {
setTheme(prev => prev === 'light' ? 'dark' : 'light')
document.documentElement.classList.toggle('dark')
}
\`\`\`

### Mashq 3: Form Persistence

\`\`\`jsx
// Formani local storage'da saqlash
const [formData, setFormData] = useLocalStorage('loginForm', {
email: '',
rememberMe: false
})
\`\`\`

## 🏠 Uyga Vazifa

### Vazifa 1: Profile Image Upload

Foydalanuvchi profil rasmini yuklash imkoniyatini qo'shing:

- File input yarating
- Image preview qo'shing
- Base64 formatda saqlang

### Vazifa 2: Password Strength Indicator

Parol kuchini ko'rsatuvchi komponent yarating:

- Parol uzunligi tekshirish
- Maxsus belgilar mavjudligi
- Rang bilan kuchni ko'rsatish

### Vazifa 3: Remember Me Functionality

"Meni eslab qol" funksiyasini qo'shing:

- Checkbox qo'shish
- Local storage'da saqlash
- Auto-login qilish

### Vazifa 4: Session Timeout

Sessiya vaqti tugashi funksiyasini qo'shing:

- Timer yaratish
- Warning modal ko'rsatish
- Auto logout qilish

## 🔍 Debugging Tips

### Console Logging

\`\`\`jsx
// Debug uchun console.log ishlatish
console.log('[v0] User login attempt:', { email, timestamp: new Date() })
console.log('[v0] Auth state changed:', { isAuthenticated, user })
\`\`\`

### Error Boundaries

\`\`\`jsx
// Xatoliklarni ushlash uchun
class ErrorBoundary extends React.Component {
componentDidCatch(error, errorInfo) {
console.log('[v0] Error caught:', error, errorInfo)
}
}
\`\`\`

## 📚 Qo'shimcha Resurslar

### Foydali Linklar

- [Next.js Documentation](https://nextjs.org/docs)
- [React Context API](https://react.dev/reference/react/createContext)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Video Darslar

- Next.js App Router Tutorial
- React Authentication Patterns
- TypeScript with React

## ✅ Tekshirish Ro'yxati

Loyihangiz tayyor bo'lishi uchun quyidagi narsalarni tekshiring:

- [ ] Login/Register formalar ishlaydi
- [ ] Protected routes himoyalangan
- [ ] User dashboard ma'lumotlarni ko'rsatadi
- [ ] Navigation va logout ishlaydi
- [ ] Responsive design barcha ekranlarda
- [ ] Error handling to'g'ri ishlaydi
- [ ] Loading states ko'rsatiladi
- [ ] TypeScript xatolari yo'q
- [ ] Console'da xatolik yo'q

## 🎉 Xulosa

Ushbu praktikada siz zamonaviy Next.js authentication tizimini yaratishni o'rgandingiz. Bu bilimlar real loyihalarda ishlatishingiz mumkin bo'lgan professional darajadagi koddir.

**Keyingi qadamlar:**

1. Backend API bilan integratsiya
2. OAuth providers qo'shish (Google, GitHub)
3. Role-based access control
4. Advanced security features
