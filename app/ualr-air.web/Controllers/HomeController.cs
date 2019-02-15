using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using web.ualrair.core.Controls.LoginStudent;
using web.ualrair.core.Controls.RegisterStudent;
using web.ualrair.Mappers;
using web.ualrair.Models.ViewModels;
using web.ualrair.Models.ViewModels.ViewModelValidators;
using web.ualrair.Sanitizers;

namespace web.ualrair.Controllers
{
  [Route("api/[controller]")]
  public class HomeController : Controller
  {
    private readonly IRegisterStudent _registerStudent;
    private readonly ILoginStudent _loginStudent;
    private readonly IMapStudentInfo _mapStudentInfo;
    private readonly ISanitizeStudentInfoViewModel _sanitizeViewModel;
    private readonly ISanitizeStudentLoginViewModel _sanitizeLogin;

    public HomeController(IRegisterStudent registerStudent,
      ILoginStudent loginStudent,
      IMapStudentInfo mapStudentInfo,
      ISanitizeStudentInfoViewModel sanitizeViewModel,
      ISanitizeStudentLoginViewModel sanitizeLogin)
    {
      _registerStudent = registerStudent;
      _loginStudent = loginStudent;
      _mapStudentInfo = mapStudentInfo;
      _sanitizeViewModel = sanitizeViewModel;
      _sanitizeLogin = sanitizeLogin;
    }
    

    [HttpPost("[action]")]
    public StudentInfoViewModel RegisterStudent([FromBody]StudentInfoViewModel viewModel)
    {
      var errors = new List<string>();
      var clientValidator = new StudentInfoViewModelValidator();
      var results = clientValidator.Validate(viewModel);
      if (results.IsValid)
      {
        var santizedViewModel = _sanitizeViewModel.Sanitize(viewModel);
        var backendResults = _registerStudent.Validate(_mapStudentInfo.Map(santizedViewModel));
        
        if (backendResults.ValidationResult.IsValid)
        {
          _registerStudent.Register(backendResults);

          return new StudentInfoViewModel
          {
            Email = backendResults.Model.Email,
            Interest = backendResults.Model.Interest,
            StudentType = backendResults.Model.StudentType,
            LoginSuccess = true
          };

        };

        backendResults.ValidationResult.Errors.ToList().ForEach(e => errors.Add(e.ToString()));
        return new StudentInfoViewModel
        {
          LoginSuccess = false,
          GeneralErrorMessage = errors
        };
      }

      results.Errors.ToList().ForEach(e => errors.Add(e.ToString()));
      return new StudentInfoViewModel
      {
        LoginSuccess = false,
        GeneralErrorMessage = errors
      };
    }

    [HttpPost("[action]")]
    public StudentInfoViewModel LoginStudent([FromBody]StudentInfoViewModel viewModel)
    {
      var errors = new List<string>();
      var clientValidator = new StudentLoginViewModelValidator();
      var results = clientValidator.Validate(viewModel);
      if (ModelState.IsValid)
      {
        var sanitizedViewModel = _sanitizeLogin.Sanitize(viewModel);
        var loggedinStudent = _loginStudent.Login(_mapStudentInfo.Map(sanitizedViewModel));

        if (loggedinStudent != null)
        {
          return new StudentInfoViewModel
          {
            Email = loggedinStudent.Email,
            Interest = loggedinStudent.Interest,
            StudentType = loggedinStudent.StudentType[0],
            LoginSuccess = true
          };
        }

        return new StudentInfoViewModel
        {
          LoginSuccess = false,
          GeneralErrorMessage = new List<string>
          {
            "Email or password is invalid."
          }
        };
      }

      results.Errors.ToList().ForEach(e => errors.Add(e.ToString()));
      return new StudentInfoViewModel
      {
        LoginSuccess = false,
        GeneralErrorMessage = errors
      };
    }
  }
}