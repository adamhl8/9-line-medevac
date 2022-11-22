package spring;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.PropertyAccessorFactory;
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
@RequestMapping("/requests")
public class RequestController {

  private final RequestRepo requestsRepo;

  public RequestController(RequestRepo requestsRepo) {
    this.requestsRepo = requestsRepo;
  }

  @GetMapping("")
  public List<Request> getAllItems() {
    return requestsRepo.findAll();
  }

  @GetMapping("/{id}")
  public Request getItem(@PathVariable Integer id) {
    return requestsRepo.findById(id).orElseThrow();
  }

  @PostMapping("")
  @ResponseStatus(code = HttpStatus.CREATED)
  public Request createItem(@RequestBody Request request) {
    if(request.getId() != null) request.setId(null);
    return requestsRepo.save(request);
  }

  @PatchMapping("/{id}")
  public Request updateItem(@PathVariable Integer id, @RequestBody Map<String, String> body) throws Exception {
    Request request = requestsRepo.findById(id).orElseThrow();

    BeanWrapper accessor = PropertyAccessorFactory.forBeanPropertyAccess(request);
    Field[] requestsFields = request.getClass().getDeclaredFields();
    for (Field field : requestsFields) {
      String fieldName = field.getName();
      if (body.containsKey(fieldName)) accessor.setPropertyValue(fieldName, body.get(fieldName));
    }

    return requestsRepo.save(request);
  }
  
  @DeleteMapping("/{id}")
  public void deleteRequest(@PathVariable Integer id) {
    requestsRepo.deleteById(id);
  }

  @ExceptionHandler(NoSuchElementException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public String requestNotFound() {
    return "Request at given id does not exist.";
  }

  @ExceptionHandler(InvalidRequestException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public String invalidRequest() {
    return "Invalid request.";
  }
}
