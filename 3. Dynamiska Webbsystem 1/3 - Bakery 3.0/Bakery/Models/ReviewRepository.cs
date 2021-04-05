using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class ReviewRepository:IReviewRepostitory
    {
        private readonly AppDbContext _appDbContext;

        public ReviewRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }



        public List<Review> AllReviews
        {
            get
            {
                return _appDbContext.Reviews.ToList();
            }
        }
    }
}
