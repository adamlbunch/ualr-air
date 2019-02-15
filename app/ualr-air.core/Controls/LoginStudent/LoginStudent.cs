using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using web.ualrair.core.Dbos;
using web.ualrair.core.Models;
using web.ualrair.core.Models.ValidationModels;
using web.ualrair.core.Repositories;
using web.ualrair.core.Security;
using web.ualrair.core.Validators;

namespace web.ualrair.core.Controls.LoginStudent
{
  public class LoginStudent : ILoginStudent
  {
    private readonly IConfiguration _configuration;
    private readonly IRepositoryAccess _repositoryAccess;
    private readonly IUalrairRepository _ualrairRepository;

    private IDbConnection Connection => new SqlConnection(_configuration["ConnectionStrings:UalrairDatabase"]);

    public LoginStudent(IConfiguration configuration,
      IRepositoryAccess repositoryAccess,
      IUalrairRepository ualrairRepository)
    {
      _configuration = configuration;
      _repositoryAccess = repositoryAccess;
      _ualrairRepository = ualrairRepository;
    }

    public RegisteredStudent Login(StudentInfo model)
    {
      var dbo = _repositoryAccess.Query(_ualrairRepository.LoginStudent, model, Connection);

      if (dbo != null)
      {
        var isPasswordValid = Hash.Validate(model.Password, dbo.Salt, dbo.Password);

        if (isPasswordValid)
        {
          dbo.Password = null;
          return dbo;
        }
      }

      return null;
    }
  }
}
