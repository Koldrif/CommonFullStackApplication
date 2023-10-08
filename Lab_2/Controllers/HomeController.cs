using Microsoft.AspNetCore.Mvc;

namespace Lab_2.Controllers
{
	[ApiController]
	public class HomeController : ControllerBase
	{
		[HttpGet]
		[Route("/")]
		[Route("/index")]
		[Route("Home")]
		public IActionResult Index()
		{
			return Redirect("/index.html");
		}
	}
}
