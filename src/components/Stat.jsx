import Icon from './Icon'

export default function Stat({ label, value, trend, trendDirection = 'up', icon }) {
  return (
    <div className="stat">
      {icon && (
        <div className="stat-icon">
          <Icon name={icon} size={20} />
        </div>
      )}
      <div className="stat-label">{label}</div>
      <div className="stat-value text-mono-num">{value}</div>
      {trend && (
        <div className={`stat-trend ${trendDirection}`}>
          <Icon name="trending" size={14} />
          {trend}
        </div>
      )}
    </div>
  )
}
