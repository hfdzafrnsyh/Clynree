/* eslint-disable comma-spacing */
/* eslint-disable no-unused-vars */
import CONFIG from '../../global/config'
const detailRestaurant = (restaurant) => ` 
    <h2 tabindex="0">Detail</h2>

      <div id="detail-restaurant" class="detail-restaurant">

        <img tabindex="0" src="./images/placeholder-large.jpg" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" class="lazyload" style="color:blue" alt="restaurant-picture">

        <div class="details-restaurant">

          <h4 tabindex="0"><i class="fa fa-star"></i> : ${restaurant.rating}</h4>
          <h5 tabindex="0"> Restaurant : ${restaurant.name}</h5>
          <h6 tabindex="0"> Address : ${restaurant.address}</h6> 
          <h6 tabindex="0">City : ${restaurant.city}</h6>  
          <p tabindex="0"> Category :${restaurant.categories.map(category => `
            <u>${category.name}</u>
          `)}</p>
          <p  tabindex="0"><u  tabindex="0">Menus</u> : ${restaurant.menus.foods.map(food => `
                    <em  tabindex="0">${food.name}</em>
                  `).join('')}</p>     
      </div>

   <div class="details-restaurant">

        <p tabindex="0"><u style="font-weight:bold;">Overview</u> : ${restaurant.description}</p>  
  
        <p  tabindex="0"><u  tabindex="0">Drinks</u> : ${restaurant.menus.drinks.map(drink => `
          <em  tabindex="0">${drink.name}</em>
        `).join('')}</p> 
     
  </div>
    <div class="card-reviews">
      <h5  tabindex="0"><u  tabindex="0">Comment Review</u></h5>

    <div class="form-review">
       <form id="sendReview" method="POST">
          <div class="form-group">
            <input type="text" required id="addName" name="addName" placeholder="Your name.."/>
          </div>
          <div class="form-group">
            <textarea rows="10" cols="50" required id="addComment" name="addComment" placeholder="Comment.."></textarea>
          </div>
        <button type="submit" class="button-comment" id="button-comment">Send</button>
     </form>  
  </div>
   
      ${restaurant.customerReviews.map(reviews => `
          <div class="card-review">
              <p style="font-size:12px;color:#3e3ec2;" tabindex="0">${reviews.date}</p>
              <i class="fa fa-comment comment-icon fa-2x" ></i>
              <div class="review-body">
              <p  tabindex="0" class="review-body-comment"><i class="fa fa-user" style="color:#808080"> <b>${reviews.name}</b> : </i><span  tabindex="0" >${reviews.review}</span></p>
        
            </div>
                
                  </div>
              `).join('')}
      </div> 
</div>
 
  
 
  `

const createRestaurantTemplate = (restaurant) =>
  `
    <div class="card" >
      <div class="body-card-element" id="body-card-restaurant">

      <img tabindex="0" src="./images/placeholder-large.jpg" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" class="lazyload" width="100%" style="color:blue" alt="restaurant-picture">
      <h3 tabindex="0"><u>${restaurant.city}</u></h3>
      <h5 tabindex="0"><i class="fa fa-star"></i> : ${restaurant.rating}</h5>     
      <h4 tabindex="0"> Restaurant : ${restaurant.name}</h4> 
        <p tabindex="0">${restaurant.description}</p>        
        <a href="${`/#/detail/${restaurant.id}`}" tabindex="0" class="button-view">View</a>        
      </div>           
    </div>  
    `

const createFavoriteButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `

const createFavoritesButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `

const buttonBackItem = () => `
  <a href="#/" tabindex="0" class="back"><i class="fa fa-angle-left fa-4x"></i></a>
  `

const loadingItem = () => `
  <div class="loading-item">
    <img src="./icons/dualBalTwo.gif" width="110px"/>
  </div>
`

export { createRestaurantTemplate, loadingItem, detailRestaurant, createFavoriteButtonTemplate, createFavoritesButtonTemplate, buttonBackItem }
