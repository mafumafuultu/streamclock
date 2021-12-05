# Stream Clock

![](https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=blue)

## DL
[DOWNLOAD](https://github.com/mafumafuultu/streamclock/archive/refs/heads/main.zip)

![](./img/sample.png)

## Demo

[Theme & style select](https://mafumafuultu.github.io/streamclock/debug.html)


### Theme
`https://mafumafuultu.github.io/streamclock/?theme=~~~~`

[default](https://mafumafuultu.github.io/streamclock/?style=default)  
[warabe](https://mafumafuultu.github.io/streamclock/?theme=warabe&style=default)  
[lilith](https://mafumafuultu.github.io/streamclock/?theme=lilith&style=default)  
[kirara](https://mafumafuultu.github.io/streamclock/?theme=kirara&style=default)  
[momo](https://mafumafuultu.github.io/streamclock/?theme=momo&style=default)  
[nia](https://mafumafuultu.github.io/streamclock/?theme=nia&style=default)  
[iroha](https://mafumafuultu.github.io/streamclock/?theme=iroha&style=default)  
[regrush](https://mafumafuultu.github.io/streamclock/?theme=regrush&style=default)  
[shin](https://mafumafuultu.github.io/streamclock/?theme=shin&style=default)  

### Style
`https://mafumafuultu.github.io/streamclock/?theme=default&style=~~~~`

[default](https://mafumafuultu.github.io/streamclock/?theme=default)  
[live](https://mafumafuultu.github.io/streamclock/?theme=default&style=live)  
[long](https://mafumafuultu.github.io/streamclock/?theme=default&style=long)  


## obs
default size: 233x150
![](./img/obs.jpg)

OBSでfontを変更する場合 `#clock` の `font-family` を変更するか、WebFontを使用してください

```css
@font-face {
  font-family: 'customfont';
  src: url() format()
}
body {background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden;opacity: 0.8}
#clock { font-family: 'customfont'; }
```