// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRestaurant = `query GetRestaurant($id: ID!) {
  getRestaurant(id: $id) {
    id
    city
    name
    numRatings
    photo
    reviews {
      items {
        rating
        text
        createdAt
      }
      nextToken
    }
  }
}
`;
export const listRestaurants = `query ListRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      city
      name
      numRatings
      photo
      reviews {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    rating
    text
    createdAt
    restaurant {
      id
      city
      name
      numRatings
      photo
      reviews {
        nextToken
      }
    }
  }
}
`;
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      rating
      text
      createdAt
      restaurant {
        id
        city
        name
        numRatings
        photo
      }
    }
    nextToken
  }
}
`;
