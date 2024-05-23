using Microsoft.AspNetCore.Mvc;
using MyBackendProject.Models;
using MyBackendProject.Services;

[ApiController]
[Route("api/[controller]")]
public class ItemsController : ControllerBase
{
    private readonly IItemService _itemService;

    public ItemsController(IItemService itemService)
    {
        _itemService = itemService;
    }

    [HttpGet]
    public IEnumerable<Item> Get()
    {
        return _itemService.GetItems();
    }

    [HttpGet("{id}")]
    public ActionResult<Item> Get(int id)
    {
        var item = _itemService.GetItemById(id);
        if (item == null)
        {
            return NotFound();
        }
        return item;
    }

    [HttpPost]
    public IActionResult Post([FromBody] Item item)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        _itemService.AddItem(item);
        return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Item item)
    {
        if (id != item.Id)
        {
            return BadRequest();
        }

        var existingItem = _itemService.GetItemById(id);
        if (existingItem == null)
        {
            return NotFound();
        }

        _itemService.UpdateItem(item);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var item = _itemService.GetItemById(id);
        if (item == null)
        {
            return NotFound();
        }

        _itemService.DeleteItem(id);
        return NoContent();
    }
}
