using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GalleryApp.Migrations
{
    /// <inheritdoc />
    public partial class prefinal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "GalleryItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "GalleryItems");
        }
    }
}
