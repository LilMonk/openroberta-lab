var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
<<<<<<< HEAD
<<<<<<< HEAD
        //extendStatics = Object.setPrototypeOf || //So war es von Professor Bruer
        extendStatics = Object.getPrototypeOf ||
=======
        extendStatics = Object.setPrototypeOf ||
>>>>>>> ddeb9951c... build ts
=======
        //extendStatics = Object.setPrototypeOf || //So war es von Professor Bruer
        extendStatics = Object.getPrototypeOf ||
>>>>>>> 2e65f40f1... add new sensors, color change
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var driveConfig = {
    "motorL": { "port": 1, "orientation": -1 },
    "motorR": { "port": 2, "orientation": -1 },
<<<<<<< HEAD
<<<<<<< HEAD
    "wheelDiameter": 5.6, "trackWidth": 22.8
};
var propFromORB = { "Motor": [{ "pwr": 0, "speed": 0, "pos": 0 },
<<<<<<< HEAD
        { "pwr": 0, "speed": 0, "pos": 0 },
        { "pwr": 0, "speed": 0, "pos": 0 },
        { "pwr": 0, "speed": 0, "pos": 0 }],
    "Sensor": [{ "valid": false, "type": 0, "option": 0, "value": [0, 0] },
        { "valid": false, "type": 0, "option": 0, "value": [0, 0] },
        { "valid": false, "type": 0, "option": 0, "value": [0, 0] },
        { "valid": false, "type": 0, "option": 0, "value": [0, 0] }],
=======
    "wheelDiameter": 5.5, "trackWidth": 22.8
=======
    "wheelDiameter": 5.6, "trackWidth": 22.8
>>>>>>> 2e65f40f1... add new sensors, color change
};
var propFromORB = {
    "Motor": [{ "pwr": 0, "speed": 0, "pos": 0 },
        { "pwr": 0, "speed": 0, "pos": 0 },
        { "pwr": 0, "speed": 0, "pos": 0 },
        { "pwr": 0, "speed": 0, "pos": 0 }],
    "Sensor": [{ "valid": false, "value": 0, "analog": [0, 0], "digital": [true, true] },
        { "valid": false, "value": 0, "analog": [0, 0], "digital": [true, true] },
        { "valid": false, "value": 0, "analog": [0, 0], "digital": [true, true] },
        { "valid": false, "value": 0, "analog": [0, 0], "digital": [true, true] }],
>>>>>>> ddeb9951c... build ts
=======
        { "pwr": 0, "speed": 0, "pos": 0 },
        { "pwr": 0, "speed": 0, "pos": 0 },
        { "pwr": 0, "speed": 0, "pos": 0 }],
    "Sensor": [{ "valid": false, "type": 0, "option": 0, "value": [0, 0] },
        { "valid": false, "type": 0, "option": 0, "value": [0, 0] },
        { "valid": false, "type": 0, "option": 0, "value": [0, 0] },
        { "valid": false, "type": 0, "option": 0, "value": [0, 0] }],
