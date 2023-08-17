(function($) {

    $("#amount-slide").slider({
        range: "min",
        min: 5000,
        max: 2500000,
        value: 50000,
        step: 1000,
        slide: function(event, ui) {
            $("#amount").text(ui.value);
            emicalculate();
        }
    });
    $("#amount").text($("#amount-slide").slider("value"));

    $("#duration-slide").slider({
        range: "min",
        min: 12,
        max: 360,
        step: 1,
        value: 60,
        slide: function(event, ui) {
            $("#duration").text(ui.value);
            emicalculate();
        }
    });
    $("#duration").text($("#duration-slide").slider("value"));

    $("#intrest-slide").slider({
        range: "min",
        min: 6.10,
        max: 16.20,
        step: 0.01,
        value: 10,
        slide: function(event, ui) {
            $("#intrest").text(ui.value);
            emicalculate();
        }
    });
    $("#intrest").text($("#intrest-slide").slider("value"));

    emicalculate();
})(jQuery);

function emicalculate()
{
    var loanAmount =$("#amount").text();
    var numberOfMonths =$("#duration").text();
    var rateOfInterest=$("#intrest").text();
    var monthlyInterestRatio = (rateOfInterest/100)/12;
    var top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
    var bottom = top -1;
    var sp = top / bottom;
    var emi = ((loanAmount * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    var int_pge =  (interest / full) * 100;
    var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    $("#emi").html(emi_str);
    $("#tbl_emi").html(int_str);
    $("#tbl_la").html(full_str);
}