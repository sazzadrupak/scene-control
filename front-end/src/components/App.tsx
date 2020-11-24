import React from 'react';
import { connect } from 'react-redux';
import { SiteData, scenes, SceneData } from '../actions';
import { StoreState } from '../reducers';
import { PageInfo } from '../helpers';
import { Scene } from './scene';

interface AppProps {
  datas: SiteData;
  scenes: Function;
}

export class _App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount(): void {
    this.props.scenes();
  }

  componentDidUpdate(): void {
    PageInfo({ title: this.props.datas.name });
  }

  renderSceneList(): JSX.Element[] {
    return this.props.datas.scenes.map((sceneItem: SceneData) => (
      <Scene key={sceneItem.id} data={sceneItem} />
    ));
  }

  render() {
    return <div className="container" >
      <div className="row justify-content-center align-items-center">
        <h2>{this.props.datas.name}</h2>
      </div>
      <div className="row mt-5 justify-content-center align-items-center">
        {this.props.datas.scenes && this.renderSceneList()}
      </div>
    </div >;
  }
}

const mapStateToProps = ({ siteData }: StoreState) => {
  const { siteData: datas } = siteData;
  return { datas };
}

export const App = connect(
  mapStateToProps,
  { scenes }
)(_App);