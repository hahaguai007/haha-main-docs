# 远程调试Springboot项目

## 项目打包，上传jar

> 将项目打包，添加启动参数，启动项目。
> IP地址为：192.168.2.100，端口为：5005，jar包名：Springboot-JSerialCom.jar。注意：5005端口不能被占用和放行。

```shell
java -jar -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=192.168.2.100:5005  Springboot-JSerialCom.jar 
```

<img src="..\public\java\remote-run.png"/>

## 打开IDEA配置远程调试

### 1. 点击Edie Configuration。

<img src="..\public\java\remote-idea-config.png"/>

### 2. 点击Add，选择Remote-JVM-Debug。

<img src="..\public\java\remote-idea-config-add.png"/>

### 3. 配置项目远程调试参数

<img src="..\public\java\remote-idea-config-1.png"/>

### 4. 启动远程项目

### 5. 调试

> 访问接口，http://192.168.2.100:8080/user

<img src="..\public\java\remote-idea-config-debug.png"/>

## 优化调试

> 为了避免调试过程中，造成线程的阻塞，一般都会选择`Thread`，并且可以`Condition`填入条件悬挂线程，例如：user.getName() == "tom"

<img src="..\public\java\remote-idea-config-thread.png"/>