#include <Process.h>
#include <Console.h>
#include <WiFi.h>
#include <HttpClient.h>
#include <ArduinoJson.h>

int numFlashes;

void setup() {
  delayInSeconds(3);
  Bridge.begin();
  Console.begin(); 
  setupPins();
  delayInSeconds(2);
}

void setupPins() {
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(8, OUTPUT);  
}

void loop() {
  String state = getAlertStatus();
  Console.print("Current status: ");
  Console.println(state);
  if (state == "true"){
    startFlashing();
    buzz();
    manageAlerts();
  }
  else {
    stopFlashing();
  }
  delayInSeconds(5);
}

void manageAlerts(){
  if (numFlashes == 3) {
    updateAlert();
    numFlashes = 0;  
  }
  else {
    numFlashes = numFlashes + 1;
  }
}

