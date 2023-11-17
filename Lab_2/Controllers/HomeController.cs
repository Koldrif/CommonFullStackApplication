using Lab_2.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lab_2.Controllers
{
	[ApiController]
	public class HomeController : ControllerBase
	{
		[HttpGet]
		[Route("/")]
		[Route("/index")]
		public IActionResult Index()
		{
			return Redirect("/index.html");
		}

		[HttpPost]
		[Route("form")]
		public IActionResult GetForm([FromForm]Student student)
		{
			return Ok(student);
		}
	}
}
