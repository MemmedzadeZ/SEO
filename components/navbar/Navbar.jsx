import Link from 'next/link'
import LanguageSelect from './LanguageSelect'

export default function Navbar({ lng }) {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f5f5f5', zIndex: 1000 }}>
      <h2>My Website</h2>
      <LanguageSelect />
    </nav>
  )
}
