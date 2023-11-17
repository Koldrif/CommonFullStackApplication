using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;

namespace Lab_2.Models
{
	public class Student
	{
		public string LastName { get; set; }
		public string FirstName { get; set; }
		public string Patronymic { get; set; }
		public string Phone { get; set; }
		public string Email { get; set; }
		public string Group { get; set; }
		public int Year { get; set; }

		[BindProperty(Name = "Inst")]
		public string Institute { get; set; }
	}
}
