package spring;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

@SpringBootTest
@AutoConfigureMockMvc
public class ItemControllerTest {

  @Autowired
  private MockMvc mvc;

  @Autowired
  private ItemRepo itemRepo;

  Item Item1;

  Item Item2;


  @BeforeEach
  void init() {
    Item1= new Item();
    Item2= new Item();
    Item1.setStatus("pending");
    Item1.setLocation("Austin,Tx");
    Item1.setCallSign("CRAAAM6");
    Item1.setFrequency(31813.0f);
    Item1.setByAmbulatory(2);
    Item1.setByLitter(1);
    Item1.setSpecialEquipment("Jungle Penetrator");
    Item1.setByUrgent(1);
    Item1.setByPriority(1);
    Item1.setByRoutine(1);
    Item1.setSecurity("test");
    Item1.setMarking("testtest");
    Item1.setUsMil(1);
    Item1.setUsCiv(2);
    Item1.setNonUSMil(1);
    Item1.setNonUSCiv(1);
    Item1.setNbc("test");
    Item1.setResponderID(1);
    Item1.setDispatcherID(2);

    Item2.setStatus("pending");
    Item2.setLocation("Austin,Tx");
    Item2.setCallSign("CRAAAM6");
    Item2.setFrequency(31813.0f);
    Item2.setByAmbulatory(2);
    Item2.setByLitter(1);
    Item2.setSpecialEquipment("Jungle Penetrator");
    Item2.setByUrgent(1);
    Item2.setByPriority(1);
    Item2.setByRoutine(1);
    Item2.setSecurity("test");
    Item2.setMarking("testtest");
    Item2.setUsMil(1);
    Item2.setUsCiv(2);
    Item2.setNonUSMil(1);
    Item2.setNonUSCiv(1);
    Item2.setNbc("test");
    Item2.setResponderID(1);
    Item2.setDispatcherID(2);


  @Test
  @Transactional
  @Rollback
  public void postAnItem() throws Exception {
    MockHttpServletRequestBuilder request = post("/items")
            .contentType(MediaType.APPLICATION_JSON)
            .content(getJSON("json/"))
  }
  }

  private String getJSON(String path) throws Exception {
    URL url = this.getClass().getResource(path);
    return new String(Files.readAllBytes(Paths.get(url.getFile())));
  }
}
