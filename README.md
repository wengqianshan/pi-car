# 树莓派小车代码

## 安装rpio

- 安装rpio [参考](https://www.npmjs.com/package/rpio#install)
````
$ npm install rpio
````
- 配置访问权限，使用root账号操作([启用root账号](http://blog.csdn.net/faryang/article/details/50779767))
````
$ cat &gt;/etc/udev/rules.d/20-gpiomem.rules &lt;&lt;EOF
SUBSYSTEM=="bcm2835-gpiomem", KERNEL=="gpiomem", GROUP="gpio", MODE="0660"
EOF
````


## 安装npm依赖

````
$ npm install
````

## 启动

````
$ node app
````

访问 http://ip:3000/ 
