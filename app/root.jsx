import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import { getColorScheme } from './utils/getInitialColorMode';

import globalStyles from './styles/global.css';
import fonts from './styles/fonts.css';

export const loader = async ({ request }) => ({
  colorScheme: await getColorScheme(request),
});

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links = () => [
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'stylesheet', href: fonts },
];

export default function App() {
  const { colorScheme } = useLoaderData();

  // console.log(colorScheme);

  return (
    <html lang="en" data-theme={colorScheme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
