using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nasa3.Models
{
    public class MockBotRepository : IBotRepository
    {
        public List<Bots> AllBots =>
          new List<Bots>
           {
              new Bots{ Name = "Rat", Link = "/api/bots/Rat", LaunchDate = new DateTime(2020,6,8).ToString("yyyy-MM-dd") , Color = "Grey", Camera = 1, Wheel = 1, MaxSpeed =  1984, Weight = 2},
              new Bots{ Name = "Ox", Link = "/api/bots/Ox", LaunchDate = new DateTime(2020,4,28).ToString("yyyy-MM-dd"), Color = "White", Camera = 3, Wheel = 7, MaxSpeed =  506, Weight = 6},
              new Bots{ Name = "Tiger", Link = "/api/bots/Tiger",LaunchDate = new DateTime(2020,10,18).ToString("yyyy-MM-dd"), Color = "Red", Camera = 4, Wheel = 3, MaxSpeed =  445641, Weight = 1}
           };
    };
}
