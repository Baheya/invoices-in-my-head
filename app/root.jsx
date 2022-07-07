import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
} from '@remix-run/react';
import { SSRProvider } from '@react-aria/ssr';

import { getColorScheme } from './utils/getInitialColorMode';

import globalStyles from './styles/global.css';
import fonts from './styles/fonts.css';
import { Header, headerLinks } from './components/Header';

export const loader = async ({ request }) => {
  return { colorScheme: await getColorScheme(request) };
};

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links = () => [
  ...headerLinks(),
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'stylesheet', href: fonts },
];

function AppContainer() {
  const { colorScheme } = useLoaderData();
  const fetcher = useFetcher();

  return (
    <html lang="en" data-theme={colorScheme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header fetcher={fetcher} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SSRProvider>
      <AppContainer />
    </SSRProvider>
  );
}
