<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com"> -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet"> -->
    <link rel="stylesheet" href="layout.css" type="text/css">
    <link rel="stylesheet" href="form.css" type="text/css">
    <title>新Cloudサービス</title>

</head>
 <body>
        <h1>自動面付シミュレーター Rev1</h1>
        <div>
            <nav>
            <form name="form">
               <h4>管理ID:
                    <input type="text"  class="menu" name="myname"  value="88"></h4>
                    <hr>
                    <h2>[Step1]<BR>プロダクトをアップロード</h2>
                     <a href="https://www.xmfremote-ffgs001.com/frontsite/login/direct?enc=808e4012b6112dc914dcc62d3918806acf8e8e632b303e6ce6b394e2a8536216f1cbd73416e579861d5d1b906d1b57c36bf6eebedc914146e9965cbedcce94099788770e4c7f0c3831436ee368ff2e9b507798d5ef700c33bf8b8830e8634cef" 
                     class="Normal"><image src="/pix/upload.png" width="100px"><BR>
                     <p class="Normal">アップロードサイトへ</p></image></a>  <BR>
                     ※アップロード時の制限事項<BR>
                         1.データフォーマット:PDF形式<BR>
                         2.データサイズ:1ファイル10MBまで <BR>
                 </select> 
                <hr>
                <h2>[Step2]<BR>プラン選択</h2>
                    <!-- <p class="Normal">〔デバイス選択〕</p><BR>
                    <select  class="hanten" id="mediasize" >
                    <option value="指定なし">指定なし</option>
                     <option value="A4縦(297x210mm)">A4縦(297x210mm)</option>
                     <option value="A4横(210x297mm)">A4横(210x297mm)</option>
                     <option value="A3縦(420x297mm)">A3縦(420x297mm)</option>
                     <option value="A3横(297x420mm)">A3横(297x420mm)</option>
                     <option value="B4縦(364x257mm)">B4縦(364x257mm)</option>
                     <option value="B4横(257x364mm)">B4横(257x364mm)</option>
                     <option value="A2横(420x594mm)">A2横(420x594mm)</option>
                     <option value="A1横(594x841mm)">A1横(594x841mm)</option>
                     <option value="菊半(469x636mm)">菊半(469x636mm)</option>
                     <option value="菊全(636x939mm)">菊全(636x939mm)</option>
                </select> <hr> -->
                <p class="Normal">〔用紙サイズ選択〕</p><BR>
                    <select  class="hanten" id="device" >
                    <option value="ミマキUV(600x400mm)">ミマキUV(600x400mm)</option>
                     <option value="A4プリント">A4プリント</option>
                     <option value="A3プリント">A3プリント</option>
                     <option value="菊全(636x939mm)">菊全(636x939mm)</option>
                     <option value="900mmロール紙">900mmロール紙</option>
                </select> <hr>
                <p class="Normal">〔プロファイル〕</p><BR>
                    <select  class="hanten" id="profile" >
                     <option value="縦方向に整列">縦方向に整列</option>
                     <option value="横方向に整列">横方向に整列</option>
                     <option value="入れ子面付け">入れ子面付け</option>
                </select> 
                <BR>
                <BR>
                <hr><BR>
                <image src="https://www.printer.co.jp/assets2020/images/content/remote/logo-xmf.svg" width="150px">
            </nav>
            <main>
                    <h2>[Step3] プロダクトを選択</h2>
                        <table class="cp_ipcheck" name="designlist">
                            <tr>
                                <th>プロダクト名</th>
                                <th>プレビュー</th>
                                <th>回転</th>
                                <th>数量</th>
                                <th>アキ</th>
                              </tr>
                            <tbody>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d1" checked>
                                   Product-TypeA</p>
                                </td>
                                <td>
                                    <!-- <img src="designdata/d1.jpg" height="100ox"> -->
                                    <img src="designdata/d1.jpg" alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate1" >
                                        <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot1" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed1" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d2" >
                                    Product-TypeB</p>
                                </td>
                                <td>
                                    <img src="designdata/d2.jpg" alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate2" >
                                        <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot2" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed2" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d3">
                                    Product-TypeC</p>
                                </td>
                                <td>
                                    <img src="designdata/d3.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate3" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot3" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed3" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d4" >
                                    Product-TypeD</p>
                                </td>
                                <td>
                                    <img src="designdata/d4.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate4" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot4" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed4" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d5" >
                                    Product-TypeE</p>
                                </td>
                                <td>
                                    <img src="designdata/d5.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate5" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot5" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed5" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d6" >
                                    Product-TypeF</p>
                                </td>
                                <td>
                                    <img src="designdata/d6.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate6" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot6" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed6" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d7" >
                                    Product-TypeG</p>
                                </td>
                                <td>
                                    <img src="designdata/d7.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate7" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot7" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed7" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d8" >
                                    Product-TypeH</p>
                                </td>
                                <td>
                                    <img src="designdata/d8.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate8" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot8" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed8" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d9"  >
                                    Product-TypeI</p>
                                </td>
                                <td>
                                    <img src="designdata/d9.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate9" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot9" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed9" Value="3" >
                                   </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                    <p><input  type="checkbox" class="cp_ipcheck" name="d10">
                                    Product-TypeJ</p>
                                </td>
                                <td>
                                    <img src="designdata/d10.jpg"  alt onerror="this.onerror = null; this.src='/pix/upload.png';" height="80px"/>
                                </td>
                                <td>
                                    <select  class="disc" id="rotate10" >
                                    <option  value="Orthogonal">Orthogonal</option>
                                        <option  value="None">None</option>
                                        <option  value="Any">Any</option>
                                   </select>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="lot10" Value="100" >
                                   </input>
                                </td>
                                <td>
                                    <input type="text"  class="disc" id="breed10" Value="3" >
                                   </input>
                                </td>
                            </tr>
 
                        </tbody>
                    </table>

<br><br><br><br>
<hr>
©富士フイルムグローバルグラフィックシステムズ株式会社
            </main>
            <aside>
                <h2>[Step4]<BR>結果確認</h2>
                <input  class="buton" type="button" id="exe_botan" name="setname" value="プラン実行"><br>
                <br><br>
                <p id="planview" class="cp_ipcheck">≪プレビュー画像表示≫</p><br> 
                <hr> 
                [必要なシート数] <br><p id="counter" class="Normal2">〇〇</p>枚<br>
                [使用するシートサイズ]<br>
                    <p id="sheetheight" class="Normal2">〇〇</p>x
                    <p id="sheetwidth" class="Normal2">〇〇</p>mm<br>
                <br>   
                <div class="process" id="state">[PDF-DownLoad]</DL></div><br><br>     
                <div class="process" id="state2">[Report-DownLoad]</DL></div><br><br>
                <div class="process" id="state3">OP[編集Data-DL]</DL></div><br><br>
            </form>
            <hr><BR>
            Powered by <img src="https://asset.fujifilm.com/www/jp/files/2021-03/7bd3a6648689ef71db6d1e57ab3ba48c/thumb_phoenix_ov.png"  height="100px">
            </aside>
        <script src="main2.js"></script>  
    </body>
    </html>