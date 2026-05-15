import { NavLink, useNavigate } from 'react-router-dom'
import Icon from './Icon'

const CLIENT_NAV = [
  { to: '/dashboard', icon: 'home', label: 'Início' },
  { to: '/cotacoes/nova', icon: 'plus', label: 'Nova cotação' },
  { to: '/cotacoes', icon: 'fileText', label: 'Minhas cotações' },
]

const REP_NAV = [
  { to: '/representante', icon: 'briefcase', label: 'Painel do rep.' },
  { to: '/analytics', icon: 'chart', label: 'Analytics' },
]

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img src="/logo.png" alt="Votanabe" style={{ height: 44, filter: 'invert(1)', mixBlendMode: 'screen' }} />
      </div>

      <div className="sidebar-section">Cliente</div>
      {CLIENT_NAV.map(item => (
        <NavLink key={item.to} to={item.to}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Icon name={item.icon} size={18} />
          <span>{item.label}</span>
        </NavLink>
      ))}

      <div className="sidebar-section">Votorantim</div>
      {REP_NAV.map(item => (
        <NavLink key={item.to} to={item.to}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Icon name={item.icon} size={18} />
          <span>{item.label}</span>
        </NavLink>
      ))}

      <div className="sidebar-footer">
        <div className="user-chip">
          <div className="user-avatar">JT</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="user-name">José Tucumann</div>
            <div className="user-role">Tucumann S.A.</div>
          </div>
          <button
            className="icon-btn"
            style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
            onClick={() => navigate('/login')}
            title="Sair"
          >
            <Icon name="logout" size={16} />
          </button>
        </div>
      </div>
    </aside>
  )
}
