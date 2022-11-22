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

    private ObjectMapper mapper = new ObjectMapper();

    @BeforeEach
    void init() throws Exception {
        Item1 = new Item();
        Item2 = new Item();
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

    }

    @Test
    @Transactional
    @Rollback
    public void getAllItems() throws Exception {
        MockHttpServletRequestBuilder request = get("/items");

        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$").isEmpty());

        itemRepo.save(Item1);
        itemRepo.save(Item2);

        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(Item1.getId()))
                .andExpect(jsonPath("$[0].status").value("pending"))
                .andExpect(jsonPath("$[0].location").value("Austin,Tx"))
                .andExpect(jsonPath("$[0].callSign").value("CRAAAM6"))
                .andExpect(jsonPath("$[0].frequency").value(31813.0f))
                .andExpect(jsonPath("$[0].byAmbulatory").value(2))
                .andExpect(jsonPath("$[0].byLitter").value(1))
                .andExpect(jsonPath("$[0].specialEquipment").value("Jungle Penetrator"))
                .andExpect(jsonPath("$[0].byUrgent").value(1))
                .andExpect(jsonPath("$[0].byPriority").value(1))
                .andExpect(jsonPath("$[0].byRoutine").value(1))
                .andExpect(jsonPath("$[0].security").value("test"))
                .andExpect(jsonPath("$[0].marking").value("testtest"))
                .andExpect(jsonPath("$[0].usMil").value(1))
                .andExpect(jsonPath("$[0].usCiv").value(2))
                .andExpect(jsonPath("$[0].nonUSMil").value(1))
                .andExpect(jsonPath("$[0].nonUSCiv").value(1))
                .andExpect(jsonPath("$[0].nbc").value("test"))
                .andExpect(jsonPath("$[0].responderID").value(1))
                .andExpect(jsonPath("$[0].dispatcherID").value(2))

                .andExpect(jsonPath("$[1].id").value(Item2.getId()))
                .andExpect(jsonPath("$[1].status").value("pending"))
                .andExpect(jsonPath("$[1].location").value("Austin,Tx"))
                .andExpect(jsonPath("$[1].callSign").value("CRAAAM6"))
                .andExpect(jsonPath("$[1].frequency").value(31813.0f))
                .andExpect(jsonPath("$[1].byAmbulatory").value(2))
                .andExpect(jsonPath("$[1].byLitter").value(1))
                .andExpect(jsonPath("$[1].specialEquipment").value("Jungle Penetrator"))
                .andExpect(jsonPath("$[1].byUrgent").value(1))
                .andExpect(jsonPath("$[1].byPriority").value(1))
                .andExpect(jsonPath("$[1].byRoutine").value(1))
                .andExpect(jsonPath("$[1].security").value("test"))
                .andExpect(jsonPath("$[1].marking").value("testtest"))
                .andExpect(jsonPath("$[1].usMil").value(1))
                .andExpect(jsonPath("$[1].usCiv").value(2))
                .andExpect(jsonPath("$[1].nonUSMil").value(1))
                .andExpect(jsonPath("$[1].nonUSCiv").value(1))
                .andExpect(jsonPath("$[1].nbc").value("test"))
                .andExpect(jsonPath("$[1].responderID").value(1))
                .andExpect(jsonPath("$[1].dispatcherID").value(2));
    }

    @Test
    @Transactional
    @Rollback
    public void getAnItems() throws Exception {
        this.itemRepo.save(Item1);
        MockHttpServletRequestBuilder request = get(String.format("/items/%d", Item1.getId()));
        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(Item1.getId()));

        MockHttpServletRequestBuilder request1 = get(String.format("/item/%d", -1));
        this.mvc.perform(request1)
                .andExpect(status().isNotFound());

    }

    @Test
    @Transactional
    @Rollback
    public void postAnItems() throws Exception {
        MockHttpServletRequestBuilder request = post("/items")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(getJSON("/json/item.json"));

        String response = mvc.perform(request)
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").isNumber())
                .andExpect(jsonPath("$.status").value("complete"))
                .andExpect(jsonPath("$.location").value("Dallas,Tx"))
                .andExpect(jsonPath("$.callSign").value("CRAAAM5"))
                .andExpect(jsonPath("$.frequency").value(10745.0))
                .andExpect(jsonPath("$.byAmbulatory").value(1))
                .andExpect(jsonPath("$.byLitter").value(2))
                .andExpect(jsonPath("$.specialEquipment").value("Hoist"))
                .andExpect(jsonPath("$.byUrgent").value(2))
                .andExpect(jsonPath("$.byPriority").value(2))
                .andExpect(jsonPath("$.byRoutine").value(2))
                .andExpect(jsonPath("$.security").value("testtest"))
                .andExpect(jsonPath("$.marking").value("test"))
                .andExpect(jsonPath("$.usMil").value(2))
                .andExpect(jsonPath("$.usCiv").value(1))
                .andExpect(jsonPath("$.nonUSMil").value(2))
                .andExpect(jsonPath("$.nonUSCiv").value(2))
                .andExpect(jsonPath("$.nbc").value("testtest"))
                .andExpect(jsonPath("$.responderID").value(2))
                .andExpect(jsonPath("$.dispatcherID").value(1))
                .andReturn().getResponse().getContentAsString();

        int itemId = mapper.readTree(response).findValue("id").asInt();

        mvc.perform(get(String.format("/items/%d", itemId)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(itemId))
                .andExpect(jsonPath("$.status").value("complete"))
                .andExpect(jsonPath("$.location").value("Dallas,Tx"))
                .andExpect(jsonPath("$.callSign").value("CRAAAM5"))
                .andExpect(jsonPath("$.frequency").value(10745.0))
                .andExpect(jsonPath("$.byAmbulatory").value(1))
                .andExpect(jsonPath("$.byLitter").value(2))
                .andExpect(jsonPath("$.specialEquipment").value("Hoist"))
                .andExpect(jsonPath("$.byUrgent").value(2))
                .andExpect(jsonPath("$.byPriority").value(2))
                .andExpect(jsonPath("$.byRoutine").value(2))
                .andExpect(jsonPath("$.security").value("testtest"))
                .andExpect(jsonPath("$.marking").value("test"))
                .andExpect(jsonPath("$.usMil").value(2))
                .andExpect(jsonPath("$.usCiv").value(1))
                .andExpect(jsonPath("$.nonUSMil").value(2))
                .andExpect(jsonPath("$.nonUSCiv").value(2))
                .andExpect(jsonPath("$.nbc").value("testtest"))
                .andExpect(jsonPath("$.responderID").value(2))
                .andExpect(jsonPath("$.dispatcherID").value(1));

    }

    @Test
    @Transactional
    @Rollback
    public void updateAnItems() throws Exception {
        MockHttpServletRequestBuilder requestWithInvalidId = patch("/items/-1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(getJSON("/json/item.json"));
        mvc.perform(requestWithInvalidId)
                .andExpect(status().isNotFound())
                .andExpect(content().string("Item at given id does not exist."));

        this.itemRepo.save(Item1);
        String requestPath = String.format("/items/%d", Item1.getId());

        MockHttpServletRequestBuilder request = patch(requestPath)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(getJSON("/json/itemUpdate.json"));

        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(Item1.getId()))
                .andExpect(jsonPath("$.status").value("complete"))
                .andExpect(jsonPath("$.location").value("Austin,Tx"))
                .andExpect(jsonPath("$.callSign").value("CRAAAM5"))
                .andExpect(jsonPath("$.frequency").value(10755.0))
                .andExpect(jsonPath("$.byAmbulatory").value(1))
                .andExpect(jsonPath("$.byLitter").value(2))
                .andExpect(jsonPath("$.specialEquipment").value("Hoist"))
                .andExpect(jsonPath("$.byUrgent").value(1))
                .andExpect(jsonPath("$.byPriority").value(2))
                .andExpect(jsonPath("$.byRoutine").value(2))
                .andExpect(jsonPath("$.security").value("testtest"))
                .andExpect(jsonPath("$.marking").value("test"))
                .andExpect(jsonPath("$.usMil").value(2))
                .andExpect(jsonPath("$.usCiv").value(1))
                .andExpect(jsonPath("$.nonUSMil").value(5))
                .andExpect(jsonPath("$.nonUSCiv").value(5))
                .andExpect(jsonPath("$.nbc").value("testtest"))
                .andExpect(jsonPath("$.responderID").value(1))
                .andExpect(jsonPath("$.dispatcherID").value(1));

        mvc.perform(get(requestPath))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(Item1.getId()))
                .andExpect(jsonPath("$.id").value(Item1.getId()))
                .andExpect(jsonPath("$.status").value("complete"))
                .andExpect(jsonPath("$.location").value("Austin,Tx"))
                .andExpect(jsonPath("$.callSign").value("CRAAAM5"))
                .andExpect(jsonPath("$.frequency").value(10755.0))
                .andExpect(jsonPath("$.byAmbulatory").value(1))
                .andExpect(jsonPath("$.byLitter").value(2))
                .andExpect(jsonPath("$.specialEquipment").value("Hoist"))
                .andExpect(jsonPath("$.byUrgent").value(1))
                .andExpect(jsonPath("$.byPriority").value(2))
                .andExpect(jsonPath("$.byRoutine").value(2))
                .andExpect(jsonPath("$.security").value("testtest"))
                .andExpect(jsonPath("$.marking").value("test"))
                .andExpect(jsonPath("$.usMil").value(2))
                .andExpect(jsonPath("$.usCiv").value(1))
                .andExpect(jsonPath("$.nonUSMil").value(5))
                .andExpect(jsonPath("$.nonUSCiv").value(5))
                .andExpect(jsonPath("$.nbc").value("testtest"))
                .andExpect(jsonPath("$.responderID").value(1))
                .andExpect(jsonPath("$.dispatcherID").value(1));

    }

    @Test
    @Transactional
    @Rollback
    public void deleteAnItems() throws Exception {
        itemRepo.save(Item1);
        String requestPath = String.format("/items/%d", Item1.getId());

        mvc.perform(delete(requestPath)).andExpect(status().isOk());

        mvc.perform(get(requestPath))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Item at given id does not exist."));
    }



    private String getJSON(String path) throws Exception {
        URL url = getClass().getResource(path);
        return new String(Files.readAllBytes(Paths.get(url.getFile())));
    }
}
