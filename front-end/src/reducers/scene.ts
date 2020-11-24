import { Action, ActionTypes, ScenesState } from '../actions';

export const initialState: ScenesState = {
  siteData: { name: '', scenes: [] },
  sceneId: { sceneId: '' }
};

export const sceneReducer = (state: ScenesState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.scenes:
      return { ...state, siteData: action.payload };
    case ActionTypes.controlScene:
      return { ...state, scene: action.payload };
    default:
      return state;
  }
};