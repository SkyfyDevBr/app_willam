import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ToastHost from './components/ToastHost'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewQuote from './pages/NewQuote'
import MyQuotes from './pages/MyQuotes'
import QuoteApproval from './pages/QuoteApproval'
import RepDashboard from './pages/RepDashboard'
import RepQuoteEdit from './pages/RepQuoteEdit'
import Analytics from './pages/Analytics'

export default function App() {
  const location = useLocation()
  const isLogin = location.pathname === '/' || location.pathname === '/login'

  if (isLogin) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastHost />
      </>
    )
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="app-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cotacoes/nova" element={<NewQuote />} />
            <Route path="/cotacoes" element={<MyQuotes />} />
            <Route path="/cotacoes/:id" element={<QuoteApproval />} />
            <Route path="/representante" element={<RepDashboard />} />
            <Route path="/representante/orcar/:id" element={<RepQuoteEdit />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
      </div>
      <ToastHost />
    </div>
  )
}
