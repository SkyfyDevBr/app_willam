import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { toast } from '../components/ToastHost'

export default function RepQuoteEdit() {
  const nav = useNavigate()

  function enviar() {
    toast('Orçamento enviado ao cliente via WhatsApp, e-mail e plataforma')
    nav('/representante')
  }

  return (
    <>
      <button className="btn-link" onClick={() => nav('/representante')} style={{ marginBottom: 12 }}>
        <Icon name="arrowLeft" size={14} />
        Voltar ao painel
      </button>

      <PageHeader
        eyebrow="Orçamento — etapa final"
        title="Anel viário Sorocaba — trecho 2"
        subtitle="Cliente: Construtora Tucumann • Máquina Votanabe vinculada"
      />

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <section className="card">
          <div className="grid grid-3">
            <div className="stat" style={{ padding: 16 }}>
              <div className="stat-label">Quantidade</div>
              <div className="stat-value text-mono-num">8.500</div>
              <div className="text-soft" style={{ fontSize: 12, marginTop: 4 }}>sacos</div>
            </div>
            <div className="stat" style={{ padding: 16 }}>
              <div className="stat-label">Cimento</div>
              <div className="stat-value">CP-V ARI</div>
              <div className="text-soft" style={{ fontSize: 12, marginTop: 4 }}>alta resistência</div>
            </div>
            <div className="stat" style={{ padding: 16 }}>
              <div className="stat-label">Entrega</div>
              <div className="stat-value text-mono-num">500/dia</div>
              <div className="text-soft" style={{ fontSize: 12, marginTop: 4 }}>cronograma 17 dias</div>
            </div>
          </div>

          <div className="divider" />

          <h3 className="card-title">Composição do orçamento</h3>
          <p className="card-sub">Os valores devem refletir o CRM Votorantim. O desconto clube é aplicado automaticamente.</p>

          <div className="form-grid mt-4">
            <div className="flex between center">
              <span>Preço unitário base (CRM Votorantim)</span>
              <div className="flex center gap-2">
                <span className="text-mute">R$</span>
                <input className="field-input text-right" style={{ width: 110 }} defaultValue="35,00" />
              </div>
            </div>
            <div className="flex between center">
              <span>Frete incluso (CIF)</span>
              <div className="flex center gap-2">
                <span className="text-mute">R$</span>
                <input className="field-input text-right" style={{ width: 110 }} defaultValue="0,80" />
              </div>
            </div>
            <div className="flex between center" style={{
              background: 'var(--success-soft)',
              padding: '14px 16px',
              borderRadius: 12,
              border: '1px solid var(--success-soft)'
            }}>
              <span style={{ color: '#047857', fontWeight: 600 }}>Desconto Clube Votanabe (automático)</span>
              <strong style={{ color: '#047857' }}>– R$ 2,00</strong>
            </div>
          </div>

          <div className="total-card mt-6 flex between center">
            <div>
              <div className="label">Preço final ao cliente</div>
              <div className="value text-mono-num">R$ 33,80 / saco</div>
            </div>
            <div className="text-right">
              <div className="label">Total do pedido</div>
              <div className="value text-mono-num">R$ 287.300</div>
            </div>
          </div>

          <div className="flex between mt-6">
            <button className="btn btn-ghost" onClick={() => nav('/representante')}>
              Salvar rascunho
            </button>
            <button className="btn btn-primary" onClick={enviar}>
              Enviar orçamento ao cliente
              <Icon name="arrowRight" size={16} />
            </button>
          </div>
        </section>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card">
            <h4 className="card-title">Cliente</h4>
            <div className="mt-3" style={{ fontSize: 13.5 }}>
              <div className="text-bold">Construtora Tucumann</div>
              <div className="text-soft">CNPJ 12.345.678/0001-90</div>
            </div>
            <div className="divider" />
            <div className="flex center gap-3" style={{ fontSize: 13 }}>
              <Icon name="user" size={14} color="var(--text-soft)" />
              <span>José Tucumann</span>
            </div>
            <div className="flex center gap-3 mt-2" style={{ fontSize: 13 }}>
              <Icon name="phone" size={14} color="var(--text-soft)" />
              <span>(11) 99999-0000</span>
            </div>
            <div className="flex center gap-3 mt-2" style={{ fontSize: 13 }}>
              <Icon name="mail" size={14} color="var(--text-soft)" />
              <span>jose@tucumann.com.br</span>
            </div>
          </div>

          <div className="card">
            <h4 className="card-title">Máquina</h4>
            <div className="mt-3">
              <div className="text-bold">VTN-2025-00871</div>
              <div className="text-soft" style={{ fontSize: 13 }}>Pavimentadora V-Pro 7</div>
              <span className="badge badge-success mt-3" style={{ marginTop: 12 }}>
                <Icon name="check" size={12} />
                Verificada
              </span>
            </div>
          </div>

          <div className="promo-card">
            <div style={{ position: 'relative' }}>
              <span className="promo-eyebrow">Política do clube</span>
              <h3 style={{ fontSize: 18 }}>Desconto pré-aprovado</h3>
              <p>
                R$ 2,00 por saco aplicados automaticamente em todos os pedidos do Clube Votanabe.
                Não requer aprovação de gestor.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
