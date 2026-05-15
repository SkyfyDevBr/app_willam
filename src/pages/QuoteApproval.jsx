import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { toast } from '../components/ToastHost'

const LOTES = [
  { id: 1, sacos: '6.000', data: '20/05/2026' },
  { id: 2, sacos: '6.000', data: '27/05/2026' },
  { id: 3, sacos: '6.000', data: '03/06/2026' },
  { id: 4, sacos: '6.000', data: '10/06/2026' },
]

export default function QuoteApproval() {
  const nav = useNavigate()

  function finalizar() {
    toast('Pedido finalizado e enviado à Votorantim')
    nav('/cotacoes')
  }

  return (
    <>
      <button className="btn-link" onClick={() => nav('/cotacoes')} style={{ marginBottom: 12 }}>
        <Icon name="arrowLeft" size={14} />
        Voltar para cotações
      </button>

      <PageHeader
        eyebrow="Orçamento recebido"
        title="BR-376 km 412 — Pavimentação"
        subtitle="Enviado por Carla Mendes — Representante Votorantim Sul"
      />

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <section className="card">
          <div className="grid grid-4">
            <div className="stat" style={{ padding: 16 }}>
              <div className="stat-label">Sacos</div>
              <div className="stat-value text-mono-num">24.000</div>
            </div>
            <div className="stat" style={{ padding: 16 }}>
              <div className="stat-label">Preço base</div>
              <div className="stat-value text-mono-num">R$ 35,00</div>
            </div>
            <div className="stat" style={{ padding: 16, background: 'var(--success-soft)', borderColor: 'var(--success-soft)' }}>
              <div className="stat-label" style={{ color: '#047857' }}>Desconto clube</div>
              <div className="stat-value text-mono-num" style={{ color: '#047857' }}>– R$ 2,00</div>
            </div>
            <div className="stat total-card" style={{ padding: 16, margin: 0 }}>
              <div className="label">Preço final</div>
              <div className="value text-mono-num">R$ 33,00</div>
            </div>
          </div>

          <div className="divider" />

          <h3 className="card-title">Cronograma de entregas</h3>
          <p className="card-sub">Entregas programadas em 4 lotes pela transportadora Votorantim</p>

          <div className="mt-4">
            {LOTES.map(l => (
              <div className="delivery-item" key={l.id}>
                <div className="flex center gap-3">
                  <div className="list-thumb" style={{ width: 36, height: 36 }}>
                    <Icon name="package" size={18} />
                  </div>
                  <div>
                    <div className="text-bold">Lote {l.id} — {l.sacos} sacos</div>
                    <div className="text-soft" style={{ fontSize: 12 }}>Entrega prevista</div>
                  </div>
                </div>
                <div className="text-bold text-mono-num">{l.data}</div>
              </div>
            ))}
          </div>

          <div className="divider" />

          <h3 className="card-title">Detalhes técnicos</h3>
          <div className="mt-4">
            <div className="summary-row"><span className="text-soft">Tipo de cimento</span><strong>CP-V ARI</strong></div>
            <div className="summary-row"><span className="text-soft">Fábrica de origem</span><strong>Rio Branco do Sul / PR</strong></div>
            <div className="summary-row"><span className="text-soft">Frete</span><strong>Incluso (CIF)</strong></div>
            <div className="summary-row"><span className="text-soft">Forma de pagamento</span><strong>30/60/90 dias</strong></div>
          </div>
        </section>

        <aside className="card" style={{ height: 'fit-content' }}>
          <div className="text-soft" style={{ fontSize: 12 }}>Total a pagar</div>
          <div className="text-3xl text-bold text-mono-num" style={{ marginTop: 4 }}>R$ 792.000,00</div>
          <div className="text-success text-bold mt-2">economia de R$ 48.000</div>

          <button className="btn btn-success btn-block mt-6" onClick={finalizar}>
            <Icon name="check" size={16} />
            Finalizar pedido
          </button>
          <button className="btn btn-ghost btn-block mt-3">
            <Icon name="phone" size={16} />
            Negociar via representante
          </button>

          <div className="divider" />

          <h4 className="text-bold">Representante</h4>
          <div className="flex center gap-3 mt-3">
            <div className="user-avatar" style={{ background: 'var(--brand-100)', color: 'var(--brand-700)' }}>CM</div>
            <div>
              <div className="text-bold">Carla Mendes</div>
              <div className="text-soft" style={{ fontSize: 12 }}>Votorantim Sul • (41) 99888-0000</div>
            </div>
          </div>

          <p className="text-mute mt-4" style={{ fontSize: 12 }}>
            Pagamento e emissão de nota fiscal seguem o fluxo padrão da Votorantim após a confirmação.
          </p>
        </aside>
      </div>
    </>
  )
}
