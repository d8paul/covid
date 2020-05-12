 jQuery(document).ready(function($) {

  $( "#dob" ).datepicker();
  $('#refereedob').datepicker();
 //  $('.generate_id').click(function(e){
	//  e.preventDefault(); 
	// });
  generateId();

   // generate id
  function generateId(){
     
   $('.generate_id').text('Generating.......');
   var date         = new Date();
   var datew        = date.getFullYear()+''+date.getMonth()+''+date.getDate()+''+date.getHours()+''+date.getMinutes()+''+date.getSeconds();
   var datew2   = shuffle(datew); 
   $('.theiento').val(datew2);
    
   }




    //currentdate
    // generate id
   function generatecdate(){
     var date         = new Date();
	   var datew        = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
	 $('.currentDate').val(datew);
   }
   generatecdate();


   
   // shuffle id
   function shuffle(string){
     
      var arr = string.split('');
      arr.sort( function(){
         return 0.5 - Math.random();
      });
      newstr = arr.join('');
      return newstr;
   }	


   // send register
   $('.submitregister').click(function(e){

     var theerrortag = false;
	   e.preventDefault(); 
     $('.form-control').removeClass('form-error');
     $('.error_clearin').html('');


     var surname = $('#surname').val();
     if(surname){}else{
       $('.form-control').addClass('form-error');
       $('.error_surname').html('The field is required'); 
       theerrortag = true; 
     }

   
    if(surname.length <= 1 &&  surname.length >= 16 ){
       $('.form-control').addClass('form-error');
       $('.error_surname').html('1 to 16 alpha-bet characters');
       theerrortag = true;
     } 


     var givenname= $('#givenname').val();
     if(givenname){}else{
       $('.form-control').addClass('form-error');
       $('.error_givenname').html('The field is required'); 
       theerrortag = true; 
     }

   if(givenname.length <= 1 &&  givenname.length >= 16 ){
       $('.form-control').addClass('form-error');
       $('.error_givenname').html('1 to 16 alpha-bet characters');
       theerrortag = true;
     } 




     //birth date
     var date_birth = $('#dob').val();
     if(date_birth == ""){
       $('.form-control').addClass('form-error');
       $('.error_dob').html('select date of birth');
       theerrortag = true;
     }

     var date_birthc = new Date().getFullYear();
     var date_birthu = new Date(date_birth).getFullYear();

     var date_birthux = date_birthc-date_birthu;
  

     if(date_birthux <= 1 &&  date_birthux.length >= 150 ){
       $('.form-control').addClass('form-error');
       $('.error_dob').html('register patients who are Patient who is at least One year old and at most 150 years old.');
       theerrortag = true;
     } 

     var theresidence = $('#residence').val();
     if(theresidence){}else{
       $('.form-control').addClass('form-error');
       $('.error_residence').html('The field is required'); 
       theerrortag = true; 
     }

     if(theresidence.length <= 1 && theresidence.length >= 20 ){
       $('.form-control').addClass('form-error');
       $('.error_residence').html('1 to 20 alpha-bet characters');
       theerrortag = true;
     } 

     var occupation = $('#occupation').val();
     if(occupation){}else{
       $('.form-control').addClass('form-error');
       $('.error_occupation').html('The field is required'); 
       theerrortag = true; 
     }


     if(occupation.length <= 5 && occupation.length >= 50 ){
       $('.form-control').addClass('form-error');
       $('.error_occupation').html('5 to 50 alpha-bet characters');
       theerrortag = true;
     } 


     var thenationality = $('#nationality').val();
     if(thenationality){}else{
       $('.form-control').addClass('form-error');
       $('.error_nationality').html('The field is required'); 
       theerrortag = true; 
     }

      if(thenationality.length <= 5 && thenationality.length >= 20 ){
       $('.form-control').addClass('form-error');
       $('.error_nationality').html('1 to 20 alpha-bet characters');
       theerrortag = true;
     } 

     var theusername = $('#category').val();
     if(theusername){}else{
       $('.form-control').addClass('form-error');
       $('.error_category').html('Select patient Category'); 
       theerrortag = true; 
     }

     if(theerrortag == true){
        return; 
     }



      $('.submitregister').text('Registering Account .....');
      var loginData = $('.sendformreg').serialize();
      $.ajax({
        type: 'post',
        url : '/patient/signup',
        data : loginData,
        dataType:'json'
      }).done(function(data) {
          
          $('.submitregister').text('Submit');
          console.log(data);

      }).fail(function (jqXHR, textStatus) {
          $('.submitregister').text('Submit');
          console.log(jqXHR);
      });

   });	


   // reset register
   $('.resetregister').click(function(e){
      e.preventDefault();
      $('.sendformreg')[0].reset();
   });  


   // reset customer register
   $('.resetcustomerregister').click(function(e){
      e.preventDefault();
      $('.sendformcustomer')[0].reset();
   });  



});


