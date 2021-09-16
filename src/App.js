import React from 'react';
import JobWrapper from './wrapper/jobWrapper';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
function App() {
  const client=new ApolloClient({uri:"https://api.graphql.jobs/"})
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <JobWrapper/>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
