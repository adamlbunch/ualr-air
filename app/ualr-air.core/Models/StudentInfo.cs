using System;
using System.Collections.Generic;
using System.Text;

namespace web.ualrair.core.Models
{
	public class StudentInfo
	{
		public string Email { get; set; }
		public string Password { get; set; }
		public string Interest { get; set; }
		public char StudentType { get; set; }
    public string Salt { get; set; }
	}
}
