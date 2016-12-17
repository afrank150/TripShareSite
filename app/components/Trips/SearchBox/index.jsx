import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { geocodeSearch, geocodeRequest } from 'utils/geocodeHelper';
import styles from './styles.css';


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    };
  }


  handleUpdateInput(inputValue) {
    const self = this;
    this.setState({
      inputValue : inputValue,
    }, function() {
      self.getSuggestions(inputValue);
    });
  }

  getSuggestions(input) {
    const self = this;
    geocodeSearch(input).then((response) => (response))
      .then((response) => (
      self.setState({
        dataSource: response
      })
    ));
  }

  handleNewRequest() {}


  render() {
    return (
      <span className={styles.searchBox}>
        <SearchIcon style={{paddingBottom: '3px', verticalAlign: 'middle'}}/>
        <AutoComplete
          dataSource={this.state.dataSource}
          filter={AutoComplete.caseInsensitiveFilter}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          fullWidth={false}
          underlineShow={false}
          hintText={'Search by location...'}
          hintStyle={{color: '#bfbfc9'}}
          inputStyle={{paddingTop: '1px', bottom: '2.5px'}}
          style={{width: '500px',}}
          textFieldStyle={{width: '500px', paddingLeft: '8px',}}
          menuStyle={{width: '450px', backgroundColor: '#2c3e50'}}
          listStyle={{width: '450px',}}
        />
      </span>
    );
  }
}

export default SearchBox;
