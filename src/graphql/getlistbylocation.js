import gql from 'graphql-tag'
const GetListbyLocation = gql`
query aBC($input:LocationInput!) {
    country(input:$input) {
      name
      id
      slug
      jobs{
        id
        title
        slug
        company{
            id
            name
            slug
            logoUrl
        }
        userEmail
        applyUrl
        description
        postedAt
        locationNames
        tags{
            name
        }
      }
    }
  }      
`
export default GetListbyLocation