>>>>>>> 201bffcb4... Adjustment for firmware 0.70
    "Vcc": 0,
    "Digital": [false, false],
    "Status": 0
};
var cmdConfigToORB = {
    "target": "orb",
    "type": "data",
    "configToORB": {
        "Sensor": [{ "type": 0, "mode": 0, "option": 0 },
            { "type": 0, "mode": 0, "option": 0 },
            { "type": 0, "mode": 0, "option": 0 },
            { "type": 0, "mode": 0, "option": 0 }],
        "Motor": [{ "tics": 72, "acc": 50, "Kp": 50, "Ki": 30 },
            { "tics": 72, "acc": 50, "Kp": 50, "Ki": 30 },
            { "tics": 72, "acc": 50, "Kp": 50, "Ki": 30 },
            { "tics": 72, "acc": 50, "Kp": 50, "Ki": 30 }]
    }
};
<<<<<<< HEAD
<<<<<<< HEAD
var isMotorConfug = false;
=======
>>>>>>> ddeb9951c... build ts
=======
var isMotorConfug = false;
>>>>>>> 2e65f40f1... add new sensors, color change
var cmdPropToORB = {
    "target": "orb",
    "type": "data",
    "propToORB": {
        "Motor": [{ "mode": 0, "speed": 0, "pos": 0 },
            { "mode": 0, "speed": 0, "pos": 0 },
            { "mode": 0, "speed": 0, "pos": 0 },
            { "mode": 0, "speed": 0, "pos": 0 }],
        "Servo": [{ "mode": 0, "pos": 0 },
            { "mode": 0, "pos": 0 }]
    }
};
function configSensor(id, type, mode, option) {
    id = id - 1;
    if (0 <= id && id < 4) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 116f2db96... Add further sensors in Behaviorus
        cmdConfigToORB.configToORB.Sensor[id].type = type;
        cmdConfigToORB.configToORB.Sensor[id].mode = mode;
        cmdConfigToORB.configToORB.Sensor[id].option = option;
        console.log("configSensor", "OK: " + "port=" + id + "," + JSON.stringify(cmdConfigToORB.configToORB.Sensor[id]));
<<<<<<< HEAD
=======
        cmdPropToORB.propToORB.Sensor[id].type = type;
        cmdPropToORB.propToORB.Sensor[id].mode = mode;
        cmdPropToORB.propToORB.Sensor[id].option = option;
        console.log("configSensor", "OK: " + "port=" + id + "," + JSON.stringify(cmdPropToORB.propToORB.Sensor[id]));
>>>>>>> ddeb9951c... build ts
=======
>>>>>>> 116f2db96... Add further sensors in Behaviorus
    }
    else
        console.log("configSensor", "Err:wrong id");
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a743a2552... Add a function for validation
function dataValid(valid, typeSensor, typeFromOrb) {
    if (valid == true) {
        if (typeSensor == typeFromOrb) {
            return true;
        }
    }
    else {
        return false;
    }
}
/*
<<<<<<< HEAD
function getSensorValue(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        return (propFromORB.Sensor[id].value[0]);
    }
    return (0);
}*/
function getSensorValue(id, type) {
    id = id - 1;
    if (0 <= id && id < 4) {
        if (dataValid(propFromORB.Sensor[id].valid, type, propFromORB.Sensor[id].type) == true) {
            return (propFromORB.Sensor[id].value[0]);
        }
        else {
            return ("no valid");
        }
    }
}
function getSensorValueColor(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        if (propFromORB.Sensor[id].value[0] == 0) {
            return ("No Color");
        }
        if (propFromORB.Sensor[id].value[0] == 1) {
            return ("Black");
        }
        if (propFromORB.Sensor[id].value[0] == 2) {
            return ("Blue");
        }
        if (propFromORB.Sensor[id].value[0] == 3) {
            return ("Green");
        }
        if (propFromORB.Sensor[id].value[0] == 4) {
            return ("Yellow");
        }
        if (propFromORB.Sensor[id].value[0] == 5) {
            return ("Red");
        }
        if (propFromORB.Sensor[id].value[0] == 6) {
            return ("White");
        }
        if (propFromORB.Sensor[id].value[0] == 7) {
            return ("Brown");
        }
    }
    return (0);
}
function getSensorValueUltrasonic(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        var a = propFromORB.Sensor[id].value[0];
        return (a / 10);
    }
    return (0);
}
function getSensorValueGyro(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        if (propFromORB.Sensor[id].value[0] <= 32767) {
            return (propFromORB.Sensor[id].value);
        }
        else {
            propFromORB.Sensor[id].value[0] = propFromORB.Sensor[id].value[0] - 65536;
            return (propFromORB.Sensor[id].value);
        }
    }
    return (0);
