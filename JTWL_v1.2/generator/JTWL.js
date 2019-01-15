'use strict';

goog.provide('Blockly.Arduino.JTWL');

goog.require('Blockly.Arduino');
goog.require('Blockly.JavaScript');

	<!--初始化，只要使用必须调用-->
	Blockly.Arduino.JT_InitAll = function(){
		Blockly.Arduino.definitions_[''] = '#include"BDlib.h"';
		Blockly.Arduino.setups_[''] = 'initAll();';
		return '';
	}
	<!--单色液晶显示字符-->
	Blockly.Arduino.JT_MonoLcdChar = function() {
		var dropdown_zihao = Blockly.Arduino.valueToCode(this, 'zihao',Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_hang = Blockly.Arduino.valueToCode(this, 'hang', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_lie = Blockly.Arduino.valueToCode(this, 'lie', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_zifu = Blockly.Arduino.valueToCode(this, 'zifu', Blockly.Arduino.ORDER_ATOMIC);
		var code = 'showStr('+dropdown_zihao+','+dropdown_hang+','+dropdown_lie+','+dropdown_zifu+');end();delay(50);\n'
		return code;
	};
	<!--单色液晶显示变量-->
	Blockly.Arduino.JT_MonoLcdVar = function() {
		var dropdown_zihao = Blockly.Arduino.valueToCode(this, 'zihao',Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_hang = Blockly.Arduino.valueToCode(this, 'hang', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_lie = Blockly.Arduino.valueToCode(this, 'lie', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_zifu = Blockly.Arduino.valueToCode(this, 'shuzi', Blockly.Arduino.ORDER_ATOMIC);
		var code = 'showNum('+dropdown_zihao+','+dropdown_hang+','+dropdown_lie+','+dropdown_zifu+');end();delay(50);\n'
		return code;
	};
	<!--舵机-->
	Blockly.Arduino.JT_Servo = function() {
		var dropdown_ServoNum = Blockly.Arduino.valueToCode(this, 'ServoNum',Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_ServoAng = Blockly.Arduino.valueToCode(this, 'ServoAng', Blockly.Arduino.ORDER_ATOMIC);
		var code = 'setServo('+dropdown_ServoNum+','+dropdown_ServoAng+');\n'
		return code;
	};
	<!--电机-->
	Blockly.Arduino.JT_Motor = function() {
		var dropdown_MoTorNum = Blockly.Arduino.valueToCode(this, 'MoTorNum',Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_MotorAng = Blockly.Arduino.valueToCode(this, 'MotorAng', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_MotorFLG = Blockly.Arduino.valueToCode(this, 'MotorFLG', Blockly.Arduino.ORDER_ATOMIC);
		var code = 'setMotor('+dropdown_MoTorNum+','+dropdown_MotorAng+','+dropdown_MotorFLG+');\n'
		return code;
	};
	
	<!--刷新姿态数据-->
	Blockly.Arduino.JT_ReAcc = function() {
		var code = 'getIMUData();\n';
		return code;
	};	
	
	<!--加速度-->
	Blockly.Arduino.JT_Acc = function() {
		var JTWL_ACC = this.getFieldValue('JTWL_ACC');
		var code = 'A'+JTWL_ACC+'V()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	
	<!--加速度方向-->
	Blockly.Arduino.JT_AccDirection = function() {
		var JTWL_ACD = this.getFieldValue('JTWL_ACD');
		var code = 'gate'+JTWL_ACD+'()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--角速度-->
	Blockly.Arduino.JT_Angular = function() {
		var JTWL_ANG = this.getFieldValue('JTWL_ANG');
		var code = 'G'+JTWL_ANG+'V()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--磁场-->
	Blockly.Arduino.JT_Magnetic = function() {
		var JTWL_MAG = this.getFieldValue('JTWL_MAG');
		var code = 'M'+JTWL_MAG+'V()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--气压-->
	Blockly.Arduino.JT_Pressure = function() {
		var code = 'PRE()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--经纬度-->
	Blockly.Arduino.JT_Coordinate1 = function() {
		var code = 'LonVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_Coordinate2 = function() {
		var code = 'LatVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--定位精度-->
	Blockly.Arduino.JT_PossAcc1 = function() {
		var code = 'hdopVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_PossAcc2 = function() {
		var code = 'bdSatVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_PossAcc3 = function() {
		var code = 'satVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_PossAcc4 = function() {
		var code = 'seaHVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_PossAcc5 = function() {
		var code = 'GSPDVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_PossAcc6 = function() {
		var code = 'timeVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_PossAcc7 = function() {
		var code = 'dataVal()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--更新环境数据-->
	Blockly.Arduino.JT_Environ = function() {
		var code = 'getEnvData();\n';
		return code;
	};	
	<!--环境数据-->
	Blockly.Arduino.JT_Environ1 = function() {
		var code = 'tempData()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_Environ2 = function() {
		var code = 'humiData()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_Environ3 = function() {
		var code = 'CH20Data()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	Blockly.Arduino.JT_Environ4 = function() {
		var code = 'PM25Data()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--更新光照数据-->
	Blockly.Arduino.JT_Light = function() {
		var code = 'getRayData();\n';
		return code;
	};	
	
	Blockly.Arduino.JT_Light2 = function() {
		var code = 'LUXData()';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
	<!--学习红外编码-->  
	Blockly.Arduino.JT_Infrared = function() {
		var dropdown_InfraredNum = Blockly.Arduino.valueToCode(this, 'InfraredNum',Blockly.Arduino.ORDER_ATOMIC);
		var code = 'learnIR('+dropdown_InfraredNum+');\n'
		return code;
	};
	<!--发送红外编码-->  
	Blockly.Arduino.JT_SendInfrared = function() {
		var dropdown_SendInfraredNum = Blockly.Arduino.valueToCode(this, 'SendInfraredNum',Blockly.Arduino.ORDER_ATOMIC);
		var code = 'actIR('+dropdown_SendInfraredNum+');\n';
		return code;
	};
	<!--彩色液晶屏-->  
	Blockly.Arduino.JT_ColorLcd = function() {
		var dropdown_ColorLcdNum = Blockly.Arduino.valueToCode(this, 'ColorLcdNum',Blockly.Arduino.ORDER_ATOMIC);
		var code = 'goToPage('+dropdown_ColorLcdNum+');\n';
		return code;
	};
	Blockly.Arduino.JT_ColorLcd1 = function() {
		var dropdown_ColorLcd1Num = Blockly.Arduino.valueToCode(this, 'ColorLcd1Num',Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_ColorLcd2Num = Blockly.Arduino.valueToCode(this, 'ColorLcd2Num',Blockly.Arduino.ORDER_ATOMIC);
		var code = 'drawLine('+'\''+dropdown_ColorLcd1Num+'\''+','+dropdown_ColorLcd2Num+');\n';
		return code;
	};
	<!--数传-->  
	Blockly.Arduino.JT_DataTrans1 = function() {
		var dropdown_DataTransNum1 = Blockly.Arduino.valueToCode(this, 'DataTransNum1', Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.setups_['setup_DataTransNum1'] = 'Serial2.begin(115200);\n';
		var code = 'Serial2.print('+dropdown_DataTransNum1+');\n'
		return code;
	};
	Blockly.Arduino.JT_DataTrans2 = function() {
		var dropdown_DataTransNum2 = Blockly.Arduino.valueToCode(this, 'DataTransNum2', Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.setups_['setup_DataTransNum2'] = 'Serial1.begin(115200); \n';
		var code = 'SerZigbee.write('+dropdown_DataTransNum2+');\n'
		return code;
	};
	Blockly.Arduino.JT_DataTrans3 = function() {
		var dropdown_DataCentre = Blockly.Arduino.valueToCode(this, 'DataCentre', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_PhoneNumber = Blockly.Arduino.valueToCode(this, 'PhoneNumber', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_DataContent = Blockly.Arduino.valueToCode(this, 'DataContent', Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.setups_['setup_DataTransNum3'] = 'Serial3.begin(115200);\n';
		var code = 'SendMsgChar('+dropdown_DataCentre+','+dropdown_PhoneNumber+','+dropdown_DataContent+');\n'
		return code;
	};
	Blockly.Arduino.JT_DataTrans4 = function() {
		var dropdown_DataCentre = Blockly.Arduino.valueToCode(this, 'DataCentre', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_PhoneNumber = Blockly.Arduino.valueToCode(this, 'PhoneNumber', Blockly.Arduino.ORDER_ATOMIC);
		var dropdown_DataContent = Blockly.Arduino.valueToCode(this, 'DataContent', Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.setups_['setup_DataTransNum3'] = 'Serial3.begin(115200);\n';
		var code = 'SendMsgNum('+dropdown_DataCentre+','+dropdown_PhoneNumber+','+dropdown_DataContent+');\n'
		return code;
	};













