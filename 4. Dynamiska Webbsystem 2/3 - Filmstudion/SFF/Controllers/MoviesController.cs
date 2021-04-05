using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using SFF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMockMoviesRepository _mockMoviesRepository;
        private readonly LinkGenerator _linkGenerator;
        private readonly IMockStudioRepository _mockStudioRepository;

        public MoviesController(IMockMoviesRepository mockMoviesRepository, LinkGenerator linkGenerator,IMockStudioRepository mockStudioRepository)
        {
            _mockMoviesRepository = mockMoviesRepository;
            _linkGenerator = linkGenerator;
            _mockStudioRepository = mockStudioRepository;
        }


        [HttpGet]
        public ActionResult<List<Movies>> Get()
        {
            var allMovies = _mockMoviesRepository.AllMovies;

            return allMovies;
        }


        [HttpPost]
        public ActionResult<List<Movies>> Post(Movies movie)
        {
            if (_mockMoviesRepository.AllMovies.Exists(p => p.Name.ToLower() == movie.Name.ToLower()))
            {
                return BadRequest("This Movie Exist");
            }

            var tempMovie = new Movies { Name = movie.Name, RentCount = movie.RentCount, LeftToRent = movie.RentCount};

            var location = _linkGenerator.GetPathByAction("Get", "movies");
            _mockMoviesRepository.AddMovie(movie);

            return Ok("new movie added");
          //  return Created(location, _mockMoviesRepository.AllMovies);
        }


        [HttpGet("{name}")]
        public ActionResult<Movies> Get(string name)
        {
            var oneMovie = _mockMoviesRepository.AllMovies.FirstOrDefault(p => p.Name.ToLower() == name.ToLower());
            return oneMovie;
        }



        [HttpPut("{name}")]
        public ActionResult<Movies> Put(string name, Movies movie)
        {

            var oldMovie = _mockMoviesRepository.AllMovies.FirstOrDefault(p => p.Name.ToLower() == name.ToLower()); // get movie
            // update RentCount

             if(oldMovie.RentCount != movie.RentCount & movie.RentToStudio[0] == "<Change Amount>")
               {
                int RentOutMovies = oldMovie.RentCount - oldMovie.LeftToRent;

                if(movie.RentCount<RentOutMovies)
                {
                    return BadRequest("Cant change rentcount lower than current movies lent out");
                }

                else
                {
                    oldMovie.LeftToRent = oldMovie.LeftToRent + (movie.RentCount - oldMovie.RentCount);
                    oldMovie.RentCount = movie.RentCount;  // update RentCount
                    
                    return Ok("changed rent amount");
                }
                    
                 
               }

            var tempStudio = movie.RentToStudio[0]; // get studioname

            if (movie.RentToStudio[0] != "<Change Amount>")
            {
                if (oldMovie.RentToStudio.Contains(tempStudio))  // check if studio exit in movie list, if yes remove
                {
                    oldMovie.RentToStudio.Remove(tempStudio);
                    oldMovie.LeftToRent++;

                    var updateStudio = _mockStudioRepository.AllStudios.FirstOrDefault(p => p.Name.ToLower() == tempStudio.ToLower());
                    updateStudio.MoviesInStudio.Remove(oldMovie.Name);

                }
                else if(oldMovie.RentToStudio.Count() < oldMovie.RentCount )
                {
                    oldMovie.RentToStudio.Add(tempStudio);
                    oldMovie.LeftToRent--;

                    var updateStudio = _mockStudioRepository.AllStudios.FirstOrDefault(p => p.Name.ToLower() == tempStudio.ToLower());
                    updateStudio.MoviesInStudio.Add(oldMovie.Name);

                }
            }

            return oldMovie;
        }
    }
}
