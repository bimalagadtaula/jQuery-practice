//dollar and jquery is same
    /*console.log(jQuery)
    console.log($)
*/

$(document).ready(function(){  // to make code run only after whole document is ready
    console.log("This is jQuery console");
    // $('selector').action(); jQuery syntax looks like this
     $('button.btn').click(); //clicks on btn
     $('button.btn').click(function() {
         console.log("you clicked on btn");
       //  
       $(this).hide()
     });
     $('p').click(function() {
      console.log("you clicked on para", this);
     });

    //id selector $('#para1').click();
   //class selector $('.para2').click()
  $('p:first').click()// element selector
  $('button:first').hide(5000);
  $('button:first').show(5000);
});

