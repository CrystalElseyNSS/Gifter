using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gifter.Data;
using Gifter.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase 
    {
        private readonly CommentRepository _commentRepo;
        private readonly UserProfileRepository _userProfileRepo;
        private readonly PostRepository _postRepo;
        public CommentController(ApplicationDbContext context)
        {
            _commentRepo = new CommentRepository(context);
        }
    }
}
