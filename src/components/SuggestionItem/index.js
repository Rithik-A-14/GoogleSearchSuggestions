import './index.css'

function SuggestionItem(props) {
  const {suggestions, change} = props
  const {suggestion} = suggestions
  function changetext() {
    change(suggestion)
  }

  return (
    <li className="suggestion_card">
      <p className="suggestion_text">{suggestion}</p>
      <button type="button" onClick={changetext} className="btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="suggestion_arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
