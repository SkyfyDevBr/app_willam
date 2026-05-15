import Icon from './Icon'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="search">
        <Icon name="search" size={16} />
        <input placeholder="Buscar obras, cotações, representantes..." />
      </div>
      <div className="topbar-actions">
        <button className="icon-btn" title="Notificações">
          <Icon name="bell" size={18} />
          <span className="dot" />
        </button>
        <button className="icon-btn" title="Configurações">
          <Icon name="settings" size={18} />
        </button>
      </div>
    </header>
  )
}
