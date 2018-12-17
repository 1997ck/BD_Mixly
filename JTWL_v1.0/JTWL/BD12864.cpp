#include"BD12864.h"
#include <Wire.h>
#include <Arduino.h>


#define lcdAddress 0x45 



void clear12864Screen(){
  
for(int i = 1; i < 9; i ++){
showStr(1,1,i,"                     "); 
end();
delay(100);
}
end();
  }

void showNum(int z,int x,int y,double kkk){
long buff = kkk*1000;
static char numChar[9];

if(buff < 0)
  numChar[0] ='-';
else
  numChar[0] =' '; 
numChar[8] = (char)(buff % 10 + 48);
numChar[7] = (char)(buff / 10 % 10 + 48);
numChar[6] = (char)(buff / 100 % 10 + 48);
numChar[5] = '.';
numChar[4] = (char)(buff / 1000 % 10 + 48);
numChar[3] = (char)(buff / 10000 % 10 + 48);
numChar[2] = (char)(buff / 100000 % 10 + 48);
numChar[1] = (char)(buff / 1000000 % 10 + 48);
showStr(z,x,y,numChar);  
}

void showStr(int z,int x,int y,char *str){
   int sci = 0;

Wire.beginTransmission(lcdAddress);//对lcdAddress设备进行控制

Wire.write(z);  
Wire.write(x);   
Wire.write(y);   
Wire.endTransmission(); //结束通讯
  if(strlen(str) < 32){
    Wire.beginTransmission(lcdAddress);//对lcdAddress设备进行控制
    for(sci = 0;sci < strlen(str);sci ++){     
      Wire.write(str[sci]);    //发出学习指令       
    }
     Wire.endTransmission(); //结束通讯
  }
   else if(strlen(str) < 64){
      Wire.beginTransmission(lcdAddress);//对lcdAddress设备进行控制
      for(sci = 0;sci < 32;sci ++){
       Wire.write(str[sci]);    //发出学习指令      
      }
       Wire.endTransmission(); //结束通讯
     Wire.beginTransmission(lcdAddress);//对lcdAddress设备进行控制
      for(sci = 32;sci < 64;sci ++){
       Wire.write(str[sci]);    //发出学习指令 
      }
       Wire.endTransmission(); //结束通讯
    }

}

void end(){
    Wire.beginTransmission(lcdAddress);//对lcdAddress设备进行控制  
      Wire.write("\n");    //发出结束指令 
     Wire.endTransmission(); //结束通讯
}
























































