export const formatDate = (
  dateStr: string,
  setTime: boolean = false,
  locale: string = "en-KR"
) => {
  const date = new Date(dateStr);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: setTime ? true : undefined,
    hour: setTime ? "numeric" : undefined,
    minute: setTime ? "numeric" : undefined,
  };

  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(date);
};
