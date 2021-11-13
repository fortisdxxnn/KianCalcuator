function insrt(num) {
    $(".display").val($(".display").val() + num);
}
function eql() {
    try {
        $(".display").val(eval($(".display").val()))
    }
    catch (error) {
        $(".display").val("MATH ERRROR")
    }
}

function c() {
    $(".display").val('');
}
function del() {
    var value = $(".display").val();
    $(".display").val(value.substring(0, value.length - 1));
}
