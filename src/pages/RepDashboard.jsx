import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Stat from '../components/Stat'
import Icon from '../components/Icon'

const NOVAS = [
  { id: 'orc-001', obra: 'Anel viário Sorocaba — trecho 2', sacos: '8.500 sacos • CP-V ARI', loc: 'Sorocaba/SP', tone: 'warning', label: 'Urgente', time: '12 min atrás' },
  { id: 'orc-002', obra: 'Rod. PR-323 km 88', sacos: '12.000 sacos • CP-IV 32 RS', loc: 'Cianorte/PR', tone: 'brand', label: 'Nova', time: '1h atrás' },
  { id: 'orc-003', obra: 'Contorno Sul — Lapa', sacos: '4.200 sacos • CP-II Z', loc: 'Lapa/PR', tone: 'brand', label: 'Nova', time: '3h atrás' },
]

const EM_ORCAMENTO = [
  { cliente: 'Construtora Alvorada', sacos: '6.500 sacos • CP-V ARI', progress: 66 },
  { cliente: 'Tucumann S.A.', sacos: '10.000 sacos • CP-V ARI', progress: 33 },
]

const ENVIADAS = [
  { obra: 'BR-376 km 412', sacos: '24.000 sacos', total: 'R$ 792.000', status: { label: 'Aprovado', tone: 'success' } },
  { obra: 'Anel viário Maringá', sacos: '5.200 sacos', total: 'R$ 171.600', status: { label: 'Aguardando cliente', tone: 'warning' } },
  { obra: 'Rod. dos Minérios', sacos: '9.800 sacos', total: 'R$ 323.400', status: { label: 'Aguardando cliente', tone: 'warning' } },
]

export default function RepDashboard() {
  const nav = useNavigate()

  return (
    <>
      <PageHeader
        eyebrow="Painel Votorantim — Região Sul"
        title="Ordens de serviço"
        subtitle="Carla Mendes • Gerente Regional"
        actions={
          <>
            <span className="badge badge-warning">2 aguardando</span>
            <span className="badge badge-success">5 fechadas hoje</span>
          </>
        }
      />

      <div className="grid grid-3">
        <Stat label="Cotações novas" value="12" trend="requer atenção" trendDirection="down" icon="bell" />
        <Stat label="Conversão" value="78%" trend="9 pp acima do trimestre" icon="trending" />
        <Stat label="Volume do mês" value="312k sacos" trend="via plataforma" icon="package" />
      </div>

      <div className="kanban mt-6">
        <div className="kanban-col">
          <div className="kanban-col-header">
            <div className="flex center gap-2">
              <Icon name="bell" size={16} color="var(--brand-600)" />
              <strong>Novas</strong>
            </div>
            <span className="badge badge-mute">3</span>
          </div>
          {NOVAS.map(item => (
            <div className="kanban-card" key={item.id} onClick={() => nav(`/representante/orcar/${item.id}`)}>
              <div className="flex between center">
                <span className={`badge badge-${item.tone}`}>{item.label}</span>
                <span className="text-mute" style={{ fontSize: 11 }}>{item.time}</span>
              </div>
              <div className="text-bold mt-3">{item.obra}</div>
              <div className="text-soft" style={{ fontSize: 12, marginTop: 4 }}>{item.sacos}</div>
              <div className="flex center gap-2 mt-2 text-soft" style={{ fontSize: 12 }}>
                <Icon name="pin" size={12} />
                {item.loc}
              </div>
              <button className="btn btn-primary btn-block btn-sm mt-4">
                Orçar agora
                <Icon name="arrowRight" size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="kanban-col">
          <div className="kanban-col-header">
            <div className="flex center gap-2">
              <Icon name="edit" size={16} color="var(--brand-600)" />
              <strong>Em orçamento</strong>
            </div>
            <span className="badge badge-mute">2</span>
          </div>
          {EM_ORCAMENTO.map((item, i) => (
            <div className="kanban-card" key={i}>
              <div className="text-soft" style={{ fontSize: 12 }}>Cliente</div>
              <div className="text-bold">{item.cliente}</div>
              <div className="text-soft mt-2" style={{ fontSize: 12 }}>{item.sacos}</div>
              <div className="progress mt-3">
                <div style={{ width: `${item.progress}%` }} />
              </div>
              <div className="text-mute mt-2" style={{ fontSize: 11 }}>{item.progress}% concluído</div>
            </div>
          ))}
        </div>

        <div className="kanban-col">
          <div className="kanban-col-header">
            <div className="flex center gap-2">
              <Icon name="arrowRight" size={16} color="var(--brand-600)" />
              <strong>Enviadas ao cliente</strong>
            </div>
            <span className="badge badge-mute">4</span>
          </div>
          {ENVIADAS.map((item, i) => (
            <div className="kanban-card" key={i}>
              <div className="text-bold">{item.obra}</div>
              <div className="text-soft" style={{ fontSize: 12, marginTop: 4 }}>{item.sacos} • {item.total}</div>
              <span className={`badge badge-${item.status.tone} mt-3`} style={{ marginTop: 12 }}>
                {item.status.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
