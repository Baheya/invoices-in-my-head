import { useRef } from 'react';

import { useLocale } from '@react-aria/i18n';
import { useCalendarState } from '@react-stately/calendar';
import {
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
} from '@react-aria/calendar';
import {
  createCalendar,
  getWeeksInMonth,
  startOfWeek,
} from '@internationalized/date';

import styles from './Calendar.css';
import { Button, buttonLinks } from '../Button';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function Calendar(props) {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = useRef();
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state,
    ref
  );

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <div className="calendar-header">
        <Button variant="icon" {...prevButtonProps}>
          &lt;
        </Button>
        <h2>{title}</h2>
        <Button variant="icon" {...nextButtonProps}>
          &gt;
        </Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}

function CalendarGrid({ state, ...props }) {
  let { locale } = useLocale();
  let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CalendarCell({ state, date }) {
  let ref = useRef();
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`calendar-cell ${
          isSelected ? 'calendar-cell--selected' : ''
        } ${isDisabled ? 'calendar-cell--disabled' : ''} ${
          isUnavailable ? 'calendar-cell--unavailable' : ''
        }`}
      >
        {formattedDate}
      </div>
    </td>
  );
}
