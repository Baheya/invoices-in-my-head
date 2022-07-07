import { colorSchemeCookie, getColorScheme } from '~/utils/getInitialColorMode';

export const action = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';

  return new Response(
    {},
    {
      status: 200,
      headers: {
        'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
      },
    }
  );
};
