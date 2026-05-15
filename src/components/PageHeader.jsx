export default function PageHeader({ eyebrow, title, subtitle, actions }) {
  return (
    <div className="page-header fade-in">
      <div>
        {eyebrow && <div className="page-eyebrow">{eyebrow}</div>}
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-sub">{subtitle}</p>}
      </div>
      {actions && <div className="flex gap-3 center">{actions}</div>}
    </div>
  )
}
