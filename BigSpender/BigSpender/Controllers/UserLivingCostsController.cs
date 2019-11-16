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
    public class UserLivingCostsController : ControllerBase
    {
        private readonly BigSpenderContext _context;

        public UserLivingCostsController(BigSpenderContext context)
        {
            _context = context;
        }

        // GET: api/UserLivingCosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserLivingCost>>> GetUserLivingCosts()
        {
            return await _context.UserLivingCosts.ToListAsync();
        }

        // GET: api/UserLivingCosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserLivingCost>> GetUserLivingCost(long id)
        {
            var userLivingCost = await _context.UserLivingCosts.FindAsync(id);

            if (userLivingCost == null)
            {
                return NotFound();
            }

            return userLivingCost;
        }

        // PUT: api/UserLivingCosts/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserLivingCost(long id, UserLivingCost userLivingCost)
        {
            if (id != userLivingCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(userLivingCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLivingCostExists(id))
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

        // POST: api/UserLivingCosts
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<UserLivingCost>> PostUserLivingCost(UserLivingCost userLivingCost)
        {
            _context.UserLivingCosts.Add(userLivingCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserLivingCost", new { id = userLivingCost.Id }, userLivingCost);
        }

        // DELETE: api/UserLivingCosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserLivingCost>> DeleteUserLivingCost(long id)
        {
            var userLivingCost = await _context.UserLivingCosts.FindAsync(id);
            if (userLivingCost == null)
            {
                return NotFound();
            }

            _context.UserLivingCosts.Remove(userLivingCost);
            await _context.SaveChangesAsync();

            return userLivingCost;
        }

        private bool UserLivingCostExists(long id)
        {
            return _context.UserLivingCosts.Any(e => e.Id == id);
        }
    }
}
