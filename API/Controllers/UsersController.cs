using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        public UsersController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public DataContext _dataContext { get; }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<AppUser>>> GetAll()
        {
            return await _dataContext.Users.ToListAsync();
        }
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetOne(int id)
        {
            return await _dataContext.Users.FindAsync(id);
        }
    }
}
