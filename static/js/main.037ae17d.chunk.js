(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),s=a(6),u=a.n(s),o=a(17),l=a(2),m=a(3),p=a(5),h=a(4),f=a(18),v=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 03cgmblJ_Snr4my_EghFjM2GCPjlSCwoUu79fhZ-cXY"}}),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("div",{className:"ui action input"},r.a.createElement("input",{placeholder:"Search...",type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}),r.a.createElement("button",{className:"ui button",type:"submit"},"Search")))))}}]),a}(r.a.Component),g=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.imageRef=r.a.createRef(),n.state={spans:0},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(r.a.Component)),d=function(e){var t=e.images.map((function(e){return r.a.createElement(g,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},E=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(b,{onSubmit:this.onSearchSubmit}),r.a.createElement(d,{images:this.state.images}))}}]),a}(r.a.Component);i.a.render(r.a.createElement("div",null,r.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.037ae17d.chunk.js.map