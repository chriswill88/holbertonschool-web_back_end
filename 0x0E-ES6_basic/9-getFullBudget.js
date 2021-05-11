import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const getIncomeInDollars = (budget) => `$${budget.income}`;

  const getIncomeInEuros = (budget) => `${budget.income} euros`;

  const fullBudget = {
    ...budget,
    getIncomeInDollars,
    getIncomeInEuros,
  };

  return fullBudget;
}
