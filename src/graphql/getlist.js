import gql from 'graphql-tag'
const GetList=gql`
query{
    jobs{
    id,
    title,
    company{
      id,
      name,
      slug,
      logoUrl
    },
    userEmail,
    applyUrl,
  	slug,
    description,
    postedAt,
    locationNames,
    tags{
        name
      }
  }
}
`
export default GetList