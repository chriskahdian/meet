(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),o=n(20),i=n.n(o),c=(n(27),n(3)),u=n(4),l=n(6),d=n(5),h=(n(28),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={show:!1,showButton:"show details"},e.showDetails=function(){!0===e.state.show?e.setState({show:!1,showButton:"show details"}):e.setState({show:!0,showButton:"hide details"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("div",{className:"summary",children:Object(a.jsx)("h1",{children:e.summary})}),Object(a.jsxs)("div",{className:"eventInfo_collapsed",children:[Object(a.jsxs)("span",{className:"startDateTime",children:[e.start.dateTime," ",e.start.timeZone]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"location",children:["@",e.summary," | ",e.location]})]}),this.state.show&&Object(a.jsxs)("div",{className:"detailInfo",children:[Object(a.jsx)("h2",{children:"About event:"}),Object(a.jsx)("div",{className:"description",children:e.description}),Object(a.jsx)("a",{className:"eventLink",target:"_blank",rel:"noreferrer",href:e.htmlLink,children:"See details on Google Calender"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"showDetails",onClick:this.showDetails,children:this.state.showButton})})]})}}]),n}(s.Component)),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(h,{event:e})},e.id)}))})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a,showSuggestions:!0})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},onBlur:function(){e.setState({showSuggestions:!1})}}),Object(a.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(s.Component),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={numberOfEvents:32},e.submitNumber=function(t){var n=t.target.value;n>32||n<1||""===n?e.setState({infoText:"Please enter number between 1 ~ 32",warningText:"",numberOfEvents:n}):isNaN(n)?(e.setState({infoText:"Please enter number",numberOfEvents:n,warningText:""}),(n.includes("fuck")||n.includes("shit"))&&e.setState({numberOfEvents:n,warningText:"What??!! \ud83e\udd2c\ud83e\udd2c\ud83e\udd2c",infoText:""})):(e.props.updateEvents(null,n),e.setState({numberOfEvents:n,infoText:"",warningText:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberOfEvents",children:[Object(a.jsx)("label",{children:"Number of Events: "}),Object(a.jsx)("input",{type:"text",className:"numberInput",value:this.state.numberOfEvents,onChange:this.submitNumber})]})}}]),n}(s.Component),v=n(7),b=n.n(v),w=n(8),j=n(21),g=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],O=n(9),x=n.n(O),y=n(10),k=n.n(y),S=function(e){var t=(e||[]).map((function(e){return e.location}));return Object(j.a)(new Set(t))},T=function(){var e=Object(w.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(w.a)(b.a.mark((function e(){var t,n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return x.a.done(),e.abrupt("return",{mockData:g,locations:S(g)});case 4:return e.next=6,Z();case 6:if(!(t=e.sent)){e.next=16;break}return N(),n="https://m7iq9z42d6.execute-api.us-west-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,k.a.get(n);case 12:return(a=e.sent).data&&(s=S(a.data.data.items),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(s))),x.a.done(),e.abrupt("return",{events:a.data.data.items,locations:s});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(w.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://m7iq9z42d6.execute-api.us-west-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(s=a.access_token)&&localStorage.setItem("access_token",s),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(w.a)(b.a.mark((function e(){var t,n,a,s,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(s=e.sent){e.next=20;break}return e.next=17,k.a.get("https://m7iq9z42d6.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,o=r.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",s&&C(s));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(n(48),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.updateEvents=function(t,n){var a=e.state,s=a.currentLocation,r=a.numberOfEvents;t?E().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,r);return e.setState({events:a,currentLocation:t,locations:n.locations})})):E().then((function(t){var a=("all"===s?t.events:t.events.filter((function(e){return e.location===s}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,E().then((function(t){e.mounted&&e.setState({events:t.events,locations:t.locations})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)(f,{events:this.state.events,updateEvents:this.updateEvents}),Object(a.jsx)(m,{events:this.state.events})]})}}]),n}(s.Component)),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),r(e),o(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),q()}},[[49,1,2]]]);
//# sourceMappingURL=main.4310cd91.chunk.js.map