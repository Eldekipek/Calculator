const input= document.querySelector(".textview");
        let color;
        function insert(num) {
            input.value = input.value + num;  
            if(num == "+")
            color = 'rgb(231, 156, 16)'
            else if(num == "-")
            color = '#21aeda'
            else if(num == '*')
            color = '#e42ebc'
            else if(num == '/')
            color = '#e9ec14'
        }

        function clean(){
            input.value = "";
        }

        function equal(){
            var exp= input.value;
            if(exp)
            {
                input.value = eval(exp);
            }
            input.style.background = color
        }

        function back(){
            var exp = input.value;
            input.value = exp.substring(0,exp.length-1);
        }