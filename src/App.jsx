import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';

import Child from 'Child.jsx';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {count: 0, data: ""};
    this.incrementCount = this.incrementCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.clearCount = this.clearCount.bind(this);
    this.updateFromChild = this.updateFromChild.bind(this);
  }

  // this.state.countの値を1増やす
  incrementCount(){
    var state = this.state;
    state.count += 1;
    this.setState(state);  // this.stateを更新
  }

  // this.state.countの値を1減らす
  decreaseCount(){
    var state = this.state;
    state.count -=1;
    this.setState(state);  //this.stateを更新
  }

  // this.state.countの値を0にする
  clearCount(){
    var state = this.state;
    state.count = 0;
    this.setState(state);  //this.stateを更新
  }

  // Childから呼び出される関数
  // value: 子から渡されるデータ
  updateFromChild(value) {
    var state = this.state;
    state.data = value;
    this.setState(state); // this.stateを更新
  }

  // GChildから呼び出される関数
  // value: 孫から渡されるデータ
  updateFromGChild(value) {
    var state = this.state;
    state.data = value;
    this.setState(state); // this.stateを更新
  }

  render() {
    return (
      <Page>
        <div>App</div>
        <div>カウント:{this.state.count}</div>
        <Button modifier="large" onClick={this.incrementCount}>Up</Button>

        {/* AppのcountとupdateFromChildを渡して、propsで参照できるようにする */}
        <Child count={this.state.count} decreaseCount={this.decreaseCount} updateFromChild={this.updateFromChild} updateFromGChild={this.updateFromGChild} clearCount={this.clearCount} />
      </Page>
    );
  }
}