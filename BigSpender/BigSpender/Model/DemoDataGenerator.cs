using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSpender.Model
{
    public class DemoDataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new BigSpenderContext(
                serviceProvider.GetRequiredService<DbContextOptions<BigSpenderContext>>()))
            {
                if (context.Users.Any())
                {
                    return;   // Data was already seeded
                }

                context.ExpenseCategories.AddRange(
                    new ExpenseCategory
                    {
                        Id = 1,
                        Name = "Travel"
                    },
                    new ExpenseCategory
                    {
                        Id = 2,
                        Name = "Food"
                    },
                    new ExpenseCategory
                    {
                        Id = 3,
                        Name = "Rent"
                    },
                    new ExpenseCategory
                    {
                        Id = 4,
                        Name = "Fun"
                    });

                context.SavingsPlans.AddRange(
                    new SavingsPlan
                    {
                        Id = 1,
                        Name = "Vacation Savings",
                        BlockRate = 0.15M,
                        Description = "Put away 15% of your income for vacation"
                    }, new SavingsPlan
                    {
                        Id = 2,
                        Name = "Retirement Savings",
                        BlockRate = 0.05M,
                        Description = "Put away 5% of your income to save for retirement"
                    },
                    new SavingsPlan
                    {
                        Id = 3,
                        Name = "Emergency Fund",
                        BlockRate = 0.30M,
                        Description = "Create an emergency fund, up to 6 monthly salaries"
                    },
                    new SavingsPlan
                    {
                        Id = 4,
                        Name = "Flexible Savings",
                        BlockRate = null,
                        Description = "Save what you want, when you want"
                    });
                context.SaveChanges();

                context.Merchants.AddRange(
                    new Merchant
                    {
                        Id = 1,
                        Name = "Best Foods Ltd.",
                        ExpenseCategory = context.ExpenseCategories.Find(2L)
                    },
                    new Merchant { 
                        Id = 2,
                        Name = "Cheap Foods Ltd.",
                        ExpenseCategory = context.ExpenseCategories.Find(2L)
                    },
                    new Merchant
                    {
                        Id = 3,
                        Name = "Run-Down Appartments Ltd.",
                        ExpenseCategory = context.ExpenseCategories.Find(3L)
                    },
                    new Merchant
                    {
                        Id = 4,
                        Name = "HSL",
                        ExpenseCategory = context.ExpenseCategories.Find(1L)
                    },
                    new Merchant
                    {
                        Id = 5,
                        Name = "Alko Oy",
                        ExpenseCategory = context.ExpenseCategories.Find(4L)
                    });
                context.SaveChanges();

                context.Users.AddRange(
                    new User
                    {
                        Id = 1,
                        Name = "John Doe",
                        MonthlyIncome = 0.00M,
                        UserLivingCosts = null
                    });
                context.SaveChanges();

                context.UserLivingCosts.AddRange(
                    new UserLivingCost
                    {
                        Id = 1,
                        User = context.Users.Find(1L),
                        ExpenseCategory = context.ExpenseCategories.Find(1L),
                        Value = 500.00M
                    }, 
                    new UserLivingCost
                    {
                        Id = 2,
                        User = context.Users.Find(1L),
                        ExpenseCategory = context.ExpenseCategories.Find(2L),
                        Value = 500.00M
                    },
                    new UserLivingCost
                    {
                        Id = 3,
                        User = context.Users.Find(1L),
                        ExpenseCategory = context.ExpenseCategories.Find(3L),
                        Value = 500.00M
                    });
                context.SaveChanges();

                context.Accounts.AddRange(
                    new Account
                    {
                        Id = 1,
                        User = context.Users.Find(1L),
                        Name = "Disposal account",
                        SavingsPlan = null,
                        BlockValue = null,
                        Balance = 1000.00M,
                        Rate = 0.00M,
                        Goal = null
                    }, 
                    new Account
                    {
                        Id = 2,
                        User = context.Users.Find(1L),
                        Name = "Flexible savings",
                        SavingsPlan = context.SavingsPlans.Find(4L),
                        BlockValue = null,
                        Balance = 500.00M,
                        Rate = 0.01M,
                        Goal = null
                    }, 
                    new Account
                    {
                        Id = 3,
                        User = context.Users.Find(1L),
                        Name = "Retierment savings",
                        SavingsPlan = context.SavingsPlans.Find(2L),
                        BlockValue = context.SavingsPlans.Find(2L).BlockRate * context.Users.Find(1L).MonthlyIncome,
                        Balance = 1500.00M,
                        Rate = 0.05M,
                        Goal = 50000.00M
                    });
                context.SaveChanges();

                context.Transactions.AddRange(
                    new Transaction
                    {
                        Id = 1,
                        User = context.Users.Find(1L),
                        Account = context.Accounts.Find(1L),
                        Merchant = context.Merchants.Find(3L),
                        Value = 500.00M
                    }, 
                    new Transaction
                    {
                        Id = 2,
                        User = context.Users.Find(1L),
                        Account = context.Accounts.Find(1L),
                        Merchant = context.Merchants.Find(2L),
                        Value = 3.50M
                    }, 
                    new Transaction
                    {
                        Id = 3,
                        User = context.Users.Find(1L),
                        Account = context.Accounts.Find(1L),
                        Merchant = context.Merchants.Find(5L),
                        Value = 22.00M
                    });
                context.SaveChanges();
            }
        }
    }
}
