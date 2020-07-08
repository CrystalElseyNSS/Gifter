using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gifter.Data;
using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Gifter.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly UserProfileRepository _userProfileRepo;
        public UserProfileController(ApplicationDbContext context)
        {
            _userProfileRepo = new UserProfileRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userProfileRepo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetByFirebaseId(string firebaseId)
        {
            var firebaseUser = _userProfileRepo.GetByFirebaseUserId(firebaseId);
            if (firebaseUser == null)
            {
                return NotFound();
            }
            return Ok(firebaseUser);
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            _userProfileRepo.Add(userProfile);
            return CreatedAtAction("Get", new { id = userProfile.Id }, userProfile);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile userProfile)
        {
            if (id != userProfile.Id)
            {
                return BadRequest();
            }
            _userProfileRepo.Update(userProfile);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string firebaseId)
        {
            _userProfileRepo.Delete(firebaseId);
            return NoContent();
        }
    }
}

