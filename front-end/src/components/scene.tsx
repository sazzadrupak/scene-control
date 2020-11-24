import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../reducers';
import { SceneControlData, SceneData, controlScene } from '../actions';

interface SceneProps {
  data: SceneData;
  controlScene: Function;
  sceneId: SceneControlData;
}

interface SceneStateData {
  clickedIcon: string;
}

enum IconType {
  clicked = 'fa-dot-circle-o',
  default = 'fa-circle-thin'
}

export class _Scene extends React.Component<SceneProps, SceneStateData> {
  constructor(props: SceneProps) {
    super(props);
    this.state = { clickedIcon: IconType.default };
  }

  selectedScene = (id: string) => {
    this.setState({ clickedIcon: IconType.clicked });
    this.props.controlScene(id);
    setTimeout(() => {
      this.setState({ clickedIcon: IconType.default });
    }, 800);
  }

  render() {
    return (
      <div onClick={() => this.selectedScene(this.props.data.id)} className="card card-custom mx-2 mb-3 card-col text-center">
        <div className="card-body">
          <i className={`fa fa-4x ${this.state.clickedIcon}`} aria-hidden="true"></i>
        </div>
        <div className="card-footer">
          {this.props.data.name}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ siteData }: StoreState) => {
  const { sceneId } = siteData;
  return { sceneId };
}

export const Scene = connect(
  mapStateToProps,
  { controlScene }
)(_Scene);