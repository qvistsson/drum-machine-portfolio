(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Heater-1.b1cfea05.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-2.0d219666.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-3.632e8772.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-4_1.d9de8a50.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-6.3062daca.mp3"},function(e,t,a){e.exports=a.p+"static/media/Dsc_Oh.5c9f8087.mp3"},function(e,t,a){e.exports=a.p+"static/media/Kick_n_Hat.200b4bd3.mp3"},function(e,t,a){e.exports=a.p+"static/media/RP4_KICK_1.09fda256.mp3"},function(e,t,a){e.exports=a.p+"static/media/Cev_H2.abe03961.mp3"},function(e,t,a){e.exports=a.p+"static/media/Chord_1.d8544f3e.mp3"},function(e,t,a){e.exports=a.p+"static/media/Chord_2.3946f9fe.mp3"},function(e,t,a){e.exports=a.p+"static/media/Chord_3.074c0a82.mp3"},function(e,t,a){e.exports=a.p+"static/media/Give_us_a_light.561c9a54.mp3"},function(e,t,a){e.exports=a.p+"static/media/Dry_Ohh.3fa8228b.mp3"},function(e,t,a){e.exports=a.p+"static/media/Bld_H1.484073ff.mp3"},function(e,t,a){e.exports=a.p+"static/media/punchy_kick_1.a6a991c5.mp3"},function(e,t,a){e.exports=a.p+"static/media/side_stick_1.123a99c7.mp3"},function(e,t,a){e.exports=a.p+"static/media/Brk_Snr.cd861874.mp3"},function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(7),i=a.n(o),l=(a(31),a(2)),c=a(3),d=a(1),r=a(5),u=a(4),m=a(8),b=a.n(m),h=a(9),p=a.n(h),v=a(10),f=a.n(v),k=a(11),E=a.n(k),y=a(12),g=a.n(y),w=a(13),S=a.n(w),N=a(14),C=a.n(N),O=a(15),j=a.n(O),L=a(16),x=a.n(L),_=a(17),A=a.n(_),H=a(18),K=a.n(H),P=a(19),R=a.n(P),B=a(20),T=a.n(B),D=a(21),I=a.n(D),W=a(22),M=a.n(W),J=a(23),Q=a.n(J),q=a(24),F=a.n(q),G=a(25),U=a.n(G),X={"Heater Kit":[{label:"Heater 1",sound:new Audio(b.a)},{label:"Heater 2",sound:new Audio(p.a)},{label:"Heater 3",sound:new Audio(f.a)},{label:"Heater 4",sound:new Audio(E.a)},{label:"Clap",sound:new Audio(g.a)},{label:"Open high hat",sound:new Audio(S.a)},{label:"Kick n hat",sound:new Audio(C.a)},{label:"Kick",sound:new Audio(j.a)},{label:"Closed High Hat",sound:new Audio(x.a)}],"Smooth Piano Kit":[{label:"Chord 1",sound:new Audio(A.a)},{label:"Chord 2",sound:new Audio(K.a)},{label:"Chord 3",sound:new Audio(R.a)},{label:"Shaker",sound:new Audio(T.a)},{label:"Open high hat",sound:new Audio(I.a)},{label:"Closed high hat",sound:new Audio(M.a)},{label:"Punchy kick",sound:new Audio(Q.a)},{label:"Side stick",sound:new Audio(F.a)},{label:"Snare",sound:new Audio(U.a)}]},Z=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={soundLabel:"Sound",kit:"Heater Kit",volume:.5},n.sliderChange=n.sliderChange.bind(Object(d.a)(n)),n.toggleKit=n.toggleKit.bind(Object(d.a)(n)),n.setSoundLabel=n.setSoundLabel.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"setSoundLabel",value:function(e){this.setState({soundLabel:e})}},{key:"toggleKit",value:function(){"Smooth Piano Kit"!==this.state.kit?this.setState({kit:"Smooth Piano Kit"}):this.setState({kit:"Heater Kit"})}},{key:"sliderChange",value:function(e){this.setState({volume:e.target.value/100})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row align-items-center min100vh"},s.a.createElement("div",{className:"col"},s.a.createElement(z,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement($,{label:"Q",keyCode:81,soundObject:X[this.state.kit][0],volume:this.state.volume,setSoundLabel:this.setSoundLabel}),s.a.createElement($,{label:"W",keyCode:87,soundObject:X[this.state.kit][1],volume:this.state.volume,setSoundLabel:this.setSoundLabel}),s.a.createElement($,{label:"E",keyCode:69,soundObject:X[this.state.kit][2],volume:this.state.volume,setSoundLabel:this.setSoundLabel}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement($,{label:"A",keyCode:65,soundObject:X[this.state.kit][3],volume:this.state.volume,setSoundLabel:this.setSoundLabel}),s.a.createElement($,{label:"S",keyCode:83,soundObject:X[this.state.kit][4],volume:this.state.volume,setSoundLabel:this.setSoundLabel}),s.a.createElement($,{label:"D",keyCode:68,soundObject:X[this.state.kit][5],volume:this.state.volume,setSoundLabel:this.setSoundLabel}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement($,{label:"Z",keyCode:90,soundObject:X[this.state.kit][6],volume:this.state.volume,setSoundLabel:this.setSoundLabel}),s.a.createElement($,{label:"X",keyCode:88,soundObject:X[this.state.kit][7],volume:this.state.volume,setSoundLabel:this.setSoundLabel}),s.a.createElement($,{label:"C",keyCode:67,soundObject:X[this.state.kit][8],volume:this.state.volume,setSoundLabel:this.setSoundLabel})))),s.a.createElement("div",{className:"col-sm"},s.a.createElement("div",{className:"row mb-2 mt-2 mt-sm-0"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body p-1",id:"display"},this.state.soundLabel)))),s.a.createElement("div",{className:"row mb-2"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body p-1"},s.a.createElement("label",{htmlFor:"volume",className:"d-block"},this.state.volume<.02?s.a.createElement("i",{className:"fas fa-volume-off"}):this.state.volume>.7?s.a.createElement("i",{className:"fas fa-volume-up"}):s.a.createElement("i",{className:"fas fa-volume-down"})),s.a.createElement("input",{type:"range",id:"volume",name:"volume",min:"0",max:"100",value:100*this.state.volume,onChange:this.sliderChange}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body p-1"},s.a.createElement("p",null,this.state.kit),s.a.createElement(V,{toggleKit:this.toggleKit})))))))))))}}]),a}(s.a.Component),$=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).buttonRef=null,n.soundObjectRef=null,n.keyTriggerPlay=n.keyTriggerPlay.bind(Object(d.a)(n)),n.soundPlay=n.soundPlay.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.buttonRef=document.getElementById(String(this.props.keyCode)),this.soundObjectRef=document.getElementById(this.props.label),document.addEventListener("keydown",this.keyTriggerPlay)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyTriggerPlay)}},{key:"keyTriggerPlay",value:function(e){e.keyCode===this.props.keyCode&&(this.buttonRef.focus(),this.buttonRef.click())}},{key:"soundPlay",value:function(){this.props.setSoundLabel(this.props.soundObject.label),this.soundObjectRef.volume=this.props.volume,this.soundObjectRef.currentTime=0,this.soundObjectRef.play()}},{key:"render",value:function(){return s.a.createElement("button",{type:"button",className:"btn btn-outline-primary sound-btn m-1 drum-pad",onClick:this.soundPlay,id:String(this.props.keyCode)},this.props.label,s.a.createElement("audio",{src:this.props.soundObject.sound.src,className:"clip",id:this.props.label}))}}]),a}(s.a.Component);function z(e){return s.a.createElement("div",{className:"card card-max text-center mx-auto",id:"drum-machine"},s.a.createElement("div",{className:"card-header"},"Drum Machine"),s.a.createElement("div",{className:"card-body"},e.children),s.a.createElement("div",{className:"card-footer text-muted"},"by"," ",s.a.createElement("a",{href:"https://github.com/qvistsson",target:"_blank",rel:"noopener noreferrer"},"Qvistsson")))}function V(e){return s.a.createElement("label",{className:"kit-switch"},s.a.createElement("input",{type:"checkbox",onClick:e.toggleKit}),s.a.createElement("span",{className:"slider round"}))}var Y=Z;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.9b06c508.chunk.js.map