using Microsoft.EntityFrameworkCore.Migrations;

namespace SFF.Migrations
{
    public partial class First : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AllMovies",
                columns: table => new
                {
                    MovieId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    RentCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AllMovies", x => x.MovieId);
                });

            migrationBuilder.CreateTable(
                name: "AllStudios",
                columns: table => new
                {
                    StudioId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AllStudios", x => x.StudioId);
                });

            migrationBuilder.InsertData(
                table: "AllMovies",
                columns: new[] { "MovieId", "Name", "RentCount" },
                values: new object[] { 1, "Superman", 0 });

            migrationBuilder.InsertData(
                table: "AllStudios",
                columns: new[] { "StudioId", "City", "Name" },
                values: new object[] { 1, "Malmö", "SuperStudion" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AllMovies");

            migrationBuilder.DropTable(
                name: "AllStudios");
        }
    }
}
