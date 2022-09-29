import { useEffect } from "react";
import grapesjs from 'grapesjs';
 import plugin from 'grapesjs-project-manager';
import dynamic from 'next/dynamic'

// const plugin = dynamic(() => import('grapesjs-project-manager'), {
//   ssr: false,
// })

import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-project-manager/dist/grapesjs-project-manager.min.css';

function Canva() {
 useEffect(() => {
 var editor =  grapesjs.init({
     container: '#gjs',
     height: '700px',
     width: '100%',
     fromElement: true,
     pageManager: true, // This should be set to true
     plugins: ['gjs-preset-webpage',plugin],
     storageManager:  {
        type: 'indexeddb'
      },
     deviceManager: {
       devices:
       [
         {
           id: 'desktop',
           name: 'Desktop',
           width: '',
         },
         {
           id: 'tablet',
           name: 'Tablet',
           width: '768px',
           widthMedia: '992px',
         },
         {
           id: 'mobilePortrait',
           name: 'Mobile portrait',
           width: '320px',
           widthMedia: '575px',
         },
       ]
     },
     pluginsOpts: {
       'grapesjs-preset-webpage': {
         blocksBasicOpts: {
           blocks: ['column1', 'column2', 'column3', 'column3-7', 'text',     'link', 'image', 'video'],
           flexGrid: 1,
         },
         blocks: ['link-block', 'quote', 'text-basic'],
       },
     }
   })

   const pn = editor.Panels;
   pn.addButton('options', {
       id: 'open-templates',
       className: 'fa fa-folder-o',
       attributes: {
           title: 'Open projects and templates'
       },
       command: 'open-templates', //Open modal 
   });
   pn.addButton('views', {
       id: 'open-pages',
       className: 'fa fa-file-o',
       attributes: {
           title: 'Take Screenshot'
       },
       command: 'open-pages',
       togglable: false
   });

 },[])

 return (
   <div id="gjs"></div>
 );
}
export default Canva;