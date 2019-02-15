using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;
using web.ualrair.core.Models;
using web.ualrair.core.Models.ValidationModels;
using web.ualrair.core.Repositories;
using web.ualrair.core.Security;
using web.ualrair.core.Validators;

namespace web.ualrair.core.Controls.RegisterStudent
{
  public class RegisterStudent : IRegisterStudent
  {
    private readonly IConfiguration _configuration;
    private readonly IRepositoryAccess _repositoryAccess;
    private readonly IUalrairRepository _ualrairRepository;

    private IDbConnection Connection => new SqlConnection(_configuration["ConnectionStrings:UalrairDatabase"]);

    public RegisterStudent(IConfiguration configuration,
      IRepositoryAccess repositoryAccess,
      IUalrairRepository ualrairRepository)
    {
      _configuration = configuration;
      _repositoryAccess = repositoryAccess;
      _ualrairRepository = ualrairRepository;
    }
    public RegisterStudentValidationModel Validate(StudentInfo model)
    {
      var validationModel = new RegisterStudentValidationModel
      {
        ExistingInstance = _repositoryAccess.Query(_ualrairRepository.GetExistingRegisteredStudent, model, Connection),
        Model = model
      };

      var validator = new RegisterStudentValidator();
      validationModel.ValidationResult = validator.Validate(validationModel);
      return validationModel;
    }

    public void Register(RegisterStudentValidationModel model)
    {
      var salt = Salt.Create();
      var hash = Hash.Create(model.Model.Password, salt);

      model.Model.Password = hash;
      model.Model.Salt = salt;

      _repositoryAccess.Insert(_ualrairRepository.RegisterStudent, model, Connection);
    }
  }
}
