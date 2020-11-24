import { combineReducers, Reducer } from 'redux';
import { sceneReducer } from './scene';
import { ScenesState } from '../actions';

export interface StoreState {
  siteData: ScenesState;
};

export const reducers: Reducer<StoreState> = combineReducers<StoreState>({
  siteData: sceneReducer,
});