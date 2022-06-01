import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
import {
  DarkModeToggle,
  darkModeToggleLinks,
} from '~/components/DarkModeToggle';
import { colorSchemeCookie, getColorScheme } from '~/getInitialColorMode';

export function links() {
  return [...darkModeToggleLinks()];
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
    <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
      <Form method="POST">
        <DarkModeToggle type="submit" />
      </Form>
    </div>
  );
}
