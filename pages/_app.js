import {createGlobalStyle} from 'styled-components';
import Header from '../components/Header';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const client = new ApolloClient({
    uri: 'https://localhost:3000/api/graphql/',
    cache: new InMemoryCache()
});

function MyApp({Component, pageProps}) {
    return (
        <>
            <ApolloProvider client={client}>
                <GlobalStyle/>
                <Header/>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}

export default MyApp;
