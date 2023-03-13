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
|height|pixels<br>%|规定 `<iframe>` 的高度。|
|width|pixels<br>%|规定 `<iframe>` 的宽度。|
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

## 参考文章
[阮一峰](https://www.bookstack.cn/read/html-tutorial/spilt.1.docs-iframe.md)

[深入浅出iframe](https://www.jianshu.com/p/7ec986aa28a7)
