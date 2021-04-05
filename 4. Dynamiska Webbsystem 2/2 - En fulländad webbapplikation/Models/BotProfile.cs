using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nasa3.Models
{
    public class BotProfile : Profile
    {
        public BotProfile()
        {
            this.CreateMap<Bots, BotViewModel>();
           
        }
    }
}
