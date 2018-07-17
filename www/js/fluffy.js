/********App Initialization *************/
var myApp = new Framework7({

    material : true,
    materialRipple : true,
    materialRippleElements : '.ripple',
    modalTitle : 'Kasoj',
    fastClicks : false,
    sortable : false
   });

// Export selectors engine
var $$ = Dom7;
// Add main view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
/******** App Initialization *************/

var toast = myApp.toast("...", "", { duration : 3500 });


document.addEventListener("deviceready", deviceIsReady, false);


function deviceIsReady(){

document.addEventListener("backbutton", trapBackButton, false);

}


function trapBackButton(){
        
        var cpage = mainView.activePage;
        var cpageName = cpage.name;

         //Exit App
        if(cpageName == "dashboard" || cpageName == "theswipe"){

            navigator.app.exitApp();
        }
        else{

            mainView.router.back();
        }
}





myApp.onPageInit('dashboard', function(page){

	$$(".product-house").on("click", function(){

		mainView.router.loadPage("profile.html");
	})

});



myApp.onPageInit('profile', function(page){

    $$("#add-2-cart-btn").on("click", function(){

       toast.show("Added to Cart!"); 

    });

});