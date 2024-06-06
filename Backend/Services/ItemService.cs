using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.DTOs;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class ItemService : IItemService
    {
        private readonly ApplicationDbContext _context;

        public ItemService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ItemDto>> GetItemsAsync()
        {
            var items = await _context.Items.ToListAsync();
            var itemDtos = new List<ItemDto>();
            foreach (var item in items)
            {
                itemDtos.Add(new ItemDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Description = item.Description
                });
            }
            return itemDtos;
        }

        public async Task<ItemDto> GetItemByIdAsync(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null)
            {
                return null;
            }
            return new ItemDto
            {
                Id = item.Id,
                Name = item.Name,
                Description = item.Description
            };
        }

        public async Task<ItemDto> AddItemAsync(ItemDto itemDto)
        {
            var item = new Item
            {
                Name = itemDto.Name,
                Description = itemDto.Description
            };
            _context.Items.Add(item);
            await _context.SaveChangesAsync();
            itemDto.Id = item.Id;
            return itemDto;
        }

        public async Task<ItemDto> UpdateItemAsync(ItemDto itemDto)
        {
            var item = await _context.Items.FindAsync(itemDto.Id);
            if (item == null)
            {
                return null;
            }
            item.Name = itemDto.Name;
            item.Description = itemDto.Description;
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return itemDto;
        }

        public async Task DeleteItemAsync(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item != null)
            {
                _context.Items.Remove(item);
                await _context.SaveChangesAsync();
            }
        }
    }
}