=======
=======
>>>>>>> a743a2552... Add a function for validation
function getSensorValue(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        return (propFromORB.Sensor[id].value[0]);
    }
    return (0);
}*/
function getSensorValue(id, type) {
    id = id - 1;
    if (0 <= id && id < 4) {
        if (dataValid(propFromORB.Sensor[id].valid, type, propFromORB.Sensor[id].type) == true) {
            return (propFromORB.Sensor[id].value[0]);
        }
        else {
            return ("no valid");
        }
    }
}
function getSensorValueColor(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        if (propFromORB.Sensor[id].value[0] == 0) {
            return ("No Color");
        }
        if (propFromORB.Sensor[id].value[0] == 1) {
            return ("Black");
        }
        if (propFromORB.Sensor[id].value[0] == 2) {
            return ("Blue");
        }
        if (propFromORB.Sensor[id].value[0] == 3) {
            return ("Green");
        }
        if (propFromORB.Sensor[id].value[0] == 4) {
            return ("Yellow");
        }
        if (propFromORB.Sensor[id].value[0] == 5) {
            return ("Red");
        }
        if (propFromORB.Sensor[id].value[0] == 6) {
            return ("White");
        }
        if (propFromORB.Sensor[id].value[0] == 7) {
            return ("Brown");
        }
    }
    return (0);
}
function getSensorValueUltrasonic(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        var a = propFromORB.Sensor[id].value[0];
        return (a / 10);
    }
    return (0);
}
function getSensorValueGyro(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        if (propFromORB.Sensor[id].value[0] <= 32767) {
            return (propFromORB.Sensor[id].value);
        }
        else {
            propFromORB.Sensor[id].value[0] = propFromORB.Sensor[id].value[0] - 65536;
            return (propFromORB.Sensor[id].value);
        }
    }
    return (0);
}
<<<<<<< HEAD
function getSensorAnalog(id, ch) {
    id = id - 1;
    if (0 <= id && id < 4 && 0 <= ch && ch < 2) {
        return (propFromORB.Sensor[id].analog[ch]);
    }
    return (0);
}
function getSensorDigital(id, ch) {
    id = id - 1;
    if (0 <= id && id < 4 && 0 <= ch && ch < 2) {
        return (propFromORB.Sensor[id].digital[ch]);
    }
    return (false);
}
function getDigital(id) {
    id = id - 1;
    if (0 <= id && id < 2) {
        return (propFromORB.Digital[id]);
    }
    return (false);
>>>>>>> ddeb9951c... build ts
}
=======
>>>>>>> 201bffcb4... Adjustment for firmware 0.70
function setMotor(id, mode, speed, pos) {
    id = id - 1;
    if (0 <= id && id < 4) {
        cmdPropToORB.propToORB.Motor[id].mode = mode;
        cmdPropToORB.propToORB.Motor[id].speed = Math.floor(speed);
        cmdPropToORB.propToORB.Motor[id].pos = Math.floor(pos);
        console.log("setMotor", "OK: " + "port=" + id + "," + JSON.stringify(cmdPropToORB.propToORB.Motor[id]));
    }
    else
        console.log("setMotor", "Err:wrong id");
}
function getMotorPos(id) {
    id = id - 1;
    if (0 <= id && id < 4) {
        return (propFromORB.Motor[id].pos);
    }
    return (0);
}
define(["require", "exports", "interpreter.aRobotBehaviour", "interpreter.constants", "interpreter.util"], function (require, exports, interpreter_aRobotBehaviour_1, C, U) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RobotOrbBehaviour = void 0;
    var RobotOrbBehaviour = /** @class */ (function (_super) {
        __extends(RobotOrbBehaviour, _super);
        function RobotOrbBehaviour(btInterfaceFct, toDisplayFct) {
            var _this = _super.call(this) || this;
            _this.orb = {};
            _this.tiltMode = {
                UP: '3.0',
                DOWN: '9.0',
                BACK: '5.0',
                FRONT: '7.0',
                NO: '0.0'
            };
            _this.btInterfaceFct = btInterfaceFct;
            _this.toDisplayFct = toDisplayFct;
            _this.timers = {};
            _this.timers['start'] = Date.now();
            U.loggingEnabled(true, true);
            return _this;
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2e65f40f1... add new sensors, color change
        RobotOrbBehaviour.prototype.configMotor = function () {
            this.btInterfaceFct(cmdConfigToORB);
            isMotorConfug = true;
        };
<<<<<<< HEAD
=======
>>>>>>> ddeb9951c... build ts
=======
>>>>>>> 2e65f40f1... add new sensors, color change
        RobotOrbBehaviour.prototype.setSpeed = function (speedL, speedR) {
            // Zuordnung Seite und Einbaurichtung fehlen
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            speedL = distanceToTics * speedL;
            speedR = distanceToTics * speedR;
            setMotor(driveConfig.motorL.port, 2, driveConfig.motorL.orientation * speedL, 0);
            setMotor(driveConfig.motorR.port, 2, driveConfig.motorR.orientation * speedR, 0);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2e65f40f1... add new sensors, color change
            //this.btInterfaceFct(cmdConfigToORB);
            this.btInterfaceFct(cmdPropToORB);
        };
        RobotOrbBehaviour.prototype.setSpeedProcent = function (speedL, speedR) {
            // Zuordnung Seite und Einbaurichtung fehlen
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            var maxspeed = 2.7 * (driveConfig.wheelDiameter * Math.PI);
            speedL = ((speedL / 100) * maxspeed) * distanceToTics;
            speedR = ((speedR / 100) * maxspeed) * distanceToTics;
            setMotor(driveConfig.motorL.port, 2, driveConfig.motorL.orientation * speedL, 0);
            setMotor(driveConfig.motorR.port, 2, driveConfig.motorR.orientation * speedR, 0);
<<<<<<< HEAD
=======
            this.btInterfaceFct(cmdConfigToORB);
>>>>>>> ddeb9951c... build ts
=======
>>>>>>> 2e65f40f1... add new sensors, color change
            this.btInterfaceFct(cmdPropToORB);
        };
        RobotOrbBehaviour.prototype.calcTimeToGo = function (speed, distance) {
            var t = 20000 / 50 + 200; // 50 = acc, 200 Reserve
            if (speed != 0)
                t += 1000.0 * Math.abs(distance / speed);
            return (t);
        };
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2e65f40f1... add new sensors, color change
        RobotOrbBehaviour.prototype.setMoveToProcent = function (speedL, speedR, deltaL, deltaR) {
            // Zuordnung Seite und Einbaurichtung fehlen
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            var maxspeed = 2.7 * (driveConfig.wheelDiameter * Math.PI);
            deltaL *= distanceToTics;
            deltaR *= distanceToTics;
            speedL = Math.abs(((speedL / 100) * maxspeed) * distanceToTics);
            speedR = Math.abs(((speedR / 100) * maxspeed) * distanceToTics);
<<<<<<< HEAD
=======
=======
            var targetL = getMotorPos(driveConfig.motorL.port) + driveConfig.motorL.orientation * deltaL;
            var targetR = getMotorPos(driveConfig.motorR.port) + driveConfig.motorR.orientation * deltaR;
            var timeToGoL = this.calcTimeToGo(speedL, deltaL);
            var timeToGoR = this.calcTimeToGo(speedR, deltaR);
            setMotor(driveConfig.motorL.port, 3, speedL, targetL);
            setMotor(driveConfig.motorR.port, 3, speedR, targetR);
            //this.btInterfaceFct(cmdConfigToORB);
            this.btInterfaceFct(cmdPropToORB);
            return (Math.max(timeToGoL, timeToGoR));
        };
        RobotOrbBehaviour.prototype.setSpeedMotorOnProcent = function (port, speed, duration) {
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            var maxspeed = 2.7 * (driveConfig.wheelDiameter * Math.PI);
            speed = ((speed / 100) * maxspeed) * distanceToTics;
            setMotor(port, 2, driveConfig.motorL.orientation * speed, duration);
            this.btInterfaceFct(cmdPropToORB);
        };
        RobotOrbBehaviour.prototype.setMoveToMotorOnProcent = function (port, speed, delta) {
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            var maxspeed = 2.7 * (driveConfig.wheelDiameter * Math.PI);
            delta *= distanceToTics;
            speed = Math.abs(((speed / 100) * maxspeed) * distanceToTics);
            var target = getMotorPos(port) + driveConfig.motorL.orientation * delta;
            var timeToGo = this.calcTimeToGo(speed, delta);
            setMotor(port, 3, speed, target);
            this.btInterfaceFct(cmdPropToORB);
            return timeToGo;
        };
>>>>>>> 2e65f40f1... add new sensors, color change
        RobotOrbBehaviour.prototype.setMoveTo = function (speedL, speedR, deltaL, deltaR) {
            // Zuordnung Seite und Einbaurichtung fehlen
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            deltaL *= distanceToTics;
            deltaR *= distanceToTics;
            speedL = Math.abs(distanceToTics * speedL);
            speedR = Math.abs(distanceToTics * speedR);
>>>>>>> ddeb9951c... build ts
            var targetL = getMotorPos(driveConfig.motorL.port) + driveConfig.motorL.orientation * deltaL;
            var targetR = getMotorPos(driveConfig.motorR.port) + driveConfig.motorR.orientation * deltaR;
            var timeToGoL = this.calcTimeToGo(speedL, deltaL);
            var timeToGoR = this.calcTimeToGo(speedR, deltaR);
            setMotor(driveConfig.motorL.port, 3, speedL, targetL);
            setMotor(driveConfig.motorR.port, 3, speedR, targetR);
<<<<<<< HEAD
<<<<<<< HEAD
            //this.btInterfaceFct(cmdConfigToORB);
            this.btInterfaceFct(cmdPropToORB);
            return (Math.max(timeToGoL, timeToGoR));
        };
        RobotOrbBehaviour.prototype.setSpeedMotorOnProcent = function (port, speed, duration) {
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            var maxspeed = 2.7 * (driveConfig.wheelDiameter * Math.PI);
            speed = ((speed / 100) * maxspeed) * distanceToTics;
            setMotor(port, 2, driveConfig.motorL.orientation * speed, duration);
            this.btInterfaceFct(cmdPropToORB);
        };
        RobotOrbBehaviour.prototype.setMoveToMotorOnProcent = function (port, speed, delta) {
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            var maxspeed = 2.7 * (driveConfig.wheelDiameter * Math.PI);
            delta *= distanceToTics;
            speed = Math.abs(((speed / 100) * maxspeed) * distanceToTics);
            var target = getMotorPos(port) + driveConfig.motorL.orientation * delta;
            var timeToGo = this.calcTimeToGo(speed, delta);
            setMotor(port, 3, speed, target);
            this.btInterfaceFct(cmdPropToORB);
            return timeToGo;
        };
        RobotOrbBehaviour.prototype.setMoveTo = function (speedL, speedR, deltaL, deltaR) {
            // Zuordnung Seite und Einbaurichtung fehlen
            var distanceToTics = 1000.0 / (driveConfig.wheelDiameter * Math.PI);
            deltaL *= distanceToTics;
            deltaR *= distanceToTics;
            speedL = Math.abs(distanceToTics * speedL);
            speedR = Math.abs(distanceToTics * speedR);
            var targetL = getMotorPos(driveConfig.motorL.port) + driveConfig.motorL.orientation * deltaL;
            var targetR = getMotorPos(driveConfig.motorR.port) + driveConfig.motorR.orientation * deltaR;
            var timeToGoL = this.calcTimeToGo(speedL, deltaL);
            var timeToGoR = this.calcTimeToGo(speedR, deltaR);
            setMotor(driveConfig.motorL.port, 3, speedL, targetL);
            setMotor(driveConfig.motorR.port, 3, speedR, targetR);
            //this.btInterfaceFct(cmdConfigToORB);
            this.btInterfaceFct(cmdPropToORB);
            return (Math.max(timeToGoL, timeToGoR));
        };
=======
            this.btInterfaceFct(cmdConfigToORB);
=======
            //this.btInterfaceFct(cmdConfigToORB);
>>>>>>> 2e65f40f1... add new sensors, color change
            this.btInterfaceFct(cmdPropToORB);
            return (Math.max(timeToGoL, timeToGoR));
        };
<<<<<<< HEAD
        /*
        RobotOrbBehaviour.prototype.setMoveToDriveForr = function (speedL, speedR, deltaL, deltaR) {
            // Zuordnung Seite und Einbaurichtung fehlen
            //var distanceToTics = 1000.0/(driveConfig.wheelDiameter * Math.PI);//1 cm = 79,617834 Tick zu viel
            var distanceToTics = 500.0 / (driveConfig.wheelDiameter * Math.PI);// 1cm = 29,..

            deltaL *= distanceToTics;
            deltaR *= distanceToTics;
            speedL = Math.abs(10 * speedL);
            speedR = Math.abs(10 * speedR);

            var targetL = getMotorPos(driveConfig.motorL.port) + driveConfig.motorL.orientation * deltaL;
            var targetR = getMotorPos(driveConfig.motorR.port) + driveConfig.motorR.orientation * deltaR;

            var timeToGoL = this.calcTimeToGo(speedL, deltaL);
            var timeToGoR = this.calcTimeToGo(speedR, deltaR);

            setMotor(driveConfig.motorL.port, 3, speedL, targetL);
            setMotor(driveConfig.motorR.port, 3, speedR, targetR);
            this.btInterfaceFct(cmdConfigToORB);
            this.btInterfaceFct(cmdPropToORB);
            return (Math.max(timeToGoL, timeToGoR));
        }*/
>>>>>>> ddeb9951c... build ts
=======
>>>>>>> 116f2db96... Add further sensors in Behaviorus
        RobotOrbBehaviour.prototype.update = function (data) {
            U.info('update type:' + data.type + ' state:' + data.state + ' sensor:' + data.sensor + ' actor:' + data.actuator);
            if (data.target !== "orb") {
                return;
            }
            switch (data.type) {
                case "connect":
                    if (data.state == "connected") {
                        this.orb[data.brickid] = {};
                        this.orb[data.brickid]["brickname"] = data.brickname.replace(/\s/g, '').toUpperCase();
                        // for some reason we do not get the inital state of the button, so here it is hardcoded
                        this.orb[data.brickid]["button"] = 'false';
                    }
                    else if (data.state == "disconnected") {
                        delete this.orb[data.brickid];
                    }
                    break;
                case "didAddService":
                    var theOrbA = this.orb[data.brickid];
                    if (data.state == "connected") {
                        if (data.id && data.sensor) {
                            theOrbA[data.id] = {};
                            theOrbA[data.id][this.finalName(data.sensor)] = '';
                        }
                        else if (data.id && data.actuator) {
                            theOrbA[data.id] = {};
                            theOrbA[data.id][this.finalName(data.actuator)] = '';
                        }
                        else if (data.sensor) {
                            theOrbA[this.finalName(data.sensor)] = '';
                        }
                        else {
                            theOrbA[this.finalName(data.actuator)] = '';
                        }
                    }
                    break;
                case "didRemoveService":
                    if (data.id) {
                        delete this.orb[data.brickid][data.id];
                    }
                    else if (data.sensor) {
                        delete this.orb[data.brickid][this.finalName(data.sensor)];
                    }
                    else {
                        delete this.orb[data.brickid][this.finalName(data.actuator)];
                    }
                    break;
                case "update":
                    var theOrbU = this.orb[data.brickid];
                    if (data.id) {
                        if (theOrbU[data.id] === undefined) {
                            theOrbU[data.id] = {};
                        }
                        theOrbU[data.id][this.finalName(data.sensor)] = data.state;
                    }
                    else {
                        theOrbU[this.finalName(data.sensor)] = data.state;
                    }
                    break;
                case "data":
                    propFromORB = data.propFromORB;
                    break;
                default:
                    // TODO think about what could happen here.
                    break;
            }
            U.info(this.orb);
        };
        RobotOrbBehaviour.prototype.getConnectedBricks = function () {
            var brickids = [];
            for (var brickid in this.orb) {
                if (this.orb.hasOwnProperty(brickid)) {
                    brickids.push(brickid);
                }
            }
            return brickids;
        };
        RobotOrbBehaviour.prototype.getBrickIdByName = function (name) {
            for (var brickid in this.orb) {
                if (this.orb.hasOwnProperty(brickid)) {
                    if (this.orb[brickid].brickname === name.toUpperCase()) {
                        return brickid;
                    }
                }
            }
            return null;
        };
        RobotOrbBehaviour.prototype.getBrickById = function (id) {
            return this.orb[id];
        };
        RobotOrbBehaviour.prototype.clearDisplay = function () {
            U.debug('clear display');
            this.toDisplayFct({ "clear": true });
        };
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a743a2552... Add a function for validation
        /*
               RobotOrbBehaviour.prototype.getSample = function (s, name, sensor, port, slot) {
                   configSensor(port, 1, 0, 0);
                   if (sensor == "ultrasonic"){
                       cmdConfigToORB.configToORB.Sensor[port - 1].type = 1;
                       if (slot == "distance"){
                           configSensor(port, 1, 0, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           //s.push(getSensorValue(port));
                           s.push(getSensorValueUltrasonic(port));
                       }
                       else if (slot == "presence"){
                           configSensor(port, 1, 2, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValue(port));
                       }
                   }
                   else if (sensor == "color"){
                       if (slot == "colour"){
                           configSensor(port, 1, 2, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValueColor(port));
                       }
                       if (slot == "light"){
                           configSensor(port, 1, 0, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValue(port));
                       }
                       if (slot == "ambientlight"){
                           configSensor(port, 1, 1, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValue(port));
                       }
                       if (slot == "rgb"){
                           configSensor(port, 1, 4, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValueColor(port));
                       }
                   }
                   else if (sensor == "touch"){
                       configSensor(port, 4, 0, 0);
                       s.push(getSensorValue(port));
                   }
                   else if (sensor == "gyro"){
                       if (slot == "angle"){
                           configSensor(port, 1, 0, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValue(port));
                       }
                       if (slot == "rate"){
                           configSensor(port, 1, 1, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValueGyro(port));
                       }
                   }
                   else if (sensor == "infrared"){
                       if (slot == "distance"){
                           configSensor(port, 1, 0, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValue(port));
                       }
                       if (slot == "presence"){
                           configSensor(port, 1, 2, 0);
                           this.btInterfaceFct(cmdConfigToORB);
                           s.push(getSensorValue(port));
                       }
                   }
                   return;
               };
       */
<<<<<<< HEAD
        RobotOrbBehaviour.prototype.getSample = function (s, name, sensor, port, slot) {
            configSensor(port, 1, 0, 0);
            this.btInterfaceFct(cmdConfigToORB);
            var a = getSensorValue(port, 1);
            if (a == "no valid") {
                setTimeout(function () { return validValue(s, port); }, 3000); //Ich bekomme ein error empty stack, idee
            }
            else {
                s.push(a);
            }
        };
        function validValue(s, port) {
            s.push(getSensorValue(port, 1));
        }
=======
=======
>>>>>>> a743a2552... Add a function for validation
        RobotOrbBehaviour.prototype.getSample = function (s, name, sensor, port, slot) {
            configSensor(port, 1, 0, 0);
            this.btInterfaceFct(cmdConfigToORB);
            var a = getSensorValue(port, 1);
            if (a == "no valid") {
                setTimeout(function () { return validValue(s, port); }, 3000); //Ich bekomme ein error empty stack, idee
            }
            else {
                s.push(a);
            }
        };
<<<<<<< HEAD
>>>>>>> ddeb9951c... build ts
=======
        function validValue(s, port) {
            s.push(getSensorValue(port, 1));
        }
>>>>>>> a743a2552... Add a function for validation
        RobotOrbBehaviour.prototype.finalName = function (notNormalized) {
            if (notNormalized !== undefined) {
                return notNormalized.replace(/\s/g, '').toLowerCase();
            }
            else {
                U.info("sensor name undefined");
                return "undefined";
            }
        };
        RobotOrbBehaviour.prototype.timerReset = function (port) {
            this.timers[port] = Date.now();
            U.debug('timerReset for ' + port);
        };
        RobotOrbBehaviour.prototype.timerGet = function (port) {
            var now = Date.now();
            var startTime = this.timers[port];
            if (startTime === undefined) {
                startTime = this.timers['start'];
            }
            var delta = now - startTime;
            U.debug('timerGet for ' + port + ' returned ' + delta);
            return delta;
        };
        RobotOrbBehaviour.prototype.ledOnAction = function (name, port, color) {
            var brickid = this.getBrickIdByName(name);
            var robotText = 'robot: ' + name + ', port: ' + port;
            U.debug(robotText + ' led on color ' + color);
            var cmd = { 'target': 'orb', 'type': 'command', 'actuator': 'light', 'brickid': brickid, 'color': color };
            this.btInterfaceFct(cmd);
        };
        RobotOrbBehaviour.prototype.statusLightOffAction = function (name, port) {
            var brickid = this.getBrickIdByName(name);
            var robotText = 'robot: ' + name + ', port: ' + port;
            U.debug(robotText + ' led off');
            var cmd = { 'target': 'orb', 'type': 'command', 'actuator': 'light', 'brickid': brickid, 'color': 0 };
            this.btInterfaceFct(cmd);
        };
        RobotOrbBehaviour.prototype.toneAction = function (name, frequency, duration) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.showTextAction = function (text, _mode) {
            var showText = "" + text;
            U.debug('***** show "' + showText + '" *****');
            this.toDisplayFct({ "show": showText });
            return 0;
        };
        RobotOrbBehaviour.prototype.showImageAction = function (_text, _mode) {
            U.debug('***** show image not supported by Orb *****');
            return 0;
        };
        RobotOrbBehaviour.prototype.displaySetBrightnessAction = function (_value) {
            return 0;
        };
        RobotOrbBehaviour.prototype.displaySetPixelAction = function (_x, _y, _brightness) {
            return 0;
        };
        RobotOrbBehaviour.prototype.writePinAction = function (_pin, _mode, _value) {
        };
        RobotOrbBehaviour.prototype.close = function () {
            var ids = this.getConnectedBricks();
            for (var id in ids) {
                if (ids.hasOwnProperty(id)) {
                    var name = this.getBrickById(ids[id]).brickname;
                    this.motorStopAction(name, 1);
                    this.motorStopAction(name, 2);
                    this.ledOnAction(name, 99, 3);
                }
            }
        };
        RobotOrbBehaviour.prototype.encoderReset = function (_port) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.gyroReset = function (_port) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.lightAction = function (_mode, _color) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.playFileAction = function (_file) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype._setVolumeAction = function (_volume) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype._getVolumeAction = function (_s) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.setLanguage = function (_language) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.sayTextAction = function (_text, _speed, _pitch) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.getMotorSpeed = function (_s, _name, _port) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.setMotorSpeed = function (_name, _port, _speed) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.driveStop = function (_name) {
            this.setSpeed(0, 0);
        };
        RobotOrbBehaviour.prototype.motorOnAction = function (name, port, duration, speed) {
            U.debug('motorOnAction' + ' port:' + port + ' duration:' + duration + ' speed:' + speed);
<<<<<<< HEAD
<<<<<<< HEAD
            var gradToTics = 1000.0 / 360.0;
            var timeToGo = 0;
            if (isMotorConfug == false) {
                this.btInterfaceFct(cmdConfigToORB);
                isMotorConfug = true;
            }
            if (duration === undefined) {
                //setMotor( port, 2, gradToTics*speed, 0 );
                this.setSpeedMotorOnProcent(port, speed, 0);
            }
            else { /* Es Funktioniert nicht richtig jetzt :(  */
                return (this.setMoveToMotorOnProcent(port, speed, duration));
                //setMotor( port, 3,speed, getMotorPos(port) + gradToTics*duration );
                //timeToGo = this.calcTimeToGo(speed, duration);
            }
            //this.btInterfaceFct(cmdConfigToORB);
            //this.btInterfaceFct(cmdPropToORB);
            return 0;
=======
            var gradToTics = 1000.0 / 360.0; //Speed Problem wahsheinlich hier, sollte 30*10 sein, testen
=======
            var gradToTics = 1000.0 / 360.0;
>>>>>>> 2e65f40f1... add new sensors, color change
            var timeToGo = 0;
            if (isMotorConfug == false) {
                this.btInterfaceFct(cmdConfigToORB);
                isMotorConfug = true;
            }
            if (duration === undefined) {
                //setMotor( port, 2, gradToTics*speed, 0 );
                this.setSpeedMotorOnProcent(port, speed, 0);
            }
<<<<<<< HEAD
            this.btInterfaceFct(cmdConfigToORB);
            this.btInterfaceFct(cmdPropToORB);
            return timeToGo;
>>>>>>> ddeb9951c... build ts
=======
            else { /* Es Funktioniert nicht richtig jetzt :(  */
                return (this.setMoveToMotorOnProcent(port, speed, duration));
                //setMotor( port, 3,speed, getMotorPos(port) + gradToTics*duration );
                //timeToGo = this.calcTimeToGo(speed, duration);
            }
            //this.btInterfaceFct(cmdConfigToORB);
            //this.btInterfaceFct(cmdPropToORB);
            return 0;
>>>>>>> 2e65f40f1... add new sensors, color change
        };
        RobotOrbBehaviour.prototype.motorStopAction = function (name, port) {
            U.debug('motorStopAction' + ' port:' + port);
            setMotor(port, 0, 0, 0);
            this.btInterfaceFct(cmdPropToORB);
            return 0;
        };
        RobotOrbBehaviour.prototype.driveAction = function (name, direction, speed, distance) {
            U.debug('driveAction' + ' direction:' + direction + ' speed:' + speed + ' distance:' + distance);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2e65f40f1... add new sensors, color change
            if (isMotorConfug == false) {
                this.btInterfaceFct(cmdConfigToORB);
                isMotorConfug = true;
            }
<<<<<<< HEAD
            if ((direction == C.BACKWARD) || (direction == "BACKWARD")) {
                speed *= -1;
            }
            if (distance === undefined) {
                //this.setSpeed(speed, speed);
                this.setSpeedProcent(speed, speed);
=======
            if ((direction == C.BACKWARD) || (direction == "BACKWARD")) {
                speed *= -1;
            }
            if (distance === undefined) { // SPEED mode
                this.setSpeed(speed, speed);
                return 0;
>>>>>>> ddeb9951c... build ts
=======
            if ((direction == C.BACKWARD) || (direction == "BACKWARD")) {
                speed *= -1;
            }
            if (distance === undefined) {
                //this.setSpeed(speed, speed);
                this.setSpeedProcent(speed, speed);
>>>>>>> 2e65f40f1... add new sensors, color change
            }
            else { // MOVE_TO mode
                if (speed < 0) {
                    distance *= -1;
                }
<<<<<<< HEAD
<<<<<<< HEAD
                //return( this.setMoveTo(speed, speed, distance, distance ));
                return (this.setMoveToProcent(speed, speed, distance, distance));
=======
                return (this.setMoveTo(speed, speed, distance, distance));
                //return (this.setMoveToDriveFor(speed, speed, distance, distance));
>>>>>>> ddeb9951c... build ts
=======
                //return( this.setMoveTo(speed, speed, distance, distance ));
                return (this.setMoveToProcent(speed, speed, distance, distance));
>>>>>>> 2e65f40f1... add new sensors, color change
            }
            return 0;
        };
        RobotOrbBehaviour.prototype.curveAction = function (name, direction, speedL, speedR, distance) {
            U.debug('curveAction' + ' direction:' + direction + ' speedL:' + speedL + ' speedR:' + speedR + ' distance:' + distance);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2e65f40f1... add new sensors, color change
            if (isMotorConfug == false) {
                this.btInterfaceFct(cmdConfigToORB);
                isMotorConfug = true;
            }
<<<<<<< HEAD
=======
>>>>>>> ddeb9951c... build ts
=======
>>>>>>> 2e65f40f1... add new sensors, color change
            if ((direction == C.BACKWARD) || (direction == "BACKWARD")) {
                speedL *= -1;
                speedR *= -1;
            }
            if (distance === undefined) { // SPEED mode
<<<<<<< HEAD
<<<<<<< HEAD
                //this.setSpeed(speedL, speedR);
                this.setSpeedProcent(speedL, speedR); //Funktioniert  nicht
=======
                this.setSpeed(speedL, speedR);
>>>>>>> ddeb9951c... build ts
=======
                //this.setSpeed(speedL, speedR);
                this.setSpeedProcent(speedL, speedR); //Funktioniert  nicht
>>>>>>> 2e65f40f1... add new sensors, color change
                return 0;
            }
            else { // MOVE_TO mode
                var speed = 0.5 * (Math.abs(speedL) + Math.abs(speedR));
                if (speed > 0) {
                    var distL = speedL * distance / speed;
                    var distR = speedR * distance / speed;
<<<<<<< HEAD
<<<<<<< HEAD
                    //return( this.setMoveTo(speedL,speedR, distL, distR ));
                    return (this.setMoveToProcent(speedL, speedR, distL, distR));
=======
                    return (this.setMoveTo(speedL, speedR, distL, distR));
                    //return (this.setMoveToDriveFor(speedL, speedR, distL, distR));
>>>>>>> ddeb9951c... build ts
=======
                    //return( this.setMoveTo(speedL,speedR, distL, distR ));
                    return (this.setMoveToProcent(speedL, speedR, distL, distR));
>>>>>>> 2e65f40f1... add new sensors, color change
                }
            }
            this.setSpeed(0, 0);
            return 0;
        };
        RobotOrbBehaviour.prototype.turnAction = function (name, direction, speed, angle) {
            U.debug('turnAction' + ' direction:' + direction + ' speed:' + speed + ' angle:' + angle);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2e65f40f1... add new sensors, color change
            if (isMotorConfug == false) {
                this.btInterfaceFct(cmdConfigToORB);
                isMotorConfug = true;
            }
<<<<<<< HEAD
=======
>>>>>>> ddeb9951c... build ts
=======
>>>>>>> 2e65f40f1... add new sensors, color change
            if (direction == C.LEFT) {
                speed *= -1;
            }
            if (angle === undefined) { // SPEED mode
<<<<<<< HEAD
<<<<<<< HEAD
                //this.setSpeed(speed, -speed);
                this.setSpeedProcent(speed, -speed);
=======
                this.setSpeed(speed, -speed);
>>>>>>> ddeb9951c... build ts
=======
                //this.setSpeed(speed, -speed);
                this.setSpeedProcent(speed, -speed);
>>>>>>> 2e65f40f1... add new sensors, color change
                return 0;
            }
            else { // MOVE_TO mode
                if (speed < 0) {
                    angle *= -1;
                }
                var distance = angle * Math.PI / 360 * driveConfig.trackWidth;
<<<<<<< HEAD
<<<<<<< HEAD
                //return( this.setMoveTo(speed, speed, distance, -distance ));
                return (this.setMoveToProcent(speed, speed, distance, -distance));
=======
                return (this.setMoveTo(speed, speed, distance, -distance));
                //return (this.setMoveToDriveFor(speed, speed, distance, -distance));
>>>>>>> ddeb9951c... build ts
=======
                //return( this.setMoveTo(speed, speed, distance, -distance ));
                return (this.setMoveToProcent(speed, speed, distance, -distance));
>>>>>>> 2e65f40f1... add new sensors, color change
            }
            return 0;
        };
        RobotOrbBehaviour.prototype.showTextActionPosition = function (_text, _x, _y) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.displaySetPixelBrightnessAction = function (_x, _y, _brightness) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.displayGetPixelBrightnessAction = function (_s, _x, _y) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.setVolumeAction = function (_volume) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.getVolumeAction = function (_s) {
            throw new Error("Method not implemented.");
        };
        RobotOrbBehaviour.prototype.debugAction = function (_value) {
            this.showTextAction("> " + _value, undefined);
        };
        RobotOrbBehaviour.prototype.assertAction = function (_msg, _left, _op, _right, _value) {
            if (!_value) {
                this.showTextAction("> Assertion failed: " + _msg + " " + _left + " " + _op + " " + _right, undefined);
            }
        };
        return RobotOrbBehaviour;
    }(interpreter_aRobotBehaviour_1.ARobotBehaviour));
    exports.RobotOrbBehaviour = RobotOrbBehaviour;
});
