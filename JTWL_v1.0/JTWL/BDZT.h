#ifndef _BDZT_H
#define _BDZT_H

 void getIMUData();
 
 long AXV();
 long AYV();
 long AZV();
 
 long GXV();
 long GYV();
 long GZV();
 
 long MXV();
 long MYV();
 long MZV();
 
 
 long PRE();

 
 int gateX();
 int gateY();
 int gateZ();
 
double lonVal();
double latVal();
double HdpVal();
double SeaVal();
double GspVal();
double UttVal();

long SatVal();
long BdcVal();
long UtdVal();

#endif