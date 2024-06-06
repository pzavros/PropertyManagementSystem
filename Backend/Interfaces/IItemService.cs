using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.DTOs;

namespace Backend.Services
{
    public interface IItemService
    {
        Task<IEnumerable<ItemDto>> GetItemsAsync();
        Task<ItemDto> GetItemByIdAsync(int id);
        Task<ItemDto> AddItemAsync(ItemDto itemDto);
        Task<ItemDto> UpdateItemAsync(ItemDto itemDto);
        Task DeleteItemAsync(int id);
    }
}