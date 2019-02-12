import React, { Component } from 'react'
import Game from './containers/Game'
import Player from './containers/Player'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { configStore } from './redux/store'

const App = () => {
  return (
    <Provider store={configStore()}>
      <Wrapper>
        <Game>
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
