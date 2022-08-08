export default function(preload){
            return preload(()=> import('./pre.js'),["assets/index.page.js"]);
    }