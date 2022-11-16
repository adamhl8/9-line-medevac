package spring;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
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

  @PostMapping("")
  @ResponseStatus(code = HttpStatus.CREATED)
  public Item createItem(@RequestBody Item item) {
    return itemRepo.save(item);
  }

  @PatchMapping("/{id}")
  public Item updateItem(@PathVariable Integer id, @RequestBody Map<String, String> body) throws Exception {
    Item item = itemRepo.findById(id).orElseThrow();

    body.forEach((key, value) -> {
      switch (key.toString()) {
        case "status": item.setStatus(value); break;
        case "location": item.setLocation(value); break;
        case "callSign": item.setCallSign(value); break;
        case "frequency": item.setFrequency(Integer.parseInt(value)); break;
        case "byAmbulatory": item.setByAmbulatory(Integer.parseInt(value)); break;
        case "byLitter": item.setByLitter(Integer.parseInt(value)); break;
        case "specialEquipment": item.setSpecialEquipment(value); break;
        case "byUrgent": item.setByUrgent(Integer.parseInt(value)); break;
        case "byPriority": item.setByPriority(Integer.parseInt(value)); break;
        case "byRoutine": item.setByRoutine(Integer.parseInt(value)); break;
        case "security": item.setSecurity(value); break;
        case "marking": item.setMarking(value); break;
        case "usMil": item.setUsMil(Integer.parseInt(value)); break;
        case "usCiv": item.setUsCiv(Integer.parseInt(value)); break;
        case "nonUSMil": item.setNonUSMil(Integer.parseInt(value)); break;
        case "nonUSCiv": item.setNonUSCiv(Integer.parseInt(value)); break;
        case "nbc": item.setNbc(value); break;
        case "responderID": item.setResponderID(Integer.parseInt(value)); break; 
        case "dispatcherID": item.setDispatcherID(Integer.parseInt(value)); break;
      
        default:  break;
         
      }
    });

    return itemRepo.save(item);
  }
  
  @DeleteMapping("/{id}")
  public void deleteItem(@PathVariable Integer id) {
    itemRepo.deleteById(id);
  }

  @ExceptionHandler(NoSuchElementException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public String itemNotFound() {
    return "Item does not exist.";
  }

  @ExceptionHandler(InvalidRequestException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public String invalidRequest() {
    return "Invalid request.";
  }
}
