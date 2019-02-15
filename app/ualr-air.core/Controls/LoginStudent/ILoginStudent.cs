using System;
using System.Collections.Generic;
using System.Text;
using web.ualrair.core.Dbos;
using web.ualrair.core.Models;
using web.ualrair.core.Models.ValidationModels;

namespace web.ualrair.core.Controls.LoginStudent
{
  public interface ILoginStudent
  {
    RegisteredStudent Login(StudentInfo model);
  }
}
