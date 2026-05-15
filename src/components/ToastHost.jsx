import { useEffect, useState } from 'react'
import Icon from './Icon'

let pushToast = () => {}
export function toast(message) { pushToast(message) }

export default function ToastHost() {
  const [items, setItems] = useState([])

  useEffect(() => {
    pushToast = (message) => {
      const id = Date.now() + Math.random()
      setItems(prev => [...prev, { id, message }])
      setTimeout(() => setItems(prev => prev.filter(t => t.id !== id)), 3200)
    }
    return () => { pushToast = () => {} }
  }, [])

  return (
    <div className="toast-host">
      {items.map(t => (
        <div key={t.id} className="toast">
          <Icon name="check" size={18} />
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  )
}
