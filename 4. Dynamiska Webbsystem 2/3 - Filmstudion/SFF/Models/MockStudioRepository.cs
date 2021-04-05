using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Models
{
    public class MockStudioRepository:IMockStudioRepository
    {

        public List<Studios> AllStudios { get; set; }

        public MockStudioRepository()
        {
            AllStudios = new List<Studios>()
            { 
                new Studios {Name="Empire", City="Malmö"},
                new Studios {Name="Vengence", City="Lund"},
                new Studios {Name="Infinity", City="Helsingborg"},
            };

        }

        public void AddStudio(Studios studio) 
        {
            AllStudios.Add(studio);
        }

        public void RemoveStudio(Studios studio)
        {
            AllStudios.Remove(studio);
        }

        public void ChangeStudioProperties (string name, Studios studios)
        {
            var tempStudio = AllStudios.Find(p=>p.Name==name);

            tempStudio.Name = studios.Name;
            tempStudio.City = studios.City;
        }
    }
}
