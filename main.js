document.addEventListener('DOMContentLoaded', function(){
    var Tcolor = document.getElementById("color");
    var itemphoto = document.getElementById("itemPhoto");
    var set = document.getElementById("quantity");
    var itemprice = document.getElementById("itemPrice");
    var point = document.getElementById("point");
    var btn = document.getElementById("btn");
    var sumPrice = 0;

    Tcolor.addEventListener('click', function(){
        if(Tcolor.value == "白"){
            itemphoto.getElementsByTagName('img').item(0).src = "white.png";
        }
        else if(Tcolor.value == "赤"){
            itemphoto.getElementsByTagName('img').item(0).src = "red.png";
        }
        else if(Tcolor.value == "黒"){
            itemphoto.getElementsByTagName('img').item(0).src = "black.png";
        }
    })

    set.addEventListener('click', function(){
        if(set.value == "4"){
            itemprice.innerText = '価格：800円 / 枚';
        }
        else{
            itemprice.innerText = '価格：1,000円 / 枚';
        }
    })

    btn.addEventListener('click', function(){
        var quantity = 0;
        var size = document.getElementsByName("size");
        var sizeValue = "";
        var eleoption = document.getElementsByName("options");
        var optionValue = "";
        var setValue = parseInt(set.value);
        var Intpoint = parseInt(point.value);

        for(var j = 0;j < size.length;j++){
            if(size.item(j).checked){
                sizeValue = size.item(j).value;
            }
        }
        for(var i = 0;i < eleoption.length;i++){
            if(eleoption.item(i).checked){
                optionValue += `${eleoption.item(i).value}　`;
            }
        }
        if(set.value != "4"){
            quantity = parseInt(set.value);
        }
        else{
            quantity = 10;
        }
        
        if(Intpoint != NaN){
            if(set.value === "4"){
                sumPrice = 800 * 10 - Intpoint;
            }
            else{
                sumPrice = 1000 * setValue - Intpoint;
            }
            if(sumPrice <= 0){
                alert(`ポイントが正しく入力されていません。再入力してください。`);
            }
            else{
                var result = window.confirm(`お買い上げの商品は以下の通りでよろしいですか？\n色：${Tcolor.value}\n枚数：${quantity}\nサイズ：${sizeValue}\nオプション：${optionValue}\n価格：${sumPrice}`);
                if(result){
                    alert("お買い上げありがとうございました。");
                }
            }
        }
        else{
            alert(`ポイントが正しく入力されていません。再入力してください。`);
        }
        
    })
})