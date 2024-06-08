using System.ComponentModel.DataAnnotations;
using Backend.Enums;

namespace Backend.Models;

public class Role
{
    public int Id { get; set; }
    [Required]
    public RoleEnum RoleName { get; set; }
    
    // Reverse navigation
    public ICollection<User> Users { get; set; }

}