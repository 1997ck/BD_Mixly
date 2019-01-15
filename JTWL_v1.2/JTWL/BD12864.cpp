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
 
char s[10];
String buff = "";//位数变少时清除最后一位残影

buff = (String) kkk + " ";

for(int i = 0;i < 10;i ++){
	if(buff[i] == '.'){
		if((buff[i + 1] == '0') && (buff[i + 2] == '0')){
			buff[i] = ' ';
			buff[i+1] = ' ';
			buff[i+2] = ' ';
		}
	}
    s[i] = buff[i];
}


    
//显示在液晶上
  showStr(z,x,y,s);  
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
























































