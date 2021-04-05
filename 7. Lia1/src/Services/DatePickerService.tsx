import { IDatePickerStrings, mergeStyleSets } from "office-ui-fabric-react";

export function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + now.getMonth()).slice(-2);
  const date = ("0" + now.getDate()).slice(-2);
  const HH = ("0" + now.getHours()).slice(-2);
  const MM = ("0" + now.getMinutes()).slice(-2);
  return `${year}-${month}-${date} ${HH}:${MM}`;
}

export const controlClass = mergeStyleSets({
  control: {
    margin: "0 0 15px 0",
    maxWidth: "300px",
  },
});

const DayPickerStrings: IDatePickerStrings = {
  months: [
    // "January",
    // "February",
    // "March",
    // "April",
    // "May",
    // "June",
    // "July",
    // "August",
    // "September",
    // "October",
    // "November",
    // "December",
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ],

  shortMonths: [
    // "Jan",
    // "Feb",
    // "Mar",
    // "Apr",
    // "May",
    // "Jun",
    // "Jul",
    // "Aug",
    // "Sep",
    // "Oct",
    // "Nov",
    // "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ],

  days: [
    // "Sunday",
    // "Monday",
    // "Tuesday",
    // "Wednesday",
    // "Thursday",
    // "Friday",
    // "Saturday",
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ],

  // shortDays: ["S", "M", "T", "W", "T", "F", "S"],
  shortDays: ["S", "M", "T", "O", "T", "F", "L"],

  goToToday: "Go to today",
  prevMonthAriaLabel: "Go to previous month",
  nextMonthAriaLabel: "Go to next month",
  prevYearAriaLabel: "Go to previous year",
  nextYearAriaLabel: "Go to next year",
  closeButtonAriaLabel: "Close date picker",
  monthPickerHeaderAriaLabel: "{0}, select to change the year",
  yearPickerHeaderAriaLabel: "{0}, select to change the month",
};

export default DayPickerStrings;
