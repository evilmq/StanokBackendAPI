﻿// <auto-generated />
using GalleryApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GalleryApp.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241028230535_prefinal")]
    partial class prefinal
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("GalleryApp.Models.Gallery", b =>
                {
                    b.Property<int>("GalleryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GalleryId"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("GalleryId");

                    b.ToTable("Galleries");
                });

            modelBuilder.Entity("GalleryApp.Models.GalleryItem", b =>
                {
                    b.Property<int>("ItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ItemId"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("GalleryId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ItemId");

                    b.HasIndex("GalleryId");

                    b.ToTable("GalleryItems");
                });

            modelBuilder.Entity("GalleryApp.Models.ItemImage", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ImageId"));

                    b.Property<int>("GalleryItemItemId")
                        .HasColumnType("int");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ItemId")
                        .HasColumnType("int");

                    b.HasKey("ImageId");

                    b.HasIndex("GalleryItemItemId");

                    b.ToTable("ItemImages");
                });

            modelBuilder.Entity("GalleryApp.Models.ItemTags", b =>
                {
                    b.Property<int>("ItemId")
                        .HasColumnType("int");

                    b.Property<int>("TagId")
                        .HasColumnType("int");

                    b.HasKey("ItemId", "TagId");

                    b.HasIndex("TagId");

                    b.ToTable("ItemTags");
                });

            modelBuilder.Entity("GalleryApp.Models.Tag", b =>
                {
                    b.Property<int>("TagId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TagId"));

                    b.Property<string>("TagName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TagId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("GalleryApp.Models.GalleryItem", b =>
                {
                    b.HasOne("GalleryApp.Models.Gallery", "Gallery")
                        .WithMany("GalleryItems")
                        .HasForeignKey("GalleryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Gallery");
                });

            modelBuilder.Entity("GalleryApp.Models.ItemImage", b =>
                {
                    b.HasOne("GalleryApp.Models.GalleryItem", "GalleryItem")
                        .WithMany("ItemImages")
                        .HasForeignKey("GalleryItemItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GalleryItem");
                });

            modelBuilder.Entity("GalleryApp.Models.ItemTags", b =>
                {
                    b.HasOne("GalleryApp.Models.GalleryItem", "GalleryItem")
                        .WithMany("Tags")
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GalleryApp.Models.Tag", "Tag")
                        .WithMany("GalleryItems")
                        .HasForeignKey("TagId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GalleryItem");

                    b.Navigation("Tag");
                });

            modelBuilder.Entity("GalleryApp.Models.Gallery", b =>
                {
                    b.Navigation("GalleryItems");
                });

            modelBuilder.Entity("GalleryApp.Models.GalleryItem", b =>
                {
                    b.Navigation("ItemImages");

                    b.Navigation("Tags");
                });

            modelBuilder.Entity("GalleryApp.Models.Tag", b =>
                {
                    b.Navigation("GalleryItems");
                });
#pragma warning restore 612, 618
        }
    }
}
