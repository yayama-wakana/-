import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input, Button } from 'react-onsenui';

export default class GChild extends React.Component {

  constructor(props) {
    super(props);
    this.updateInputText = this.updateInputText.bind(this);
    }

    updateInputText(event) {
      this.setState({ inputText: event.target.value }) // GChildのstateを更新
      this.props.updateFromGChild(this.state.inputText); // AppのupdateFromGChildを呼び出す
    }
    
    render() {
      return (
        <Card>
          <div className="title">GChildコンポーネント</div>
          <div className="content">
            <div>Appから渡された count={this.props.count}</div>
            <Button modifier="large" onClick={this.props.clearCount}>Clear</Button>
          </div>
        </Card>
      );
    }
}
