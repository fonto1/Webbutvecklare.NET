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
    [Route("api/[controller]")]
    [ApiController]
    public class StudiosController : ControllerBase

    {
        private readonly IMockStudioRepository _mockStudioRepository;
        private readonly LinkGenerator _linkGenerator;
        private readonly IMockMoviesRepository _mockMoviesRepository;

        public StudiosController(IMockStudioRepository mockStudioRepository, LinkGenerator linkGenerator,IMockMoviesRepository mockMoviesRepository)
        {
            _mockStudioRepository = mockStudioRepository;
            _linkGenerator = linkGenerator;
            _mockMoviesRepository = mockMoviesRepository;
        }

        public ActionResult<List<Studios>> Get()

        {
            var studios = _mockStudioRepository.AllStudios;
            return studios;
        }


        [HttpPost]
        public ActionResult<List<Studios>> Post(Studios studio)
        {
            if(_mockStudioRepository.AllStudios.Exists(p=>p.Name.ToLower() == studio.Name.ToLower()))
            {
                return BadRequest("This Studio Exist");
            }

            else if(studio.Name == "")
            {
                return BadRequest("Name not valid");
            }

            var num = _mockStudioRepository.AllStudios.Count();

            var tempStudio = new Studios { Name = studio.Name, City = studio.City };

            var location = _linkGenerator.GetPathByAction("Get", "studios");
            _mockStudioRepository.AddStudio(studio);
            return Ok("");
          //  return Created(location, _mockStudioRepository.AllStudios);
        }


        [HttpGet("{name}")]
        public ActionResult<Studios> Get(string name)
        {
            var oneStudio = _mockStudioRepository.AllStudios.FirstOrDefault(p => p.Name.ToLower() == name.ToLower());
            return oneStudio;
        }

        [HttpPut("{name}")]
        public ActionResult<Studios> Put(string name, Studios studio)
        {
            if(_mockStudioRepository.AllStudios.Exists(p=>p.Name.ToLower() == studio.Name.ToLower()))
            {
                return BadRequest("name already in use");
            }

            else if(studio.Name == "")
            {
                return BadRequest("New name not valid");
            }

            var oldStudio = _mockStudioRepository.AllStudios.FirstOrDefault(p => p.Name.ToLower() == name.ToLower());

            oldStudio.Name = studio.Name;
            oldStudio.City = studio.City;

            return oldStudio;
        }

        [HttpDelete("{name}")]
        public ActionResult<Studios> Delete(string name) 
        {
            var byeStudio = _mockStudioRepository.AllStudios.FirstOrDefault(p => p.Name.ToLower() == name.ToLower());

           
            _mockMoviesRepository.AllMovies.ForEach(items =>
            {
               if(items.RentToStudio.Exists(z=>z == byeStudio.Name))
                {
                    items.RentToStudio.Remove(byeStudio.Name);
                    items.LeftToRent++;
                }
            });

            _mockStudioRepository.AllStudios.Remove(byeStudio);
            return Ok("deleted");
        }
    }
}
