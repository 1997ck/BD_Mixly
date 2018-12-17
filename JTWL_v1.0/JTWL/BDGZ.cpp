#include"BDGZ.h"
#include "Wire.h"
#include <Arduino.h>


  long _LUX;
  long _UV;
 
  
  
  
void getRayData(){
  
	//设置局部变量
	  int i = 0;//用于计数的变量
	  unsigned int data[8];//用于缓存数据数据


	//从环境传感器获取8个数据
	  Wire.requestFrom(0X40, 4);   
	  while (Wire.available()) { 
		data[i ++] = Wire.read(); // 缓存
	  }

	//将得到的数据进行运算
	_UV = ((data[0] << 8)| data[1]);
	_LUX = ((data[2] << 8)| data[3]);

}

long UVData(){
	return _UV;
}

long LUXData(){
	return _LUX;
}
