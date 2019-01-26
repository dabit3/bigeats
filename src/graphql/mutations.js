// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRestaurant = `mutation CreateRestaurant($input: CreateRestaurantInput!) {
  createRestaurant(input: $input) {
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
export const updateRestaurant = `mutation UpdateRestaurant($input: UpdateRestaurantInput!) {
  updateRestaurant(input: $input) {
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
export const deleteRestaurant = `mutation DeleteRestaurant($input: DeleteRestaurantInput!) {
  deleteRestaurant(input: $input) {
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
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
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
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
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
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
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
