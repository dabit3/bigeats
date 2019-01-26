// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = `subscription OnCreateRestaurant {
  onCreateRestaurant {
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
export const onUpdateRestaurant = `subscription OnUpdateRestaurant {
  onUpdateRestaurant {
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
export const onDeleteRestaurant = `subscription OnDeleteRestaurant {
  onDeleteRestaurant {
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
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
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
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
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
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
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
