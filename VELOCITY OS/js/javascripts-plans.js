(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var i=n(1),o=n(4),a=n.n(o),s=(n(22),n(29),n(15)),r=n(13),l=n(8),h=n(24),c=n(27);class v extends s.a{static get Defaults(){return i.a.extend({},s.a.Defaults,{enableMq:"md-up",enableHover:!0,enableTouch:!0,contentSelector:".sticky__sticky",animated:!1,contentSizeSelector:".js-sticky-content",easing:!1})}init(){this.$content=this.$container.find(this.options.contentSelector),this.$contentSizer=this.$container.find(this.options.contentSizeSelector),this.$scrollParent=this.$container.scrollParent(),this.constraints={},this.position=0,this.isVisible=!1,this.imagesLoaded=!1,this.anmation=null,this.stickyContentHeight=0,this.updateConstraints=this.updateConstraints.bind(this),this.handleAfterResize=this.handleAfterResize.bind(this),this.reset=this.reset.bind(this)}enable(){if(super.enable()){if(l.a.add(l.a.QUEUE_RESET,this.reset),l.a.add(l.a.QUEUE_MEASURE,this.updateConstraints),l.a.add(l.a.QUEUE_APPLY,this.handleAfterResize),l.a.run(),this.$scrollParent.on("scroll."+this.ns,this.handleScroll.bind(this)),this.$container.inview({enter:()=>{this.isVisible=!0,this.handleResize(),this.handleViewportEnter()},leave:()=>{this.isVisible=!1}}),this.options.animated){const e="boolean"==typeof this.options.animated?{}:this.options.animated;this.animation=new r.a(this.position,{strength:e.strength||.05,precision:1e-4,update:this.update.bind(this)})}return!0}}disable(){if(super.disable())return l.a.remove(l.a.QUEUE_RESET,this.reset),l.a.remove(l.a.QUEUE_MEASURE,this.updateConstraints),l.a.remove(l.a.QUEUE_APPLY,this.handleAfterResize),Object(i.a)(window).add(document).off("."+this.ns),this.$container.inview("destroy"),this.animation&&(this.animation.destroy(),this.animation=null,this.update(this.position)),!0}showAllImages(){this.imagesLoaded||(this.imagesLoaded=!0,this.$container.find('[data-plugin~="appear"]').appear("show"))}handleResize(){this.updateConstraints(),this.handleAfterResize(),this.handleScroll(!0)}getConstraints(){const e=this.$container.pageOffset().top,t=this.$container.height(),n=Math.max(0,t-window.innerHeight);return{scrollFrom:e,scrollTo:e+n,distance:n}}updateConstraints(){this.constraints=this.getConstraints()}handleScroll(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.constraints||!this.isVisible)return;const t=this.constraints,n=this.$scrollParent.scrollTop();let i=0;if(this.options.easing){const e=-0*window.innerHeight,o=1.2*window.innerHeight,a=t.scrollFrom-e,s=t.scrollFrom+o,r=t.scrollTo-o,l=t.scrollTo+e,v=1.2*window.innerHeight/(t.scrollTo-t.scrollFrom);n>=a&&n<s?(i=Object(c.a)(n,a,s,0,1),i=Object(h.j)(null,i,0,1,1),i*=v):n>=r&&l?(i=Object(c.a)(n,r,l,0,1),i=Object(h.i)(null,i,0,1,1),i=i*v+(1-v)):i=Object(c.a)(n,t.scrollFrom,t.scrollTo,0,1)}else i=(n-t.scrollFrom)/(t.scrollTo-t.scrollFrom);const o=Math.max(0,Math.min(1,i));o===this.position&&!0!==e||(this.position=o,this.animation?this.animation.set(o):this.update(o))}handleAfterResize(){this.animation?this.update(this.animation.get()):this.update(this.position)}update(e){}reset(){const e=this.$contentSizer;if(e.length){e.get(0).style.removeProperty("--sticky-content-height");const t=this.getStickyContentHeight();t!==this.stickyContentHeight&&(this.stickyContentHeight=t,this.$container.get(0).style.setProperty("--sticky-content-height",t+"px"),this.$container.trigger("appear"))}}getStickyContentHeight(){return this.$contentSizer.innerHeight()}handleViewportEnter(){this.showAllImages()}}class f extends v{static get Defaults(){return i.a.extend({},v.Defaults,{enableMq:"md-up",easing:!0})}init(){if(this.$sliderContent=this.$container.find("[data-sticky-slider-content]"),this.height=0,this.contentHeight=0,!this.$sliderContent.length)throw new Error("StickySlider content `[data-sticky-slider-content]` not found");super.init()}enable(){super.enable()&&(this.$sliderContent.attr("data-sticky-slider-content-ready",""),this.handleResize())}disable(){super.disable()&&(this.$sliderContent.css("transform",""),this.$sliderContent.removeAttr("data-sticky-slider-content-ready"),this.$container.css("min-height",""),this.$container.get(0).style.removeProperty("--sticky-full-height"))}getConstraints(){const e=super.getConstraints(),t=this.$sliderContent;return i.a.extend(e,{contentHeight:t.height(),maxScroll:Math.max(0,t.get(0).scrollWidth-t.get(0).offsetWidth)})}handleAfterResize(){super.handleAfterResize();const e=this.$container,t=this.constraints.maxScroll+window.innerHeight,n=this.constraints.contentHeight;t===this.height&&n===this.contentHeight||(this.height=t,this.contentHeight=n,e.css("min-height",t+"px"),e.get(0).style.setProperty("--sticky-full-height",t+"px"),e.get(0).style.setProperty("--sticky-content-height",n+"px"),e.trigger("resize").trigger("appear"))}update(e){const t=e*this.constraints.maxScroll*-1;this.$sliderContent.css("transform",`translateX(${t}px)`),this.$container.trigger("move.sticky-slider",{position:e,offset:t})}reset(){this.$sliderContent.css("transform",""),this.$container.trigger("move.sticky-slider",{position:0,offset:0})}}i.a.fn.stickySlider=a()(f)},183:function(e,t){e.exports="#define M_PI 3.1415926535897932384626433832795\n\nprecision highp float;\n\nattribute float alpha;\n\nuniform float revealAnimation; // Reveal animation progress, in range [0, 1]\nuniform float size;\nuniform float time;\nuniform float speed;\nuniform vec3 objectSize;\nuniform vec2 mouse; // in range [-1, 1]\nuniform vec2 mouseAnimated; // in range [-1, 1]\n\nuniform vec3 colorA;\nuniform vec3 colorB;\nuniform vec3 colorC;\n\nvarying vec3 vColor;\nvarying float vAlpha;\n\n// Depth test\nvarying float vViewZDepth;\n\n\n// Noise\nfloat rand(vec2 n) {\n\treturn fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 p){\n\tvec2 ip = floor(p);\n\tvec2 u = fract(p);\n\tu = u*u*(3.0-2.0*u);\n\n\tfloat res = mix(\n\t\tmix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),\n\t\tmix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);\n\treturn res*res;\n}\n\n\nfloat wave(float x, float size) {\n    float position = mod(x, 1.0);\n    if (position > 0.0 && position < size) {\n        float progress = position / size;\n        return sin(smoothstep(0.0, 1.0, progress) * M_PI);\n    } else {\n        return 0.0;\n    }\n}\n\n// Generate waves\nfloat waves (vec3 position) {\n    float velocity = time * speed;\n    float velocityAnimated = (time + mouseAnimated.y * 10.0) * speed;\n\n    // x and z are inverted in this visualization\n    float z = position.x / objectSize.x; // in range [-0.5, 0.5]\n    float x = position.z / objectSize.z; // in range [-0.5, 0.5]\n\n    // Waves\n    float wave1 = wave(x + velocity * 0.02 + 0.0, 0.5) * wave(z - 0.25, 0.3) * ${ wave1(0.3) };\n\n    float wave2 = wave(x + velocity * 0.02 + 0.0, 0.5) * wave(z - 0.25, 0.3) * ${ wave2(0.3) };\n    wave2 = wave2 + wave(x + velocity * 0.02 - 0.05, 0.2) * wave(z - 0.25, 0.3) * 0.3;\n\n    float wave6 = wave(x + velocity * 0.01 + 0.3, 0.5) * wave(z - 0.1, 0.3) * ${ wave6(0.3) };\n    float wave7 = wave(x + velocity * 0.03 - 0.3, 0.5) * wave(z - 0.15, 0.2) * ${ wave7(0.3) };\n\n    // Large wave in the middle\n    float waveMidLarge = cos(clamp(x * 10.0 + sin(z * 10.0 * .5 + velocityAnimated * 0.12) * 3., -M_PI, M_PI)) * .5 + .5;\n    waveMidLarge = pow(abs(waveMidLarge), 4.) * sin(z * 10.0 * .5 + velocity * 0.15) * ${ waveMidLarge(-0.5) };\n\n    float waveMidMedium = cos(clamp(z * 25.0 + sin(x * 25.0 * .5 + velocity * 0.1) * 3., -M_PI, M_PI)) * .5 + .5;\n    waveMidMedium = pow(abs(waveMidMedium), 4.) * sin(x * 10.0 * .5 + velocityAnimated * 0.1) * 0.3;\n\n    // Large soft wave at the back\n    float waveBackLargeSoft1 = wave(z + velocity * 0.01 + -0.4, 0.5) * wave(x - 0.3, 1.0) * ${ waveBackLargeSoft1(-0.5) };\n    float waveBackLargeSoft2 = wave(z + velocity * 0.024 + 0.1, 0.5) * wave(x - 0.23, 1.0) * ${ waveBackLargeSoft2(0.4) };\n\n    // Small soft waves\n    float waveSmallSoft1 = (sin(x * 100.0 + velocity * 0.5) + cos(x * 80.0+ velocity * 0.6) + sin(x * 60.0 + velocity * 0.7)) * 0.05;\n    waveSmallSoft1 = waveSmallSoft1 * wave(z - 0.1, 0.25) * ${ waveSmallSoft1(0.2) };\n\n    float waveSmallSoft2 = (sin(x * 95.0 + velocity * 0.7) + cos(x * 75.0 + velocity * 0.6) + sin(x * 55.0 + velocity * 0.5)) * 0.075;\n    waveSmallSoft2 = waveSmallSoft2 * wave(z + 0.4, 0.25) * ${ waveSmallSoft2(0.2) };\n\n    float waveSmallSoft3 = (sin(x * 70.0 + velocityAnimated * 0.45) + cos(x * 50.0 + velocity * 0.35) + sin(x * 30.0 + velocityAnimated * 0.45)) * 0.06;\n    waveSmallSoft3 = waveSmallSoft3 * wave(z + 0.3, 0.25) * ${ waveSmallSoft3(-1.0) };\n\n    float waveSmallSoft4 = (sin(x * 60.0 + velocity * 0.5) + cos(x * 40.0 + velocityAnimated * 0.35) + sin(x * 20.0 + velocity * 0.65)) * 0.075;\n    waveSmallSoft4 = waveSmallSoft4 * wave(z + 0.01, 0.25) * ${ waveSmallSoft4(0.65) };\n\n    float waveZ = sin(z * 20.0 + velocity * -0.2) * 0.1;\n\n    // Far side lower, closer side higher\n    float slope = x * -2.0;\n\n    // Wave height\n    float waveHeight = objectSize.y;\n\n    // Falloff, using ${} to add static properties to GUI\n    float falloff = (1.0 - smoothstep(${ falloffFrom(0.0) }, ${ falloffTo(-0.45) }, x));\n\n    return ((wave1 + wave2 + wave6 + wave7 + waveMidLarge + waveMidMedium + waveBackLargeSoft1 + waveBackLargeSoft2 + waveSmallSoft1 + waveSmallSoft2 + waveSmallSoft3 + waveSmallSoft4 + waveZ) * falloff + slope) * waveHeight;\n}\n\n// Returns offset for reveal animation, used for position and alpha animation\nfloat getRevealAnimationOffset (vec3 position, float offset) {\n    // float x = position.x / objectSize.x + 0.5; // in range [0.0, 1.0]\n    float z = position.z / objectSize.z + 0.5; // in range [0.0, 1.0]\n\n    float index = z;\n    float s = index + 1.0 - offset;\n    float e = -(1.0 - index);\n    float pos = smoothstep(0.0, 1.0, (e - s) * revealAnimation + s);\n\n    return pos;\n}\n\nfloat mid (float value, float minValue, float maxValue) {\n    return 1.0 - abs((value - minValue) / (maxValue - minValue) * 2.0 - 1.0);\n}\n\nvec3 waveReflection (vec3 color, float screenX, float z) {\n    float diff = 0.75;\n\n    // Reflection only on part of the screen\n    float screenPart = mid(screenX, mouseAnimated.x - 0.3, mouseAnimated.x + 0.3);\n    diff = smoothstep(0.0, 1.0, diff * screenPart);\n\n    //\n    float n = noise(vec2(position.x / 10.0 + time / 5.0, position.z / 10.0));\n    diff = diff * n;\n\n    // Make color lighter\n    diff = 1.0 + diff * 2.5;\n\n    color = color * diff;\n    color.r = clamp(color.r, 0.0, 1.0);\n    color.g = clamp(color.g, 0.0, 1.0);\n    color.b = clamp(color.b, 0.0, 1.0);\n\n    return color;\n}\n\nvoid main() {\n    vAlpha = alpha;\n\n    vec3 vPosition = position;\n    float vSizeMultiplier = 0.0;\n\n    // Waves\n    vPosition.y = vPosition.y - waves(position);\n\n    // Wave color\n    vec4 mvPosition = modelViewMatrix * vec4( vPosition, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n\n    // Perspective divide/normalize\n    // Get screen coordinates, in range [-1, 1]\n    float screenX = gl_Position.x / gl_Position.w;\n\n    if (screenX < 0.0) {\n        vColor = mix(colorA, colorB, screenX + 1.0);\n    } else {\n        vColor = mix(colorB, colorC, screenX);\n    }\n\n    vColor = waveReflection(vColor, screenX, vPosition.z / objectSize.z);\n\n    // Reveal animation\n    vAlpha = vAlpha * (1.0 - getRevealAnimationOffset(position, 0.2));\n    vPosition.y = vPosition.y + getRevealAnimationOffset(position, 0.4) * objectSize.y * 0.3;\n\n    // Position\n    mvPosition = modelViewMatrix * vec4( vPosition, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n\n    // Point size\n    gl_PointSize = size * ( 300.0 / -mvPosition.z ) * (1.0 + vSizeMultiplier);\n\n    // For depth test, used by depth shader\n    vViewZDepth = gl_Position.y / gl_Position.w * 50.0 + 20.0;\n}\n"},184:function(e,t){e.exports="uniform vec3 color;\nuniform sampler2D pointTexture;\n\nvarying vec3 vColor;\nvarying float vAlpha;\n\nvoid main() {\n    gl_FragColor = vec4( vColor, 1.0 );\n    gl_FragColor.w = texture2D( pointTexture, gl_PointCoord ).w * vAlpha;\n}\n"},185:function(e,t){e.exports="#define M_PI 3.1415926535897932384626433832795\n\nprecision highp float;\n\nattribute float alpha;\n\nuniform float revealAnimation; // Reveal animation progress, in range [0, 1]\nuniform float size;\nuniform float time;\nuniform float speed;\nuniform vec3 objectSize;\nuniform vec2 mouse; // in range [-1, 1]\nuniform vec2 mouseAnimated; // in range [-1, 1]\n\nuniform vec3 colorA;\nuniform vec3 colorB;\nuniform vec3 colorC;\n\nvarying vec3 vColor;\nvarying float vAlpha;\n\n// Depth test\nvarying float vViewZDepth;\n\nfloat wave(float x, float size) {\n    float position = mod(x, 1.0);\n    if (position > 0.0 && position < size) {\n        float progress = position / size;\n        return sin(smoothstep(0.0, 1.0, progress) * M_PI);\n    } else {\n        return 0.0;\n    }\n}\n\n// Generate waves\nfloat waves (vec3 position) {\n    float velocity = time * speed;\n    float velocityAnimated = (time + mouseAnimated.y * 10.0) * speed;\n    float x = position.x / objectSize.x; // in range [-0.5, 0.5]\n    float z = position.z / objectSize.z; // in range [-0.5, 0.5]\n\n    // Large soft wave at the back\n    float waveBackLargeSoft1 = wave(x + velocity * 0.01 + 0.4, 0.5) * wave(z - 0.3, 1.0) * 0.6;\n    float waveBackLargeSoft2 = wave(x + velocity * 0.012 + 0.6, 0.5) * wave(z - 0.23, 1.0) * 0.6;\n\n    // Left side lower, right side higher\n    float slope = x * -2.0;\n    float slopeZ = (z + 0.5) * 1.0;\n\n    // Wave height\n    float waveHeight = objectSize.y;\n\n    return (waveBackLargeSoft1 + waveBackLargeSoft2 + slopeZ) * (1.0 - smoothstep(0.4, 0.55, z)) * waveHeight;\n}\n\n// Returns offset for reveal animation, used for position and alpha animation\nfloat getRevealAnimationOffset (vec3 position, float offset) {\n    float z = position.z / objectSize.z + 0.5; // in range [0.0, 1.0]\n\n    float index = z;\n    float s = index + 1.0 - offset;\n    float e = -(1.0 - index);\n    float pos = smoothstep(0.0, 1.0, (e - s) * revealAnimation + s);\n\n    return pos;\n}\n\nvoid main() {\n    vAlpha = 1.0;\n\n    vec3 vPosition = vec3(0.0, 0.0, 0.0);\n    vec3 vSphere = vec3(0.0, 0.0, 0.0);\n\n    // Waves\n    vPosition = position;\n    vPosition.y = vPosition.y - waves(position);\n\n    // Wave color\n    vec4 mvPosition = modelViewMatrix * vec4( vPosition, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n\n    // Perspective divide/normalize\n    // Get screen coordinates, in range [-1, 1]\n    float screenX = gl_Position.x / gl_Position.w;\n\n    if (screenX < 0.0) {\n        vColor = mix(colorA, colorB, screenX + 1.0);\n    } else {\n        vColor = mix(colorB, colorC, screenX);\n    }\n\n    // Fade out when Z is further away from camera\n    float z = position.z / objectSize.z; // in range [-0.5, 0.5]\n    vAlpha = smoothstep(0.0, 1.0, z * 2.0);\n\n    // Reveal animation\n    if (revealAnimation < 1.0) {\n        vAlpha = vAlpha * (1.0 - getRevealAnimationOffset(position, 0.2));\n        vPosition.y = vPosition.y + getRevealAnimationOffset(position, 0.4) * objectSize.y * 0.3;\n    }\n\n    // Position\n    mvPosition = modelViewMatrix * vec4( vPosition, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n\n    // For depth test, used by depth shader\n    vViewZDepth = -mvPosition.z;\n}\n"},186:function(e,t){e.exports="varying vec3 vColor;\nvarying float vAlpha;\n\nvoid main() {\n    gl_FragColor = vec4(vColor, 1.0) * 0.3; // darken by 70%\n    // gl_FragColor = vec4(1.0);\n    gl_FragColor.w = vAlpha;\n}\n"},344:function(e,t,n){n(21),n(108),e.exports=n(370)},370:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(4),a=n.n(o),s=n(19),r=(n(25),n(0)),l=n(10),h=n(3);let c=null;function v(){if(!c){const e=document.createElement("canvas"),t=32,n=10;e.width=e.height=2*t;const i=e.getContext("2d");i.clearRect(0,0,e.width,e.height),i.beginPath(),i.arc(t,t,n,0,2*Math.PI,!1),i.fillStyle="#fff",i.fill(),$(e).css({position:"fixed",left:100,top:0}),c=new r.d(e)}return c}var f=n(183),d=n.n(f),m=n(184),u=n.n(m),p=n(185),g=n.n(p),w=n(186),x=n.n(w),z=n(30);const S=[0,-25,100],y=[.226,0,0],b=[300,10,150],P=[0,20,0],A=[0,10,0],M=[8421776,3425908,3638158],C=[14,27],R=(C[0]+C[1])/2,k={focalDepth:R,fstop:.42,maxblur:.8,showFocus:!1,manualdof:!1,vignetting:!0,depthblur:!1,shaderFocus:!1,threshold:.5,gain:2,bias:.5,fringe:.7,focalLength:16,noise:!1,pentagon:!1,dithering:1e-4,znear:4,zfar:150},j={x:{from:0,to:0},y:{from:-2/180*Math.PI,to:2/180*Math.PI},z:{from:0,to:0}},D=Object(z.b)(d.a);function E(e){return 100*h.a.lvh()/1200*(e||4)}function _(){const e=100*h.a.lvh();return window.innerWidth/e}n(26);var F=n(9),L=n.n(F),T=n(5),B=n(13),H=n(18);function O(){const e=new r.c,t=new Float32Array(15e4),n=new Float32Array(5e4),i=new r.v,o=Math.floor(Math.sqrt(b[0]/b[2]*5e4)),a=5e4/o;for(let e=0;e<5e4;e++){const s=Math.floor(e/o)/a,r=e%o/o;i.x=b[0]*(r-.5)+P[0],i.z=b[2]*(s-.5)+P[2],i.y=P[1],i.toArray(t,3*e),n[e]=Object(H.a)(1.5*s,0,1)}return e.setAttribute("position",new r.g(t,3)),e.setAttribute("alpha",new r.b(n,1)),new r.m(e,new r.q({uniforms:Object.assign({colorA:{value:new r.e(M[0])},colorB:{value:new r.e(M[1])},colorC:{value:new r.e(M[2])},mouse:{value:new r.u(0,0)},mouseAnimated:{value:new r.u(0,0)},pointTexture:{value:v()},time:{value:0},speed:{value:.3},size:{value:E()},revealAnimation:{value:0},screenRatio:{value:_()},animation:{value:0},objectSize:{value:new r.v(b[0],b[1],b[2])}},D.props),vertexShader:D.shader,fragmentShader:u.a,depthTest:!1,transparent:!0}))}function V(){const e=Math.floor(Math.sqrt(b[0]/b[2]*5e4)),t=5e4/e,n=new r.l(b[0],b[2],e,t),i=n.attributes.position.array,o=Math.floor(i.length/3);for(let e=0;e<o;e++){const t=3*e,n=i[t+1];i[t]+=A[0],i[t+1]=i[t+2]+A[1],i[t+2]=n+A[2]}return new r.i(n,new r.q({uniforms:{colorA:{value:new r.e(M[0])},colorB:{value:new r.e(M[1])},colorC:{value:new r.e(M[2])},time:{value:0},speed:{value:.3},revealAnimation:{value:0},animation:{value:0},objectSize:{value:new r.v(b[0],b[1],b[2])}},vertexShader:g.a,fragmentShader:x.a,blending:r.a,depthTest:!1,transparent:!0}))}class W{constructor(e){this.controller=e,this.camera=null,this.scene=null,this.mesh=null,this.renderer=null,this.controls=null,this.revealProgress=new B.a(0,{strength:.01,update:this.handleRevealProgressChange.bind(this)}),this.dotSize=4,e.on("resize",L()(this.handleResize.bind(this),60)),e.on("tick",this.render.bind(this)),this.initCamera(),this.initScene(),this.initRenderer(),this.initControls()}reveal(){this.revealProgress.set(1)}setRotation(e,t,n){this.setRotationOnMesh(e,t,n)}setRotationOnMesh(e,t,n){const i=Object(T.a)(j.x.from,j.x.to,t),o=Object(T.a)(j.y.from,j.y.to,e),a=Object(T.a)(j.z.from,j.z.to,n);this.mesh.rotation.set(i,o,a)}handleRevealProgressChange(e){const t=this.mesh.material,n=this.controller.postprocessing.materialDepth;this.meshBackdrop.material.uniforms.revealAnimation.value=e,t.uniforms.revealAnimation.value=e,n.uniforms.revealAnimation.value=e}setMouseFocalDepth(e){this.controller.postprocessing.setFocalDepth(e)}initCamera(){this.camera=function(){const e=new r.k(50,window.innerWidth/(100*h.a.lvh()),.1,1e3);return e.position.set(S[0],S[1],S[2]),e.rotation.set(y[0],y[1],y[2]),e}()}initControls(){this.controller.options.debug,0}initScene(){const e=this.scene=new r.p,t=this.mesh=O();e.add(t);const n=this.meshBackdrop=V();e.add(n)}initRenderer(){const e=this.renderer=new r.y;if(e.setPixelRatio(1),e.setSize(window.innerWidth,100*h.a.lvh()),e.toneMapping=r.o,e.autoClear=!1,this.controller.$canvas.append(e.domElement),!1===e.capabilities.isWebGL2&&!1===e.extensions.has("ANGLE_instanced_arrays"))throw new Error("WebGL2 is not supported")}handleResize(e){let{width:t,height:n}=e;var i;(i=this.camera).aspect=window.innerWidth/(100*h.a.lvh()),i.updateProjectionMatrix(),this.renderer.setSize(t,n),this.updateMaterialDotSize(),this.mesh.material.uniforms.screenRatio.value=_(),this.controller.postprocessing.materialDepth.uniforms.screenRatio.value=_()}updateMaterialDotSize(){this.mesh.material.uniforms.size.value=E(this.dotSize)}render(e){this.mesh.material.uniforms.time.value=.005*e,this.meshBackdrop.material.uniforms.time.value=.005*e,this.controller.postprocessing.isEnabled||(this.renderer.clear(),this.renderer.render(this.scene,this.camera))}}var I=n(6);class U{constructor(e){this.controller=e,this.mouseAnimation=new B.a({x:0,y:(R-C[0])/(C[1]-C[0])-.5},{strength:.04,update:this.updateMouseAnimated.bind(this)}),I.a.hasHoverSupport()&&(e.on("start",this.handleVisuzalizationStart.bind(this)),e.on("stop",this.handleVisuzalizationStop.bind(this)))}handleVisuzalizationStart(){$(document).on("mousemove."+this.controller.ns,this.handleMouseMove.bind(this))}handleVisuzalizationStop(){$(document).off("mousemove."+this.controller.ns)}handleMouseMove(e){const t=this.controller.$canvas.get(0).getBoundingClientRect().top,n=e.clientX,i=e.clientY-t,o=this.controller.app.mesh.material,a=this.controller.postprocessing.materialDepth,s=n/window.innerWidth*2-1,r=i/(100*h.a.lvh())*2-1;o.uniforms.mouse.value.set(s,r),a.uniforms.mouse.value.set(s,r),this.mouseAnimation.set({x:s,y:r})}updateMouseAnimated(e){let{x:t,y:n}=e;const i=this.controller.app.mesh.material,o=this.controller.postprocessing.materialDepth;i.uniforms.mouseAnimated.value.set(t,n),o.uniforms.mouseAnimated.value.set(t,n);const a=Object(T.a)(C[0],C[1],.5-n);this.controller.app.setMouseFocalDepth(a),this.controller.app.setRotation(t/2+.5,n/2+.5,0)}}class X{constructor(e){this.controller=e,this.renderer=e.app.renderer,this.scene=e.app.scene,this.camera=e.app.camera,this.materialDepth=null,this.materialBokeh=null,this.rtTextureColor=null,this.rtTextureDepth=null,this.uniforms=null,this.quad=null,this.postProcessingCamera=null,this.postProcessingScene=null,this.isEnabled=!1,e.on("resize",this.handleResize.bind(this)),e.on("tick",this.render.bind(this)),this.init(),this.setEnabled(!0)}setMaxBlur(e){this.uniforms.maxblur.value=e}setFringe(e){this.uniforms.fringe.value=e}setZNearFar(e,t){const n=this.materialDepth,i=this.uniforms;i.znear.value=e,i.zfar.value=t,n.uniforms.mNear.value=e,n.uniforms.mFar.value=t}setFocalDepth(e){this.uniforms.focalDepth.value=e}setEnabled(e){(e=!!e)!==this.isEnabled&&(this.isEnabled=!!e,e||(this.scene.overrideMaterial=null,this.renderer.setRenderTarget(null),this.controller.app.updateMaterialDotSize()))}handleResize(e){let{width:t,height:n}=e;this.rtTextureDepth.setSize(t,n),this.rtTextureColor.setSize(t,n),this.materialDepth.uniforms.size.value=E(this.controller.app.dotSize),this.uniforms.textureWidth.value=t,this.uniforms.textureHeight.value=n,this.postProcessingCamera.left=t/-2,this.postProcessingCamera.right=t/2,this.postProcessingCamera.top=n/2,this.postProcessingCamera.bottom=n/-2,this.postProcessingCamera.updateProjectionMatrix(),this.quad.scale.set(t,n,1)}init(){const e=window.innerWidth,t=100*h.a.lvh(),n=this.postProcessingScene=new r.p,i=this.postProcessingCamera=new r.j(e/-2,e/2,t/2,t/-2,-1e4,1e4);i.position.z=100,n.add(i),n.background=new r.e(263182);const o=this.materialDepth=new r.q({uniforms:Object.assign({mouse:{value:new r.u(0,0)},mouseAnimated:{value:new r.u(0,0)},time:{value:0},speed:{value:.3},size:{value:E()},revealAnimation:{value:0},screenRatio:{value:_()},animation:{value:0},objectSize:{value:new r.v(b[0],b[1],b[2])},mNear:{value:4},mFar:{value:150}},D.props),vertexShader:D.shader,fragmentShader:l.a.fragmentShader});o.uniforms.mNear.value=4,o.uniforms.mFar.value=150;const a=this.rtTextureDepth=new r.x(e,t),s=this.rtTextureColor=new r.x(e,t),c=this.uniforms=r.t.clone(l.b.uniforms);c.tColor.value=s.texture,c.tDepth.value=a.texture,c.textureWidth.value=e,c.textureHeight.value=t;for(let e in k)c[e].value=k[e];const v=this.materialBokeh=new r.q({uniforms:c,vertexShader:l.b.vertexShader,fragmentShader:l.b.fragmentShader,defines:{RINGS:3,SAMPLES:3}}),f=this.quad=new r.i(new r.l(1,1),v);f.scale.set(e,t,1),f.position.z=-500,n.add(f)}render(e){if(this.isEnabled){this.materialDepth.uniforms.time.value=.005*e;const t=this.renderer,n=this.scene,i=this.camera,o=this.controller.app.meshBackdrop;let a=o.visible;t.clear(),t.setRenderTarget(this.rtTextureColor),t.clear(),t.render(n,i),o.visible=!1,n.overrideMaterial=this.materialDepth,t.setRenderTarget(this.rtTextureDepth),t.clear(),t.render(n,i),o.visible=a,n.overrideMaterial=null,t.setRenderTarget(null),t.render(this.postProcessingScene,this.postProcessingCamera)}}}class q extends s.a{static get Defaults(){return i.a.extend({},s.a.Defaults,{})}init(){this.app=new W(this),this.postprocessing=new X(this),this.hover=new U(this)}}i.a.fn.visualizationPlans=a()(q)}},[[344,0]]]);