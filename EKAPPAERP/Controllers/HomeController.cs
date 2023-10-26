using EKAPPAERP.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using static System.Net.Mime.MediaTypeNames;
using System.Drawing;
using Image = System.Drawing.Image;

namespace EKAPPAERP.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            TextOnImages();
            return View();
        }


        public void TextOnImages()
        {

            string firstText = "Kapil";
            string secondText = "World";

            PointF front = new PointF(329f, 360f); // front
            PointF back = new PointF(287f, 6462f); // front
                                                           // PointF secondLocation = new PointF(10f, 50f);

            string imageFilePath = @"path\ERP.bmp";

            string saveimageFilePath = @"path\ERPu.bmp";
            Bitmap bitmap = (Bitmap)Image.FromFile(imageFilePath);//load the image file

            using (Graphics graphics = Graphics.FromImage(bitmap))
            {
                using (Font arialFont = new Font("Arial", 10))
                {
                    graphics.DrawString(firstText, arialFont, Brushes.Red, front);
                    graphics.DrawString(secondText, arialFont, Brushes.Yellow, back);
                }
            }

            bitmap.Save(saveimageFilePath);//save the image file
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}