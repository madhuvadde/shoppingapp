import { gql } from "@apollo/client";

export const BANNERS = gql`
query ExampleQuery {
  bannersForHome {
    bannerImageUrl
    bannerImageAlt
    id
  }
}
`;