package spring;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.PropertyAccessorFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/items")
public class ItemController {

  private final ItemRepo itemRepo;

  public ItemController(ItemRepo itemRepo) {
    this.itemRepo = itemRepo;
  }

  @GetMapping("")
  public List<Item> getAllItems() {
    return itemRepo.findAll();
  }

  @GetMapping("/{id}")
  public Item getItem(@PathVariable Integer id) {
    return itemRepo.findById(id).orElseThrow();
  }

  @PostMapping("")
  @ResponseStatus(code = HttpStatus.CREATED)
  public Item createItem(@RequestBody Item item) {
    if(item.getId() != null) item.setId(null);
    return itemRepo.save(item);
  }

  @PatchMapping("/{id}")
  public Item updateItem(@PathVariable Integer id, @RequestBody Map<String, String> body) throws Exception {
    Item item = itemRepo.findById(id).orElseThrow();

    BeanWrapper accessor = PropertyAccessorFactory.forBeanPropertyAccess(item);
    Field[] itemFields = item.getClass().getDeclaredFields();

    for (Field field : itemFields) {
      String fieldName = field.getName();
      if (body.containsKey(fieldName)) accessor.setPropertyValue(fieldName, body.get(fieldName));
    }

    return itemRepo.save(item);
  }
  
  @DeleteMapping("/{id}")
  public void deleteItem(@PathVariable Integer id) {
    itemRepo.deleteById(id);
  }

  @ExceptionHandler(NoSuchElementException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public String itemNotFound() {
    return "Item at given id does not exist.";
  }

  @ExceptionHandler(InvalidRequestException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public String invalidRequest() {
    return "Invalid request.";
  }
}