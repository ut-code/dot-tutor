import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { Typography } from "@mui/material";

function H1(props: any): JSX.Element {
  return (
    <Typography
      variant="h4"
      component="h1"
      color="inherit"
      mt={2}
      mb={2}
      {...props}
    />
  );
}

function H2(props: any): JSX.Element {
  return (
    <Typography
      variant="h5"
      component="h2"
      color="inherit"
      mt={1.5}
      mb={1.5}
      {...props}
    />
  );
}

function H3(props: any): JSX.Element {
  return (
    <Typography
      variant="h6"
      component="h3"
      color="inherit"
      mt={1}
      mb={1}
      {...props}
    />
  );
}

function H4(props: any): JSX.Element {
  return (
    <Typography
      variant="subtitle1"
      component="h4"
      color="inherit"
      mt={1}
      mb={1}
      {...props}
    />
  );
}

function H5(props: any): JSX.Element {
  return (
    <Typography
      variant="subtitle2"
      component="h5"
      color="inherit"
      mt={1}
      mb={1}
      {...props}
    />
  );
}

function H6(props: any): JSX.Element {
  return (
    <Typography
      variant="subtitle2"
      component="h6"
      color="inherit"
      mt={1}
      mb={1}
      {...props}
    />
  );
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
