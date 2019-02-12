import map0 from '../../maps/map0'

export interface IMapReducer {
  tiles: number[][]
}

const initialState: IMapReducer = {
  tiles: map0,
}

export default function mapReducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return { ...state }
  }
}
