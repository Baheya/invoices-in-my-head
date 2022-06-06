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

export function links() {
  return [
    ...buttonLinks(),
    ...darkModeToggleLinks(),
    ...datepickerLinks(),
    ...selectLinks(),
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
      <Select label="Favorite Color">
        <Item>Red</Item>
        <Item>Orange</Item>
        <Item>Yellow</Item>
        <Item>Green</Item>
        <Item>Blue</Item>
        <Item>Purple</Item>
        <Item>Black</Item>
        <Item>White</Item>
        <Item>Lime</Item>
        <Item>Fushsia</Item>
      </Select>
    </div>
  );
}
