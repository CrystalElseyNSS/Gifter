using Gifter.Models;
using Gifter.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Gifter.Tests
{
    public class PostRepositoryTests : EFTestFixture
    {
        public PostRepositoryTests()
        {
            AddSampleData();
        }

        [Fact]
        public void Search_Should_Match_A_Posts_Title()
        {
            var repo = new PostRepository(_context);
            var results = repo.Search("Dude", false);

            Assert.Equal(2, results.Count);
            Assert.Equal("El Duderino", results[0].Title);
            Assert.Equal("The Dude", results[1].Title);
        }

        [Fact]
        public void Search_Should_Match_A_Posts_Caption()
        {
            var repo = new PostRepository(_context);
            var results = repo.Search("it is no dream", false);

            Assert.Equal(1, results.Count);
            Assert.Equal("If you will it, Dude, it is no dream", results[0].Caption);
        }

        [Fact]
        public void Search_Should_Return_Empty_List_If_No_Matches()
        {
            var repo = new PostRepository(_context);
            var results = repo.Search("foobarbazcatgrill", false);

            Assert.NotNull(results);
            Assert.Empty(results);
        }

        [Fact]
        public void Search_Can_Return_Most_Recent_First()
        {
            var mostRecentTitle = "The Dude";
            var repo = new PostRepository(_context);
            var results = repo.Search("", true);

            Assert.Equal(3, results.Count);
            Assert.Equal(mostRecentTitle, results[0].Title);
        }

        [Fact]
        public void Search_Can_Return_Most_Recent_Last()
        {
            var mostRecentTitle = "The Dude";
            var repo = new PostRepository(_context);
            var results = repo.Search("", false);

            Assert.Equal(3, results.Count);
            Assert.Equal(mostRecentTitle, results[2].Title);
        }

        // Add sample data
        private void AddSampleData()
        {
            // Omitted for brevity
        }

        [Fact]
        public void User_Can_Delete_Post_With_Comment()
        {
            var postIdWithComment = 2;
            var repo = new PostRepository(_context);

            // Attempt to delete it
            repo.Delete(postIdWithComment);

            // Now attempt to get it
            var result = repo.GetById(postIdWithComment);

            Assert.Null(result);
        }
    }
}