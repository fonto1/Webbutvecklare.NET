using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class MockCake : ICake
    {

        public List<Product> AllProducts =>
            new List<Product>
            {
                new Cake("Jordgubbstårta",200,"Magisk röd tårta"),
                new Cake("Hallontårta", 250, "Magisk ljusröd tårta"),
                new Cake("Chokladtårta", 300, "Magisk mörk tårta"),
            };
    }
}
