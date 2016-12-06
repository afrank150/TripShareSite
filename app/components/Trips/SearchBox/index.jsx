import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search';
import styles from './styles.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    };
  }

  onUpdateInput(inputValue) {
  }

  render() {
    return (
      <span className={styles.searchBox}>
        <SearchIcon style={{paddingBottom: '3px', verticalAlign: 'middle'}}/>
        <AutoComplete
          dataSource={this.state.dataSource}
          onUpdateInput={this.onUpdateInput}
          fullWidth={false}
          underlineShow={false}
          hintText={'Search by location...'}
          hintStyle={{color: '#bfbfc9'}}
          inputStyle={{paddingTop: '1px', bottom: '2.5px'}}
          style={{width: '600px',}}
          textFieldStyle={{width: '600px', paddingLeft: '8px',}}
        />
      </span>
    );
  }
}

export default SearchBox;
