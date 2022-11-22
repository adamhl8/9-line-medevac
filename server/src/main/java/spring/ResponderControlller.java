package spring;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/responders")
public class ResponderControlller {

    private final ResponderRepo responderRepo;

    public ResponderControlller(ResponderRepo responderRepo) {
        this.responderRepo = responderRepo;
    }
    
    @GetMapping("")
    public Iterable<Responder> getAll() {
        return this.responderRepo.findAll();
    }

    @PostMapping("")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Responder createResponder(@RequestBody Responder newResponder) {
        return responderRepo.save(newResponder);
    }

    @GetMapping("/{id}")
    public Responder getResponderByID(@PathVariable Long id) {
        return responderRepo.findById(id).orElseThrow();
    }

}

