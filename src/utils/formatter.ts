export const dateFormatter = (date?: Date) => {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat("pt-BR").format(date);
};

export const timeFormatter = (date?: Date) => {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
