import grapesjs from "grapesjs"

export default function customVideoBlock(editor){
    const { DomComponents, Blocks } = editor;
  // Add a block
  Blocks.add("Video", {
    label: "Video HLS",
    attributes: { class: "fa fa-youtube-play" },
    content: {
      type: "custom-video"
    }
  });
}

var editor = grapesjs.init({
    container:'#gjs',
    plugins:[customVideoBlock]
})