import grapesjs from "grapesjs"

const script = function(){
  var video =  document.querySelector('.streaming');
  var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }

  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }

}
export default function customVideoElement(editor){
    const { DomComponents, Blocks } = editor;
    
    DomComponents.addType("custom-video", {
        extend: "video",
        extendFn: ['init'],
        view: {
          events: {
            dblclick: "handleDblClick"
          },
          handleDblClick() {
            alert("Hola mundo");
          },
        },
        model: {
          defaults: {
            tagName: 'video',
            script,
            attributes: { class: 'streaming'},
          },
          

          
        },
      });

      
      const dc = editor.DomComponents;
      dc.addType('custom-video', {
        extendFn: ['updateTraits'],
        model: {
          init() {
            this.addMutedTrait();
          },
      
          updateTraits() {
            this.addMutedTrait();
          },
      
          addMutedTrait() {
            if (!this.getTrait('muted')) {
              this.addTrait({
                type: 'checkbox',
                name: 'muted',
              })
              this.addTrait({
                type: 'text',
                name: 'id',
              })
              // this.addAttributes({ 'type': 'application/vnd.apple.mpegurl' });
              // this.addTrait(
              //  [
              //     {
              //         type: 'select',
              //         options: [
              //             { value: 'video', name: 'NO streaming' },
              //             { value: 'video-js', name: 'streaming' },
              //         ],
              //         label: 'Size',
              //         name: 'tagName',
              //         changeProp: 1,
              //     },
              // ],
              // )
            }
          },
        },
      })
}

var editor = grapesjs.init({
    container:'#gjs',
    plugins:[customVideoElement]
})