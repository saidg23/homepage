(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),s=a.n(i),c=(a(13),a(2)),o=a(3),u=a(1),l=a(5),p=a(4),d=(a(14),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={time:"00:00:00 AM"},r.updateTime=r.updateTime.bind(Object(u.a)(r)),r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.updateTime,1e3)}},{key:"updateTime",value:function(){var e=new Date,t=e.getHours(),a=e.getMinutes();a<10&&(a="0"+a);var r=e.getSeconds();r<10&&(r="0"+r);var n=" AM";t>=12&&(n=" PM",t>12&&(t-=12)),t<10&&(t="0"+t),this.setState({time:t+":"+a+":"+r+n})}},{key:"render",value:function(){return n.a.createElement("div",{id:"clock"},this.state.time)}}]),a}(n.a.Component)),m=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={request:new XMLHttpRequest,temperature:"N/A",wind:"N/A",forecast:"N/A",imageUrl:""},r.getWeatherData=r.getWeatherData.bind(Object(u.a)(r)),r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.request.open("GET","https://api.weather.gov/gridpoints/LIX/61,92/forecast"),this.state.request.send(),this.interval=setInterval(this.getWeatherData,1e3)}},{key:"getWeatherData",value:function(){if(0!==this.state.request.status){var e=JSON.parse(this.state.request.responseText);this.setState({temperature:e.properties.periods[0].temperature}),this.setState({wind:"Wind: "+e.properties.periods[0].windSpeed+" "+e.properties.periods[0].windDirection}),this.setState({forecast:e.properties.periods[0].shortForecast}),this.setState({imageUrl:e.properties.periods[0].icon}),clearInterval(this.interval)}}},{key:"render",value:function(){return n.a.createElement("div",{id:"weather"},n.a.createElement("div",{id:"temp-and-icon-div"},n.a.createElement("img",{src:this.state.imageUrl}),n.a.createElement("p",null,this.state.temperature,"\xb0F")),n.a.createElement("p",null,"Kenner, LA"),n.a.createElement("p",null,this.state.forecast," "),n.a.createElement("p",null,this.state.wind))}}]),a}(n.a.Component);var h=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{id:"grid"},n.a.createElement(d,null),n.a.createElement(m,null)))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bb24526d.chunk.js.map