import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { configStore } from './redux/store'
import Map from './containers/Map'
import Game from './containers/Game'
import Player from './containers/Player'

const App = () => {
  return (
    <Provider store={configStore()}>
      <Wrapper>
        <Game>
          <Map />
          <Player />
        </Game>
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  overflow: auto;
`

export default App
