#include"BDSC.h"
#include <Arduino.h>

#define GSMs Serial1
void SendMsgChar(char *CentreNum,char * PhoneNum,char *str)
{
  Serial.begin(115200);
  GSMs.begin(9600);
  delay(10000);
  Serial.print((char)26);
  delay(1000);
  
  GSMs.println("at+cmgf=1");
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  
  GSMs.print("at+csca=\"");
  GSMs.print(CentreNum);//+8613800535500
  GSMs.println("\"");
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  
  GSMs.println("at+cmgf=1");
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  GSMs.print("AT+CMGS=\"");
  GSMs.print(PhoneNum);
  GSMs.println("\"");
  
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  
  GSMs.print(str);
  delay(3000);
  
  
  
  
  GSMs.print((char)26);
  GSMs.println();
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
}
void SendMsgNum(char *CentreNum,char * PhoneNum,int str)
{
  Serial.begin(115200);
  GSMs.begin(9600);
  delay(10000);
  Serial.print((char)26);
  delay(1000);
  
  GSMs.println("at+cmgf=1");
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  
  GSMs.print("at+csca=\"");
  GSMs.print(CentreNum);//+8613800535500
  GSMs.println("\"");
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  
  GSMs.println("at+cmgf=1");
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  GSMs.print("AT+CMGS=\"");
  GSMs.print(PhoneNum);
  GSMs.println("\"");
  
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
  
  GSMs.print(str);
  delay(3000);
  
  
  
  
  GSMs.print((char)26);
  GSMs.println();
  delay(500);
  while(GSMs.available())
  Serial.print((char)GSMs.read());
}



















