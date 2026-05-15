import PageHeader from '../components/PageHeader'
import Stat from '../components/Stat'
import Icon from '../components/Icon'

const FINALITY = [
  { label: 'Pavimentação / estrada', value: '720k sacos', pct: 78, accent: true },
  { label: 'Obras de arte', value: '260k sacos', pct: 42 },
  { label: 'Edificações', value: '180k sacos', pct: 28 },
  { label: 'Outros', value: '60k sacos', pct: 12 },
]

const REGIONS = [
  { name: 'Paraná', value: '312k sacos' },
  { name: 'São Paulo', value: '284k sacos' },
  { name: 'Goiás', value: '198k sacos' },
  { name: 'Minas Gerais', value: '176k sacos' },
]

export default function Analytics() {
  return (
    <>
      <PageHeader
        eyebrow="Inteligência Votorantim"
        title="Mercado de cimento para estradas"
        subtitle="Métricas exclusivas geradas pelos pedidos da plataforma — algo que a Votorantim não conseguia mensurar antes."
        actions={
          <button className="btn btn-ghost">
            <Icon name="download" size={16} />
            Exportar relatório
          </button>
        }
      />

      <div className="grid grid-4">
        <Stat label="Volume pavimentação" value="1,2M" trend="sacos / mês mapeados" icon="layers" />
        <Stat label="Share rodoviário" value="+18%" trend="vs. trimestre anterior" icon="trending" />
        <Stat label="Ticket médio" value="R$ 312k" trend="por cotação" icon="zap" />
        <Stat label="Construtoras ativas" value="147" trend="na plataforma" icon="building" />
      </div>

      <div className="grid mt-6" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <section className="card">
          <div className="flex between center">
            <div>
              <h3 className="card-title">Volume por finalidade de obra</h3>
              <p className="card-sub">Últimos 6 meses — dados exclusivos da plataforma</p>
            </div>
            <select className="field-select" style={{ width: 'auto' }}>
              <option>Últimos 6 meses</option>
              <option>Ano corrente</option>
              <option>Últimos 12 meses</option>
            </select>
          </div>

          <div className="mt-6">
            {FINALITY.map(row => (
              <div className="bar-row" key={row.label}>
                <div className="bar-head">
                  <span>{row.label}</span>
                  <strong className="text-mono-num">{row.value}</strong>
                </div>
                <div className="bar-track">
                  <div className={`bar-fill ${row.accent ? 'accent' : ''}`} style={{ width: `${row.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="divider" />

          <h3 className="card-title">Top regiões em pavimentação</h3>
          <div className="grid grid-2 mt-4">
            {REGIONS.map(r => (
              <div className="delivery-item" key={r.name}>
                <div className="flex center gap-3">
                  <Icon name="pin" size={16} color="var(--brand-600)" />
                  <span className="text-bold">{r.name}</span>
                </div>
                <span className="text-mono-num text-bold">{r.value}</span>
              </div>
            ))}
          </div>
        </section>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="promo-card">
            <div style={{ position: 'relative' }}>
              <span className="promo-eyebrow">Por que importa</span>
              <h3>Mercado invisível, agora mensurável</h3>
              <p>
                Hoje a Votorantim sabe quanto vende para construção e concreto, mas <strong>não sabe quanto vai para pavimentação</strong>.
                A plataforma transforma cada pedido em inteligência estratégica.
              </p>
            </div>
          </div>

          <div className="card">
            <h4 className="card-title">Próximas ações sugeridas</h4>
            <div className="mt-4" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="flex gap-3">
                <div className="list-thumb" style={{ width: 32, height: 32 }}>
                  <Icon name="trending" size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="text-bold" style={{ fontSize: 13.5 }}>Expandir o Clube</div>
                  <div className="text-soft" style={{ fontSize: 12 }}>Incluir construtoras parceiras sem máquina Votanabe</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="list-thumb" style={{ width: 32, height: 32 }}>
                  <Icon name="shield" size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="text-bold" style={{ fontSize: 13.5 }}>Exclusividade regional</div>
                  <div className="text-soft" style={{ fontSize: 12 }}>Piloto Sul com Carla Mendes (Q3/2026)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="list-thumb" style={{ width: 32, height: 32 }}>
                  <Icon name="chart" size={16} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="text-bold" style={{ fontSize: 13.5 }}>Relatório trimestral</div>
                  <div className="text-soft" style={{ fontSize: 12 }}>Apresentação direta para a diretoria Votorantim</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
