function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const date = getCurrentYear().toString();

  const budget = {
    [`income-${date}`]: income,
    [`gdp-${date}`]: gdp,
    [`capita-${date}`]: capita,
  };

  return budget;
}
