window.onload = function(){
    //��һ��
    //�õ������������밴ť
    var num = document.getElementById("num");

    //�õ�����������ʾ��
    var input = document.getElementById("input");

    //�õ����ڰ�ť
    var btn = document.getElementById("btn");

    //�õ������ť
    var clear = document.getElementById("clear");

    //�ڶ���
    //����������밴ť
    num.onclick = function(event){
        //����
        var x = event.target || event.srcElement;
        if(x.value == undefined){
            //���ֵ���� undefined ��ʲôҲ�������
        }else{
            input.value = input.value + x.value;
        }
    };

    //������
    //�������
    btn.onclick = function(){
        //��� input ��ֵ��Ϊ�վ����� input �����ֵ
        if(input.value !="")
        input.value = eval(input.value);
    };

    //���Ĳ�
    //������
    clear.onclick = function(){
        input.value = "";
    };
};

