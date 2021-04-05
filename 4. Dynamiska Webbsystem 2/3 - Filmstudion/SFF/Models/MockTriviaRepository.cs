using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Models
{
    public class MockTriviaRepository:ITriviaRepository
    {
        public MockTriviaRepository()
        {
            AllTrivias = new List<Trivia>()
            {
                new Trivia { Studio="Infinity", Movie="Bleach", Points="3"}
            };
        }

        public List<Trivia> AllTrivias { get; set; }
    }
}
