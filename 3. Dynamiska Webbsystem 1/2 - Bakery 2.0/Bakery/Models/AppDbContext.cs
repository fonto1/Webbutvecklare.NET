using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class AppDbContext : DbContext

    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet <Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
        //    builder.Entity<Cake>();
         //   builder.Entity<Bread>();
            base.OnModelCreating(builder);

            // Define composite key.
          //  builder.Entity<Product>()
            //    .HasNoKey();


            builder.Entity<Bread>().HasData(new Bread(1,"MegaBullar", 60, "Bullar för stora mun", "Stor", 2));
            builder.Entity<Cake>().HasData(new Cake(2,"Jordgubbstårta", 200, "Magisk röd tårta"));
            builder.Entity<Cake>().HasData(new Cake(3, "Hallontårta", 250, "Magisk ljusröd tårta"));
            builder.Entity<Bread>().HasData(new Bread(4, "MiniBullar", 20, "Sväljbara bullar", "Mini", 8));
            builder.Entity<Bread>().HasData(new Bread(5, "Bullar", 40, "Lagom lätt tuggade bullar", "Normal", 4));
            builder.Entity<Cake>().HasData(new Cake(6, "Chokladtårta", 300, "Magisk mörk tårta"));
            builder.Entity<Bread>().HasData(new Bread(7, "Peppakagor", 100, "Pepparkagor vandrar tillsammans hand-i-hand", "XL", 35));
            builder.Entity<Cake>().HasData(new Cake(8, "TomtegrötTårta", 1500, "klassisktårta med saftsås :) "));
            builder.Entity<Bread>().HasData(new Bread(9, "Wienerbröö", 25, "gulaste gul i mitten", "Xs", 5));

        }
    }
}


