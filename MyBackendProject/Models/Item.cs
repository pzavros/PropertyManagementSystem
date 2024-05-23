using System.ComponentModel.DataAnnotations;

namespace MyBackendProject.Models
{
    public class Item
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The name field is required.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "The description field is required.")]
        public string Description { get; set; }
    }
}
