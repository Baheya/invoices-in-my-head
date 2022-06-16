import { redirect } from '@remix-run/node';

import { colorSchemeCookie, getColorScheme } from '~/utils/getInitialColorMode';

import { Header, headerLinks } from '../components/Header';

export function links() {
  return [...headerLinks()];
}

export const action = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';

  return redirect(request.url, {
    headers: {
      'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
