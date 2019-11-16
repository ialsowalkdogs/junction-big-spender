import { createContext, useContext } from 'react';
import { observable, action, computed } from 'mobx';

class UserStore {
  @observable user = {
    name: '',
    monthlyIncome: 0,
    currentBalance: 5700.0,
    expenses: {
      housing: 0,
      utilities: 0,
      food: 0,
      entertainment: 0
    },
    goal: {
      name: 'Christmas vacation fund',
      target: 70.0,
      currentAmount: 57.5
    },
    monthlySavings: [
      {
        name: 'Fixed monthly savings',
        description: '15% of your monthly income',
        amount: 495.0
      },
      {
        name: 'Emergency fund',
        description: 'Total: 3x monthly income',
        amount: 200.0
      },
      {
        name: 'Retirement fund',
        description: '5% of your monthly income',
        amount: 160.0
      }
    ]
  };

  @computed get goalPercentage() {
    return Math.round(
      (this.user.goal.currentAmount / this.user.goal.target) * 100
    );
  }

  @computed get totalMonthlyBlockers() {
    return this.user.monthlySavings.reduce((acc, curr) => acc + curr.amount, 0);
  }

  @action setUser = (name: string) => {
    this.user.name = name;
  };

  @action setMonthlyIncome = (income: number) => {
    this.user.monthlyIncome = income;
  };

  @action setCurrentBalance = (income: number) => {
    this.user.monthlyIncome = income;
  };

  @action setExpenses = (id: string, value: any) => {
    const newExpenses = { ...this.user.expenses, [id]: value };
    this.user.expenses = newExpenses;
  };
}

export default UserStore;

const userStore = new UserStore();
const userStoreContext = createContext<UserStore | null>(userStore);

export const useUserStore = () => {
  const store = useContext(userStoreContext);
  if (!store) {
    throw new Error('UseStore is not available');
  }
  return store;
};
