namespace Lab_2.Models
{
	public class Form
	{
		public string Name { get; set; }
		public string Surname { get; set; }
		public int? Age { get; set; }
		public Sex Sex { get; set; }

	}

	public enum Sex
	{
		Male,
		Female,
		NotSelected
	}
}
