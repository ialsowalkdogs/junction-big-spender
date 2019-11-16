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

                context.SavingsPlans.AddRange();
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

                context.UserLivingCosts.AddRange();
                context.SaveChanges();

                context.Accounts.AddRange();
                context.SaveChanges();

                context.Transactions.AddRange();
                context.SaveChanges();
            }
        }
    }
}
