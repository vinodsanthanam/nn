void startFlashing(){
  for (int i=9; i< 14; i++){
    digitalWrite(i, HIGH);
    delay(500);    
  }
}

void stopFlashing(){
  for (int i=9; i< 14; i++){
    digitalWrite(i, LOW);
  }
}

