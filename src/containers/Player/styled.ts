import styled, { css, keyframes } from 'styled-components'
import { PLAYER, DIRECTIONS } from '../../constants'

export const idleAnimation = keyframes`
  100% { background-position: ${PLAYER.WIDTH * 12}px 0; }
`

export const idleCss = css`
  animation: ${idleAnimation} 3s steps(12) infinite;
`

export const walkingAnimation = keyframes`
100% { background-position-x: -${PLAYER.WIDTH * 7}px; }
`

export const walkingCss = css`
  background-position-y: -${PLAYER.HEIGHT}px;
  animation: ${walkingAnimation} 1s steps(7) infinite;
`

export const Hero = styled.div<{
  isWalking?: boolean
  position: [number, number]
  direction: DIRECTIONS
}>`
  transition: top 2s, left 2s;
  display: inline-block;
  position: absolute;
  top: ${({ position }) => position[1]}px;
  left: ${({ position }) => position[0]}px;
  height: ${PLAYER.HEIGHT}px;
  width: ${PLAYER.WIDTH}px;
  background: url('./sprites/hero.png') 0px 0px;
  background-size: ${PLAYER.WIDTH * 13}px ${PLAYER.HEIGHT * 16}px;
  ${({ isWalking }) => (isWalking ? walkingCss : idleCss)}
  transform: ${({ direction }) =>
    direction === DIRECTIONS.LEFT ? 'rotateY(180deg)' : 'none'};
`
