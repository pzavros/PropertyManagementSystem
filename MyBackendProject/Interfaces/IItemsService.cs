using System.Collections.Generic;
using System.Threading.Tasks;
using MyBackendProject.Models;

namespace MyBackendProject.Services
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetItemsAsync();
        Task<Item> GetItemByIdAsync(int id);
        Task<Item> AddItemAsync(Item item);
        Task<Item> UpdateItemAsync(Item item);
        Task DeleteItemAsync(int id); 
    }
}
