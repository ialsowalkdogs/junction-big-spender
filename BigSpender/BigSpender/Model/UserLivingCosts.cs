using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSpender.Model
{
    public class UserLivingCosts
    {
        public long Id { get; set; }
        public User User { get; set; }
        public ExpenseCategory ExpenseCategory { get; set; }
        public decimal Value { get; set; }
    }
}
