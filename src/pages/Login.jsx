import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { toast } from '../components/ToastHost'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    toast('Bem-vindo de volta, José')
    navigate('/dashboard')
  }

  return (
    <div className="login-shell">
      <aside className="login-aside">
        <div style={{ position: 'relative' }}>
          <div>
            <img src="/logo.png" alt="Votanabe" style={{ height: 52, filter: 'invert(1)', mixBlendMode: 'screen' }} />
          </div>
          <h1 className="login-hero-title">
            Cimento direto da<br/>
            Votorantim,<br/>
            <span style={{ color: 'var(--accent)' }}>com desconto exclusivo.</span>
          </h1>
          <p className="login-hero-sub">
            A primeira plataforma de cotação que conecta donos de máquinas Votanabe ao maior
            fornecedor de cimento do país. Cotações em minutos, desconto automático e logística integrada.
          </p>

          <div className="login-stats">
            <div>
              <span>R$ 2,00</span>
              <span>desconto por saco</span>
            </div>
            <div>
              <span>28</span>
              <span>fábricas Votorantim</span>
            </div>
            <div>
              <span>40+</span>
              <span>representantes</span>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14, color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
          <Icon name="shield" size={16} />
          Pré-aprovado pela diretoria Votorantim — descontos aplicados automaticamente em todo pedido feito pela plataforma.
        </div>
      </aside>

      <section className="login-form-wrap">
        <div className="login-form-card">
          <div className="page-eyebrow">Acesso à plataforma</div>
          <h2 className="page-title">Entre na sua conta</h2>
          <p className="page-sub" style={{ marginBottom: 28 }}>
            Use o CNPJ da construtora e o número de série da máquina Votanabe.
          </p>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label className="field-label">CNPJ da construtora</label>
              <input className="field-input" defaultValue="12.345.678/0001-90" />
            </div>

            <div className="field">
              <label className="field-label">Número de série da máquina Votanabe</label>
              <input className="field-input" defaultValue="VTN-2025-00871" />
            </div>

            <div className="form-row form-row-2">
              <div className="field">
                <label className="field-label">Responsável</label>
                <input className="field-input" defaultValue="José Tucumann" />
              </div>
              <div className="field">
                <label className="field-label">Telefone</label>
                <input className="field-input" defaultValue="(11) 99999-0000" />
              </div>
            </div>

            <div className="field">
              <label className="field-label">E-mail corporativo</label>
              <input className="field-input" type="email" defaultValue="jose@tucumann.com.br" />
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Entrar no Clube Votanabe
              <Icon name="arrowRight" size={16} />
            </button>

            <p className="text-mute" style={{ fontSize: 12, textAlign: 'center', marginTop: 4 }}>
              Ao continuar, você confirma que possui uma máquina Votanabe ativa e aceita os termos do clube.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
