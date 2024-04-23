// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachItem, onClick} = props

  const {id, questionText, answerText, show} = eachItem

  const onClicked = () => {
    onClick(id)
  }

  return (
    <li className="each-item">
      <div className="first">
        <h1>{questionText}</h1>
        <button type="button" onClick={onClicked}>
          {show ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          )}
        </button>
      </div>

      {show && (
        <div className="below">
          <hr /> <p>{answerText}</p>
        </div>
      )}
    </li>
  )
}
export default FaqItem
