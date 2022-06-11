//PHOENIX API基本セット
const uri = "http://153.120.93.172:8022/phoenix/jobs";
const headers = {'Accept': 'application/json','Content-Type': 'application/json'};
let pimage = document.getElementById("planview");
let form = document.forms.form;


    //お名前をIDにセット
    let setname = form.setname;
    setname.addEventListener('click', getFormValues);
   
    function getFormValues(){

    pimage.innerHTML ="≪Preview画像表示≫";
    Njobid = form.myname.value;
    console.log(Njobid);
    let body = '{"id":"'+Njobid+'"}';
    if(Njobid === ""){
    window.alert("「名前」欄に入力してください");
    }else{
    console.log("名前確認");
    deljob();
}};

      //ジョブ削除
      async function deljob(){
      body = '{"id":"'+Njobid+'"}';
      const uri0 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid;
      let method = "DELETE"
      const deljob = await fetch(uri0,{method})
      let state00 = deljob
      console.log("00.ジョブ削除:"+state00.status);
      // let preview = '0';
      // console.log(preview);
      // if(state00.status == 200){
      // planview.innerHTML = preview;
      newjob(body);
    };

      //新規ジョブ発行
       async function newjob(){
        let method ="POST";
        const res2 = await fetch(uri,{method, headers, body})
        let state2 = res2
        console.log("2.ジョブ発行OK:"+state2.status);  
        if(state2.status == 201){
            target =document.getElementById("state"); 
            target.innerHTML ="■ □ □ □ □ [処理開始]";
        addArray(body);}
    };

           //連想配列&D1登録
           async function addArray(body){
            let array=[",注文ID,フォルダー,ファイル,フォント名,フォントカラー,お名前\r\n"];
            let method = "POST";
            let d1 = form.d1.checked;
            console.log("デザイン1"+d1);
            let rotate1 = document.getElementById("rotate1");
            console.log("D1フォント指定:"+rotate1.value);    
            let lot1 = document.getElementById('lot1');
            console.log("D1カラー指定:"+lot1.value);
            let breed1 = document.getElementById('breed1');
            console.log("D1カラー指定:"+breed1.value);
            if(d1 ==true){
            array.push( `1,D:/designdata/,d1.pdf,${rotate1.value},${lot1.value},${breed1.value},${Njobid}\r\n`)
            let prd ={
                  "name": "PD01",
                  "ordered": `${lot1.value}`,
                  "rotation": `${rotate1.value}`,
                  "bleed-margin": `${breed1.value}`,
                  "stock": "コーティング",
                  "artwork": "C:/xampp/htdocs/designdata/d1.pdf",
                    };
                  body = JSON.stringify(prd);
                  const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
                  const res3 = await fetch(uri3,{method, headers, body})
                  let state3 = res3
                  console.log("3.プロダクト追加OK:"+state3.status);  
                  };
      
            let d2 = form.d2.checked;
            console.log("デザイン2"+d2);
            let rotate2 = document.getElementById("rotate2");
            console.log("D2回転指定:"+rotate2.value);    
            let lot2 = document.getElementById('lot2');
            console.log("D2数量指定:"+lot2.value);
            let breed2 = document.getElementById('breed2');
            console.log("D2アキ設定:"+breed2.value);
            if(d2 ==true){
            array.push( `1,D:/designdata/,d2.pdf,${rotate2.value},${lot2.value},${breed2.value},${Njobid}\r\n`)
               let prd ={
                  "name": "PD02",
                  "ordered": `${lot2.value}`,
                  "rotation": `${rotate2.value}`,
                  "bleed-margin": `${breed2.value}`,
                  "stock": "コーティング",
                  "artwork": "C:/xampp/htdocs/designdata/d2.pdf",
                };
              body = JSON.stringify(prd);
              console.log(body);
              const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
              const res3 = await fetch(uri3,{method, headers, body})
              let state3 = res3
              console.log("3.プロダクト追加OK:"+state3.status);  
              };
   
            let d3 = form.d3.checked;
            console.log("デザイン3"+d3);
            let rotate3 = document.getElementById("rotate3");
            console.log("D3フォント指定:"+rotate3.value);    
            let lot3 = document.getElementById('lot3');
            console.log("D3カラー指定:"+lot1.value);
            let breed3 = document.getElementById('breed3');
            console.log("D3カラー指定:"+breed1.value);
            if(d3 ==true){
            array.push( `1,D:/designdata/,d3.pdf,${rotate3.value},${lot3.value},${breed3.value},${Njobid}\r\n`)
              let prd ={
                "name": "PD03",
                "ordered": `${lot3.value}`,
                "rotation": `${rotate3.value}`,
                "bleed-margin": `${breed3.value}`,
                "stock": "コーティング",
                "artwork": "C:/xampp/htdocs/designdata/d3.pdf",
                };
              body = JSON.stringify(prd);
              const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
              const res3 = await fetch(uri3,{method, headers, body})
              let state3 = res3
              console.log("3.プロダクト追加OK:"+state3.status);  
              };
   
            let d4 = form.d4.checked;
            console.log("デザイン4"+d4);
            let rotate4 = document.getElementById("rotate4");
            console.log("D4フォント指定:"+rotate4.value);    
            let lot4 = document.getElementById('lot4');
            console.log("D4カラー指定:"+lot4.value);
            let breed4 = document.getElementById('breed4');
            console.log("D4カラー指定:"+breed4.value);
            if(d4 ==true){
            array.push( `1,D:/designdata/,d4.pdf,${rotate4.value},${lot4.value},${breed4.value},${Njobid}\r\n`)
               let prd ={
                "name": "PD04",
                "ordered": `${lot4.value}`,
                "rotation": `${rotate4.value}`,
                "bleed-margin": `${breed4.value}`,
                "stock": "コーティング",
                "artwork": "C:/xampp/htdocs/designdata/d4.pdf",
                };
              body = JSON.stringify(prd);
              const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
              const res3 = await fetch(uri3,{method, headers, body})
              let state3 = res3
              console.log("3.プロダクト追加OK:"+state3.status);  
              };

              let d5 = form.d5.checked;
              console.log("デザイン5"+d5);
              let rotate5 = document.getElementById("rotate5");
              console.log("D1フォント指定:"+rotate5.value);    
              let lot5 = document.getElementById('lot5');
              console.log("D1カラー指定:"+lot5.value);
              let breed5 = document.getElementById('breed5');
              console.log("D1カラー指定:"+breed5.value);
              if(d5 ==true){
              array.push( `1,D:/designdata/,d5.pdf,${rotate5.value},${lot5.value},${breed5.value},${Njobid}\r\n`)
                 let prd ={
                  "name": "PD05",
                  "ordered": `${lot5.value}`,
                  "rotation": `${rotate5.value}`,
                  "bleed-margin": `${breed5.value}`,
                  "stock": "コーティング",
                  "artwork": "C:/xampp/htdocs/designdata/d5.pdf",
                  };
                body = JSON.stringify(prd);
                const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
                const res3 = await fetch(uri3,{method, headers, body})
                let state3 = res3
                console.log("3.プロダクト追加OK:"+state3.status);  
                };
     
              let d6 = form.d6.checked;
              console.log("デザイン6"+d6);
              let rotate6 = document.getElementById("rotate6");
              console.log("D6フォント指定:"+rotate6.value);    
              let lot6 = document.getElementById('lot6');
              console.log("D6カラー指定:"+lot6.value);
              let breed6 = document.getElementById('breed6');
              console.log("D6カラー指定:"+breed6.value);
              if(d6 ==true){
              array.push( `1,D:/designdata/,d6.pdf,${rotate6.value},${lot6.value},${breed6.value},${Njobid}\r\n`)
                let prd ={
                  "name": "PD06",
                  "ordered": `${lot6.value}`,
                  "rotation": `${rotate6.value}`,
                  "bleed-margin": `${breed6.value}`,
                  "stock": "コーティング",
                  "artwork": "C:/xampp/htdocs/designdata/d6.pdf",
                  };
                body = JSON.stringify(prd);
                const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
                const res3 = await fetch(uri3,{method, headers, body})
                let state3 = res3
                console.log("3.プロダクト追加OK:"+state3.status);  
                };
     
              let d7 = form.d7.checked;
              console.log("デザイン7"+d7);
              let rotate7 = document.getElementById("rotate7");
              console.log("D7フォント指定:"+rotate1.value);    
              let lot7 = document.getElementById('lot7');
              console.log("D7カラー指定:"+lot7.value);
              let breed7 = document.getElementById('breed7');
              console.log("D7カラー指定:"+breed7.value);
              if(d7 ==true){
              array.push( `1,D:/designdata/,d7.pdf,${rotate7.value},${lot7.value},${breed7.value},${Njobid}\r\n`)
                 let prd ={
                  "name": "PD07",
                  "ordered": `${lot7.value}`,
                  "rotation": `${rotate7.value}`,
                  "bleed-margin": `${breed7.value}`,
                  "stock": "コーティング",
                  "artwork": "C:/xampp/htdocs/designdata/d7.pdf",
                  };
                body = JSON.stringify(prd);
                const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
                const res3 = await fetch(uri3,{method, headers, body})
                let state3 = res3
                console.log("3.プロダクト追加OK:"+state3.status);  
                };

                let d8 = form.d8.checked;
                console.log("デザイン8"+d8);
                let rotate8 = document.getElementById("rotate8");
                console.log("D8フォント指定:"+rotate8.value);    
                let lot8 = document.getElementById('lot8');
                console.log("D8カラー指定:"+lot8.value);
                let breed8 = document.getElementById('breed8');
                console.log("D8カラー指定:"+breed8.value);
                if(d8 ==true){
                array.push( `1,D:/designdata/,d8.pdf,${rotate8.value},${lot8.value},${breed8.value},${Njobid}\r\n`)
                   let prd ={
                    "name": "PD08",
                    "ordered": `${lot8.value}`,
                    "rotation": `${rotate8.value}`,
                    "bleed-margin": `${breed8.value}`,
                    "stock": "コーティング",
                    "artwork": "C:/xampp/htdocs/designdata/d8.pdf",
                    };
                  body = JSON.stringify(prd);
                  const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
                  const res3 = await fetch(uri3,{method, headers, body})
                  let state3 = res3
                  console.log("3.プロダクト追加OK:"+state3.status);  
                  };

                  let d9 = form.d9.checked;
                  console.log("デザイン9"+d9);
                  let rotate9 = document.getElementById("rotate9");
                  console.log("D9フォント指定:"+rotate9.value);    
                  let lot9 = document.getElementById('lot9');
                  console.log("D9カラー指定:"+lot9.value);
                  let breed9 = document.getElementById('breed9');
                  console.log("D9カラー指定:"+breed9.value);
                  if(d9 ==true){
                  array.push( `1,D:/designdata/,d9.pdf,${rotate9.value},${lot9.value},${breed9.value},${Njobid}\r\n`)
                     let prd ={
                      "name": "PD09",
                      "ordered": `${lot9.value}`,
                      "rotation": `${rotate9.value}`,
                      "bleed-margin": `${breed9.value}`,
                      "stock": "コーティング",
                      "artwork": "C:/xampp/htdocs/designdata/d9.pdf",
                      };
                    body = JSON.stringify(prd);
                    const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
                    const res3 = await fetch(uri3,{method, headers, body})
                    let state3 = res3
                    console.log("3.プロダクト追加OK:"+state3.status);  
                    };
    
                    let d10 = form.d10.checked;
                    console.log("デザイン10"+d10);
                    let rotate10 = document.getElementById("rotate10");
                    console.log("D10フォント指定:"+rotate1.value);    
                    let lot10 = document.getElementById('lot10');
                    console.log("D10カラー指定:"+lot10.value);
                    let breed10 = document.getElementById('breed10');
                    console.log("D10カラー指定:"+breed10.value);
                    if(d10 ==true){
                    array.push( `1,D:/designdata/,d10.pdf,${rotate10.value},${lot10.value},${breed10.value},${Njobid}\r\n`)
                    let prd ={
                      "name": "PD10",
                      "ordered": `${lot10.value}`,
                      "rotation": `${rotate10.value}`,
                      "bleed-margin": `${breed10.value}`,
                      "stock": "コーティング",
                      "artwork": "C:/xampp/htdocs/designdata/d10.pdf",
                      };
                    body = JSON.stringify(prd);
                      console.log(body);
                      const uri3 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/products";
                      const res3 = await fetch(uri3,{method, headers, body})
                      let state3 = res3
                      console.log("3.プロダクト追加OK:"+state3.status);  
                    };
              target =document.getElementById("state"); 
              target.innerHTML ="■ ■ □ □ □ [CSVExport]";
             console.log(array);
            planact();
                    };

          //プラン実行
          async function planact(){
            let profile = document.getElementById("profile");
            console.log("プロファイル指定:"+profile.value);    
            let device = document.getElementById('device');
            console.log("デバイス指定:"+device.value);
            // let mediasize = document.getElementById('mediasize');
            // console.log("サイズ指定:"+mediasize.value);
          //   let prd = { "profile": ["整列"]}
          //  // let prd ={ "profiles": ["縦方向に整列"]
          //     //  "profiles": ["縦方向に整列"],
          //     //  "presses": ["A全オフセット"]
          //     // "profiles": `[${profile.value}]`,
          //     // "presses": `[${device.value}]`,
          //     // "media-size": `${mediasize.value}`
          //   };
          // body = JSON.stringify(prd);
          // console.log(body);
            let prf = {
                "profiles": [
                  [`${profile.value}`]
                ],
                "things": [
                  [`${device.value}`]
                ]
              }
              // "profiles": [`${profile.value}`],
//              "presses": [`${device.value}`],
 //             "sheets": [`${mediasize.value}`],
            console.log(prf);
            body = JSON.stringify(prf);
            console.log(body);
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
            const uri5 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/plan/status";
            const res5 = await fetch(uri5);
            const life = await res5.json();
            //console.log(life.state);
            let state5 = life;
            console.log("5.進捗Check:"+state5.state);
            if(state5.state == "Finished"){
            target =document.getElementById("state"); 
            target.innerHTML ="■ ■ ■ ■ □ [PDF作成中!]";
            planresult();
            }else{
            new Promise( resolve => setTimeout(resolve, 2000) )
            .then( ()=>{
               target =document.getElementById("state"); 
               target.innerHTML ="■ ■ ■ □ □ [レイアウト中]";
                lifecheck() 
            });
        }};

         //プラン結果取得
            async function planresult(){
            const uri6 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/plan/results?limit=1&start=1&sorting=Layouts&layouts=true&thumb=true&plan-thumb=true&thumb-width=200&thumb-height=200&render-mode=Colors"; 
            const res6 = await fetch(uri6)
            const state6 = await res6.json();
            console.log(state6);
            let planid = state6[0].id;
            let sheetcount = state6[0]["run-length"];
            console.log(sheetcount);
            let planimage = state6[0].thumbnail.data;
            let preview = '<img src="data:image/png;base64,'+ planimage + '", width="400" height="400" alt="D1">';
            console.log("6.プランID:"+planid);
            //console.log("6.プランID:"+planimage)
            if(planid >0){
            planview.innerHTML = preview;
            counter.innerHTML = sheetcount;
            fixed(planid);
        }};

      //プラン確定
      async function fixed(planid){
        let planid2 = planid;
        console.log(planid2);
        let method ="POST";
        //body = JSON.stringify(planid2);
        const uri7 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"/plan/results/"+ planid2 +"/apply";  
        const res7 = await fetch(uri7,{method, headers, body})
        let state7 = res7
        console.log(state7);
        console.log("7.プラン確定:"+state7.status);  
//        let sheetsize = state7;
        if(state7.status == 200){
          presult();
    }};
             //プロジェクト情報取得
             async function presult(){
              const uri8 = "http://153.120.93.172:8022/phoenix/jobs/"+Njobid+"?product-version=V2"; 
              const res8 = await fetch(uri8)
              console.log(res8);
              const state8 = await res8.json();
              console.log(state8);

//              console.log(state8.facility.things[0].thing.capabilities);

              let sheetinfo = JSON.stringify(state8.facility.things[0].thing.capabilities);
              console.log(sheetinfo);
    //          const mystr = "a-9-b-1234-c-55555-d";
  //            const mod = sheetinfo.replace("-",""/g);
   //           console.log(mod);
              const result = sheetinfo.match(/\d{2,4}/g);
               
              console.log(result);
              let height = result[0];
              console.log(height);
              let width = result[2];
              console.log(width);
              sheetheight.innerHTML = height;
              sheetwidth.innerHTML = width;
              pdfout();
            };
        
        //PDF出力
            async function pdfout() {
            let device = document.getElementById("device");
            console.log("8.送信先:"+device.value);            
            let method = "POST";
            let localpath = "C:/inetpub/phoenixcloud/flatpdf/" + Njobid + "_" + device.value + ".pdf";
            let dlpath = "http://153.120.93.172:8080/flatpdf/" + Njobid + "_" + device.value + ".pdf";
            let filename = Njobid + "_" + device.value + ".pdf";
            body = `{"path":"${localpath}"}`;
            console.log(body);
            const uri8 = "http://153.120.93.172:8022/phoenix/jobs/" + Njobid + "/export/pdf";
            const res8 = await fetch(uri8, { method, headers, body });
            let state8 = res8;
            target =document.getElementById("state"); 
            target.innerHTML ="■ ■ ■ ■ ■ [PDF出力完了]";
            let PDFDL = `<a href=${dlpath} download="${filename}"><font color="#d39c07">PDFダウンロード</a>`;
            console.log(PDFDL);
            target.innerHTML =PDFDL;
            console.log("8.PDF出力完了:" + state8.status);
//            reportout();
            };

            // //レポート出力
            // async function reportout() {
            //   let device = document.getElementById("device");
            //   console.log("9.送信先:"+device.value);            
            //   let method = "POST";
            //   let localpath = "C:/inetpub/phoenixcloud/report/" + Njobid + "_" + device.value + ".pdf";
            //   let dlpath = "http://153.120.93.172:8080/report/" + Njobid + "_" + device.value + ".pdf";
            //   let filename = Njobid + "_" + device.value + ".pdf";
            //   body = `{"path":"${localpath}"}`;
            //   console.log(body);
            //   const uri9 = "http://153.120.93.172:8022/phoenix/jobs/" + Njobid + "/export/report/pdf";
            //   const res9 = await fetch(uri9, { method, headers, body });
            //   let state9 = res9;
            //   target2 =document.getElementById("state2"); 
            //   target2.innerHTML ="■ ■ ■ ■ ■ [Report出力中]";
            //   let reportDL = `<a href=${dlpath} download="${filename}"><font color="#d39c07">レポートをダウンロード</a>`;
            //   console.log(reportDL);
            //   target2.innerHTML =reportDL;
            //   console.log("9.レポート出力完了:" + state9.status);
            //   };
