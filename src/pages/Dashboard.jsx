import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Stat from '../components/Stat'
import Icon from '../components/Icon'

const PROJECTS = [
  { id: 1, title: 'BR-376 km 412 — Pavimentação', loc: 'Curitiba/PR', bags: '24.000 sacos • CP-V ARI', status: { label: 'Em entrega', tone: 'success' } },
  { id: 2, title: 'Anel viário Sorocaba — trecho 2', loc: 'Sorocaba/SP', bags: '8.500 sacos • CP-V ARI', status: { label: 'Aguardando orçamento', tone: 'warning' } },
  { id: 3, title: 'Rod. Dom Pedro II — trecho 3', loc: 'Campinas/SP', bags: '10.000 sacos • CP-V ARI', status: { label: 'Cotação fechada', tone: 'brand' } },
]

export default function Dashboard() {
  const nav = useNavigate()

  return (
    <>
      <PageHeader
        eyebrow="Cliente • Construtora Tucumann"
        title="Bom dia, José"
        subtitle="Pronto para cotar o cimento da próxima obra?"
        actions={
          <button className="btn btn-accent" onClick={() => nav('/cotacoes/nova')}>
            <Icon name="plus" size={16} />
            Nova cotação
          </button>
        }
      />

      <div className="grid grid-4">
        <Stat label="Economia no mês" value="R$ 38.420" trend="12% vs. mês anterior" icon="trending" />
        <Stat label="Sacos comprados" value="19.210" trend="últimos 30 dias" icon="package" />
        <Stat label="Cotações abertas" value="3" trend="aguardando retorno" icon="fileText" />
        <Stat label="Máquina ativa" value="VTN-00871" trend="operando" icon="truck" />
      </div>

      <div className="grid mt-6" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <section className="card">
          <div className="flex between center">
            <div>
              <h3 className="card-title">Obras em andamento</h3>
              <p className="card-sub">Acompanhe o status de cada cotação em tempo real</p>
            </div>
            <button className="btn-link" onClick={() => nav('/cotacoes')}>
              Ver tudo
              <Icon name="arrowRight" size={14} />
            </button>
          </div>

          <div className="mt-4">
            {PROJECTS.map(p => (
              <div className="list-row" key={p.id}>
                <div className="list-main">
                  <div className="list-thumb">
                    <Icon name="road" size={22} />
                  </div>
                  <div>
                    <div className="list-title">{p.title}</div>
                    <div className="list-sub">{p.loc} • {p.bags}</div>
                  </div>
                </div>
                <span className={`badge badge-${p.status.tone}`}>
                  <span className="badge-dot" style={{ background: 'currentColor' }} />
                  {p.status.label}
                </span>
                <button className="btn-link" onClick={() => nav(`/cotacoes/${p.id}`)}>
                  Detalhes
                </button>
              </div>
            ))}
          </div>
        </section>

        <aside>
          <div className="promo-card">
            <div style={{ position: 'relative' }}>
              <span className="promo-eyebrow">Benefício Clube</span>
              <h3>Desconto automático</h3>
              <p>
                Toda cotação fechada pela plataforma recebe <strong style={{ color: 'var(--accent)' }}>R$ 2,00</strong> de desconto por saco.
                Pré-aprovado pela diretoria Votorantim — sem necessidade de negociação.
              </p>
              <button className="btn btn-accent btn-block mt-6" onClick={() => nav('/cotacoes/nova')}>
                Cotar agora
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </div>

          <div className="card mt-4">
            <h3 className="card-title">Próxima entrega</h3>
            <p className="card-sub">BR-376 km 412 — lote 2</p>
            <div className="delivery-item mt-4">
              <div className="flex center gap-3">
                <Icon name="calendar" size={18} color="var(--brand-600)" />
                <div>
                  <div className="text-bold">27 de maio, 2026</div>
                  <div className="text-soft" style={{ fontSize: 12 }}>6.000 sacos • CP-V ARI</div>
                </div>
              </div>
              <span className="badge badge-info">Confirmado</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
