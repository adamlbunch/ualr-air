using System;
using System.Collections.Generic;
using System.Text;
using web.ualrair.core.Models;
using web.ualrair.core.Models.ValidationModels;

namespace web.ualrair.core.Controls.RegisterStudent
{
  public interface IRegisterStudent
  {
    RegisterStudentValidationModel Validate(StudentInfo viewModel);
    void Register(RegisterStudentValidationModel model);
  }
}
