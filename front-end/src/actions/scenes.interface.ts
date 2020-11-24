import { ActionTypes } from './types';

export interface SceneData {
  id: string;
  name: string;
  [propName: string]: any;
}

export interface SiteData {
  name: string;
  scenes: SceneData[];
  [propName: string]: any;
}

export interface SceneControlData {
  sceneId: string
}

export interface ScenesState {
  siteData: SiteData;
  sceneId: SceneControlData;
}

export interface ScenesAction {
  type: ActionTypes.scenes;
  payload: SiteData;
}

export interface SceneControlAction {
  type: ActionTypes.controlScene;
  payload: SceneControlData;
}