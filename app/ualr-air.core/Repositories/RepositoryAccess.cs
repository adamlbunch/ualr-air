using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace web.ualrair.core.Repositories
{
  public class RepositoryAccess : IRepositoryAccess
  {
    public T Query<T>(Func<IDbConnection, T> query, IDbConnection connection)
    {
      T result;
      using (connection)
      {
        connection.Open();
        result = query(connection);
        connection.Close();
      }
      return result;
    }

    public T2 Query<T1, T2>(Func<T1, IDbConnection, T2> query, T1 model, IDbConnection connection)
    {
      T2 result;
      using (connection)
      {
        connection.Open();
        result = query(model, connection);
        connection.Close();
      }
      return result;
    }

    public void Insert<T>(Action<T, IDbConnection> insert, T model, IDbConnection connection)
    {
      using (connection)
      {
        connection.Open();
        insert(model, connection);
        connection.Close();
      }
    }
  }
}
