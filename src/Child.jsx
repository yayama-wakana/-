import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input, Button } from 'react-onsenui';

import GChild from 'Grandchild.jsx';

export default class Child extends React.Component {

  constructor(props) {
    super(props);
    this.updateInputText = this.updateInputText.bind(this);
    }

    updateInputText(event) {
      this.setState({ inputText: event.target.value }) // Childのstateを更新
      this.props.updateFromChild(this.state.inputText); // AppのupdateFromChildを呼び出す
    }
    
    render() {
      return (
        <Card>
          <div className="title">Childコンポーネント</div>
          <div className="content">
            <div>Appから渡された count={this.props.count}</div>
            <Button modifier="large" onClick={this.props.decreaseCount}>Down</Button>

            <GChild count={this.props.count} clearCount={this.props.clearCount} updateFromGChild={this.props.updateFromGChild} />
          </div>
        </Card>
      );
    }
}
