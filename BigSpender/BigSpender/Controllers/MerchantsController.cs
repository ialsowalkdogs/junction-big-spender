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
    public class MerchantsController : ControllerBase
    {
        private readonly BigSpenderContext _context;

        public MerchantsController(BigSpenderContext context)
        {
            _context = context;
        }

        // GET: api/Merchants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Merchant>>> GetMerchants()
        {
            return await _context.Merchants.ToListAsync();
        }

        // GET: api/Merchants/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Merchant>> GetMerchant(long id)
        {
            var merchant = await _context.Merchants.FindAsync(id);

            if (merchant == null)
            {
                return NotFound();
            }

            return merchant;
        }

        // PUT: api/Merchants/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMerchant(long id, Merchant merchant)
        {
            if (id != merchant.Id)
            {
                return BadRequest();
            }

            _context.Entry(merchant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MerchantExists(id))
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

        // POST: api/Merchants
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Merchant>> PostMerchant(Merchant merchant)
        {
            _context.Merchants.Add(merchant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMerchant", new { id = merchant.Id }, merchant);
        }

        // DELETE: api/Merchants/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Merchant>> DeleteMerchant(long id)
        {
            var merchant = await _context.Merchants.FindAsync(id);
            if (merchant == null)
            {
                return NotFound();
            }

            _context.Merchants.Remove(merchant);
            await _context.SaveChangesAsync();

            return merchant;
        }

        private bool MerchantExists(long id)
        {
            return _context.Merchants.Any(e => e.Id == id);
        }
    }
}
