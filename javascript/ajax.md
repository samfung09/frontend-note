---
html:
    toc: true
---

## AJAX的优缺点
>**优点**
+ 可以无需刷新页面而与服务器端进行通信。
+ 可以根据用户事件向服务器端发送请求，从而更新页面局部内容。
>**缺点**
+ 没有历史记录，不能回退。
+ 存在跨域问题。
+ SEO不友好。
---

## 状态码
>**AJAX状态码**

| 状态码 | 描述 |
| --- | --- |
|0|`unsent`&emsp;刚开始创建XHR，还==未发送==|
|1|`opened`&emsp;==已经执行open==这个操作|
|2|`headers_received`&emsp;==已经发送AJAX请求==（AJAX任务开始），==响应头信息已经被客户端接收==（响应头中包含了：服务器的时间，返回的HTTP状态码...）|
|3|`loading`&emsp;==响应主体内容正在返回==|
|4|`done`&emsp;==响应主体内容已经被客户端接收==|

>**HTTP状态码**

| 状态码 | 描述 |
| --- | --- |
|200|成功，非常成功|
|301|永久转移（永久重定向）|
|302|临时转移。一般用作服务器负载均衡|
|307|临时转移。网站是https协议的，如果访问http协议，会基于307转移到https协议|
|304|设置缓存。对于不常更新的资源，第一次加载就缓存到服务器，下次直接从缓存中获取|
|400|请求参数错误|
|401|无权限访问|
|404|找不到资源（地址不存在）|
|413|和服务器交互的内容资源超过服务器最大限制|
|500|未知服务器错误|
|503|服务器超负荷|

---

## XHR的一些属性和方法
>**XHR属性**

| 属性名 | 描述 |
| --- | --- |
|xhr.readyState|AJAX状态|
|xhr.status|返回的HTTP状态码|
|xhr.statusText|返回的HTTP状态码的描述|
|xhr.timeout|设置请求超时的时间|
|xhr.withCredentials|是否允许跨域（默认false）|
|xhr.response|响应主体内容|
|xhr.responseText|响应主体内容字符串|
|xhr.responseXML|响应主体内容是XML文档|
|xhr.responseXML|响应主体内容是XML文档|

>**XHR方法**

| 方法名 | 描述 |
| --- | --- |
|xhr.abort()|强制中断AJAX请求|
|xhr.getAllResponseHeaders()|获取所有响应头信息|
|xhr.getResponseHeader([key])|获取key对应的响应头信息|
|xhr.open()|打开URL请求|
|xhr.overrideMimeType()|重写MIME类型|
|xhr.send()|发送AJAX请求|
|xhr.setRequestHeader()|设置请求头（==要在open()之后==）|
