using GalleryApp.Data;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
});
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))); // ��������� ������ �����������

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyAllowSpecificOrigins", // ��� ��������
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "https://*.euw.devtunnels.ms/", "https://x1t8r04m-5173.euw.devtunnels.ms", "https://x1t8r04m-5173.euw.devtunnels.ms/") // ����������� ���������
                .AllowAnyHeader() // ����������� ���������
                .AllowAnyMethod(); // ����������� ������
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection(); // ������ ���� ������������ HTTPS

app.UseCors("MyAllowSpecificOrigins"); // ���������� �������� CORS 

app.UseAuthorization();

app.UseStaticFiles(); // ���������� ��� ������� � ������ � wwwroot

app.MapControllers();

app.Run();