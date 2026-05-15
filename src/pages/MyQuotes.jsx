import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'

const QUOTES = [
  { id: 'q2', obra: 'BR-376 km 412 — Pavimentação', loc: 'Curitiba/PR • CP-V ARI', sacos: '24.000', total: 'R$ 792.000', desc: 'R$ 48.000', status: { label: 'Orçamento pronto', tone: 'success' }, action: 'Finalizar pedido', highlight: true },
  { id: 'q1', obra: 'Anel viário Sorocaba — trecho 2', loc: 'Sorocaba/SP • CP-V ARI', sacos: '8.500', total: '—', desc: '—', status: { label: 'Aguardando rep.', tone: 'warning' }, action: 'Ver detalhes' },
  { id: 'q3', obra: 'Rod. Dom Pedro II — trecho 3', loc: 'Campinas/SP • CP-V ARI', sacos: '10.000', total: 'R$ 330.000', desc: 'R$ 20.000', status: { label: 'Em entrega', tone: 'info' }, action: 'Acompanhar' },
  { id: 'q4', obra: 'Contorno Norte de Maringá', loc: 'Maringá/PR • CP-II Z', sacos: '5.200', total: 'R$ 171.600', desc: 'R$ 10.400', status: { label: 'Concluído', tone: 'mute' }, action: 'Nota fiscal' },
]

export default function MyQuotes() {
  const nav = useNavigate()

  return (
    <>
      <PageHeader
        eyebrow="Minhas cotações"
        title="Acompanhe seus orçamentos"
        subtitle="Notificações chegam por WhatsApp, e-mail e aqui na plataforma."
        actions={
          <>
            <button className="btn btn-ghost">
              <Icon name="filter" size={16} /> Filtrar
            </button>
            <button className="btn btn-primary" onClick={() => nav('/cotacoes/nova')}>
              <Icon name="plus" size={16} /> Nova cotação
            </button>
          </>
        }
      />

      <div className="card-flat">
        <table className="table">
          <thead>
            <tr>
              <th>Obra</th>
              <th>Sacos</th>
              <th>Total</th>
              <th>Desconto</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {QUOTES.map(q => (
              <tr key={q.id} style={q.highlight ? { background: 'rgba(16,185,129,0.05)' } : undefined}>
                <td>
                  <div className="text-bold">{q.obra}</div>
                  <div className="text-soft" style={{ fontSize: 12, marginTop: 2 }}>{q.loc}</div>
                </td>
                <td className="text-mono-num">{q.sacos}</td>
                <td className="text-bold text-mono-num">{q.total}</td>
                <td className="text-success text-mono-num">{q.desc !== '—' ? `– ${q.desc}` : '—'}</td>
                <td>
                  <span className={`badge badge-${q.status.tone}`}>
                    <span className="badge-dot" style={{ background: 'currentColor' }} />
                    {q.status.label}
                  </span>
                </td>
                <td>
                  {q.highlight ? (
                    <button className="btn btn-success btn-sm" onClick={() => nav(`/cotacoes/${q.id}`)}>
                      {q.action}
                    </button>
                  ) : (
                    <button className="btn-link" onClick={() => nav(`/cotacoes/${q.id}`)}>
                      {q.action}
                      <Icon name="arrowRight" size={14} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
