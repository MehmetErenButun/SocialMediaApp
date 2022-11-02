using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedDb
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Geçmiş Aktivite 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "2 Ay önceki aktivite",
                    Category = "İçmek",
                    City = "Bursa",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title = "Geçmiş Aktivite 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "1 Ay önceki aktivite",
                    Category = "Kültür",
                    City = "Bursa",
                    Venue = "Ulucamii",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 1",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Aktivite, 1 ay içerisinde olacak",
                    Category = "Kültür",
                    City = "Bursa",
                    Venue = "Cumalıkızık Köyü",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 2",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Aktivite, 2 ay içerisinde olacak",
                    Category = "Müzik",
                    City = "Bursa",
                    Venue = "Timsah Arena",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 3",
                    Date = DateTime.Now.AddMonths(3),
                    Description = "Aktivite, 3 ay içerisinde olacak",
                    Category = "İçmek",
                    City = "İstanbul",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 4",
                    Date = DateTime.Now.AddMonths(4),
                    Description = "Aktivite, 4 ay içerisinde olacak",
                    Category = "İçmek",
                    City = "Bursa",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 5",
                    Date = DateTime.Now.AddMonths(5),
                    Description = "Aktivite, 5 ay içerisinde olacak",
                    Category = "İçmek",
                    City = "Bursa",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 6",
                    Date = DateTime.Now.AddMonths(6),
                    Description = "Aktivite, 6 ay içerisinde olacak",
                    Category = "Müzik",
                    City = "İstanbul",
                    Venue = "Vodafone Park",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 7",
                    Date = DateTime.Now.AddMonths(7),
                    Description = "Aktivite, 7 ay içerisinde olacak",
                    Category = "Seyehat",
                    City = "Ankara",
                    Venue = "Anıtkabir",
                },
                new Activity
                {
                    Title = "Gelecek Aktivite 8",
                    Date = DateTime.Now.AddMonths(8),
                    Description = "Aktivite, 8 ay içerisinde olacak",
                    Category = "Film",
                    City = "Bursa",
                    Venue = "Sinema",
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}