using Microsoft.EntityFrameworkCore.Migrations;

namespace Bakery.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Price = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    Size = table.Column<string>(nullable: true),
                    Quantity = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Discriminator", "Name", "Price", "Quantity", "Size" },
                values: new object[,]
                {
                    { 1, "Bullar för stora mun", "Bread", "MegaBullar", 60, 2, "Stor" },
                    { 4, "Sväljbara bullar", "Bread", "MiniBullar", 20, 8, "Mini" },
                    { 5, "Lagom lätt tuggade bullar", "Bread", "Bullar", 40, 4, "Normal" },
                    { 7, "Pepparkagor vandrar tillsammans hand-i-hand", "Bread", "Peppakagor", 100, 35, "XL" },
                    { 9, "gulaste gul i mitten", "Bread", "Wienerbröö", 25, 5, "Xs" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Discriminator", "Name", "Price" },
                values: new object[,]
                {
                    { 2, "Magisk röd tårta", "Cake", "Jordgubbstårta", 200 },
                    { 3, "Magisk ljusröd tårta", "Cake", "Hallontårta", 250 },
                    { 6, "Magisk mörk tårta", "Cake", "Chokladtårta", 300 },
                    { 8, "klassisktårta med saftsås :) ", "Cake", "TomtegrötTårta", 1500 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
