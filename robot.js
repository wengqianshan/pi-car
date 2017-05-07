'use strict'

let rpio = require('rpio')
let pins = [11, 12, 16, 18]

class Robot {
  constructor () {
    for (let i = 0; i < 4; i ++) {
      console.log('打开', pins[i])
      rpio.open(pins[i], rpio.OUTPUT, rpio.LOW);
    }
  }

  forward () {
    console.log('前进')
    rpio.write(pins[0], rpio.HIGH)
    rpio.write(pins[1], rpio.LOW)
    rpio.write(pins[2], rpio.HIGH)
    rpio.write(pins[3], rpio.LOW)
  }

  backward () {
    console.log('后退')
    rpio.write(pins[0], rpio.LOW)
    rpio.write(pins[1], rpio.HIGH)
    rpio.write(pins[2], rpio.LOW)
    rpio.write(pins[3], rpio.HIGH)
  }

  left () {
    console.log('左转弯')
    rpio.write(pins[0], rpio.LOW)
    rpio.write(pins[1], rpio.HIGH)
    rpio.write(pins[2], rpio.HIGH)
    rpio.write(pins[3], rpio.LOW)
  }

  right () {
    console.log('右转弯')
    rpio.write(pins[0], rpio.HIGH)
    rpio.write(pins[1], rpio.LOW)
    rpio.write(pins[2], rpio.LOW)
    rpio.write(pins[3], rpio.HIGH)
  }

  stop () {
    console.log('停止')
    rpio.write(pins[0], rpio.LOW)
    rpio.write(pins[1], rpio.LOW)
    rpio.write(pins[2], rpio.LOW)
    rpio.write(pins[3], rpio.LOW)
    // rpio.close(pins[0]);
    // rpio.close(pins[1]);
    // rpio.close(pins[2]);
    // rpio.close(pins[3]);
  }
}

module.exports = Robot
