import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewIndex: 0,
  }

  onClickLeftArrow = () => {
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    if (reviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    return (
      <div className="app-container">
        <div className="reviews-carousel-container">
          <h1 className="title">Reviews</h1>
          <div className="content-container">
            <button
              className="arrrow-btn"
              type="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>
            <div className="user-content-container">
              <img
                src={reviewsList[reviewIndex].imgUrl}
                className="user-img"
                alt={reviewsList[reviewIndex].username}
              />
              <p className="user-name">{reviewsList[reviewIndex].username}</p>
              <p className="company-name">
                {reviewsList[reviewIndex].companyName}
              </p>
              <p className="description">
                {reviewsList[reviewIndex].description}
              </p>
            </div>
            <button
              className="arrrow-btn"
              type="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
