import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import socket from '../api';
import { ScenesAction, SiteData, SceneControlAction } from './scenes.interface';
const SITE_KEY = process.env.REACT_APP_API_KEY;

export const scenes = () => {
  return async (dispatch: Dispatch) => {
    socket.on('site', (response: SiteData) => {
      const { name, scenes } = response.data;
      dispatch<ScenesAction>({
        type: ActionTypes.scenes,
        payload: { name, scenes: [{ id: 'allOn', name: 'All On' }, ...scenes, { id: 'allOff', name: 'All Off' }] }
      });
    });
  };
};

export const controlScene = (id: string): SceneControlAction => {
  socket.emit('apply/scene', {
    siteKey: SITE_KEY,
    data: { id },
  });
  return {
    type: ActionTypes.controlScene,
    payload: { sceneId: id }
  };
}