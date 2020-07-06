﻿using System.ComponentModel.DataAnnotations;

namespace Gifter.Models
{
    public class Comment
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }

        [Required]
        public int PostId { get; set; }

        public Post Post { get; set; }

        [Required]
        public string Message { get; set; }

    }
}
