import RestaurantSource from '../data/restaurant-source'

const SendReview = (data) => {
  const review = {
    id: data.id,
    name: data.name,
    review: data.review
  }

  RestaurantSource.addReview(review)

  const cardReview = document.querySelector('.card-reviews')
  const ddyymm = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date().toLocaleDateString('id-ID', ddyymm)

  const addReview = `
  <div class="card-review">
  <p style="font-size:12px;color:#3e3ec2;" tabindex="0">${date}</p>
  <i class="fa fa-comment comment-icon fa-2x" ></i>
  <div class="review-body">
  <p  tabindex="0"><i class="fa fa-user" style="color:#808080"> <b>${review.name}</b></i><span  tabindex="0"> : ${review.review}</span></p>

</div>
    `
  cardReview.innerHTML += addReview
}

export default SendReview
