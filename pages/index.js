import config from '../config.json'
import { CSSReset } from '../src/components/CSSreset'
import Menu from '../src/components/menu'
import Header from '../src/components/header'
import Timeline from '../src/components/timeline'

function HomePage() {
  return (
    <>
    <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}
export default HomePage