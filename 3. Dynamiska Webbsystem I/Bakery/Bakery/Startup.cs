using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bakery.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Bakery
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            // lägga till alla services vi behöver för applikationen samt dependencies

            services.AddScoped<ICake, MockCake>(); // Dependency
            services.AddControllersWithViews(); // MVC


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // håller reda på pipeline, vad som händer när sidan laddas

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();   // environmentcheck för att se vilken mode kör på
            }

            app.UseHttpsRedirection();  // ber programmet att köra https
            app.UseStaticFiles(); // gör så att programmet kan köra statisk filer, bilder, javafiles etc
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Cake}/{Action=List}/{id?}"); // ändra default sida
            });
        }
    }
}
