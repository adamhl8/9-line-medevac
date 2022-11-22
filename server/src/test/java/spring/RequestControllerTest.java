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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

@SpringBootTest
@AutoConfigureMockMvc
public class RequestControllerTest {

    @Autowired
    private MockMvc mvc;

  @Autowired
  private RequestRepo requestRepo;

    Request request1;

    Request request2;

    private ObjectMapper mapper = new ObjectMapper();

    @BeforeEach
    void init() throws Exception {
        request1 = new Request();
        request2 = new Request();
        request1.setStatus("pending");
        request1.setLocation("Austin,Tx");
        request1.setCallSign("CRAAAM6");
        request1.setFrequency(31813.0f);
        request1.setByAmbulatory(2);
        request1.setByLitter(1);
        request1.setSpecialEquipment("Jungle Penetrator");
        request1.setByUrgent(1);
        request1.setByPriority(1);
        request1.setByRoutine(1);
        request1.setSecurity("test");
        request1.setMarking("testtest");
        request1.setUsMil(1);
        request1.setUsCiv(2);
        request1.setNonUSMil(1);
        request1.setNonUSCiv(1);
        request1.setNbc("test");
        request1.setResponderID(1);
        request1.setDispatcherID(2);

        request2.setStatus("pending");
        request2.setLocation("Austin,Tx");
        request2.setCallSign("CRAAAM6");
        request2.setFrequency(31813.0f);
        request2.setByAmbulatory(2);
        request2.setByLitter(1);
        request2.setSpecialEquipment("Jungle Penetrator");
        request2.setByUrgent(1);
        request2.setByPriority(1);
        request2.setByRoutine(1);
        request2.setSecurity("test");
        request2.setMarking("testtest");
        request2.setUsMil(1);
        request2.setUsCiv(2);
        request2.setNonUSMil(1);
        request2.setNonUSCiv(1);
        request2.setNbc("test");
        request2.setResponderID(1);
        request2.setDispatcherID(2);

    }

    @Test
    @Transactional
    @Rollback
    public void getAllRequests() throws Exception {
        MockHttpServletRequestBuilder request = get("/requests");

        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$").isEmpty());

        requestRepo.save(request1);
        requestRepo.save(request2);

        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(request1.getId()))
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

                .andExpect(jsonPath("$[1].id").value(request2.getId()))
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
    public void getRequest() throws Exception {
        this.requestRepo.save(request1);
        MockHttpServletRequestBuilder request = get(String.format("/requests/%d", request1.getId()));
        this.mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(request1.getId()));

        MockHttpServletRequestBuilder request1 = get(String.format("/requests/%d", -1));
        this.mvc.perform(request1)
                .andExpect(status().isNotFound());

    }

    @Test
    @Transactional
    @Rollback
    public void addRequest() throws Exception {
        MockHttpServletRequestBuilder request = post("/requests")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(getJSON("/json/request.json"));

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

        int requestId = mapper.readTree(response).findValue("id").asInt();

        mvc.perform(get(String.format("/requests/%d", requestId)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(requestId))
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
    public void updateRequest() throws Exception {
        MockHttpServletRequestBuilder requestWithInvalidId = patch("/requests/-1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(getJSON("/json/request.json"));
        mvc.perform(requestWithInvalidId)
                .andExpect(status().isNotFound())
                .andExpect(content().string("Request at given id does not exist."));

        this.requestRepo.save(request1);
        String requestPath = String.format("/requests/%d", request1.getId());

        MockHttpServletRequestBuilder request = patch(requestPath)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(getJSON("/json/requestUpdate.json"));

        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(request1.getId()))
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
                .andExpect(jsonPath("$.id").value(request1.getId()))
                .andExpect(jsonPath("$.id").value(request1.getId()))
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
    public void deleteRequest() throws Exception {
        requestRepo.save(request1);
        String requestPath = String.format("/requests/%d", request1.getId());

        mvc.perform(delete(requestPath)).andExpect(status().isOk());

        mvc.perform(get(requestPath))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Request at given id does not exist."));
    }



    private String getJSON(String path) throws Exception {
        URL url = getClass().getResource(path);
        return new String(Files.readAllBytes(Paths.get(url.getFile())));
    }
}
