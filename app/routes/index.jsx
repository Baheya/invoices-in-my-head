import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
import {
  DarkModeToggle,
  darkModeToggleLinks,
} from '~/components/DarkModeToggle';
import { colorSchemeCookie, getColorScheme } from '~/utils/getInitialColorMode';
import { Button, buttonLinks } from '~/components/Button';
import { Datepicker, datepickerLinks } from '~/components/Datepicker';
import { Select, selectLinks } from '../components/Select';
import { Item } from '@react-stately/collections';
import { TextField, textFieldLinks } from '../components/TextField';

export function links() {
  return [
    ...buttonLinks(),
    ...darkModeToggleLinks(),
    ...datepickerLinks(),
    ...selectLinks(),
    ...textFieldLinks(),
  ];
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem',
        flexDirection: 'column',
      }}
    >
      <Form method="POST">
        <DarkModeToggle type="submit" />
      </Form>
      <TextField label="Hellooooooo" />
    </div>
  );
}
