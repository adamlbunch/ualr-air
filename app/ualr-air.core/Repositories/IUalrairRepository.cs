using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using web.ualrair.core.Dbos;
using web.ualrair.core.Models;
using web.ualrair.core.Models.ValidationModels;

namespace web.ualrair.core.Repositories
{
  public interface IUalrairRepository
  {
    RegisteredStudent GetExistingRegisteredStudent(StudentInfo model, IDbConnection connection);
    void RegisterStudent(RegisterStudentValidationModel model, IDbConnection connection);
    RegisteredStudent LoginStudent(StudentInfo model, IDbConnection connection);
  }
}
