#include"BDHJ.h"
#include "Wire.h"
#include <Arduino.h>


  float _temp;//温度 ℃
  float _humi;//湿度 %
  float _CH2O;//甲醛 mg/m3
  long _PM25; //PM2.5 mg/m3
  
  
  
void getEnvData(){
  
	//设置局部变量
	  int i = 0;//用于计数的变量
	  unsigned int data[8];//用于缓存数据数据


	//从环境传感器获取8个数据
	  Wire.requestFrom(0X20, 8);   
	  while (Wire.available()) { 
		data[i ++] = Wire.read(); // 缓存
	  }

	//将得到的数据进行运算
	_temp = ((data[0] << 8)| data[1])*0.1;
	_humi = ((data[2] << 8)| data[3])*0.1;
	_PM25 = ((data[4] << 8)| data[5]);
	_CH2O = ((data[6] << 8)| data[7])*0.001;
}

float tempData(){
	return _temp;
}

float humiData(){
	return _humi;
}

float CH20Data(){
	return _CH2O;
}

long PM25Data(){
	return _PM25;
}
  
  
  
  
  
  
  
  