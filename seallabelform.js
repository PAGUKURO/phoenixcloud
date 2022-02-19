//PHOENIX API基本セット
const uri = "http://153.120.93.172:8022/phoenix/jobs";
const headers = {'Accept': 'application/json','Content-Type': 'application/json'};
let pimage = document.getElementById("planview");
let form = document.forms.form;

//お名前をIDにセット
let setname = form.setname;
setname.addEventListener('click', getFormValues);
function getFormValues(){
   Njobid = form.myname.value;
   console.log(Njobid);
   let body = '{"id":"'+Njobid+'"}';
   deljob(body);
};

      //ジョブ削除
      async function deljob(body){
      const uri0 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid;
      let method = "DELETE"
      const deljob = await fetch(uri0,{method})
      let state00 = deljob
      console.log("00.ジョブ削除:"+state00.status);
      //if(state00.status == 200){
      newjob(body);
      };

       //新規ジョブ発行
       async function newjob(body){
        let method ="POST";
        const res2 = await fetch(uri,{method, headers, body})
        let state2 = res2
        console.log("2.ジョブ発行OK:"+state2.status);  
        if(state2.status == 201){
        addArray();}
    };

        //連想配列&D1登録
        async function addArray(){
         let array=[",id,path,design,name,\n"];
         let d1 = form.d1.checked;
         console.log("デザイン1"+d1);
         if(d1 ==true){
            array.push(`1,D:/designdata/,d1.pdf,"${Njobid}",\n`);
         let prd ={
                   "name": "PD01",
                   "ordered": 20,
                   "stock": "コーティング",
                   "artwork": "C:/bu/DEMOデータ/PHOENIX/アクリル/org/アクリルキーホルダー_E.ai",
                   "bleed-margin": "1mm"
                 };
               let method ="POST";
               body = JSON.stringify(prd);
               const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
               const res3 = await fetch(uri3,{method, headers, body})
               let state3 = res3
               console.log("3.プロダクト追加OK:"+state3.status);  
               // if(state3.status == 200){
               //     addproduct2();}
               };
   
         let d2 = form.d2.checked;
         console.log("デザイン2"+d2);
         if(d2 ==true){
            array.push(`1,D:/designdata/,d2.pdf,"${Njobid}",\n`);
            let prd ={
               "name": "PD02",
               "ordered": 20,
               "stock": "コーティング",
               "artwork": "C:/bu/DEMOデータ/PHOENIX/アクリル/org/アクリルキーホルダー_girl.ai",
               "bleed-margin": "1mm"
             };
           let method ="POST";
           body = JSON.stringify(prd);
           const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
           const res3 = await fetch(uri3,{method, headers, body})
           let state3 = res3
           console.log("3.プロダクト追加OK:"+state3.status);  
           // if(state3.status == 200){
           //     addproduct2();}
           };

         let d3 = form.d3.checked;
         console.log("デザイン3"+d3);
         if(d3 ==true){
            array.push(`1,D:/designdata/,d3.pdf,"${Njobid}",\n`);
           let prd ={
               "name": "PD03",
               "ordered": 20,
               "stock": "コーティング",
               "artwork": "C:/bu/DEMOデータ/PHOENIX/アクリル/org/アクリルキーホルダー_ice.ai",
               "bleed-margin": "1mm"
             };
           let method ="POST";
           body = JSON.stringify(prd);
           const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
           const res3 = await fetch(uri3,{method, headers, body})
           let state3 = res3
           console.log("3.プロダクト追加OK:"+state3.status);  
           // if(state3.status == 200){
           //     addproduct2();}
           };

         let d4 = form.d4.checked;
         console.log("デザイン4"+d4);
         if(d4 ==true){
            array.push(`1,D:/designdata/,d3.pdf,"${Njobid}",\n`);
            let prd ={
               "name": "PD04",
               "ordered": 20,
               "stock": "コーティング",
               "artwork": "C:/bu/DEMOデータ/PHOENIX/アクリル/org/アクリルキーホルダー_Y.ai",
               "bleed-margin": "1mm"
             };
           let method ="POST";
           body = JSON.stringify(prd);
           const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
           const res3 = await fetch(uri3,{method, headers, body})
           let state3 = res3
           console.log("3.プロダクト追加OK:"+state3.status);  
           // if(state3.status == 200){
           //     addproduct2();}
           };
          console.log(array);
          downloadCSV(array);
          planact();
         };



         //プラン実行
        async function planact(){
         let profile = '{"profiles":  ["整列"], "stop-minutes":0};'
         //body = JSON.stringify(profile);
         let method ="POST";
         const uri4 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/plan/start";  
         const res4 = await fetch(uri4,{method, headers, body})
         let state4 = res4
         console.log("4.プランSTART:"+state4.status);  
         if(state4.status == 201){
             lifecheck();
         }};

     //状態監視
     async function lifecheck(){
         let profile = '{"profiles":  ["整列"]};'
         //body = JSON.stringify(profile);
         const uri5 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/plan/status";
         const res5 = await fetch(uri5);
         const life = await res5.json();
         console.log(life);
         let state5 = life;
         console.log("5.進捗Check:"+state5.state);
         if(state5.state == "Finished"){
         planresult();
         }else{
             new Promise( resolve => setTimeout(resolve, 2000) )
             .then( ()=>{
                 lifecheck() 
/*                     return new Promise( resolve => setTimeout(resolve, 5000) );
             })
             .then( ()=>{
                 lifecheck() */
             });
         };

    //プラン結果取得
    async function planresult(){
         //body = '{"id":"'+Njobid+'"}';
         //console.log(Njobid)
         const uri6 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/plan/results?limit=1&start=1&sorting=Layouts&layouts=true&thumb=true&plan-thumb=true&thumb-width=200&thumb-height=200&render-mode=Colors"; 
         const res6 = await fetch(uri6)
         const state6 = await res6.json();
         console.log(state6);
         //let myname = info1[0].id;
         //console.log(state6[0].id); 
         //console.log(state6.tumnail); 
         let planid = state6[0].id;
         let planimage = state6[0].thumbnail.data;
         let preview = '<img src="data:image/png;base64,'+ planimage + '", width="400" height="400" alt="D1">';
         console.log("6.プランID:"+planid);
         console.log("6.プランID:"+planimage)
         //console.log(preview);
         //document.write(preview)
         if(planid >0){
         planview.innerHTML = preview;
         fixed(planid);
     };

      //プレビュー表示
      //async function planimage(preview){
         //let preview2 = preview;
        // planview.textContent = (preview);
         //console.log("プランID["+preview+"]で確定");

     }
      //プラン確定
     async function fixed(planid){
         let planid2 = planid;
         console.log(planid2);
         let method ="POST";
         //body = JSON.stringify(planid2);
         const uri7 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/plan/results/"+ planid2 +"/apply";  
         const res7 = await fetch(uri7,{method, headers, body})
         let state7 = res7
         console.log("7.プラン確定:"+state7.status);  
         if(state7.status == 200){
         pdfout();
     }};

// const goPrint = document.getElementById("goPrint");
// goPrint.addEventListener("click", 
     //ジョブリスト取得
     //PDF出力
     //ジョブリスト取得
 //PDF出力
 let device = document.getElementById("device");
 console.log("8.送信先:"+device.value);  

 async function pdfout() {
     let method = "POST";
     body = '{"path":"C:/phoenixdata/' + Njobid + '_' + device.value + '.pdf"}';
     const uri8 = "http://153.120.93.172:8022/phoenix/jobs/" + Njobid + "/export/pdf";
     const res8 = await fetch(uri8, { method, headers, body });
     let state8 = res8;
     console.log("8.PDF出力完了:" + state8.status);
     // if (state8.status == 200) {
     //     pdfout();
     }
 
 };