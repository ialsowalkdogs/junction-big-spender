using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSpender.Model
{
    public class Transaction
    {
        public long Id { get; set; }
        public decimal Value { get; set; }
        public User User { get; set; }
        public Merchant Merchant { get; set; }
    }
}
