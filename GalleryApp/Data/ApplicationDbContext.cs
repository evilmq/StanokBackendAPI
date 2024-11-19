using GalleryApp.Models;
using Microsoft.EntityFrameworkCore;

namespace GalleryApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Gallery> Galleries { get; set; }
        public DbSet<GalleryItem> GalleryItems { get; set; }
        public DbSet<ItemImage> ItemImages { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<ItemTags> ItemTags { get; set; }
        public DbSet<Category> Categories { get; set; } // Добавлено

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ItemTags>()
                .HasKey(it => new { it.ItemId, it.TagId });

            modelBuilder.Entity<ItemTags>()
                .HasOne(it => it.GalleryItem)
                .WithMany(gi => gi.Tags)
                .HasForeignKey(it => it.ItemId);

            modelBuilder.Entity<ItemTags>()
                .HasOne(it => it.Tag)
                .WithMany(t => t.GalleryItems)
                .HasForeignKey(it => it.TagId);

            // Настройка связи между Tag и Category
            modelBuilder.Entity<Tag>()
                .HasOne(t => t.Category)
                .WithMany(c => c.Tags)
                .HasForeignKey(t => t.CategoryId);
        }
    }
}