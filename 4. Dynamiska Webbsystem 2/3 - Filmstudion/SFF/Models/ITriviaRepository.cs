using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Models
{
    public interface ITriviaRepository
    {
        List<Trivia> AllTrivias { get; }
    }
}
