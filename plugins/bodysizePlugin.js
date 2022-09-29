import grapesjs from "grapesjs"

export default function bodysizePlugin(editor) {
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
                               type: "number",
                               label: "Alto(px)",
                               name: "height",
                         }, {
                               changeProp: 1,
                               type: "number",
                               label: "Ancho(px)",
                               name: "width",
                         },
                         ]
                      ]
                },
                init() {
                 this.on("change:width", this.onSizeChange);
                 this.on("change:height", this.onSizeChange);
              },
              onSizeChange() {
                 const width = this.get("width");
                 const height = this.get("height");
                 this.addStyle({ "width": `${width}px` });
                 this.addStyle({ "height": `${height}px` });
              }
            }),
            view: thisComp.view,
        });
    }
}

var editor = grapesjs.init({
    container: '#gjs',
    plugins: [bodysizePlugin]
})