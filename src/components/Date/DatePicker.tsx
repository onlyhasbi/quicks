import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
} from 'react-aria-components';
import type { ButtonProps, PopoverProps } from 'react-aria-components';
import calendarIcon from '../../assets/icon/calendar.svg';
import chevronLeft from '../../assets/icon/chevron-left.svg';
import chevronRight from '../../assets/icon/chevron-right.svg';

function DatePickerAria() {
  return (
    <DatePicker className="w-fit flex flex-col gap-1">
      <Group className="flex rounded-md border border-primary-midgray px-3">
        <DateInput className="flex py-2 pr-[4rem]">
          {(segment) => (
            <DateSegment
              segment={segment}
              className="w-fit text-primary-darkgray px-[.15rem] outline-none rounded-md focus:px-[.5rem] focus:text-primary-blue"
            />
          )}
        </DateInput>
        <Button className="outline-none flex items-center text-primary-darkgray pr-1">
          <img src={calendarIcon} alt="calendar-icon" />
        </Button>
      </Group>

      <PopoverAria>
        <Dialog className="p-6 text-gray-600">
          <Calendar className="h-auto">
            <header className="flex items-center justify-between font-semibold pb-4 px-1 font-serif w-full">
              <RoundButton slot="previous">
                <img src={chevronLeft} alt="chevron-left" />
              </RoundButton>
              <Heading className="font-sans font-semibold text-2xl mb-1 text-primary-darkgray" />
              <RoundButton slot="next">
                <img src={chevronRight} alt="chevron-right" />
              </RoundButton>
            </header>
            <CalendarGrid className="border-spacing-1 border-separate">
              <CalendarGridHeader>
                {(day) => (
                  <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
                    {day}
                  </CalendarHeaderCell>
                )}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className="w-9 h-9 outline-none rounded-full flex items-center justify-center outside-month:text-primary-midgray hover:border hover:rounded-full  hover:border-primary-blue hover:text-primary-darkgray cursor-pointer"
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </PopoverAria>
    </DatePicker>
  );
}

function RoundButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="w-9 h-9 outline-none cursor-pointer bg-transparent text-primary-darkgray border-0 rounded-full flex items-center justify-center hover:border hover:border-primary-midgray"
    />
  );
}

function PopoverAria(props: PopoverProps) {
  return (
    <Popover
      {...props}
      className={({ isEntering, isExiting }) => `
        h-auto rounded-md ring-1 ring-primary-midgray ring-black/10 bg-white
        ${
          isEntering
            ? 'animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200'
            : ''
        }
        ${
          isExiting
            ? 'animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150'
            : ''
        }
      `}
    />
  );
}

export default DatePickerAria;
