import React, { Component, PropTypes, DefaultProps } from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './styles.css';


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
    let zDepth = this.state.collapse ? 1 : 0;

    return (
      <AppBar
        className={className}
        showMenuIconButton={false}
        zDepth={zDepth}
        title={this.props.title}
        titleStyle={{height: '56px', lineHeight: '56px', verticalAlign: 'middle'}}
        iconElementRight={this.props.iconElementRight}
        iconStyleRight={this.props.iconStyleRight}
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
