using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSpender.Model
{
    public class User
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public decimal MonthlyIncome { get; set; }
        public List<ExpenseCategory> ExpenseCategories { get; set; }
        public enum FinancialLevel {InDebt, Unemployed, InMortgage, Comfortable }
        public enum Difficulty {Easy, Hard}
    }
}
