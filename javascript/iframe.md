---
html:
    toc: true
---

## 基本用法
+ `<iframe>`标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，==如果浏览器不支持`<iframe>`，就会显示内部的子元素。==
```html
<iframe src="https://www.example.com"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p><a href="https://www.example.com">点击打开嵌入页面</a></p>
</iframe>
```
上面的代码在当前网页嵌入https://www.example.com，显示区域的宽度是100%，高度是500像素。如果当前浏览器不支持`<iframe>`，则会显示一个链接，让用户点击。
浏览器普遍支持`<iframe>`，所以内部的子元素可以不写。

---

## `<iframe>`的属性
| 属性 | 值 | 描述 |
| --- | --- | --- |
|align|left<br>right<br>top<br>middle<br>bottom|<font color=red>HTML5 不支持。HTML 4.01 已废弃。</font> 规定如何根据周围的元素来对齐 `<iframe>`。|
|frameborder|1<br>0|<font color=red>HTML5 不支持。</font> 规定是否显示 `<iframe>` 周围的边框。|
|height|pixels<br>%|规定 `<iframe>` 的高度。建议使用css设置。|
|width|pixels<br>%|规定 `<iframe>` 的宽度。建议使用css设置。|
|longdesc|URL|<font color=red>HTML5 不支持。</font> 规定一个页面，该页面包含了有关 `<iframe>` 的较长描述。|
|marginheight|pixels|<font color=red>HTML5 不支持。</font> 规定 `<iframe>` 的顶部和底部的边距。|
|marginwidth|pixels|<font color=red>HTML5 不支持。</font> 规定 `<iframe>` 的左侧和右侧的边距。|
|name|frame_name|规定 `<iframe>` 的名称。可以用于`<a>`、`<form>`、`<base>`的 ==target== 属性。|
|sandbox|""<br>allow-forms<br>allow-same-origin<br>allow-scripts<br>allow-top-navigation|<font color=red>HTML5 新属性。</font> 对 `<iframe>` 的内容定义一系列额外的限制。|
|scrolling|yes<br>no<br>auto|<font color=red>HTML5 不支持。</font> 规定是否在 `<iframe>` 中显示滚动条。|
|seamless|seamless|<font color=red>HTML5 新属性。</font> 规定 `<iframe>` 看起来像是父文档中的一部分。|
|src|URL|规定在 `<iframe>` 中显示的文档的 URL。|
|srcdoc|HTML_code|<font color=red>HTML5 新属性。</font> 规定页面中的 HTML 内容显示在 `<iframe>` 中。|
[菜鸟教程](https://www.w3school.com.cn/tags/tag_iframe.asp)

---

## 获取iframe里的内容
>通过 ==contentWindow== 和 ==contentDocument== 两个API获取iframe的 ==window对象== 和 ==document对象==。
```javascript
let iframe = document.getElementById("iframe1");
let iwindow = iframe.contentWindow;
let idoc = iframe.contentDocument;
console.log("window",iwindow);//获取iframe的window对象
console.log("document",idoc);  //获取iframe的document
console.log("html",idoc.documentElement);//获取iframe的html
console.log("head",idoc.head);  //获取head
console.log("body",idoc.body);  //获取body
```
---

## 在iframe中获取父级内容
> 在同域下，父页面可以获取子 iframe 的内容，那么子 iframe 同样也能操作父页面内容。在 iframe 中，可以通过在 window 上挂载的几个API进行获取。
```javascript
//获取上一级的window对象，如果还是iframe则是该iframe的window对象
window.parent 
//获取最顶级容器的window对象，即，就是你打开页面的文档
window.top 
//返回自身window的引用。可以理解 window===window.self(脑残)
window.self 
```
![ifame父级](https://upload-images.jianshu.io/upload_images/7162582-53d566dcd1f1505f.png?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp)

---

## 防嵌套网页
比如，最出名的clickhacking就是使用iframe来 拦截click事件。因为iframe享有着click的最优先权，当有人在伪造的主页中进行点击的话，如果点在iframe上，则会默认是在操作iframe的页面。 所以，钓鱼网站就是使用这个技术，通过诱导用户进行点击，比如，设计一个"妹妹寂寞了"等之类的网页，诱导用户点击，但实际结果，你看到的不是"妹妹",而是被恶意微博吸粉。
+ ==**为了防止网站被钓鱼，可以使用 <font color=red>window.top</font> 来防止我们页面被嵌套**==
```javascript
if(window != window.top){
    window.top.location.href = window.location.href;
}
```
+ ==**如果你想引用同域的框架的话，可以判断域名**==
```javascript
if (window.top.location.host != window.location.host) {
　　window.top.location.href = window.location.href;
}
```


---
## 参考文章
[阮一峰](https://www.bookstack.cn/read/html-tutorial/spilt.1.docs-iframe.md)

[深入浅出iframe](https://www.jianshu.com/p/7ec986aa28a7)

[iframe,我们来谈一谈](https://segmentfault.com/a/1190000004502619#articleHeader5)