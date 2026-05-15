import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { toast } from '../components/ToastHost'

export default function NewQuote() {
  const nav = useNavigate()

  function submit(e) {
    e.preventDefault()
    toast('Cotação enviada ao representante regional')
    nav('/cotacoes')
  }

  return (
    <>
      <PageHeader
        eyebrow="Etapa 1 de 3"
        title="Nova cotação de cimento"
        subtitle="Preencha os dados da obra. O pedido cai direto no representante regional Votorantim."
        actions={
          <div className="steps">
            <span className="step-dot active">1</span>
            <span className="text-bold">Obra</span>
            <span className="step-line" />
            <span className="step-dot">2</span>
            <span className="text-mute">Quantidade</span>
            <span className="step-line" />
            <span className="step-dot">3</span>
            <span className="text-mute">Envio</span>
          </div>
        }
      />

      <form className="grid" style={{ gridTemplateColumns: '2fr 1fr' }} onSubmit={submit}>
        <section className="card">
          <div className="form-grid">
            <div className="field">
              <label className="field-label">Identificação da obra</label>
              <input className="field-input" defaultValue="Anel viário Sorocaba — trecho 2" />
            </div>

            <div className="form-row form-row-2">
              <div className="field">
                <label className="field-label">Finalidade da obra</label>
                <select className="field-select" defaultValue="pavimentacao">
                  <option value="pavimentacao">Pavimentação / estrada</option>
                  <option value="arte">Obra de arte (ponte / viaduto)</option>
                  <option value="edificacao">Edificação</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div className="field">
                <label className="field-label">Tipo de cimento</label>
                <select className="field-select">
                  <option>CP-V ARI (alta resistência inicial)</option>
                  <option>CP-II Z 32</option>
                  <option>CP-IV 32 RS</option>
                  <option>CP-III 40 RS</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="field-label">Endereço da obra (entrega)</label>
              <input className="field-input" defaultValue="Rod. Raposo Tavares, km 92 — Sorocaba/SP" />
            </div>

            <div className="form-row form-row-3">
              <div className="field">
                <label className="field-label">Quantidade total (sacos)</label>
                <input className="field-input" defaultValue="8500" />
              </div>
              <div className="field">
                <label className="field-label">Entrega por dia (sacos)</label>
                <input className="field-input" defaultValue="500" />
              </div>
              <div className="field">
                <label className="field-label">Início previsto</label>
                <input type="date" className="field-input" defaultValue="2026-05-20" />
              </div>
            </div>

            <div className="field">
              <label className="field-label">Máquina Votanabe vinculada</label>
              <div className="field-static">
                <span>VTN-2025-00871 — Pavimentadora V-Pro 7</span>
                <span className="badge badge-success">Verificada</span>
              </div>
            </div>

            <div className="field">
              <label className="field-label">Observações ao representante (opcional)</label>
              <textarea className="field-textarea" placeholder="Ex.: descarga programada, horário restrito, ponto de referência..." />
            </div>

            <div className="flex between center mt-2">
              <button type="button" className="btn btn-ghost" onClick={() => nav('/dashboard')}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Enviar para cotação
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </div>
        </section>

        <aside className="card" style={{ height: 'fit-content' }}>
          <h3 className="card-title">Resumo do pedido</h3>
          <p className="card-sub">Pré-cálculo com desconto Clube Votanabe</p>

          <div className="mt-4">
            <div className="summary-row">
              <span className="text-soft">Sacos</span>
              <strong>8.500</strong>
            </div>
            <div className="summary-row">
              <span className="text-soft">Tipo de cimento</span>
              <strong>CP-V ARI</strong>
            </div>
            <div className="summary-row">
              <span className="text-soft">Destino</span>
              <strong>Sorocaba/SP</strong>
            </div>
            <div className="summary-row">
              <span className="text-soft">Preço base estimado</span>
              <strong>R$ 35,00 / saco</strong>
            </div>
            <div className="summary-row">
              <span className="text-soft">Desconto clube</span>
              <strong className="text-success">– R$ 2,00 / saco</strong>
            </div>
          </div>

          <div className="total-card">
            <div className="label">Total estimado</div>
            <div className="value">R$ 280.500,00</div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>economia de R$ 17.000</div>
          </div>

          <p className="text-mute mt-4" style={{ fontSize: 12 }}>
            Valor final é confirmado pelo representante regional Votorantim e segue a política do clube.
          </p>
        </aside>
      </form>
    </>
  )
}
