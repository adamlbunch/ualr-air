using System;
using System.Collections.Generic;
using System.Text;
using web.ualrair.core.Dbos;

namespace web.ualrair.core.Models.ValidationModels
{
  public class RegisterStudentValidationModel : ValidationModel
  {
    public RegisteredStudent ExistingInstance { get; set; }
    public StudentInfo Model { get; set; }
  }
}
