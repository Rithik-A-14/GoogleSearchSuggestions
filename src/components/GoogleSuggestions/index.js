import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {search: ''}

  changeText = text => {
    this.setState({search: text})
  }

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state

    const updatedList = suggestionsList.filter(element =>
      element.suggestion.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="GoogleSuggestions_main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="google_logo"
        />

        <div className="search_card">
          <div className="search_area">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search_icon"
            />
            <input
              type="search"
              className="search"
              value={search}
              onChange={this.changeSearch}
              placeholder="Search Google"
            />
          </div>
          <div>
            <ul className="suggestions_list">
              {updatedList.map(each => (
                <SuggestionItem
                  suggestions={each}
                  key={each.id}
                  change={this.changeText}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
