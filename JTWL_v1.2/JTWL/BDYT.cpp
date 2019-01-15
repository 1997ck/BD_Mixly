#include"BDYT.h"
#include <Wire.h>
#include <Arduino.h>

#define YTAddress 0X50 

void YD_Servo(unsigned char add,unsigned char dat)
{
	Wire.beginTransmission(YTAddress);//对lcdAddress设备进行控制
	Wire.write(0xfe);   
	Wire.write(add);   
	Wire.write(dat);      
	Wire.write(0xfe);  
	Wire.endTransmission(); //结束通讯
	
}
 
