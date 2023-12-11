import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import {
  Typography,
  Link,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import NextLink from "next/link";

function H1(props: any): JSX.Element {
  return (
    <Typography
      variant="h3"
      component="h1"
      color="inherit"
      my={2}
      sx={{ fontWeight: "bold" }}
      {...props}
    />
  );
}

function H2(props: any): JSX.Element {
  return (
    <Typography
      variant="h4"
      component="h2"
      color="inherit"
      my={1.5}
      sx={{ fontWeight: "bold" }}
      {...props}
    />
  );
}

function H3(props: any): JSX.Element {
  return (
    <Typography
      variant="h5"
      component="h3"
      color="inherit"
      my={1}
      sx={{ fontWeight: "bold" }}
      {...props}
    />
  );
}

function H4(props: any): JSX.Element {
  return (
    <Typography
      variant="h6"
      component="h4"
      color="inherit"
      my={1}
      sx={{ fontWeight: "bold" }}
      {...props}
    />
  );
}

function H5(props: any): JSX.Element {
  return (
    <Typography
      variant="subtitle1"
      component="h5"
      color="inherit"
      my={1}
      sx={{ fontWeight: "bold" }}
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
      my={1}
      sx={{ fontWeight: "bold" }}
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
      my={1}
      {...props}
    />
  );
}

function EM(props: any): JSX.Element {
  return (
    <Typography
      variant="body1"
      component="em"
      color="inherit"
      fontStyle="italic"
      {...props}
    />
  );
}

function Strong(props: any): JSX.Element {
  return (
    <Typography
      variant="body1"
      component="strong"
      color="inherit"
      fontWeight="bold"
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
      my={1}
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
      my={1}
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
      my={1}
      {...props}
    />
  );
}

function A(props: any): JSX.Element {
  return <Link component={NextLink} color="inherit" {...props} />;
}

function TableWrapper(props: any): JSX.Element {
  return (
    <TableContainer component={Paper} sx={{ my: 1, width: "fit-content" }}>
      <Table color="inherit" {...props} />
    </TableContainer>
  );
}

function Thead(props: any): JSX.Element {
  return <TableHead color="inherit" {...props} />;
}

function Tbody(props: any): JSX.Element {
  return <TableBody color="inherit" {...props} />;
}

function Tr(props: any): JSX.Element {
  return <TableRow color="inherit" {...props} />;
}

function Th(props: any): JSX.Element {
  return <TableCell variant="head" component="th" color="inherit" {...props} />;
}

function Td(props: any): JSX.Element {
  return <TableCell variant="body" component="td" color="inherit" {...props} />;
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  em: EM,
  strong: Strong,
  ul: UL,
  ol: OL,
  li: Li,
  a: A,
  table: TableWrapper,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
