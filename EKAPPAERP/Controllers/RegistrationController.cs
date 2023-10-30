using Microsoft.AspNetCore.Mvc;

namespace EKAPPAERP.Controllers
{
	public class RegistrationController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Login()
		{
			return View();
		}

        public IActionResult Product()
        {
            return RedirectToAction("home", "Product", new { area = "" });
        }
    }
}
