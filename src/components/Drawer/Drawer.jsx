import React from 'react'

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

    handleTitleClick() {
    this.setState({ active: !this.state.active });
  }

    render() {
      const { title, children } = this.props;
      const drawerStyles = this.state.active ? 'is-expanded' : '';

    return (
      <div className={`Drawer ${drawerStyles}`}>
        <div
        className="Drawer-title"
        onClick={this.handleTitleClick}
        >
          {title}
        </div>

        <div className="Drawer-content">
          {children}
        </div>
      </div>
    );
  }
}

export default Drawer;
