package spring;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "items")
public class Item {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String location;
  private String callSign;
  private float frequency;
  private int byAmbulatory;
  private int byLitter;
  private String specialEquipment;
  private int byUrgent;
  private int byPriority;
  private int byRoutine;
  private String security;
  private String marking;
  private int usMil;
  private int usCiv;
  private int nonUSMil;
  private int nonUSCiv;
  private String nbc;
  private int responderID;
  private int dispatcherID;

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public String getCallSign() {
    return callSign;
  }

  public void setCallSign(String callSign) {
    this.callSign = callSign;
  }

  public float getFrequency() {
    return frequency;
  }

  public void setFrequency(float frequency) {
    this.frequency = frequency;
  }

  public int getByAmbulatory() {
    return byAmbulatory;
  }

  public void setByAmbulatory(int byAmbulatory) {
    this.byAmbulatory = byAmbulatory;
  }

  public int getByLitter() {
    return byLitter;
  }

  public void setByLitter(int byLitter) {
    this.byLitter = byLitter;
  }

  public String getSpecialEquipment() {
    return specialEquipment;
  }

  public void setSpecialEquipment(String specialEquipment) {
    this.specialEquipment = specialEquipment;
  }

  public int getByUrgent() {
    return byUrgent;
  }

  public void setByUrgent(int byUrgent) {
    this.byUrgent = byUrgent;
  }

  public int getByPriority() {
    return byPriority;
  }

  public void setByPriority(int byPriority) {
    this.byPriority = byPriority;
  }

  public int getByRoutine() {
    return byRoutine;
  }

  public void setByRoutine(int byRoutine) {
    this.byRoutine = byRoutine;
  }

  public String getSecurity() {
    return security;
  }

  public void setSecurity(String security) {
    this.security = security;
  }

  public String getMarking() {
    return marking;
  }

  public void setMarking(String marking) {
    this.marking = marking;
  }

  public int getUsMil() {
    return usMil;
  }

  public void setUsMil(int usMil) {
    this.usMil = usMil;
  }

  public int getUsCiv() {
    return usCiv;
  }

  public void setUsCiv(int usCiv) {
    this.usCiv = usCiv;
  }

  public int getNonUSMil() {
    return nonUSMil;
  }

  public void setNonUSMil(int nonUSMil) {
    this.nonUSMil = nonUSMil;
  }

  public int getNonUSCiv() {
    return nonUSCiv;
  }

  public void setNonUSCiv(int nonUSCiv) {
    this.nonUSCiv = nonUSCiv;
  }

  public String getNbc() {
    return nbc;
  }

  public void setNbc(String nbc) {
    this.nbc = nbc;
  }

  public int getResponderID() {
    return responderID;
  }

  public void setResponderID(int responderID) {
    this.responderID = responderID;
  }

  public int getDispatcherID() {
    return dispatcherID;
  }

  public void setDispatcherID(int dispatcherID) {
    this.dispatcherID = dispatcherID;
  }

  public Item() {}

  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
}
