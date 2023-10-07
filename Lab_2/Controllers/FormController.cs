using Lab_2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lab_2.Controllers
{
	public class FormController : ControllerBase
	{
		[HttpPost]
		[Route("/SendRequest")]
		public IActionResult AcceptForm([FromForm] Form form)
		{
			return Ok(form);
		}
	}
}
