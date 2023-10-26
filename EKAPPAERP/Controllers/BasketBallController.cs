using EkappaERP.BAL.DTO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Drawing.Imaging;
using System.Drawing;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace EKAPPAERP.Controllers
{
	public class BasketBallController : Controller
	{
		private IHostingEnvironment Environment;

		public BasketBallController(IHostingEnvironment _environment)
		{
			Environment = _environment;
		}

		public IActionResult Index()
		{
			return View();
		}
        public IActionResult ItemsDetailsByID(int Id)
        {
            return View();
        }

        [HttpPost]
        public IActionResult basketballItems(ParametersModel model)
        {

            return PartialView("/Views/PartialView/Product/_basketballItems.cshtml");
        }

		[HttpPost]
		public async Task<IActionResult> textupdated(string Name)
		{
			string illustratorPath = "C:\\AdobeIllsutrator\\Adobe Illustrator 2023\\Support Files\\Contents\\Windows\\Illustrator.exe"; // Path to Adobe Illustrator executable
																																		// string scriptPath = "path_to_your_script.jsx"; // Path to your Adobe Illustrator script

			string wwwPath = this.Environment.WebRootPath;

			//string scriptPath = Path.Combine(wwwPath, "\\JSXadobeLogicScript\\replaceText.jsx");

			string scriptPath = wwwPath+ "\\JSXadobeLogicScript\\TshirtRename.jsx";

			//string scriptPath = "D:\\Kappa Project\\adobe js\\TshirtRename.jsx";

			// Create an instance of IllustratorParameters and write it to a JSON file
			IllustratorParametersDTO parameters = new IllustratorParametersDTO
			{
				Parameter1 = Name,
				Parameter2 = "Value2"
			};

			string json = JsonConvert.SerializeObject(parameters);
			System.IO.File.WriteAllText("D:\\illustrator_params.json", json);




			await Process.Start(illustratorPath, $"/r \"{scriptPath}\"").WaitForExitAsync();  //uncomment

			SliceImages();


			return PartialView("/Views/PartialView/ProductViewer/_ProdcutViewer.cshtml");

		}

		public void SliceImages()
		{
			string wwwPath = this.Environment.WebRootPath;
			string contentPath = this.Environment.ContentRootPath;


			var outputpath = "D:\\" + "OutPutFile";
			Directory.CreateDirectory(outputpath);

			string imagePath = outputpath+ "\\output.png"; // Replace with the path to your long image
			//string imagePath = outputpath+ "\\output.png"; // Replace with the path to your long image

			int sliceHeight = 768; // Set the desired height for each slice

			using (System.Drawing.Image image = System.Drawing.Image.FromFile(imagePath))
			{
				int totalSlices = (int)Math.Ceiling((double)image.Height / sliceHeight);

				// Create a directory to save the slices
				string outputFolder = wwwPath+ "\\images\\tshirt"; // Replace with your desired output folder
				Directory.CreateDirectory(outputFolder);

				for (int sliceIndex = 0; sliceIndex < totalSlices; sliceIndex++)
				{
					int y = sliceIndex * sliceHeight;
					int height = Math.Min(sliceHeight, image.Height - y);

					using (Bitmap slice = new Bitmap(image.Width, height))
					{
						using (System.Drawing.Graphics g = System.Drawing.Graphics.FromImage(slice))
						{
							g.DrawImage(image, new System.Drawing.Rectangle(0, 0, image.Width, height), new System.Drawing.Rectangle(0, y, image.Width, height), System.Drawing.GraphicsUnit.Pixel);
						}

						//	string slicePathpng = $"slice_{sliceIndex}.png";

						string slicePathpng = $"{sliceIndex+1}.png";


						// Save the slice as an image file
						string slicePath = Path.Combine(outputFolder, slicePathpng);
						slice.Save(slicePath, ImageFormat.Png);
					}
				}
			}

			Console.WriteLine("Slicing complete. Slices saved to the output folder.");
		}

	}
}
