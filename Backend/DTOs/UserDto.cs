namespace Backend.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateOnly BirthDate { get; set; }
        public int RoleId { get; set; }
        public RoleDto Role { get; set; }
    }
}