import React, { Component, PropTypes, DefaultProps } from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './styles.css';
import RightButtons from 'components/_shared/NavBar/RightButtons';
import MenuDrawer from 'components/_shared/NavBar/MenuDrawer';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {collapse: this.props.initialDisplay};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.initialDisplay === false) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    let className = this.state.collapse ? styles.headerBarCollapse : styles.headerBar;
    let zDepth = this.state.collapse ? 2 : 0;

    return (
      <AppBar
        className={className}
        showMenuIconButton={false}
        iconElementLeft={<MenuDrawer />}
        zDepth={zDepth}
        title={<span>Mapception</span>}
        titleStyle={{lineHeight: '50px', verticalAlign: 'middle'}}
        iconElementRight={<RightButtons />}
      />
    );
  }

  handleScroll() {
    this.setState(window.scrollY > 60 ? { collapse: true } : { collapse: false });
  }
}

NavBar.propTypes = {
  initialDisplay: PropTypes.bool,
  collapse: PropTypes.bool
};

NavBar.defaultProps = {
  initialDisplay: false
};

export default NavBar;
