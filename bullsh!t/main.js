function Validator(options){

    var formElement = document.querySelector(options.form)
    // Prevent behaviour of submit button
    // if(formElement){
    //     formElement.onSubmit = function (e){
    //         e.preventDefaut();

    //         // Lặp qua mỗi rule và xử lý các hành vi trong input
    //         options.rules.forEach(function(rule){

    //         var inputElement = formElement.querySelector(rule.selector)
    //             Validator(inputElement,rule)
    //         });
    //         }
    //     }
    if(formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            
            
            if(inputElement){
                inputElement.onblur = function (){
                    var errorMassage = rule.test(inputElement.value);

                    if(errorMassage){
                        errorElement.innerText = errorMassage
                        inputElement.parentElement.classList.add('invalid')
                    }else{
                        errorElement.innerText = ''
                        inputElement.parentElement.classList.remove('invalid')
                    }
                }
            };
            
        })
    }

}
Validator.isRequest =  function(selector){
    return {
        selector: selector,
        test: function (value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này!'
        }
    };
}

Validator.isEmail =  function(selector){
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
             return regex.test(value) ? undefined : 'Vui lòng nhập email vào trường này!'
        }
    };

}

Validator.isPassword =  function(selector,min){
    return {
        selector: selector,
        test: function (value) {
            if(value.length >= min && value.search(/[A-Z]/) > 0 && value.search(/[0-9]/) > 0 ){
                return undefined
            }
            return 'Mật khẩu tối đa 8 kí tự, số và chữ cái in hoa!'
        }
    };

}
Validator.isConfirmPW = function(selector, getConfirmValue){
    return {
        selector: selector,
        test: function(value){
           return value === getConfirmValue() ? undefined : 'Dữ liệu nhập vào không khớp'
        }
    };
}
