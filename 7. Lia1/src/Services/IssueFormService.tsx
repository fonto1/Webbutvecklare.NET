import DayPickerStrings from "./DatePickerService";

export const transform = (date: any) => {
  return `${DayPickerStrings.days[date.getDay()]} ${date.getDate()} ${
    DayPickerStrings.shortMonths[date.getMonth()]
  } ${date.getFullYear()}`;
};

export const dateFieldFormatDate = (date?: Date): string => {
  return !date ? "" : transform(date);
};

export const getErrorMessage = (value: string): string => {
  return value ? "" : "Fältet får inte lämnas tomt";
};

export const cardDateFormat = (date: any) => {
  return `${date.getDate()} ${DayPickerStrings.shortMonths[date.getMonth()]} `;
};
