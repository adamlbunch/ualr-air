using System;
using System.Collections.Generic;
using System.Text;

namespace web.ualrair.core.Dbos
{
  public class RegisteredStudent
  {
    public int Id { get; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Interest { get; set; }
    public string StudentType { get; set; }
    public string Salt { get; set; }
  }
}
