import { createContext, useContext } from 'react';
import { observable, action } from 'mobx';

class UserStore {
  @observable user = {
    name: '',
    monthlyIncome: 0,
    expenses: {
      housing: 0,
      utilities: 0,
      food: 0,
      entertainment: 0
    }
  };

  @action setUser = (name: string) => {
    this.user.name = name;
  };

  @action setMonthlyIncome = (income: number) => {
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
