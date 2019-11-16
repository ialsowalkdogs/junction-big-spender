using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSpender.Model
{
    public class Account
    {
        public long Id { get; set; }
        public User User { get; set; }
        public string Name { get; set; }
        public SavingsPlan? SavingsPlan { get; set; }
        public decimal? BlockValue { get; set; }
        public decimal Balance { get; set; }
        public decimal? Rate { get; set; }
        public decimal? Goal { get; set; }
    }
}
