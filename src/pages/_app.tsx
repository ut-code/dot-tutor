import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { Typography, Link } from "@mui/material";
import NextLink from "next/link";

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

function P(props: any): JSX.Element {
  return (
    <Typography
      variant="body1"
      component="p"
      color="inherit"
      mt={1}
      mb={1}
      {...props}
    />
  );
}

function UL(props: any): JSX.Element {
  return (
    <Typography
      variant="body1"
      component="ul"
      color="inherit"
      mt={1}
      mb={1}
      pl={2}
      {...props}
    />
  );
}

function OL(props: any): JSX.Element {
  return (
    <Typography
      variant="body1"
      component="ol"
      color="inherit"
      mt={1}
      mb={1}
      pl={2}
      {...props}
    />
  );
}

function Li(props: any): JSX.Element {
  return (
    <Typography
      variant="body1"
      component="li"
      color="inherit"
      mt={1}
      mb={1}
      {...props}
    />
  );
}

function A(props: any): JSX.Element {
  return <Link component={NextLink} color="inherit" {...props} />;
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  ul: UL,
  ol: OL,
  li: Li,
  a: A,
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
