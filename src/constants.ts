export enum PLAYER {
  HEIGHT = 64,
  WIDTH = 64,
}

export enum DIRECTIONS {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  NONE = 'NONE'
}

export enum MAP {
  WIDTH = PLAYER.HEIGHT * 15,
  HEIGHT = PLAYER.HEIGHT * 10,
}
