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
    public class ExpenseCategoriesController : ControllerBase
    {
        private readonly BigSpenderContext _context;

        public ExpenseCategoriesController(BigSpenderContext context)
        {
            _context = context;
        }

        // GET: api/ExpenseCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExpenseCategory>>> GetExpenseCategories()
        {
            return await _context.ExpenseCategories.ToListAsync();
        }

        // GET: api/ExpenseCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseCategory>> GetExpenseCategory(long id)
        {
            var expenseCategory = await _context.ExpenseCategories.FindAsync(id);

            if (expenseCategory == null)
            {
                return NotFound();
            }

            return expenseCategory;
        }

        // PUT: api/ExpenseCategories/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpenseCategory(long id, ExpenseCategory expenseCategory)
        {
            if (id != expenseCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(expenseCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseCategoryExists(id))
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

        // POST: api/ExpenseCategories
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ExpenseCategory>> PostExpenseCategory(ExpenseCategory expenseCategory)
        {
            _context.ExpenseCategories.Add(expenseCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExpenseCategory", new { id = expenseCategory.Id }, expenseCategory);
        }

        // DELETE: api/ExpenseCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ExpenseCategory>> DeleteExpenseCategory(long id)
        {
            var expenseCategory = await _context.ExpenseCategories.FindAsync(id);
            if (expenseCategory == null)
            {
                return NotFound();
            }

            _context.ExpenseCategories.Remove(expenseCategory);
            await _context.SaveChangesAsync();

            return expenseCategory;
        }

        private bool ExpenseCategoryExists(long id)
        {
            return _context.ExpenseCategories.Any(e => e.Id == id);
        }
    }
}
