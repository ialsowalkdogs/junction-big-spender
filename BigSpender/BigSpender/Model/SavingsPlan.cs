using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigSpender.Model
{
    public class SavingsPlan
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public decimal BlockRate { get; set; }
        public string Description { get; set; }
    }
}
