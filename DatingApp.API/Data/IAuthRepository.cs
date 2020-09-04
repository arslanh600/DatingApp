using System.Threading.Tasks;
using DatingApp.API.Models;


namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Resgister (User user,  string password);
         Task<bool> UserExists (string username);
         Task<User> Login  (string username,  string password);
         

    }
}