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
        Responder responderDTO = responderRepo.findByResponderId(newResponder.getResponderId());
        return responderDTO == null ? responderRepo.save(newResponder) : responderDTO;
        
        // Return existing record if it already exists to prevent creating a new record with the same responderId
        
    }

    @GetMapping("/{id}")
    public Responder getResponderByID(@PathVariable Long id) {
        return responderRepo.findById(id).orElseThrow();
    }

}

