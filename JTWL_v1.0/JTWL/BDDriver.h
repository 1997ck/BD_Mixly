#ifndef _BDDRIVER_H
#define _BDDRIVER_H

//IIC
#include "Wire.h"

void setServo(int num,int ang);
void setMotor(int num,int dir,int en);

#endif