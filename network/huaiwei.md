华为作为全球领先的信息与通信解决方案供应商，其交换机产品在全球市场占据了重要位置。华为交换机以高性能、高可靠性和丰富的功能著称，广泛应用于企业、数据中心、运营商网络等各类环境中。无论是中小企业的局域网，还是大型数据中心的核心网络，华为交换机都能提供灵活、稳定的解决方案。

交换机是一种网络设备，用于连接不同网络设备（如计算机、服务器、其他交换机等）并管理数据流量。其主要功能包括：

* 数据帧转发：根据MAC地址表，将数据帧从源端口转发到目标端口。
* VLAN划分：通过虚拟局域网（VLAN）技术，将一个物理网络划分为多个逻辑网络，以提高网络管理的灵活性和安全性。
* 链路聚合：将多个物理链路捆绑在一起，形成一个逻辑链路，提高带宽和链路冗余度。
* QoS（服务质量）：通过流量优先级和策略管理，确保关键业务的网络性能。
* 安全性：通过ACL（访问控制列表）、用户认证等机制，保护网络安全。
* 故障排除：提供各种诊断和日志功能，帮助管理员快速定位并解决网络问题。
## 交换机的常用命令
掌握交换机的配置命令是网络管理员的基本技能。华为交换机的命令行界面（CLI）提供了丰富的配置和管理命令，涵盖基础配置、接口管理、VLAN配置、路由设置、安全配置、QoS、故障排除和高级配置等多个方面。

本文将详细介绍华为交换机的常用命令，按以下几个部分展开：

1. 基础配置命令：包括设备基本信息查看和基本系统设置命令。
2. 接口配置命令：包括接口查看与管理、接口模式配置命令。
3. VLAN配置命令：包括VLAN基本配置和VLAN接口配置命令。
4. 路由配置命令：包括静态路由配置和动态路由配置命令。
5. 安全配置命令：包括访问控制列表（ACL）和用户管理与权限设置命令。
6. QoS配置命令：包括基本QoS设置和流量控制与整形命令。
7. 故障排除命令：包括网络故障诊断和日志管理与分析命令。
8. 高级配置命令：包括链路聚合配置和网络管理与监控命令。
## 基础配置命令
### 设备基本信息查看
在进行任何配置之前，了解设备的基本信息是非常重要的。这些信息包括设备的型号、硬件和软件版本、运行时间等。以下是一些常用的查看设备基本信息的命令。
#### 查看设备版本信息
```shell
display version
```
该命令用于查看设备的硬件和软件版本信息。运行结果包括：

* 设备型号：设备的具体型号。
* 软件版本：当前运行的软件版本信息。
* 硬件版本：设备硬件的版本信息。
* BootROM版本：设备启动时加载的固件版本。

## SNMP配置
> SNMP（Simple Network Management Protocol，简单网络管理协议）用于监控和管理网络设备。
### 启用SNMP
```shell
snmp-agent
```
该命令用于启用SNMP功能。

示例：

```shell
<Huawei> system-view
[Huawei] snmp-agent
```
### 配置SNMP社区
> 配置SNMP社区
```shell
snmp-agent community <read|write> <community-name>
```
该命令用于配置SNMP社区。read表示只读权限，write表示读写权限。

示例：
```shell
[Huawei] snmp-agent community read public
[Huawei] snmp-agent community write private
```
### 配置SNMP陷阱
> 配置SNMP陷阱服务器
```shell
snmp-agent target-host trap address <ip-address> udp-port <port> params securityname <name>
```
该命令用于配置SNMP陷阱服务器的地址和端口。

示例：
```shell
[Huawei] snmp-agent target-host trap address 192.168.1.100 udp-port 162 params securityname public
```
### 启用SNMP陷阱
```shell
snmp-agent trap enable
```
该命令用于启用SNMP陷阱功能。

示例：

```shell
[Huawei] snmp-agent trap enable
```

### 查看SNMP配置
> 查看SNMP状态

```shell
display snmp-agent status
```
该命令用于查看SNMP代理的状态。

示例：
```shell
<Huawei> display snmp-agent status
SNMP agent enabled.
```
> 查看SNMP社区配置
```shell
display snmp-agent community
```
该命令用于查看SNMP社区的配置。
示例：
```shell
<Huawei> display snmp-agent community
 Community name: public
 Community name: private
```






