import React from 'react'
import config from '../config.json'
import { CSSReset } from '../src/components/CSSreset'
import Menu from '../src/components/menu'
import Header from '../src/components/header'
import Timeline from '../src/components/timeline'


function HomePage() {

  const [typedWord, settypedWord] = React.useState('')

  return (
    <>
    <CSSReset />
      <div>
        <Menu valorDoFiltro={typedWord} setValorDoFiltro={settypedWord}/>
        <Header />
        <Timeline searchValue={typedWord} playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  )
}
export default HomePage