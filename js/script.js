var module,countdown=function(a){function o(f,d){var l=f.getTime();f.setUTCMonth(f.getUTCMonth()+d);return Math.round((f.getTime()-l)/86400000)}function y(f){var d=f.getTime(),l=new Date(d);l.setUTCMonth(f.getUTCMonth()+1);return Math.round((l.getTime()-d)/86400000)}function i(f,d){return f+" "+(1===f?c[d]:b[d])}function e(){}function h(m,l,q,n,f,p){0<=m[q]&&(l+=m[q],delete m[q]);l/=f;if(1>=l+1){return 0}if(0<=m[n]){m[n]=+(m[n]+l).toFixed(p);switch(n){case"seconds":if(60!==m.seconds||isNaN(m.minutes)){break}m.minutes++;m.seconds=0;case"minutes":if(60!==m.minutes||isNaN(m.hours)){break}m.hours++;m.minutes=0;case"hours":if(24!==m.hours||isNaN(m.days)){break}m.days++;m.hours=0;case"days":if(7!==m.days||isNaN(m.weeks)){break}m.weeks++;m.days=0;case"weeks":if(m.weeks!==y(m.refMonth)/7||isNaN(m.months)){break}m.months++;m.weeks=0;case"months":if(12!==m.months||isNaN(m.years)){break}m.years++;m.months=0;case"years":if(10!==m.years||isNaN(m.decades)){break}m.decades++;m.years=0;case"decades":if(10!==m.decades||isNaN(m.centuries)){break}m.centuries++;m.decades=0;case"centuries":if(10!==m.centuries||isNaN(m.millennia)){break}m.millennia++;m.centuries=0}return 0}return l}function k(F,E,D,w,C,u){F.start=E;F.end=D;F.units=w;F.value=D.getTime()-E.getTime();if(0>F.value){var A=D;D=E;E=A}F.refMonth=new Date(E.getFullYear(),E.getMonth(),15);try{F.millennia=0;F.centuries=0;F.decades=0;F.years=D.getUTCFullYear()-E.getUTCFullYear();F.months=D.getUTCMonth()-E.getUTCMonth();F.weeks=0;F.days=D.getUTCDate()-E.getUTCDate();F.hours=D.getUTCHours()-E.getUTCHours();F.minutes=D.getUTCMinutes()-E.getUTCMinutes();F.seconds=D.getUTCSeconds()-E.getUTCSeconds();F.milliseconds=D.getUTCMilliseconds()-E.getUTCMilliseconds();var v;0>F.milliseconds?(v=z(-F.milliseconds/1000),F.seconds-=v,F.milliseconds+=1000*v):1000<=F.milliseconds&&(F.seconds+=g(F.milliseconds/1000),F.milliseconds%=1000);0>F.seconds?(v=z(-F.seconds/60),F.minutes-=v,F.seconds+=60*v):60<=F.seconds&&(F.minutes+=g(F.seconds/60),F.seconds%=60);0>F.minutes?(v=z(-F.minutes/60),F.hours-=v,F.minutes+=60*v):60<=F.minutes&&(F.hours+=g(F.minutes/60),F.minutes%=60);0>F.hours?(v=z(-F.hours/24),F.days-=v,F.hours+=24*v):24<=F.hours&&(F.days+=g(F.hours/24),F.hours%=24);for(;0>F.days;){F.months--,F.days+=o(F.refMonth,1)}7<=F.days&&(F.weeks+=g(F.days/7),F.days%=7);0>F.months?(v=z(-F.months/12),F.years-=v,F.months+=12*v):12<=F.months&&(F.years+=g(F.months/12),F.months%=12);10<=F.years&&(F.decades+=g(F.years/10),F.years%=10,10<=F.decades&&(F.centuries+=g(F.decades/10),F.decades%=10,10<=F.centuries&&(F.millennia+=g(F.centuries/10),F.centuries%=10)));E=0;!(w&1024)||E>=C?(F.centuries+=10*F.millennia,delete F.millennia):F.millennia&&E++;!(w&512)||E>=C?(F.decades+=10*F.centuries,delete F.centuries):F.centuries&&E++;!(w&256)||E>=C?(F.years+=10*F.decades,delete F.decades):F.decades&&E++;!(w&128)||E>=C?(F.months+=12*F.years,delete F.years):F.years&&E++;!(w&64)||E>=C?(F.months&&(F.days+=o(F.refMonth,F.months)),delete F.months,7<=F.days&&(F.weeks+=g(F.days/7),F.days%=7)):F.months&&E++;!(w&32)||E>=C?(F.days+=7*F.weeks,delete F.weeks):F.weeks&&E++;!(w&16)||E>=C?(F.hours+=24*F.days,delete F.days):F.days&&E++;!(w&8)||E>=C?(F.minutes+=60*F.hours,delete F.hours):F.hours&&E++;!(w&4)||E>=C?(F.seconds+=60*F.minutes,delete F.minutes):F.minutes&&E++;!(w&2)||E>=C?(F.milliseconds+=1000*F.seconds,delete F.seconds):F.seconds&&E++;if(!(w&1)||E>=C){var B=h(F,0,"milliseconds","seconds",1000,u);if(B&&(B=h(F,B,"seconds","minutes",60,u))&&(B=h(F,B,"minutes","hours",60,u))&&(B=h(F,B,"hours","days",24,u))&&(B=h(F,B,"days","weeks",7,u))&&(B=h(F,B,"weeks","months",y(F.refMonth)/7,u))){w=B;var t,s=F.refMonth,m=s.getTime(),l=new Date(m);l.setUTCFullYear(s.getUTCFullYear()+1);t=Math.round((l.getTime()-m)/86400000);if(B=h(F,w,"months","years",t/y(F.refMonth),u)){if(B=h(F,B,"years","decades",10,u)){if(B=h(F,B,"decades","centuries",10,u)){if(B=h(F,B,"centuries","millennia",10,u)){throw Error("Fractional unit overflow")}}}}}}}finally{delete F.refMonth}return F}function j(v,u,t,s,q){var n;t=+t||222;s=0<s?s:NaN;q=0<q?20>q?Math.round(q):20:0;"function"===typeof v?(n=v,v=null):v instanceof Date||(v=null!==v&&isFinite(v)?new Date(v):null);"function"===typeof u?(n=u,u=null):u instanceof Date||(u=null!==u&&isFinite(u)?new Date(u):null);if(!v&&!u){return new e}if(!n){return k(new e,v||new Date,u||new Date,t,s,q)}var m=t&1?1000/30:t&2?1000:t&4?60000:t&8?3600000:t&16?86400000:604800000,p,r=function(){n(k(new e,v||new Date,u||new Date,t,s,q),p)};r();return p=setInterval(r,m)}var z=Math.ceil,g=Math.floor,c,b,x;e.prototype.toString=function(){var f=x(this),d=f.length;if(!d){return""}1<d&&(f[d-1]="and "+f[d-1]);return f.join(", ")};e.prototype.toHTML=function(l){l=l||"span";var f=x(this),n=f.length;if(!n){return""}for(var m=0;m<n;m++){f[m]="\x3c"+l+"\x3e"+f[m]+"\x3c/"+l+"\x3e"}--n&&(f[n]="and "+f[n]);return f.join(", ")};x=function(f){var d=[],l=f.millennia;l&&d.push(i(l,10));(l=f.centuries)&&d.push(i(l,9));(l=f.decades)&&d.push(i(l,8));(l=f.years)&&d.push(i(l,7));(l=f.months)&&d.push(i(l,6));(l=f.weeks)&&d.push(i(l,5));(l=f.days)&&d.push(i(l,4));(l=f.hours)&&d.push(i(l,3));(l=f.minutes)&&d.push(i(l,2));(l=f.seconds)&&d.push(i(l,1));(l=f.milliseconds)&&d.push(i(l,0));return d};j.MILLISECONDS=1;j.SECONDS=2;j.MINUTES=4;j.HOURS=8;j.DAYS=16;j.WEEKS=32;j.MONTHS=64;j.YEARS=128;j.DECADES=256;j.CENTURIES=512;j.MILLENNIA=1024;j.DEFAULTS=222;j.ALL=2047;j.setLabels=function(f,d){f=f||[];f.split&&(f=f.split("|"));d=d||[];d.split&&(d=d.split("|"));for(var l=0;10>=l;l++){c[l]=f[l]||c[l],b[l]=d[l]||b[l]}};(j.resetLabels=function(){c="millisecond second minute hour day week month year decade century millennium".split(" ");b="milliseconds seconds minutes hours days weeks months years decades centuries millennia".split(" ")})();a&&a.exports?a.exports=j:"function"===typeof window.define&&window.define.amd&&window.define("countdown",[],function(){return j});return j}(module);countdown(function(a){document.getElementById("h").innerHTML=a.hours;document.getElementById("m").innerHTML=a.minutes;document.getElementById("s").innerHTML=a.seconds},new Date("2014-06-09T23:35:00.000-05:00"),countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
