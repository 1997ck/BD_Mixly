#include"BDLCD.h"
#include "BD12864.h"//控制0x45单色液晶
#include <Wire.h>
#include <Arduino.h>


void goToPage(int a){

 sendStart();
 send2YJ("page page");
 send1Da(a);
 sendEnd();
 }
 
 
 
 void drawLine(char a1,unsigned int data){
sendStart();

switch(a1){
case 'B':send2YJ("add 1,0,");break;
case 'Y':send2YJ("add 1,1,");break;
case 'R':send2YJ("add 1,2,");break;
case 'G':send2YJ("add 1,3,");break;
default:break;
} 
send3Da(data);
sendEnd();
 }
 


void send1Da(unsigned char da1){
static char numChar1[1];

numChar1[0] = (char)(da1 % 10 + 48);
send2YJ(numChar1);
}
void send3Da(unsigned char da){
static char numChar[3];

numChar[2] = (char)(da % 10 + 48);
numChar[1] = (char)(da / 10 % 10 + 48);
numChar[0] = (char)(da / 100 % 10 + 48);
send2YJ(numChar);
}











void sendEnd(){

    Wire.beginTransmission(0x35);//对0x35设备进行控制
      Wire.write(0xff);    //发出学习指令 
      Wire.write(0xff);    //发出学习指令 
      Wire.write(0xff);    //发出学习指令 
     Wire.endTransmission(); //结束通讯
  }

void sendStart(){
delay(10);  
sendEnd();
delay(10); 
}

void send2YJ(char *str){
   int sci = 0;
  if(strlen(str) < 32){
    Wire.beginTransmission(0x35);//对0x35设备进行控制
    for(sci = 0;sci < strlen(str);sci ++){     
      Wire.write(str[sci]);    //发出学习指令 
    }
     Wire.endTransmission(); //结束通讯
  }
   else if(strlen(str) < 64){
      Wire.beginTransmission(0x35);//对0x35设备进行控制
      for(sci = 0;sci < 32;sci ++){
       Wire.write(str[sci]);    //发出学习指令 
      }
       Wire.endTransmission(); //结束通讯
     Wire.beginTransmission(0x35);//对0x35设备进行控制
      for(sci = 32;sci < 64;sci ++){
       Wire.write(str[sci]);    //发出学习指令 
      }
       Wire.endTransmission(); //结束通讯
    }
}