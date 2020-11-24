import { ScenesAction, SceneControlAction } from './scenes.interface';
export enum ActionTypes {
  scenes,
  controlScene,
}

export type Action = ScenesAction | SceneControlAction;