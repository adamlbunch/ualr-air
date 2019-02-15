using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using web.ualrair.core.Dbos;
using web.ualrair.core.Models;
using Dapper;
using System.Linq;
using web.ualrair.core.Models.ValidationModels;

namespace web.ualrair.core.Repositories
{
  public class UalrairRepository : IUalrairRepository
  {
    private readonly IConfiguration _configuration;

    public UalrairRepository(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    public RegisteredStudent GetExistingRegisteredStudent(StudentInfo model, IDbConnection connection)
    {
      var sQuery = @"SELECT [Email]
                    FROM [UALRAIR].[dbo].[RegisteredStudents] 
                    WHERE [Email] = @Email";

      return connection.Query<RegisteredStudent>(sQuery, new
      {
        model.Email
      }).ToList().FirstOrDefault();
    }

    public void RegisterStudent(RegisterStudentValidationModel model, IDbConnection connection)
    {
      var sQuery = @"INSERT INTO [UALRAIR].[dbo].[RegisteredStudents]
                    ([Email],
                    [Password],
                    [Interest],
                    [StudentType],
                    [Salt])
                    VALUES (@Email, @Password, @Interest, @StudentType, @Salt)";

      connection.Execute(sQuery, model.Model);
    }

    public RegisteredStudent LoginStudent(StudentInfo model, IDbConnection connection)
    {
      var sQuery = @"SELECT [Email], [Password], [Interest], [StudentType], [Salt]
                    FROM [UALRAIR].[dbo].[RegisteredStudents]
                    WHERE [Email] = @Email";

      return connection.Query<RegisteredStudent>(sQuery, new
      {
        model.Email
      }).ToList().FirstOrDefault();
    }
  }
}
