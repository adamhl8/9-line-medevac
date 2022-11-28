package spring;

import org.springframework.data.repository.CrudRepository;

public interface ResponderRepo extends CrudRepository<Responder, Long>{
    public Responder findByResponderId(int responderId);
}
