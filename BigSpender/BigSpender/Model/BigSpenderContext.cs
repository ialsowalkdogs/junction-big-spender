using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSpender.Model
{
    public class BigSpenderContext : DbContext
    {
        public BigSpenderContext(DbContextOptions<BigSpenderContext> options)
            : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<ExpenseCategory> ExpenseCategories {get; set;}
        public DbSet<Merchant> Merchants { get; set; }
        public DbSet<SavingsPlan> SavingsPlans { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserLivingCost> UserLivingCosts { get; set; }
    }
}
