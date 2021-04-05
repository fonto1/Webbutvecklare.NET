using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class AppDbContext : IdentityDbContext<IdentityUser>

    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //    builder.Entity<Cake>();
            //   builder.Entity<Bread>();
            base.OnModelCreating(builder);

            // Define composite key.
            //  builder.Entity<Product>()
            //    .HasNoKey();


            builder.Entity<Bread>().HasData(new Bread(1, "MegaBullar", 60, "Bullar För Stora Mun", "Stor", 2));
            builder.Entity<Cake>().HasData(new Cake(2, "JordgubbsTårta", 200, "Magisk Röd Tårta"));
            builder.Entity<Cake>().HasData(new Cake(3, "HallonTårta", 250, "Magisk Ljusröd Tårta"));
            builder.Entity<Bread>().HasData(new Bread(4, "MiniBullar", 20, "Sväljbara Bullar", "Mini", 8));
            builder.Entity<Bread>().HasData(new Bread(5, "Bullar", 40, "Lagom Lätt Tuggade bullar", "Normal", 4));
            builder.Entity<Cake>().HasData(new Cake(6, "ChokladTårta", 300, "Magisk Mörk Tårta"));
            builder.Entity<Bread>().HasData(new Bread(7, "Peppakagor", 100, "Pepparkagor Vandrar Tillsammans Hand-i-Hand", "XL", 35));
            builder.Entity<Cake>().HasData(new Cake(8, "TomtegrötsTårta", 1500, "Tomtens Favorit Med Saftsås :) "));
            builder.Entity<Bread>().HasData(new Bread(9, "Wienerbröö", 25, "Gulaste Gul i Mitten", "Xs", 5));
            builder.Entity<Cake>().HasData(new Cake(10, "SaffranTårta", 595, "Magisk Gul Tårta"));

        }
    }
}


