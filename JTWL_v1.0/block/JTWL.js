'use strict';
goog.provide('Blockly.Blocks.JTWL');
goog.require('Blockly.Blocks');  
 
var JTWLColorIni  = '#FF66B6';  
var JTWLColorLcd  = '#00ABCD';
var JTWLColorSer  = '#FFCC66'; 
var JTWLColorAcc  = '#DB8CCD';
var JTWLColorEnv  = '#A020F0';
var JTWLColorLig  = '#A3CE47';
var JTWLColorDat  = '#47C5CA';
var JTWLColorInf  = '#51acff';



var JTWLColor = '#00ABCD';
// 未使用色彩
//# ED157A - FF66B6 - DB8CCD - EC6E68 - A3CE47
//# E5B646 - FFCC66 - 51acff - EC6E68 - 47C5CA

  <!--初始化，只要使用必须调用-->
  Blockly.Blocks.JT_InitAll = {
    init: function() {
      this.setColour('#FF0000');
      this.appendDummyInput("")
          .appendField(Blockly.JT_Int)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zhukong.png", 52, 32))
		  
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };
  <!--单色液晶显示字符-->
  Blockly.Blocks.JT_MonoLcdChar = {
    init: function() {
      this.setColour(JTWLColorLcd);
      this.appendDummyInput("")
          .appendField(Blockly.JT_MLC)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/yejing.png", 52, 32))
      this.appendValueInput("zihao", Number)
          .appendField('字号')
          .setCheck(Number);
      this.appendValueInput("hang")
          .appendField('行')
          .setCheck([Number,Boolean]);
	  this.appendValueInput("lie")
          .appendField('列')
          .setCheck([Number,Boolean]);
      this.appendValueInput("zifu", String)
          .setCheck([String])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("字符");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };
  <!--单色液晶显示数字-->
  Blockly.Blocks.JT_MonoLcdVar = {
    init: function() {
      this.setColour(JTWLColorLcd);
      this.appendDummyInput("")
          .appendField(Blockly.JT_MLV)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/yejing.png", 52, 32))
      this.appendValueInput("zihao", Number)
          .appendField('字号')
          .setCheck(Number);
      this.appendValueInput("hang")
          .appendField('行')
          .setCheck([Number,Boolean]);
	  this.appendValueInput("lie")
          .appendField('列')
          .setCheck([Number,Boolean]);
	  this.appendValueInput("shuzi")
          .appendField('数字')
          .setCheck([Number,Boolean]);

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };
  <!--舵机-->
  Blockly.Blocks.JT_Servo = {
    init: function() {
      this.setColour(JTWLColorSer);
      this.appendDummyInput("")
          .appendField(Blockly.JT_SER)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/qudong.png", 52, 32))
      this.appendValueInput("ServoNum", Number)
          .appendField('编号')
          .setCheck(Number);
      this.appendValueInput("ServoAng")
          .appendField('角度')
          .setCheck([Number,Boolean]);

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };
  Blockly.Blocks.JT_Motor = {
    init: function() {
      this.setColour(JTWLColorSer);
      this.appendDummyInput("")
          .appendField(Blockly.JT_MTO)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/qudong.png", 52, 32))
      this.appendValueInput("MoTorNum", Number)
          .appendField('编号')
          .setCheck(Number);
      this.appendValueInput("MotorAng")
          .appendField('方向')
          .setCheck([Number,Boolean]);
	  this.appendValueInput("MotorFLG")
          .appendField('方向')
          .setCheck([Number,Boolean]);

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };
  <!--刷新姿态数据-->
  Blockly.Blocks.JT_Acc = {
    init: function() {
      this.setColour('#FF0000');
      this.appendDummyInput("")
            .appendField(Blockly.JT_ACC)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };  
  <!--加速度-->
  Blockly.Blocks.JT_Acc1 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ACC1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_Acc2 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ACC2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  }; 
  Blockly.Blocks.JT_Acc3 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ACC3)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  <!--加速度方向-->
  Blockly.Blocks.JT_AccDirection1 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ACD1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_AccDirection2 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ACD2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  }; 
  Blockly.Blocks.JT_AccDirection3 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ACD3)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };   
  <!--角速度-->
  Blockly.Blocks.JT_Angular1 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ANG1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_Angular2 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ANG2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  }; 
  Blockly.Blocks.JT_Angular3 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ANG3)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  }; 
  <!--磁场-->
  Blockly.Blocks.JT_Magnetic1 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_MAG1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_Magnetic2 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_MAG2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_Magnetic3 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_MAG3)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  <!--气压-->
  Blockly.Blocks.JT_Pressure = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_PRE)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  <!--经纬度-->
  Blockly.Blocks.JT_Coordinate1 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_COO1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_Coordinate2 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_COO2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  <!--定位精度-->
  Blockly.Blocks.JT_PossAcc1 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_POS1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_PossAcc2 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_POS2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };
  Blockly.Blocks.JT_PossAcc3 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_POS3)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  Blockly.Blocks.JT_PossAcc4 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_POS4)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };
  Blockly.Blocks.JT_PossAcc5 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_POS5)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };
  Blockly.Blocks.JT_PossAcc6 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_POS6)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };
  Blockly.Blocks.JT_PossAcc7 = {
    init: function() {
      this.setColour(JTWLColorAcc);
      this.appendDummyInput("")
            .appendField(Blockly.JT_POS7)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/zaitaikongzhi.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };  
  <!--更新环境数据-->
  Blockly.Blocks.JT_Environ = {
    init: function() {
      this.setColour('#FF0000');
      this.appendDummyInput("")
            .appendField(Blockly.JT_ENV)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/huanjing.png", 52, 32))
			
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };  
  <!--环境数据-->
  Blockly.Blocks.JT_Environ1 = {
    init: function() {
      this.setColour(JTWLColorEnv);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ENV1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/huanjing.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };    
  Blockly.Blocks.JT_Environ2 = {
    init: function() {
      this.setColour(JTWLColorEnv);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ENV2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/huanjing.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };      
  Blockly.Blocks.JT_Environ3 = {
    init: function() {
      this.setColour(JTWLColorEnv);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ENV3)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/huanjing.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };      
  Blockly.Blocks.JT_Environ4 = {
    init: function() {
      this.setColour(JTWLColorEnv);
      this.appendDummyInput("")
            .appendField(Blockly.JT_ENV4)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/huanjing.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };      
  <!--更新光照数据-->
    Blockly.Blocks.JT_Light = {
    init: function() {
      this.setColour('#FF0000');
      this.appendDummyInput("")
            .appendField(Blockly.JT_LIG)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/guangzhao.png", 52, 32))
			
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };  
  <!--光照数据-->
  Blockly.Blocks.JT_Light1 = {
    init: function() {
      this.setColour(JTWLColorLig);
      this.appendDummyInput("")
            .appendField(Blockly.JT_LIG1)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/guangzhao.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };    
  Blockly.Blocks.JT_Light2 = {
    init: function() {
      this.setColour(JTWLColorLig);
      this.appendDummyInput("")
            .appendField(Blockly.JT_LIG2)
            .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/guangzhao.png", 52, 32))
			
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };     
  <!--学习红外编码-->  
  Blockly.Blocks.JT_Infrared = {
    init: function() {
      this.setColour(JTWLColorInf);
      this.appendDummyInput("")
          .appendField(Blockly.JT_INF)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/hongwai.png", 52, 32))
      this.appendValueInput("InfraredNum", Number)
          .appendField('编号')
          .setCheck(Number);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };  
  
  <!--发送红外编码-->  
  Blockly.Blocks.JT_SendInfrared = {
    init: function() {
      this.setColour(JTWLColorInf);
      this.appendDummyInput("")
          .appendField(Blockly.JT_SINF)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/hongwai.png", 52, 32))
      this.appendValueInput("SendInfraredNum", Number)
          .appendField('编号')
          .setCheck(Number);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };  
  
  <!--彩色液晶屏-->  
  Blockly.Blocks.JT_ColorLcd = {
    init: function() {
      this.setColour(JTWLColorLcd);
      this.appendDummyInput("")
          .appendField(Blockly.JT_CLcd)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/chumoban.png", 52, 32))
      this.appendValueInput("ColorLcdNum", Number)
          .appendField('跳转到页')
          .setCheck(Number);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };  
  Blockly.Blocks.JT_ColorLcd1 = {
    init: function() {
      this.setColour(JTWLColorLcd);
      this.appendDummyInput("")
          .appendField(Blockly.JT_CLcd)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/chumoban.png", 52, 32))
      this.appendValueInput("ColorLcd1Num", String)
          .appendField('画')
          .setCheck(String);
      this.appendValueInput("ColorLcd2Num", Number)
          .appendField('线数据')
          .setCheck(Number);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };    
  
  <!--数传-->  
  Blockly.Blocks.JT_DataTrans1 = {
    init: function() {
      this.setColour(JTWLColorDat);
      this.appendDummyInput("")
          .appendField(Blockly.JT_DAT)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/shuchuan.png", 52, 32))
      this.appendValueInput("DataTransNum1", String)
          .appendField('蓝牙发送')
          .setCheck([String,Number]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };    
  Blockly.Blocks.JT_DataTrans2 = {
    init: function() {
      this.setColour(JTWLColorDat);
      this.appendDummyInput("")
          .appendField(Blockly.JT_DAT)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/shuchuan.png", 52, 32))
      this.appendValueInput("DataTransNum2", String)
          .appendField('ZigBee发送')
          .setCheck([String,Number]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };    
  Blockly.Blocks.JT_DataTrans3 = {
    init: function() {
      this.setColour(JTWLColorDat);
      this.appendDummyInput("")
          .appendField(Blockly.JT_DAT)
          .appendField(new Blockly.FieldImage("../../media/JTWL/PayLoad/shuchuan.png", 52, 32))
      this.appendValueInput("DataCentre", String)
          .appendField('短信中心号')
          .setCheck([String,Number]);
	  this.appendValueInput("PhoneNumber", String)
          .appendField('手机号')
          .setCheck([String,Number]);
	  this.appendValueInput("DataContent", String)
          .appendField('短信内容')
          .setCheck([String,Number]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };    
  
  
  
  
  
  