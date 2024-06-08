using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

public class User
{
    public int Id { get; set; }
    
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Surname { get; set; }
    
    [Required]
    public DateTime BirthDate { get; set; }
    
    [ForeignKey("Role")]
    public int RoleId { get; set; }
    public Role Role { get; set; }
    
    
}