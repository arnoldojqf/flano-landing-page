import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';

class MenuWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  componentDidUpdate(prevProps) {
    const sideChanged =
      this.props.children.props.right !== prevProps.children.props.right;

    if (sideChanged) {
      this.setState({ hidden: true });

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({ hidden: false });
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: 'none' };
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'right'
    };
  }

  changeMenu(menu) {
    this.setState({ currentMenu: menu });
  }

  changeSide(side) {
    this.setState({ side });
  }

  getItems() {
    let items;

    switch (this.props.menus[this.state.currentMenu].items) {
      case 1:
        items = [
          <a key="1" href="#">
            <i className="fa fa-fw fa-envelope-o" />
            <span>Home</span>
          </a>,
          <a key="2" href="#pools">
            <i className="fa fa-fw fa-envelope-o" />
            <span>Vault</span>
          </a>,
          <a key="3" href="#farms">
            <i className="fa fa-fw fa-bell-o" />
            <span>Farms</span>
          </a>,
          <a key="4" href="#howtobuy">
            <i className="fa fa-fw fa-star-o" />
            <span>Trade</span>
          </a>,
          <a key="5" href="#tokenomics">
            <i className="fa fa-fw fa-bar-chart-o" />
            <span>Tokenomics</span>
          </a>,
          <a key="6" href="#whitepaper">
            <i className="fa fa-fw fa-newspaper-o" />
            <span>Whitepaper</span>
          </a>,
          <a key="7" href="#roadmap">
            <i className="fa fa-fw fa-comment-o" />
            <span>Roadmap</span>
          </a>
        ];
        break;
      case 2:
        items = [
          <h2 key="0">
            <i className="fa fa-fw fa-inbox fa-2x" />
            <span>Sidebar</span>
          </h2>,
          <a key="1" href="#pools">
            <i className="fa fa-fw fa-envelope-o" />
            <span>Vault</span>
          </a>,
          <a key="2" href="#farms">
            <i className="fa fa-fw fa-bell-o" />
            <span>Farms</span>
          </a>,
          <a key="3" href="#howtobuy">
            <i className="fa fa-fw fa-star-o" />
            <span>Trade</span>
          </a>,
          <a key="4" href="#tokenomics">
            <i className="fa fa-fw fa-bar-chart-o" />
            <span>Tokenomics</span>
          </a>,
          <a key="5" href="#whitepaper">
            <i className="fa fa-fw fa-newspaper-o" />
            <span>Whitepaper</span>
          </a>,
          <a key="6" href="#roadmap">
            <i className="fa fa-fw fa-comment-o" />
            <span>Roadmap</span>
          </a>
        ];        
    }

    return items;
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];

    const items = this.getItems();
    let jsx;

    if (this.state.side === 'right') {
      jsx = (
        <MenuWrap wait={20} side={this.state.side}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
            {items}
          </Menu>
        </MenuWrap>
      );
    } else {
      jsx = (
        <MenuWrap wait={20}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} extension>
            {items}
          </Menu>
        </MenuWrap>
      );
    }

    return jsx;
  }

  render() {
    const buttons = Object.keys(this.props.menus).map(menu => {
      return (
        <a
          key={menu}
          className={classNames({
            'current-demo': menu === this.state.currentMenu
          })}
          onClick={this.changeMenu.bind(this, menu)}
        >
          {this.props.menus[menu].buttonText}
        </a>
      );
    });

    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
        <main id="page-wrap">
          </main>
      </div>
    );
  }
}

const menus = {
  slide: { buttonText: 'Slide', items: 1 },
  stack: { buttonText: 'Stack', items: 1 },
  elastic: { buttonText: 'Elastic', items: 1 },
  bubble: { buttonText: 'Bubble', items: 1 },
  push: { buttonText: 'Push', items: 1 },
  pushRotate: { buttonText: 'Push Rotate', items: 2 },
  scaleDown: { buttonText: 'Scale Down', items: 2 },
  scaleRotate: { buttonText: 'Scale Rotate', items: 2 },
  fallDown: { buttonText: 'Fall Down', items: 2 },
  reveal: { buttonText: 'Reveal', items: 1 }
};

ReactDOM.render(<Demo menus={menus} />, document.getElementById('app'));