#include"BDIR.h"
#include <Wire.h>
#include <Arduino.h>


#define ZTAddress 0X30  

void learnIR(int a){
  Wire.beginTransmission(0x30);//对0x30设备进行控制
  Wire.write("Learn");    //发出学习指令
  Wire.write(a);          //将学习指令命名为a号指令
  Wire.endTransmission(); //结束通讯
}
void actIR(int a){
  Wire.beginTransmission(0x30);//对0x30设备进行控制
  Wire.write("Learn");    //发出学习指令
  Wire.write(a);          //将学习指令命名为a号指令
  Wire.endTransmission(); //结束通讯
}