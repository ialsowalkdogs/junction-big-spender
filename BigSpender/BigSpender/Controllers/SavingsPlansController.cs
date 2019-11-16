using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BigSpender.Model;

namespace BigSpender.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SavingsPlansController : ControllerBase
    {
        private readonly BigSpenderContext _context;

        public SavingsPlansController(BigSpenderContext context)
        {
            _context = context;
        }

        // GET: api/SavingsPlans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SavingsPlan>>> GetSavingsPlans()
        {
            return await _context.SavingsPlans.ToListAsync();
        }

        // GET: api/SavingsPlans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SavingsPlan>> GetSavingsPlan(long id)
        {
            var savingsPlan = await _context.SavingsPlans.FindAsync(id);

            if (savingsPlan == null)
            {
                return NotFound();
            }

            return savingsPlan;
        }

        // PUT: api/SavingsPlans/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSavingsPlan(long id, SavingsPlan savingsPlan)
        {
            if (id != savingsPlan.Id)
            {
                return BadRequest();
            }

            _context.Entry(savingsPlan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SavingsPlanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SavingsPlans
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<SavingsPlan>> PostSavingsPlan(SavingsPlan savingsPlan)
        {
            _context.SavingsPlans.Add(savingsPlan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSavingsPlan", new { id = savingsPlan.Id }, savingsPlan);
        }

        // DELETE: api/SavingsPlans/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SavingsPlan>> DeleteSavingsPlan(long id)
        {
            var savingsPlan = await _context.SavingsPlans.FindAsync(id);
            if (savingsPlan == null)
            {
                return NotFound();
            }

            _context.SavingsPlans.Remove(savingsPlan);
            await _context.SaveChangesAsync();

            return savingsPlan;
        }

        private bool SavingsPlanExists(long id)
        {
            return _context.SavingsPlans.Any(e => e.Id == id);
        }
    }
}
