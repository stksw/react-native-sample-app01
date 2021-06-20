import { Article } from '../../entities/article'
import { AddClipAction, DeleteClipAction } from '../actions/user'

type UserReducerAction = AddClipAction | DeleteClipAction
const initialState = {
  clips: [] as Article[]
}

const userReducer = (state = initialState, action: UserReducerAction) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clips: [...state.clips, action.payload]
      }
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter((clip) => clip.url !== action.payload.url)
      }
    default:
      return state
  }
}

export default userReducer
