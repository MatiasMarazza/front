import grapesjs from "grapesjs"

export default function animationPluggin(editor) {
    const def = editor.Components.getType("default");

    const allComps = editor.DomComponents.componentTypes.slice();
    for (let i = 0; i < allComps.length; i++) {
        const thisComp = editor.DomComponents.getType(allComps[i].id);
        editor.DomComponents.addType(allComps[i].id, {
            model: thisComp.model.extend({
                defaults: {
                    ...thisComp.model.prototype.defaults,
                    copyable: false,
                    traits:[
                        ...def.model.prototype.defaults.traits,
                        ...[{
                               changeProp: 1,
                               type: "select",
                               label: "Animation",
                               name: "animation",
                               options:[
                                {value: 'none',name: 'Sin animación'},
                                 {value: 'bounce',name: 'Bounce'},
                                 {value: 'flash',name: 'flash'},
                                 {value: 'pulse',name: 'pulse'},
                                 {value: 'rubberBand',name: 'rubberBand'},
                                 {value: 'shakeX',name: 'shakeX'},
                                 {value: 'shakeY',name: 'shakeY'},
                                 {value: 'headShake',name: 'headShake'},
                                 {value: 'swing',name: 'swing'},
                                 {value: 'tada',name: 'tada'},
                                 {value: 'wobble',name: 'wobble'},
                                 {value: 'jello',name: 'jello'},
                                 {value: 'heartBeat',name: 'heartBeat'},
                                 {value: 'backInDown',name: 'backInDown'},
                                 {value: 'backInLeft',name: 'backInLeft'},
                                 {value: 'backInRight',name: 'backInRight'},
                                 {value: 'backOutLeft',name: 'backOutLeft'},
                                 {value: 'backOutRight',name: 'backOutRight'},
                                 {value: 'backOutUp',name: 'backOutUp'},
                                 {value: 'bounceIn',name: 'bounceIn'},
                                 {value: 'bounceInDown',name: 'bounceInDown'},
                                 {value: 'bounceInLeft',name: 'bounceInLeft'},
                                 {value: 'bounceInRight',name: 'bounceInRight'},
                                 {value: 'bounceInUp',name: 'bounceInUp'},
                                 {value: 'bounceOut',name: 'bounceOut'},
                                 {value: 'bounceOutDown',name: 'bounceOutDown'},
                                 {value: 'bounceOutLeft',name: 'bounceOutLeft'},
                                 {value: 'bounceOutRight',name: 'bounceOutRight'},
                                 {value: 'bounceOutUp',name: 'bounceOutUp'},
                                 {value: 'fadeIn',name: 'fadeIn'},
                                 {value: 'fadeInDown',name: 'fadeInDown'},
                                 {value: 'fadeInDownBig',name: 'fadeInDownBig'},
                                 {value: 'fadeInLeft',name: 'fadeInLeft'},
                                 {value: 'fadeInLeftBig',name: 'fadeInLeftBig'},
                                 {value: 'fadeInRight',name: 'fadeInRight'},
                                 {value: 'fadeInRightBig',name: 'fadeInRightBig'},
                                 {value: 'fadeInUpBig',name: 'fadeInUpBig'},
                                 {value: 'fadeInTopLeft',name: 'fadeInTopLeft'},
                                 {value: 'fadeInTopRight',name: 'fadeInTopRight'},
                                 {value: 'fadeInBottomLeft',name: 'fadeInBottomLeft'},
                                 {value: 'fadeInBottomRight',name: 'fadeInBottomRight'},
                                 {value: 'fadeOut',name: 'fadeOut'},
                                 {value: 'fadeOutDown',name: 'fadeOutDown'},
                                 {value: 'fadeOutDownBig',name: 'fadeOutDownBig'},
                                 {value: 'fadeOutLeft',name: 'fadeOutLeft'},
                                 {value: 'fadeOutUpBig',name: 'fadeOutUpBig'},
                                 {value: 'fadeOutTopLeft',name: 'fadeOutTopLeft'},
                                 {value: 'fadeOutTopRight',name: 'fadeOutTopRight'},
                                 {value: 'fadeOutBottomRight',name: 'fadeOutBottomRight'},
                                 {value: 'fadeOutBottomLeft',name: 'fadeOutBottomLeft'},
                                 {value: 'flip',name: 'flip'},
                                 {value: 'flipInX',name: 'flipInX'},
                                 {value: 'flipInY',name: 'flipInY'},
                                 {value: 'flipOutX',name: 'flipOutX'},
                                 {value: 'flipOutY',name: 'flipOutY'},
                                 {value: 'lightSpeedInRight',name: 'lightSpeedInRight'},
                                 {value: 'lightSpeedInLeft',name: 'lightSpeedInLeft'},
                                 {value: 'lightSpeedOutRight',name: 'lightSpeedOutRight'},
                                 {value: 'lightSpeedOutLeft',name: 'lightSpeedOutLeft'},
                                 {value: 'rotateIn',name: 'rotateIn'},
                                 {value: 'rotateInDownLeft',name: 'rotateInDownLeft'},
                                 {value: 'rotateInDownRight',name: 'rotateInDownRight'},
                                 {value: 'rotateInUpLeft',name: 'rotateInUpLeft'},
                                 {value: 'rotateInUpRight',name: 'rotateInUpRight'},
                                 {value: 'rotateOut',name: 'rotateOut'},
                                 {value: 'rotateOutDownLeft',name: 'rotateOutDownLeft'},
                                 {value: 'rotateOutDownRight',name: 'rotateOutDownRight'},
                                 {value: 'rotateOutUpLeft',name: 'rotateOutUpLeft'},
                                 {value: 'rotateOutUpRight',name: 'rotateOutUpRight'},
                                 {value: 'hinge',name: 'hinge'},
                                 {value: 'jackInTheBox',name: 'jackInTheBox'},
                                 {value: 'rollIn',name: 'rollIn'},
                                 {value: 'rollOut',name: 'rollOut'},
                                 {value: 'zoomIn',name: 'zoomIn'},
                                 {value: 'zoomInDown',name: 'zoomInDown'},
                                 {value: 'zoomInLeft',name: 'zoomInLeft'},
                                 {value: 'zoomInRight',name: 'zoomInRight'},
                                 {value: 'zoomInUp',name: 'zoomInUp'},
                                 {value: 'zoomOut',name: 'zoomOut'},
                                 {value: 'zoomOutDown',name: 'zoomOutDown'},
                                 {value: 'zoomOutLeft',name: 'zoomOutLeft'},
                                 {value: 'zoomOutRight',name: 'zoomOutRight'},
                                 {value: 'zoomOutUp',name: 'zoomOutUp'},
                                 {value: 'slideInDown',name: 'slideInDown'},
                                 {value: 'slideInLeft',name: 'slideInLeft'},
                                 {value: 'slideInRight',name: 'slideInRight'},
                                 {value: 'slideInUp',name: 'slideInUp'},
                                 {value: 'slideOutDown',name: 'slideOutDown'},
                                 {value: 'slideOutLeft',name: 'slideOutLeft'},
                                 {value: 'slideOutRight',name: 'slideOutRight'},
                                 {value: 'slideOutUp',name: 'slideOutUp'},
                                 //expandir con más animaciones 
                               ]
                         }, {
                               changeProp: 1,
                               type: "number",
                               label: "Duration(s)",
                               name: "duration",
                         }, {
                               changeProp: 1,
                               type: "number",
                               label: "Delay(s)",
                               name: "delay",
                         },
                         {
                            changeProp: 1,
                            type: "select",
                            label: "Infinita?",
                            name: "infinite",
                            options:[
                                {value: 'infinite',name: 'Es infinita'},
                                {value: '1',name: 'NO es infinita'},]
                      },
                //       {
                //         changeProp: 1,
                //         type: "number",
                //         label: "Alto(px)",
                //         name: "height",
                //   }, {
                //         changeProp: 1,
                //         type: "number",
                //         label: "Ancho(px)",
                //         name: "width",
                //   },
                    
                    ]
                      ]
                },
                init() {
                 this.on("change:animation", this.onAnimationChange);
                 this.on("change:duration", this.onAnimationChange);
                 this.on("change:delay", this.onAnimationChange);
                 this.on("change:infinite", this.onAnimationChange);
                //  this.on("change:width", this.onAnimationChange);
                //  this.on("change:height", this.onAnimationChange);
              },
              onAnimationChange() {
                 const animation = this.get("animation");
                 const duration = this.get("duration");
                 const delay = this.get("delay");
                 const infinite = this.get("infinite");
                //  const width = this.get("width");
                //  const height = this.get("height");
                //  this.addStyle({ "width": `${width}px` });
                //  this.addStyle({ "height": `${height}px` });
                 this.addStyle({ "animation": `${animation} ${duration}s ${delay}s ${infinite}` });
              }
            }),
            view: thisComp.view,
        });
    }
}

var editor = grapesjs.init({
    container: '#gjs',
    plugins: [animationPluggin]
})