import jQuery from "jquery";
import _ from "lodash";
import {a} from "@/script/app"
import "@/style/index.css"
import '@/index.css'
console.log(a); 

jQuery(function(){
    console.log(123);
});

jQuery.ajax({
    url:"https://127.0.0.1:3000/api/abc"
})

jQuery.ajax({
    url:"https://127.0.0.1:3000/api1/abc1"
})

console.log(_);

// console.log("process.env.NODE_ENV",process.env.NODE_ENV)

// console.log("process.env.F",process.env.F)
//50:88