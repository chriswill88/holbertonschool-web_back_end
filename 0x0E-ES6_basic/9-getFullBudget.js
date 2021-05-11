import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars = (budget) => {
      return `$${budget.income}`;
    },
    getIncomeInEuros = (budget) => {
      return `${budget.income} euros`;
    },
  };

  return fullBudget;
}