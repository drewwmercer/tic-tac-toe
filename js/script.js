$(document).ready(function() {
    let cellArray = ["1","2","3","4","5","6","7","8","9"]
    
        $(".col-sm").on("click", function() {
        
       if ($(this).text().length > 0) {
          alert("Invalid move! Make sure you have chosen to play as X or O and that you haven't selected a prevoously played square.");
          return;
        }
        
       if($("#x").is(":checked")){
         $(this).text("X");
        } else {
         $(this).text("O"); 
       }  
       
       checkUp();
    
       let divNeeded = $(this).attr("id");
       let numberNeeded = divNeeded.substr(divNeeded.length - 1);
       cellArray.splice(cellArray.indexOf(numberNeeded), 1);
         if (conditionArray.indexOf("true") > 0) {
         return;
       } else {
         setTimeout(computerMove, 500);    
      }   
     }); 
    
    $("#x, #o").on("click", clear);   
    $("#reset").on("click", clear); 
    
    function status() {
      conditionArray.push("true");
    }
    
    function clear() {
      $(".col-sm").html("");
      $("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8, #cell9").css("background", "initial");
      conditionArray = [];
      cellArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }; 
    
    function checkUp() {
     var newHtml;  
     
     if ($("#cell1, #cell2, #cell3").text() == "XXX" || $("#cell1, #cell2, #cell3").text() == "OOO") {
      $("#cell1, #cell2, #cell3").css("background", "green");
      
      status(); 
       
      if ($("#cell1, #cell2, #cell3").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell1, #cell2, #cell3").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell1, #cell2, #cell3").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell1, #cell2, #cell3").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
      setTimeout(clear, 1000);
      
     } else if ($("#cell4, #cell5, #cell6").text() == "XXX" || $("#cell4, #cell5, #cell6").text() == "OOO") {
      $("#cell4, #cell5, #cell6").css("background", "green");
       
      status(); 
       
      if ($("#cell4, #cell5, #cell6").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell4, #cell5, #cell6").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell4, #cell5, #cell6").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell4, #cell5, #cell6").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
       
      setTimeout(clear, 1000);
       
     } else if ($("#cell7, #cell8, #cell9").text() == "XXX" || $("#cell7, #cell8, #cell9").text() == "OOO") {
      $("#cell7, #cell8, #cell9").css("background", "green");
      
      status(); 
      
      if ($("#cell7, #cell8, #cell9").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell7, #cell8, #cell9").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell7, #cell8, #cell9").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell7, #cell8, #cell9").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
       
      setTimeout(clear, 1000);
       
     } else if ($("#cell1, #cell4, #cell7").text() == "XXX" || $("#cell1, #cell4, #cell7").text() == "OOO") {  
      $("#cell1, #cell4, #cell7").css("background", "green");
       
      status(); 
       
      if ($("#cell1, #cell4, #cell7").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell1, #cell4, #cell7").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell1, #cell4, #cell7").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell1, #cell4, #cell7").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
       
      setTimeout(clear, 1000);
       
     } else if ($("#cell2, #cell5, #cell8").text() == "XXX" || $("#cell2, #cell5, #cell8").text() == "OOO") {
      $("#cell2, #cell5, #cell8").css("background", "green");
      
      status(); 
       
      if ($("#cell2, #cell5, #cell8").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell2, #cell5, #cell8").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell2, #cell5, #cell8").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell2, #cell5, #cell8").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
       
      setTimeout(clear, 1000);
       
     } else if ($("#cell3, #cell6, #cell9").text() == "XXX" ||$("#cell3, #cell6, #cell9").text() == "OOO") {
      $("#cell3, #cell6, #cell9").css("background", "green");
      
      status(); 
       
      if ($("#cell3, #cell6, #cell9").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell3, #cell6, #cell9").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell3, #cell6, #cell9").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell3, #cell6, #cell9").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
       
      setTimeout(clear, 1000);
       
     } else if ($("#cell1, #cell5, #cell9").text() == "XXX" || $("#cell1, #cell5, #cell9").text() == "OOO") {
      $("#cell1, #cell5, #cell9").css("background", "green");
       
      status(); 
       
      if ($("#cell1, #cell5, #cell9").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell1, #cell5, #cell9").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell1, #cell5, #cell9").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell1, #cell5, #cell9").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
       
      setTimeout(clear, 1000);
       
     } else if ($("#cell3, #cell5, #cell7").text() == "XXX" || $("#cell3, #cell5, #cell7").text() == "OOO") {
      $("#cell3, #cell5, #cell7").css("background", "green");
      
      status(); 
       
      if ($("#cell3, #cell5, #cell7").text() == "XXX" && $("#x").is(":checked")){
        alert("X wins!");   
      } else if($("#cell3, #cell5, #cell7").text() == "XXX" && $("#o").is(":checked")) {
        alert("X wins!");
      } else if($("#cell3, #cell5, #cell7").text() == "OOO" && $("#x").is(":checked")) {
        alert("O wins!");
      } else if($("#cell3, #cell5, #cell7").text() == "OOO" && $("#o").is(":checked")) {
        alert("O wins!");
      }
       
      setTimeout(clear, 1000);
        
      } else if (cellArray.length === 0) {
       alert("Draw! Please try again.");
       setTimeout(clear, 1000);
      }
    
    conditionArray.push("false"); 
   } 
        
   function computerMove() {
     
      if ($("#x").is(":checked")){ 
         if ($("#cell1").text() == "O" && $("#cell2").text() == "O") {
          if ($("#cell3").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("3")]).text("O");
           cellArray.splice(cellArray.indexOf("3"), 1);  
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell3").text() == "O"){
          if ($("#cell2").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("2")]).text("O");
           cellArray.splice(cellArray.indexOf("2"), 1);  
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell2").text() == "O" && $("#cell3").text() == "O"){
          if ($("#cell1").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("1")]).text("O");
           cellArray.splice(cellArray.indexOf("1"), 1);  
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell4").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell6").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("6")]).text("O");
           cellArray.splice(cellArray.indexOf("6"), 1);
           checkUp(); 
           return;    
          } 
         }
         if ($("#cell4").text() == "O" && $("#cell6").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
           cellArray.splice(cellArray.indexOf("5"), 1); 
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell6").text() == "O"){
          if ($("#cell4").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("4")]).text("O");
           cellArray.splice(cellArray.indexOf("4"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell7").text() == "O" && $("#cell8").text() == "O") {
          if ($("#cell9").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("9")]).text("O");
           cellArray.splice(cellArray.indexOf("9"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell7").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell8").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("8")]).text("O");
           cellArray.splice(cellArray.indexOf("8"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell8").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell7").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("7")]).text("O");
           cellArray.splice(cellArray.indexOf("7"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell4").text() == "O") {
          if ($("#cell7").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("7")]).text("O");
           cellArray.splice(cellArray.indexOf("7"), 1); 
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell4").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("4")]).text("O");
           cellArray.splice(cellArray.indexOf("4"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell4").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell1").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("1")]).text("O");
           cellArray.splice(cellArray.indexOf("1"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell2").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell8").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("8")]).text("O");
           cellArray.splice(cellArray.indexOf("8"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell2").text() == "O" && $("#cell8").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
           cellArray.splice(cellArray.indexOf("5"), 1); 
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell8").text() == "O"){
          if ($("#cell2").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("2")]).text("O");
           cellArray.splice(cellArray.indexOf("2"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell6").text() == "O") {
          if ($("#cell9").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("9")]).text("O");
           cellArray.splice(cellArray.indexOf("9"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell6").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("6")]).text("O");
           cellArray.splice(cellArray.indexOf("6"), 1); 
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell6").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell3").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("3")]).text("O");
           cellArray.splice(cellArray.indexOf("3"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell9").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("9")]).text("O");
           cellArray.splice(cellArray.indexOf("9"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
           cellArray.splice(cellArray.indexOf("5"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell1").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("1")]).text("O");
           cellArray.splice(cellArray.indexOf("1"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell7").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("7")]).text("O");
           cellArray.splice(cellArray.indexOf("7"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
           cellArray.splice(cellArray.indexOf("5"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell3").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("3")]).text("O");
           cellArray.splice(cellArray.indexOf("3"), 1); 
           checkUp(); 
           return;  
          }  
         }
           
        if ($("#cell1").text() == "X" && $("#cell2").text() == "X") {
         if ($("#cell3").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("3")]).text("O");
          cellArray.splice(cellArray.indexOf("3"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell1").text() == "X" && $("#cell3").text() == "X"){
         if ($("#cell2").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("2")]).text("O");
          cellArray.splice(cellArray.indexOf("2"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell2").text() == "X" && $("#cell3").text() == "X"){
         if ($("#cell1").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("1")]).text("O");
          cellArray.splice(cellArray.indexOf("1"), 1);
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell4").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell6").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("6")]).text("O");
          cellArray.splice(cellArray.indexOf("6"), 1);
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell4").text() == "X" && $("#cell6").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell5").text() == "X" && $("#cell6").text() == "X"){
         if ($("#cell4").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("4")]).text("O");
          cellArray.splice(cellArray.indexOf("4"), 1);
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell7").text() == "X" && $("#cell8").text() == "X") {
         if ($("#cell9").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("9")]).text("O");
          cellArray.splice(cellArray.indexOf("9"), 1);
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell7").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell8").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("8")]).text("O");
          cellArray.splice(cellArray.indexOf("8"), 1);
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell8").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell7").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("7")]).text("O");
          cellArray.splice(cellArray.indexOf("7"), 1);
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell1").text() == "X" && $("#cell4").text() == "X") {
         if ($("#cell7").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("7")]).text("O");
          cellArray.splice(cellArray.indexOf("7"), 1);
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell1").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell4").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("4")]).text("O");
          cellArray.splice(cellArray.indexOf("4"), 1);
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell4").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell1").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("1")]).text("O");
          cellArray.splice(cellArray.indexOf("1"), 1);
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell2").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell8").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("8")]).text("O");
          cellArray.splice(cellArray.indexOf("8"), 1);
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell2").text() == "X" && $("#cell8").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell5").text() == "X" && $("#cell8").text() == "X"){
         if ($("#cell2").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("2")]).text("O");
          cellArray.splice(cellArray.indexOf("2"), 1);
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell3").text() == "X" && $("#cell6").text() == "X") {
         if ($("#cell9").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("9")]).text("O");
          cellArray.splice(cellArray.indexOf("9"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell3").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell6").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("6")]).text("O");
          cellArray.splice(cellArray.indexOf("6"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell6").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell3").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("3")]).text("O");
          cellArray.splice(cellArray.indexOf("3"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell1").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell9").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("9")]).text("O");
          cellArray.splice(cellArray.indexOf("9"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell1").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell5").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell1").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("1")]).text("O");
          cellArray.splice(cellArray.indexOf("1"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell3").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell7").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("7")]).text("O");
          cellArray.splice(cellArray.indexOf("7"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell3").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell5").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell3").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("3")]).text("O");
          cellArray.splice(cellArray.indexOf("3"), 1);
          checkUp(); 
          return;  
         } 
        }  
        
        if ($("#cell1").text() == "X" || $("#cell3").text() == "X" || $("#cell7").text() == "X" || $("#cell9").text() == "X") {
         if ($("#cell5").is(":empty")){
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("O");
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        } 
        
        if (cellArray.length < 9) {
         var randArrNum = Math.floor(Math.random() * cellArray.length);
         if ($("#cell" + cellArray[randArrNum]).is(":empty")) {
          $("#cell" + cellArray[randArrNum]).text("O");
          cellArray.splice(cellArray.indexOf(cellArray[randArrNum]), 1);
          checkUp(); 
          return;  
         }  
        }
        
       } else {
           
        if ($("#cell1").text() == "X" && $("#cell2").text() == "X") {
         if ($("#cell3").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("3")]).text("X"); 
          cellArray.splice(cellArray.indexOf("3"), 1); 
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell1").text() == "X" && $("#cell3").text() == "X"){
         if ($("#cell2").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("2")]).text("X"); 
          cellArray.splice(cellArray.indexOf("2"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell2").text() == "X" && $("#cell3").text() == "X"){
         if ($("#cell1").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("1")]).text("X"); 
          cellArray.splice(cellArray.indexOf("1"), 1);  
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell4").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell6").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("6")]).text("X"); 
          cellArray.splice(cellArray.indexOf("6"), 1);
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell4").text() == "X" && $("#cell6").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("X"); 
          cellArray.splice(cellArray.indexOf("5"), 1);  
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell5").text() == "X" && $("#cell6").text() == "X"){
         if ($("#cell4").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("4")]).text("X"); 
          cellArray.splice(cellArray.indexOf("4"), 1);  
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell7").text() == "X" && $("#cell8").text() == "X") {
         if ($("#cell9").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("9")]).text("X"); 
          cellArray.splice(cellArray.indexOf("9"), 1);   
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell7").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell8").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("8")]).text("X"); 
          cellArray.splice(cellArray.indexOf("8"), 1);  
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell8").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell7").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("7")]).text("X"); 
          cellArray.splice(cellArray.indexOf("7"), 1);  
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell1").text() == "X" && $("#cell4").text() == "X") {
         if ($("#cell7").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("7")]).text("X"); 
          cellArray.splice(cellArray.indexOf("7"), 1);  
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell1").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell4").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("4")]).text("X"); 
          cellArray.splice(cellArray.indexOf("4"), 1);  
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell4").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell1").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("1")]).text("X"); 
          cellArray.splice(cellArray.indexOf("1"), 1);  
          checkUp(); 
          return;  
         } 
        }
        if ($("#cell2").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell8").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("8")]).text("X"); 
          cellArray.splice(cellArray.indexOf("8"), 1);  
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell2").text() == "X" && $("#cell8").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("X"); 
          cellArray.splice(cellArray.indexOf("5"), 1);  
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell5").text() == "X" && $("#cell8").text() == "X"){
         if ($("#cell2").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("2")]).text("X"); 
          cellArray.splice(cellArray.indexOf("2"), 1);  
          checkUp(); 
          return;  
         } 
        } 
        if ($("#cell3").text() == "X" && $("#cell6").text() == "X") {
         if ($("#cell9").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("9")]).text("X"); 
          cellArray.splice(cellArray.indexOf("9"), 1); 
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell3").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell6").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("6")]).text("X"); 
          cellArray.splice(cellArray.indexOf("6"), 1); 
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell6").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell3").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("3")]).text("X"); 
          cellArray.splice(cellArray.indexOf("3"), 1); 
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell1").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell9").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("9")]).text("X"); 
          cellArray.splice(cellArray.indexOf("9"), 1); 
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell1").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("X"); 
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell5").text() == "X" && $("#cell9").text() == "X"){
         if ($("#cell1").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("1")]).text("X"); 
          cellArray.splice(cellArray.indexOf("1"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell3").text() == "X" && $("#cell5").text() == "X") {
         if ($("#cell7").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("7")]).text("X"); 
          cellArray.splice(cellArray.indexOf("7"), 1); 
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell3").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell5").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("X"); 
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell5").text() == "X" && $("#cell7").text() == "X"){
         if ($("#cell3").text().length == 0) {
          $('#cell' + cellArray[cellArray.indexOf("3")]).text("X"); 
          cellArray.splice(cellArray.indexOf("3"), 1); 
          checkUp(); 
          return;  
         } 
        }  
        if ($("#cell1").text() == "X" || $("#cell3").text() == "X" || $("#cell7").text() == "X" || $("#cell9").text() == "X") {
         if ($("#cell5").is(":empty")){
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("X"); 
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        } 
        
         
         if ($("#cell1").text() == "O" && $("#cell2").text() == "O") {
          if ($("#cell3").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("3")]).text("X");
           cellArray.splice(cellArray.indexOf("3"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell3").text() == "O"){
          if ($("#cell2").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("2")]).text("X");
           cellArray.splice(cellArray.indexOf("2"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell2").text() == "O" && $("#cell3").text() == "O"){
          if ($("#cell1").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("1")]).text("X");
           cellArray.splice(cellArray.indexOf("1"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell4").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell6").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("6")]).text("X");
           cellArray.splice(cellArray.indexOf("6"), 1);
           checkUp(); 
           return;    
          } 
         }
         if ($("#cell4").text() == "O" && $("#cell6").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("X");
           cellArray.splice(cellArray.indexOf("5"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell6").text() == "O"){
          if ($("#cell4").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("4")]).text("X");
           cellArray.splice(cellArray.indexOf("4"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell7").text() == "O" && $("#cell8").text() == "O") {
          if ($("#cell9").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("9")]).text("X");
           cellArray.splice(cellArray.indexOf("9"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell7").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell8").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("8")]).text("X");
           cellArray.splice(cellArray.indexOf("8"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell8").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell7").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("7")]).text("X");
           cellArray.splice(cellArray.indexOf("7"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell4").text() == "O") {
          if ($("#cell7").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("7")]).text("X");
           cellArray.splice(cellArray.indexOf("7"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell4").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("4")]).text("X");
           cellArray.splice(cellArray.indexOf("4"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell4").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell1").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("1")]).text("X");
           cellArray.splice(cellArray.indexOf("1"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell2").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell8").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("8")]).text("X");
           cellArray.splice(cellArray.indexOf("8"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell2").text() == "O" && $("#cell8").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("X");
           cellArray.splice(cellArray.indexOf("5"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell8").text() == "O"){
          if ($("#cell2").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("2")]).text("X");
           cellArray.splice(cellArray.indexOf("2"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell6").text() == "O") {
          if ($("#cell9").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("9")]).text("X");
           cellArray.splice(cellArray.indexOf("9"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell6").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("6")]).text("X");
           cellArray.splice(cellArray.indexOf("6"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell6").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell3").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("3")]).text("X");
           cellArray.splice(cellArray.indexOf("3"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell9").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("9")]).text("X");
           cellArray.splice(cellArray.indexOf("9"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell1").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("X");
           cellArray.splice(cellArray.indexOf("5"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell9").text() == "O"){
          if ($("#cell1").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("1")]).text("X");
           cellArray.splice(cellArray.indexOf("1"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell5").text() == "O") {
          if ($("#cell7").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("7")]).text("X");
           cellArray.splice(cellArray.indexOf("7"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell3").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell5").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("5")]).text("X");
           cellArray.splice(cellArray.indexOf("5"), 1);
           checkUp(); 
           return;  
          }  
         }
         if ($("#cell5").text() == "O" && $("#cell7").text() == "O"){
          if ($("#cell3").text().length == 0) {
           $('#cell' + cellArray[cellArray.indexOf("3")]).text("X");
           cellArray.splice(cellArray.indexOf("3"), 1);
           checkUp(); 
           return;  
          }  
         }
         
         if ($("#cell1").text() == "O" || $("#cell3").text() == "O" || $("#cell7").text() == "O" || $("#cell9").text() == "O") {
         if ($("#cell5").is(":empty")){
          $('#cell' + cellArray[cellArray.indexOf("5")]).text("X"); 
          cellArray.splice(cellArray.indexOf("5"), 1);
          checkUp(); 
          return;  
         } 
        } 
         
         if (cellArray.length < 9) {
         var randArrNum = Math.floor(Math.random() * cellArray.length);
         if ($("#cell" + cellArray[randArrNum]).is(":empty")) {
          $("#cell" + cellArray[randArrNum]).text("X");
          cellArray.splice(cellArray.indexOf(cellArray[randArrNum]), 1);
          checkUp(); 
          return;  
         }  
        }     
       }
      checkUp(); 
      }    
  });
  
