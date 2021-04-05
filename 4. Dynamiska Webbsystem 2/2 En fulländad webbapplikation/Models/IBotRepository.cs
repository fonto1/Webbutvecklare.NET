using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nasa3.Models
{
    public interface IBotRepository
    {
        List<Bots> AllBots {get;}
    }
}
