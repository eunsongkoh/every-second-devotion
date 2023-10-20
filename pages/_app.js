import "../styles/global.css";

// top level React component that wraps all the pages in my app
// to keep state when navigating between pages or to add global styles
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
