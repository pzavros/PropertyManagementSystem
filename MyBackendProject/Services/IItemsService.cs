using MyBackendProject.Models;

namespace MyBackendProject.Services
{
    public interface IItemService
    {
        IEnumerable<Item> GetItems();
        Item GetItemById(int id);
        void AddItem(Item item);
        void UpdateItem(Item item);
        void DeleteItem(int id);
    }
}
