using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace web.ualrair.core.Repositories
{
  public interface IRepositoryAccess
  {
    T Query<T>(Func<IDbConnection, T> query, IDbConnection connection);
    T2 Query<T1, T2>(Func<T1, IDbConnection, T2> query, T1 model, IDbConnection connection);
    void Insert<T>(Action<T, IDbConnection> insert, T model, IDbConnection connection);
  }
}
