using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Nasa3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nasa3.Controllers
{
    [Route("api/[controller]")]
    public class BotsController : ControllerBase
    {
        private readonly IBotRepository _botRepository;
        private readonly IMapper _mapper;
        
        public BotsController(IBotRepository botRepository, IMapper mapper)

        {
            _botRepository = botRepository;
            _mapper = mapper;
        }


        [HttpGet]
        public IActionResult Get()
        {
            var allBots = _botRepository.AllBots;

            BotViewModel[] model = _mapper.Map<BotViewModel[]>(allBots);

            return  Ok(model);
        }
            
        [HttpGet("{name}")]
        public IActionResult Get(string name)
        {

            var singleBot = _botRepository.AllBots.FindAll(p => p.Name == name);
            return Ok(singleBot);
        }

    }
}
