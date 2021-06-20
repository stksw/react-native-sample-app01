import { Article } from '../../entities/article'

export type AddClipAction = {
  type: 'ADD_CLIP'
  payload: Article
}

export type DeleteClipAction = {
  type: 'DELETE_CLIP'
  payload: Article
}

export const addClip = ({ article }: { article: Article }): AddClipAction => {
  return {
    type: 'ADD_CLIP',
    payload: article,
  }
}

export const deleteClip = ({ article }: { article: Article }): DeleteClipAction => {
  return {
    type: 'DELETE_CLIP',
    payload: article,
  }
}
