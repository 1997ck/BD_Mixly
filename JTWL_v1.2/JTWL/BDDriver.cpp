#include"BDDriver.h"
#include "Wire.h"
#include <Arduino.h>




void setServo(int num,int ang){
Wire.beginTransmission(0x25);//对0x25设备进行控制
Wire.write(num);Wire.write(ang); Wire.write(0xFA);   
Wire.endTransmission(); //结束通讯
}


void setMotor(int num,int dir,int en){
Wire.beginTransmission(0x25);//对0x25设备进行控制
Wire.write(num);Wire.write(dir);Wire.write(en);Wire.write(0xFA);   
Wire.endTransmission(); //结束通讯
}