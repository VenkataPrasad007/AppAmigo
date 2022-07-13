using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public UsersController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public DataContext _dataContext { get; }

        [HttpGet]
        public async Task<ActionResult<List<AppUser>>> GetAll()
        {
            return await _dataContext.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetOne(int id)
        {
            var test = "";
            return await _dataContext.Users.FindAsync(id);
        }
    }
}
