using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Models
{
    public class MockMoviesRepository : IMockMoviesRepository
    {
        

        public List<Movies> AllMovies { get; set; }

        public MockMoviesRepository()
        {
            AllMovies = new List<Movies>()
            {
            new Movies { Name = "One Piece", RentCount= 6, LeftToRent = 6},
            new Movies { Name = "Bleach", RentCount = 3, LeftToRent = 3},
            new Movies { Name = "Naruto", RentCount = 1, LeftToRent = 1 },
            };
        }
        public void AddMovie(Movies movie)
        {
            AllMovies.Add(movie);
        }
    }
}
