using System.Collections.Generic;

namespace web.ualrair.Models.ViewModels
{
	public class StudentInfoViewModel
	{
		public string Email { get; set; }
		public string Password { get; set; }
		public string Interest { get; set; }
		public char StudentType { get; set; }
    public bool LoginSuccess { get; set; }
    public List<string> GeneralErrorMessage { get; set; }
	}
}
