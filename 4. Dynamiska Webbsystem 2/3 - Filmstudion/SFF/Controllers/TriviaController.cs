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
    public class TriviaController:ControllerBase
    {
        private readonly IMockStudioRepository _mockStudioRepository;
        private readonly IMockMoviesRepository _mockMoviesRepository;
        private readonly LinkGenerator _linkGenerator;
        private readonly ITriviaRepository _triviaRepository;

        public TriviaController(IMockStudioRepository mockStudioRepository, IMockMoviesRepository mockMoviesRepository, LinkGenerator linkGenerator, ITriviaRepository triviaRepository )
        {
            _mockStudioRepository = mockStudioRepository;
            _mockMoviesRepository = mockMoviesRepository;
            _linkGenerator = linkGenerator;
            _triviaRepository = triviaRepository;
        }


        [HttpPost]
        public ActionResult<List<Trivia>> Post(Trivia trivia)
        {
            var location = _linkGenerator.GetPathByAction("Get", "Trivia");

            var currentTrivia = _triviaRepository.AllTrivias.FirstOrDefault(p => p.Studio.ToLower() == trivia.Studio.ToLower());
            if (currentTrivia != null && currentTrivia.Movie == trivia.Movie)
            {
                return BadRequest("This Studio Trivia already exist");
            }

            else if(trivia.Studio == "<Studios>")
            {
                return BadRequest("Not Valid studio");
            }


            _triviaRepository.AllTrivias.Add(trivia);

            return Ok("Trivia Created");
         //   return Created(location, _triviaRepository.AllTrivias);
        }

        [HttpGet]
        public ActionResult<List<Trivia>> Get()
        {
            return _triviaRepository.AllTrivias;
        }

        [HttpDelete("{name}")]
        public ActionResult<Trivia> Delete(string name)
        {
            var byeMovie = _triviaRepository.AllTrivias.FirstOrDefault(p => p.Movie.ToLower() == name.ToLower());

            _triviaRepository.AllTrivias.Remove(byeMovie);

            return Ok("deleted");
        }
    }
}



