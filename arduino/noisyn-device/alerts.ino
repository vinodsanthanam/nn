HttpClient client;
String getUrl = "http://noisyn.herokuapp.com/alerts";
const char* updateUrl = "http://noisyn.herokuapp.com/alerts/1";

String getAlertStatus(){
  client.get(getUrl);
  String data;

  while (client.available()) {
    char c = client.read();
    data = data + c;
  } 

  data = "{\"head\":" + data;
  data = data + "}";

  return parseStatus(data);
}

String parseStatus(String data){
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& root = jsonBuffer.parseObject(data);
  String state = root["head"][0]["state"];
  return state;
}

void updateAlert(){
  client.post(updateUrl, "");  
}

void delayInSeconds(int secs){
  delay(secs * 1000);
}

