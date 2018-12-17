#include"BDZT.h"
#include <Wire.h>
#include <Arduino.h>


#define ZTAddress 0X10  


long _AX,_AY,_AZ,_GX,_GY,_GZ,_MX,_MY,_MZ,_PRE;

double _LAT,_LON,_HDP,_SEA,_GSP,_UTT;
long _SAT,_BDC,_UTD;





long dirAcc(long a){
  if(a > 17000)
  a =  -(65536 - a);

  
  if(a < -17000)
   a = -(65536 + a) ;

  return a;
  }




 void getIMUData(){
  int i = 0;//用于计数的变量
  unsigned int data[46];//用于缓存数据数据
 
	 
	 
  Wire.requestFrom(0X10, 46);   
  while (Wire.available()) { 
    data[i ++] = Wire.read(); // 缓存
  }
  

    switch(data[21])
    {
        case 0:      
                  _LAT  = data[22] * 100 + data[23] + (double)data[24] / 100 + (double)data[25] / 10000;
                  _LON  = (double)data[26] * 1000 + data[27] * 10 + (double)data[28] / 10 + (double)data[29] / 1000;
                  _SAT  = data[30];
                  break;
        case 1:   
                  _HDP  = data[22] * 10 + (double)data[23] / 10;
                  _BDC  = data[24];
                  _SEA  = (double)data[25] * 1000 + data[26] * 10 + (double)data[27] / 10;
                  _GSP  = data[28] * 10 + (double)data[29] / 10;
                  break;
        case 2:      
                  _UTT  =  (double)data[22] * 10000 + data[23] * 100 + data[24] + (double)data[25] / 100;
                  _UTD  =  (double)data[26] * 10000 + data[27] * 100 + data[28]; 
                  break;  
    }

//将得到的数据进行运算
_AX = ((data[0] << 8)| data[1]);
_AY = ((data[2] << 8)| data[3]);
_AZ = ((data[4] << 8)| data[5]);
_AX = dirAcc(_AX);
_AY = dirAcc(_AY);
_AZ = dirAcc(_AZ);






_GX = ((data[6] << 8)| data[7]);
_GY = ((data[8] << 8)| data[9]);
_GZ = ((data[10] << 8)| data[11]);

_MX = ((data[12] << 8)| data[13]);
_MY = ((data[14] << 8)| data[15]);
_MZ = ((data[16] << 8)| data[17]);

_PRE = ((data[18] << 8)| data[19]);
_PRE += (65536 - 16384 - 4096);


}




int gateZ(){
	int a = 0;
	
	if(_AZ > 14000)//竖直向下
		a = 1;
	else  if(_AZ < -14000)
		a = -1;//竖直向上

	else a = 0;

	return a;
}


int gateX(){
	int a = 0;

	if(_AX > 13000)//竖直向下
		a = 1;
		
	else  if(_AX < -13000)
		a = -1;//竖直向上
    
	else a = 0;

return a;
}

int gateY(){
	int a = 0;
	if(_AY > 14000)//竖直向下
		a = 1;
	else  if(_AY < -14000)
		a = -1;//竖直向上
	
	else a = 0;

	return a;
}










long AXV(){
	return _AX;	
}

long AYV(){
	return _AY;	
}

long AZV(){
	return _AZ;	
}

long GXV(){
	return _GX;	
}

long GYV(){
	return _GY;	
}

long GZV(){
	return _GZ;	
}

long MXV(){
	return _MX;	
}

long MYV(){
	return _MY;	
}

long MZV(){
	return _MZ;	
}


long PREV(){
	return _PRE;	
}
/*****************     GPS数据    ****************************/
double lonVal()
{
	return _LON;
}
double latVal()
{
	return _LAT;
}
double HdpVal()
{
	return _HDP;
}	
double SeaVal()
{
	return _SEA;
}
double GspVal()
{
	return _GSP;
}
double UttVal()
{
	return _UTT;
}


long SatVal(){
	return _SAT;	
}
long BdcVal(){
	return _BDC;	
}
long UtdVal(){
	return _UTD;	
}














































