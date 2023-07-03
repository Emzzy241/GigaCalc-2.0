$(document).ready(() => {
    $(".amountCourses").click(() => {
        $(".course-11").fadeIn();
        $(".course-info").fadeOut();






    //     function checkingGpa(){
    //         // picking up the unit and grade
    //         let userUnits = $(".unit3").find(":selected").val();
    //         let userGrade3 = $(".grade3").find(":selected").val();
    
    //         let threeCoursegpa;
    
    //               // For a 1 unit course and several grades
    //               if (userGrade3 === "A" && userUnits === "1") {
    //                   threeCoursegpa = 1 * 5;
      
    //                   $(".myThirdResult").text("You had an A in a 1 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "B" && userUnits === "1") {
    //                   threeCoursegpa = 1 * 4;
      
    //                   $(".myThirdResult").text("You had a B in a 1 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "C" && userUnits === "1") {
    //                   threeCoursegpa = 1 * 3;
      
    //                   $(".myThirdResult").text("You had a C in a 1 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "D" && userUnits === "1") {
    //                   threeCoursegpa = 1 * 2;
      
    //                   $(".myThirdResult").text("You had a D in a 1 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "E" && userUnits === "1") {
    //                   threeCoursegpa = 1 * 1;
      
    //                   $(".myThirdResult").text("You had an E in a 1 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "F" && userUnits === "1") {
    //                   threeCoursegpa = 1 * 0;
      
    //                   $(".myThirdResult").text("You had an F in a 1 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
      
    //               // For 2 units now
      
    //               else if (userGrade3 === "A" && userUnits === "2") {
    //                   threeCoursegpa = 2 * 5;
      
    //                   $(".myThirdResult").text("You had an A in a 2 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "B" && userUnits === "2") {
    //                   threeCoursegpa = 2 * 4;
      
    //                   $(".myThirdResult").text("You had a B in a 2 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "C" && userUnits === "2") {
    //                   threeCoursegpa = 2 * 3;
      
    //                   $(".myThirdResult").text("You had a C in a 2 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "D" && userUnits === "2") {
    //                   threeCoursegpa = 2 * 2;
      
    //                   $(".myThirdResult").text("You had a D in a 2 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "E" && userUnits === "2") {
    //                   threeCoursegpa = 2 * 1;
      
    //                   $(".myThirdResult").text("You had an E in a 2 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "F" && userUnits === "2") {
    //                   threeCoursegpa = 2 * 0;
      
    //                   $(".myThirdResult").text("You had an E in a 2 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
      
    //               // For 3 unit courses now
      
      
    //               else if (userGrade3 === "A" && userUnits === "3") {
    //                   threeCoursegpa = 3 * 5;
      
    //                   $(".myThirdResult").text("You had an A in a 3 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "B" && userUnits === "3") {
    //                   threeCoursegpa = 3 * 4;
      
    //                   $(".myThirdResult").text("You had a B in a 3 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "C" && userUnits === "3") {
    //                   threeCoursegpa = 3 * 3;
      
    //                   $(".myThirdResult").text("You had a C in a 3 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "D" && userUnits === "3") {
    //                   threeCoursegpa = 3 * 2;
      
    //                   $(".myThirdResult").text("You had a D in a 3 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "E" && userUnits === "3") {
    //                   threeCoursegpa = 3 * 1;
      
    //                   $(".myThirdResult").text("You had an E in a 3 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
    //               else if (userGrade3 === "F" && userUnits === "3") {
    //                   threeCoursegpa = 3 * 0;
      
    //                   $(".myThirdResult").text("You had an E in a 3 unit course")
    //                   $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
    //               }
      
    //               return threeCoursegpa;
    
    // }


    // working with an IIFE - Immediately Invoked Function Expression-- A function that gets executed immediately its written


    (function checkMyGpa(){
        

    let oneCoursegpa;
    let twoCoursegpa;
    let threeCoursegpa;
    let fourthCoursegpa;
    let fifthCoursegpa;
    let sixthCoursegpa;
    let seventhCoursegpa;
    let eightCoursegpa;
    let ninthCoursegpa;
    let tenthCoursegpa;
    let eleventhCoursegpa;

        // Checking out the first course

        $(".check1").click(() => {
            // picking up the unit and grade
            let userUnits1 = $(".unit1").find(":selected").val();
            let userGrade1 = $(".grade1").find(":selected").val();



            // For a 1 unit course and several grades
            if (userGrade1 === "A" && userUnits1 === "1") {
                oneCoursegpa = 1 * 5;

                $(".myResult").text("You had an A in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "B" && userUnits1 === "1") {
                oneCoursegpa = 1 * 4;

                $(".myResult").text("You had a B in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "C" && userUnits1 === "1") {
                oneCoursegpa = 1 * 3;

                $(".myResult").text("You had a C in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "D" && userUnits1 === "1") {
                oneCoursegpa = 1 * 2;

                $(".myResult").text("You had a D in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "E" && userUnits1 === "1") {
                oneCoursegpa = 1 * 1;

                $(".myResult").text("You had an E in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "F" && userUnits1 === "1") {
                oneCoursegpa = 1 * 0;

                $(".myResult").text("You had an F in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }

            // For 2 units now

            else if (userGrade1 === "A" && userUnits1 === "2") {
                oneCoursegpa = 2 * 5;

                $(".myResult").text("You had an A in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "B" && userUnits1 === "2") {
                oneCoursegpa = 2 * 4;

                $(".myResult").text("You had a B in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "C" && userUnits1 === "2") {
                oneCoursegpa = 2 * 3;

                $(".myResult").text("You had a C in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "D" && userUnits1 === "2") {
                oneCoursegpa = 2 * 2;

                $(".myResult").text("You had a D in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "E" && userUnits1 === "2") {
                oneCoursegpa = 2 * 1;

                $(".myResult").text("You had an E in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "F" && userUnits1 === "2") {
                oneCoursegpa = 2 * 0;

                $(".myResult").text("You had an E in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }

            // For 3 unit courses now


            else if (userGrade1 === "A" && userUnits1 === "3") {
                oneCoursegpa = 3 * 5;

                $(".myResult").text("You had an A in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "B" && userUnits1 === "3") {
                oneCoursegpa = 3 * 4;

                $(".myResult").text("You had a B in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "C" && userUnits1 === "3") {
                oneCoursegpa = 3 * 3;

                $(".myResult").text("You had a C in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "D" && userUnits1 === "3") {
                oneCoursegpa = 3 * 2;

                $(".myResult").text("You had a D in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "E" && userUnits1 === "3") {
                oneCoursegpa = 3 * 1;

                $(".myResult").text("You had an E in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "F" && userUnits1 === "3") {
                oneCoursegpa = 3 * 0;

                $(".myResult").text("You had an E in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }

        });




        // Checking for the second course

        $(".check2").click(() => {
            // picking up the unit and grade
            let userUnits2 = $(".unit2").find(":selected").val();
            let userGrade2 = $(".grade2").find(":selected").val();

            

              // For a 1 unit course and several grades
              if (userGrade2 === "A" && userUnits2 === "1") {
                twoCoursegpa = 1 * 5;

                $(".mySecondResult").text("You had an A in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "B" && userUnits2 === "1") {
                twoCoursegpa = 1 * 4;

                $(".mySecondResult").text("You had a B in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "C" && userUnits2 === "1") {
                twoCoursegpa = 1 * 3;

                $(".mySecondResult").text("You had a C in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "D" && userUnits2 === "1") {
                twoCoursegpa = 1 * 2;

                $(".mySecondResult").text("You had a D in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "E" && userUnits2 === "1") {
                twoCoursegpa = 1 * 1;

                $(".mySecondResult").text("You had an E in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "F" && userUnits2 === "1") {
                twoCoursegpa = 1 * 0;

                $(".mySecondResult").text("You had an F in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }

            // For 2 units now

            else if (userGrade2 === "A" && userUnits2 === "2") {
                twoCoursegpa = 2 * 5;

                $(".mySecondResult").text("You had an A in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "B" && userUnits2 === "2") {
                twoCoursegpa = 2 * 4;

                $(".mySecondResult").text("You had a B in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "C" && userUnits2 === "2") {
                twoCoursegpa = 2 * 3;

                $(".mySecondResult").text("You had a C in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "D" && userUnits2 === "2") {
                twoCoursegpa = 2 * 2;

                $(".mySecondResult").text("You had a D in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "E" && userUnits2 === "2") {
                twoCoursegpa = 2 * 1;

                $(".mySecondResult").text("You had an E in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "F" && userUnits2 === "2") {
                twoCoursegpa = 2 * 0;

                $(".mySecondResult").text("You had an E in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }

            // For 3 unit courses now


            else if (userGrade2 === "A" && userUnits2 === "3") {
                twoCoursegpa = 3 * 5;

                $(".mySecondResult").text("You had an A in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "B" && userUnits2 === "3") {
                twoCoursegpa = 3 * 4;

                $(".mySecondResult").text("You had a B in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "C" && userUnits2 === "3") {
                twoCoursegpa = 3 * 3;

                $(".mySecondResult").text("You had a C in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "D" && userUnits2 === "3") {
                twoCoursegpa = 3 * 2;

                $(".mySecondResult").text("You had a D in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "E" && userUnits2 === "3") {
                twoCoursegpa = 3 * 1;

                $(".mySecondResult").text("You had an E in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "F" && userUnits2 === "3") {
                twoCoursegpa = 3 * 0;

                $(".mySecondResult").text("You had an E in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }

        });


        // Checking for the third course

        $(".check3").click(()=>{
            //   picking up the unit and grade
              let userUnits3 = $(".unit3").find(":selected").val();
              let userGrade3 = $(".grade3").find(":selected").val();
  
              

                    // For a 1 unit course and several grades
                    if (userGrade3 === "A" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 5;
        
                        $(".myThirdResult").text("You had an A in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "B" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 4;
        
                        $(".myThirdResult").text("You had a B in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "C" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 3;
        
                        $(".myThirdResult").text("You had a C in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "D" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 2;
        
                        $(".myThirdResult").text("You had a D in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "E" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 1;
        
                        $(".myThirdResult").text("You had an E in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "F" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 0;
        
                        $(".myThirdResult").text("You had an F in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
        
                    // For 2 units now
        
                    else if (userGrade3 === "A" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 5;
        
                        $(".myThirdResult").text("You had an A in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "B" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 4;
        
                        $(".myThirdResult").text("You had a B in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "C" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 3;
        
                        $(".myThirdResult").text("You had a C in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "D" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 2;
        
                        $(".myThirdResult").text("You had a D in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "E" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 1;
        
                        $(".myThirdResult").text("You had an E in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "F" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 0;
        
                        $(".myThirdResult").text("You had an E in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
        
                    // For 3 unit courses now
        
        
                    else if (userGrade3 === "A" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 5;
        
                        $(".myThirdResult").text("You had an A in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "B" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 4;
        
                        $(".myThirdResult").text("You had a B in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "C" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 3;
        
                        $(".myThirdResult").text("You had a C in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "D" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 2;
        
                        $(".myThirdResult").text("You had a D in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "E" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 1;
        
                        $(".myThirdResult").text("You had an E in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "F" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 0;
        
                        $(".myThirdResult").text("You had an E in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
            // checkingGpa();


  
        });


        // Checking for the fourth course

        $(".check4").click(()=>{
            let userUnits4 = $(".unit4").find(":selected").val();
            let userGrade4 = $(".grade4").find(":selected").val();

          

               // For a 1 unit course and several grades
               if (userGrade4 === "A" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 5;

                $(".myFourthResult").text("You had an A in a 1 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "B" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 4;

                $(".myFourthResult").text("You had a B in a 1 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "C" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 3;

                $(".myFourthResult").text("You had a C in a 1 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "D" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 2;

                $(".myFourthResult").text("You had a D in a 1 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "E" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 1;

                $(".myFourthResult").text("You had an E in a 1 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "F" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 0;

                $(".myFourthResult").text("You had an F in a 1 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }

            // For 2 units now

            else if (userGrade4 === "A" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 5;

                $(".myFourthResult").text("You had an A in a 2 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "B" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 4;

                $(".myFourthResult").text("You had a B in a 2 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "C" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 3;

                $(".myFourthResult").text("You had a C in a 2 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "D" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 2;

                $(".myFourthResult").text("You had a D in a 2 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "E" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 1;

                $(".myFourthResult").text("You had an E in a 2 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "F" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 0;

                $(".myFourthResult").text("You had an E in a 2 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }

            // For 3 unit courses now


            else if (userGrade4 === "A" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 5;

                $(".myFourthResult").text("You had an A in a 3 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "B" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 4;

                $(".myFourthResult").text("You had a B in a 3 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "C" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 3;

                $(".myFourthResult").text("You had a C in a 3 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "D" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 2;

                $(".myFourthResult").text("You had a D in a 3 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "E" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 1;

                $(".myFourthResult").text("You had an E in a 3 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "F" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 0;

                $(".myFourthResult").text("You had an E in a 3 unit course")
                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }


        });


        // checking for the fifth course

        $(".check5").click(()=>{
            let userUnits5 = $(".unit5").find(":selected").val();
            let userGrade5 = $(".grade5").find(":selected").val();

            

                // For a 1 unit course and several grades
                if (userGrade5 === "A" && userUnits5 === "1") {
                    fifthCoursegpa = 1 * 5;
    
                    $(".myFifthResult").text("You had an A in a 1 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "B" && userUnits5 === "1") {
                    fifthCoursegpa = 1 * 4;
    
                    $(".myFifthResult").text("You had a B in a 1 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "C" && userUnits5 === "1") {
                    fifthCoursegpa = 1 * 3;
    
                    $(".myFifthResult").text("You had a C in a 1 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "D" && userUnits5 === "1") {
                    fifthCoursegpa = 1 * 2;
    
                    $(".myFifthResult").text("You had a D in a 1 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "E" && userUnits5 === "1") {
                    fifthCoursegpa = 1 * 1;
    
                    $(".myFifthResult").text("You had an E in a 1 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "F" && userUnits5 === "1") {
                    fifthCoursegpa = 1 * 0;
    
                    $(".myFifthResult").text("You had an F in a 1 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
    
                // For 2 units now
    
                else if (userGrade5 === "A" && userUnits5 === "2") {
                    fifthCoursegpa = 2 * 5;
    
                    $(".myFifthResult").text("You had an A in a 2 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "B" && userUnits5 === "2") {
                    fifthCoursegpa = 2 * 4;
    
                    $(".myFifthResult").text("You had a B in a 2 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "C" && userUnits5 === "2") {
                    fifthCoursegpa = 2 * 3;
    
                    $(".myFifthResult").text("You had a C in a 2 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "D" && userUnits5 === "2") {
                    fifthCoursegpa = 2 * 2;
    
                    $(".myFifthResult").text("You had a D in a 2 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "E" && userUnits5 === "2") {
                    fifthCoursegpa = 2 * 1;
    
                    $(".myFifthResult").text("You had an E in a 2 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "F" && userUnits5 === "2") {
                    fifthCoursegpa = 2 * 0;
    
                    $(".myFifthResult").text("You had an E in a 2 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
    
                // For 3 unit courses now
    
    
                else if (userGrade5 === "A" && userUnits5 === "3") {
                    fifthCoursegpa = 3 * 5;
    
                    $(".myFifthResult").text("You had an A in a 3 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "B" && userUnits5 === "3") {
                    fifthCoursegpa = 3 * 4;
    
                    $(".myFifthResult").text("You had a B in a 3 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "C" && userUnits5 === "3") {
                    fifthCoursegpa = 3 * 3;
    
                    $(".myFifthResult").text("You had a C in a 3 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "D" && userUnits5 === "3") {
                    fifthCoursegpa = 3 * 2;
    
                    $(".myFifthResult").text("You had a D in a 3 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "E" && userUnits5 === "3") {
                    fifthCoursegpa = 3 * 1;
    
                    $(".myFifthResult").text("You had an E in a 3 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }
                else if (userGrade5 === "F" && userUnits5 === "3") {
                    fifthCoursegpa = 3 * 0;
    
                    $(".myFifthResult").text("You had an E in a 3 unit course")
                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);
    
                }

    

        });

        


        // checking the sixth course

        $(".check6").click(()=>{
            let userUnits6 = $(".unit6").find(":selected").val();
            let userGrade6 = $(".grade6").find(":selected").val();
            console.log(userUnits6);
           

            // For a 1 unit course and several grades
            if (userGrade6 === "A" && userUnits6 === "1") {
                sixthCoursegpa = 1 * 5;
                console.log(sixthCoursegpa);
    
                    $(".mySixthResult").text("You had an A in a 1 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "B" && userUnits6 === "1") {
                    sixthCoursegpa = 1 * 4;
    
                    $(".mySixthResult").text("You had a B in a 1 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "C" && userUnits6 === "1") {
                    sixthCoursegpa = 1 * 3;
    
                    $(".mySixthResult").text("You had a C in a 1 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "D" && userUnits6 === "1") {
                    sixthCoursegpa = 1 * 2;
    
                    $(".mySixthResult").text("You had a D in a 1 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "E" && userUnits6 === "1") {
                    sixthCoursegpa = 1 * 1;
    
                    $(".mySixthResult").text("You had an E in a 1 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "F" && userUnits6 === "1") {
                    sixthCoursegpa = 1 * 0;
    
                    $(".mySixthResult").text("You had an F in a 1 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
    
                // For 2 units now
    
                else if (userGrade6 === "A" && userUnits6 === "2") {
                    sixthCoursegpa = 2 * 5;
    
                    $(".mySixthResult").text("You had an A in a 2 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "B" && userUnits6 === "2") {
                    sixthCoursegpa = 2 * 4;
    
                    $(".mySixthResult").text("You had a B in a 2 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "C" && userUnits6 === "2") {
                    sixthCoursegpa = 2 * 3;
    
                    $(".mySixthResult").text("You had a C in a 2 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "D" && userUnits6 === "2") {
                    sixthCoursegpa = 2 * 2;
    
                    $(".mySixthResult").text("You had a D in a 2 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "E" && userUnits6 === "2") {
                    sixthCoursegpa = 2 * 1;
    
                    $(".mySixthResult").text("You had an E in a 2 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "F" && userUnits6 === "2") {
                    sixthCoursegpa = 2 * 0;
    
                    $(".mySixthResult").text("You had an E in a 2 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
    
                // For 3 unit courses now
    
    
                else if (userGrade6 === "A" && userUnits6 === "3") {
                    sixthCoursegpa = 3 * 5;
    
                    $(".mySixthResult").text("You had an A in a 3 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "B" && userUnits6 === "3") {
                    sixthCoursegpa = 3 * 4;
    
                    $(".mySixthResult").text("You had a B in a 3 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "C" && userUnits6 === "3") {
                    sixthCoursegpa = 3 * 3;
    
                    $(".mySixthResult").text("You had a C in a 3 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "D" && userUnits6 === "3") {
                    sixthCoursegpa = 3 * 2;
    
                    $(".mySixthResult").text("You had a D in a 3 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "E" && userUnits6 === "3") {
                    sixthCoursegpa = 3 * 1;
    
                    $(".mySixthResult").text("You had an E in a 3 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }
                else if (userGrade6 === "F" && userUnits6 === "3") {
                    sixthCoursegpa = 3 * 0;
    
                    $(".mySixthResult").text("You had an E in a 3 unit course")
                    $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);
    
                }


        });





        // checking the seventh course

        $(".check7").click(()=>{
            let userUnits7 = $(".unit7").find(":selected").val();
            let userGrade7 = $(".grade7").find(":selected").val();

           

                // For a 1 unit course and several grades
                if (userGrade7 === "A" && userUnits7 === "1") {
                    seventhCoursegpa = 1 * 5;
    
                    $(".mySeventhResult").text("You had an A in a 1 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "B" && userUnits7 === "1") {
                    seventhCoursegpa = 1 * 4;
    
                    $(".mySeventhResult").text("You had a B in a 1 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "C" && userUnits7 === "1") {
                    seventhCoursegpa = 1 * 3;
    
                    $(".mySeventhResult").text("You had a C in a 1 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "D" && userUnits7 === "1") {
                    seventhCoursegpa = 1 * 2;
    
                    $(".mySeventhResult").text("You had a D in a 1 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "E" && userUnits7 === "1") {
                    seventhCoursegpa = 1 * 1;
    
                    $(".mySeventhResult").text("You had an E in a 1 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "F" && userUnits7 === "1") {
                    seventhCoursegpa = 1 * 0;
    
                    $(".mySeventhResult").text("You had an F in a 1 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
    
                // For 2 units now
    
                else if (userGrade7 === "A" && userUnits7 === "2") {
                    seventhCoursegpa = 2 * 5;
    
                    $(".mySeventhResult").text("You had an A in a 2 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "B" && userUnits7 === "2") {
                    seventhCoursegpa = 2 * 4;
    
                    $(".mySeventhResult").text("You had a B in a 2 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "C" && userUnits7 === "2") {
                    seventhCoursegpa = 2 * 3;
    
                    $(".mySeventhResult").text("You had a C in a 2 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "D" && userUnits7 === "2") {
                    seventhCoursegpa = 2 * 2;
    
                    $(".mySeventhResult").text("You had a D in a 2 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "E" && userUnits7 === "2") {
                    seventhCoursegpa = 2 * 1;
    
                    $(".mySeventhResult").text("You had an E in a 2 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "F" && userUnits7 === "2") {
                    seventhCoursegpa = 2 * 0;
    
                    $(".mySeventhResult").text("You had an E in a 2 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
    
                // For 3 unit courses now
    
    
                else if (userGrade7 === "A" && userUnits7 === "3") {
                    seventhCoursegpa = 3 * 5;
    
                    $(".mySeventhResult").text("You had an A in a 3 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "B" && userUnits7 === "3") {
                    seventhCoursegpa = 3 * 4;
    
                    $(".mySeventhResult").text("You had a B in a 3 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "C" && userUnits7 === "3") {
                    seventhCoursegpa = 3 * 3;
    
                    $(".mySeventhResult").text("You had a C in a 3 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "D" && userUnits7 === "3") {
                    seventhCoursegpa = 3 * 2;
    
                    $(".mySeventhResult").text("You had a D in a 3 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "E" && userUnits7 === "3") {
                    seventhCoursegpa = 3 * 1;
    
                    $(".mySeventhResult").text("You had an E in a 3 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }
                else if (userGrade7 === "F" && userUnits7 === "3") {
                    seventhCoursegpa = 3 * 0;
    
                    $(".mySeventhResult").text("You had an E in a 3 unit course")
                    $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);
    
                }


        });




        // checking the eight course
        
        $(".check8").click(()=>{
            let userUnits8 = $(".unit8").find(":selected").val();
            let userGrade8 = $(".grade8").find(":selected").val();

           

                // For a 1 unit course and several grades
                if (userGrade8 === "A" && userUnits8 === "1") {
                    eightCoursegpa = 1 * 5;
    
                    $(".myEightResult").text("You had an A in a 1 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "B" && userUnits8 === "1") {
                    eightCoursegpa = 1 * 4;
    
                    $(".myEightResult").text("You had a B in a 1 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "C" && userUnits8 === "1") {
                    eightCoursegpa = 1 * 3;
    
                    $(".myEightResult").text("You had a C in a 1 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "D" && userUnits8 === "1") {
                    eightCoursegpa = 1 * 2;
    
                    $(".myEightResult").text("You had a D in a 1 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "E" && userUnits8 === "1") {
                    eightCoursegpa = 1 * 1;
    
                    $(".myEightResult").text("You had an E in a 1 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "F" && userUnits8 === "1") {
                    eightCoursegpa = 1 * 0;
    
                    $(".myEightResult").text("You had an F in a 1 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
    
                // For 2 units now
    
                else if (userGrade8 === "A" && userUnits8 === "2") {
                    eightCoursegpa = 2 * 5;
    
                    $(".myEightResult").text("You had an A in a 2 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "B" && userUnits8 === "2") {
                    eightCoursegpa = 2 * 4;
    
                    $(".myEightResult").text("You had a B in a 2 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "C" && userUnits8 === "2") {
                    eightCoursegpa = 2 * 3;
    
                    $(".myEightResult").text("You had a C in a 2 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "D" && userUnits8 === "2") {
                    eightCoursegpa = 2 * 2;
    
                    $(".myEightResult").text("You had a D in a 2 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "E" && userUnits8 === "2") {
                    eightCoursegpa = 2 * 1;
    
                    $(".myEightResult").text("You had an E in a 2 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "F" && userUnits8 === "2") {
                    eightCoursegpa = 2 * 0;
    
                    $(".myEightResult").text("You had an E in a 2 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
    
                // For 3 unit courses now
    
    
                else if (userGrade8 === "A" && userUnits8 === "3") {
                    eightCoursegpa = 3 * 5;
    
                    $(".myEightResult").text("You had an A in a 3 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "B" && userUnits8 === "3") {
                    eightCoursegpa = 3 * 4;
    
                    $(".myEightResult").text("You had a B in a 3 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "C" && userUnits8 === "3") {
                    eightCoursegpa = 3 * 3;
    
                    $(".myEightResult").text("You had a C in a 3 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "D" && userUnits8 === "3") {
                    eightCoursegpa = 3 * 2;
    
                    $(".myEightResult").text("You had a D in a 3 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "E" && userUnits8 === "3") {
                    eightCoursegpa = 3 * 1;
    
                    $(".myEightResult").text("You had an E in a 3 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }
                else if (userGrade8 === "F" && userUnits8 === "3") {
                    eightCoursegpa = 3 * 0;
    
                    $(".myEightResult").text("You had an E in a 3 unit course")
                    $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);
    
                }


        });






        // checking the ninth course
        
        $(".check9").click(()=>{
            let userUnits9 = $(".unit9").find(":selected").val();
            let userGrade9 = $(".grade9").find(":selected").val();

           

                // For a 1 unit course and several grades
                if (userGrade9 === "A" && userUnits9 === "1") {
                    ninthCoursegpa = 1 * 5;
    
                    $(".myNinthResult").text("You had an A in a 1 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "B" && userUnits9 === "1") {
                    ninthCoursegpa = 1 * 4;
    
                    $(".myNinthResult").text("You had a B in a 1 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "C" && userUnits9 === "1") {
                    ninthCoursegpa = 1 * 3;
    
                    $(".myNinthResult").text("You had a C in a 1 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "D" && userUnits9 === "1") {
                    ninthCoursegpa = 1 * 2;
    
                    $(".myNinthResult").text("You had a D in a 1 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "E" && userUnits9 === "1") {
                    ninthCoursegpa = 1 * 1;
    
                    $(".myNinthResult").text("You had an E in a 1 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "F" && userUnits9 === "1") {
                    ninthCoursegpa = 1 * 0;
    
                    $(".myNinthResult").text("You had an F in a 1 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
    
                // For 2 units now
    
                else if (userGrade9 === "A" && userUnits9 === "2") {
                    ninthCoursegpa = 2 * 5;
    
                    $(".myNinthResult").text("You had an A in a 2 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "B" && userUnits9 === "2") {
                    ninthCoursegpa = 2 * 4;
    
                    $(".myNinthResult").text("You had a B in a 2 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "C" && userUnits9 === "2") {
                    ninthCoursegpa = 2 * 3;
    
                    $(".myNinthResult").text("You had a C in a 2 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "D" && userUnits9 === "2") {
                    ninthCoursegpa = 2 * 2;
    
                    $(".myNinthResult").text("You had a D in a 2 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "E" && userUnits9 === "2") {
                    ninthCoursegpa = 2 * 1;
    
                    $(".myNinthResult").text("You had an E in a 2 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "F" && userUnits9 === "2") {
                    ninthCoursegpa = 2 * 0;
    
                    $(".myNinthResult").text("You had an E in a 2 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
    
                // For 3 unit courses now
    
    
                else if (userGrade9 === "A" && userUnits9 === "3") {
                    ninthCoursegpa = 3 * 5;
    
                    $(".myNinthResult").text("You had an A in a 3 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "B" && userUnits9 === "3") {
                    ninthCoursegpa = 3 * 4;
    
                    $(".myNinthResult").text("You had a B in a 3 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "C" && userUnits9 === "3") {
                    ninthCoursegpa = 3 * 3;
    
                    $(".myNinthResult").text("You had a C in a 3 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "D" && userUnits9 === "3") {
                    ninthCoursegpa = 3 * 2;
    
                    $(".myNinthResult").text("You had a D in a 3 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "E" && userUnits9 === "3") {
                    ninthCoursegpa = 3 * 1;
    
                    $(".myNinthResult").text("You had an E in a 3 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }
                else if (userGrade9 === "F" && userUnits9 === "3") {
                    ninthCoursegpa = 3 * 0;
    
                    $(".myNinthResult").text("You had an E in a 3 unit course")
                    $(".myNinthResult2").text("and your grade point per course is: " + ninthCoursegpa);
    
                }


        });






        
        // checking the tenth course
        
        $(".check10").click(()=>{
            let userUnits10 = $(".unit10").find(":selected").val();
            let userGrade10 = $(".grade10").find(":selected").val();

           

                // For a 1 unit course and several grades
                if (userGrade10 === "A" && userUnits10 === "1") {
                    tenthCoursegpa = 1 * 5;
    
                    $(".myTenthResult").text("You had an A in a 1 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "B" && userUnits10 === "1") {
                    tenthCoursegpa = 1 * 4;
    
                    $(".myTenthResult").text("You had a B in a 1 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "C" && userUnits10 === "1") {
                    tenthCoursegpa = 1 * 3;
    
                    $(".myTenthResult").text("You had a C in a 1 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "D" && userUnits10 === "1") {
                    tenthCoursegpa = 1 * 2;
    
                    $(".myTenthResult").text("You had a D in a 1 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "E" && userUnits10 === "1") {
                    tenthCoursegpa = 1 * 1;
    
                    $(".myTenthResult").text("You had an E in a 1 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "F" && userUnits10 === "1") {
                    tenthCoursegpa = 1 * 0;
    
                    $(".myTenthResult").text("You had an F in a 1 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
    
                // For 2 units now
    
                else if (userGrade10 === "A" && userUnits10 === "2") {
                    tenthCoursegpa = 2 * 5;
    
                    $(".myTenthResult").text("You had an A in a 2 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "B" && userUnits10 === "2") {
                    tenthCoursegpa = 2 * 4;
    
                    $(".myTenthResult").text("You had a B in a 2 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "C" && userUnits10 === "2") {
                    tenthCoursegpa = 2 * 3;
    
                    $(".myTenthResult").text("You had a C in a 2 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "D" && userUnits10 === "2") {
                    tenthCoursegpa = 2 * 2;
    
                    $(".myTenthResult").text("You had a D in a 2 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "E" && userUnits10 === "2") {
                    tenthCoursegpa = 2 * 1;
    
                    $(".myTenthResult").text("You had an E in a 2 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "F" && userUnits10 === "2") {
                    tenthCoursegpa = 2 * 0;
    
                    $(".myTenthResult").text("You had an E in a 2 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
    
                // For 3 unit courses now
    
    
                else if (userGrade10 === "A" && userUnits10 === "3") {
                    tenthCoursegpa = 3 * 5;
    
                    $(".myTenthResult").text("You had an A in a 3 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "B" && userUnits10 === "3") {
                    tenthCoursegpa = 3 * 4;
    
                    $(".myTenthResult").text("You had a B in a 3 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "C" && userUnits10 === "3") {
                    tenthCoursegpa = 3 * 3;
    
                    $(".myTenthResult").text("You had a C in a 3 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "D" && userUnits10 === "3") {
                    tenthCoursegpa = 3 * 2;
    
                    $(".myTenthResult").text("You had a D in a 3 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "E" && userUnits10 === "3") {
                    tenthCoursegpa = 3 * 1;
    
                    $(".myTenthResult").text("You had an E in a 3 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }
                else if (userGrade10 === "F" && userUnits10 === "3") {
                    tenthCoursegpa = 3 * 0;
    
                    $(".myTenthResult").text("You had an E in a 3 unit course")
                    $(".myTenthResult2").text("and your grade point per course is: " + tenthCoursegpa);
    
                }


        });







        
        // checking the eleventh course
        
        $(".check11").click(()=>{
            let userUnits11 = $(".unit11").find(":selected").val();
            let userGrade11 = $(".grade11").find(":selected").val();

          

                // For a 1 unit course and several grades
                if (userGrade11 === "A" && userUnits11 === "1") {
                    eleventhCoursegpa = 1 * 5;
    
                    $(".myEleventhResult").text("You had an A in a 1 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "B" && userUnits11 === "1") {
                    eleventhCoursegpa = 1 * 4;
    
                    $(".myEleventhResult").text("You had a B in a 1 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "C" && userUnits11 === "1") {
                    eleventhCoursegpa = 1 * 3;
    
                    $(".myEleventhResult").text("You had a C in a 1 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "D" && userUnits11 === "1") {
                    eleventhCoursegpa = 1 * 2;
    
                    $(".myEleventhResult").text("You had a D in a 1 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "E" && userUnits11 === "1") {
                    eleventhCoursegpa = 1 * 1;
    
                    $(".myEleventhResult").text("You had an E in a 1 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "F" && userUnits11 === "1") {
                    eleventhCoursegpa = 1 * 0;
    
                    $(".myEleventhResult").text("You had an F in a 1 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
    
                // For 2 units now
    
                else if (userGrade11 === "A" && userUnits11 === "2") {
                    eleventhCoursegpa = 2 * 5;
    
                    $(".myEleventhResult").text("You had an A in a 2 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "B" && userUnits11 === "2") {
                    eleventhCoursegpa = 2 * 4;
    
                    $(".myEleventhResult").text("You had a B in a 2 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "C" && userUnits11 === "2") {
                    eleventhCoursegpa = 2 * 3;
    
                    $(".myEleventhResult").text("You had a C in a 2 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "D" && userUnits11 === "2") {
                    eleventhCoursegpa = 2 * 2;
    
                    $(".myEleventhResult").text("You had a D in a 2 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "E" && userUnits11 === "2") {
                    eleventhCoursegpa = 2 * 1;
    
                    $(".myEleventhResult").text("You had an E in a 2 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "F" && userUnits11 === "2") {
                    eleventhCoursegpa = 2 * 0;
    
                    $(".myEleventhResult").text("You had an E in a 2 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
    
                // For 3 unit courses now
    
    
                else if (userGrade11 === "A" && userUnits11 === "3") {
                    eleventhCoursegpa = 3 * 5;
    
                    $(".myEleventhResult").text("You had an A in a 3 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "B" && userUnits11 === "3") {
                    eleventhCoursegpa = 3 * 4;
    
                    $(".myEleventhResult").text("You had a B in a 3 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "C" && userUnits11 === "3") {
                    eleventhCoursegpa = 3 * 3;
    
                    $(".myEleventhResult").text("You had a C in a 3 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "D" && userUnits11 === "3") {
                    eleventhCoursegpa = 3 * 2;
    
                    $(".myEleventhResult").text("You had a D in a 3 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "E" && userUnits11 === "3") {
                    eleventhCoursegpa = 3 * 1;
    
                    $(".myEleventhResult").text("You had an E in a 3 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }
                else if (userGrade11 === "F" && userUnits11 === "3") {
                    eleventhCoursegpa = 3 * 0;
    
                    $(".myEleventhResult").text("You had an E in a 3 unit course")
                    $(".myEleventhResult2").text("and your grade point per course is: " + eleventhCoursegpa);
    
                }


        });


        // getting the total Unit
        let totalUnit = userunit1 + userUnits2 + userUnits3 + userUnits4 + userUnits5 + userUnits6 + userUnits7 + userUnits8 + userUnits9 + userUnits10 + userUnits11;

        console.log(totalUnit);

    
            // console.log(oneCoursegpa);
            // let courseGpaArray = [oneCoursegpa, twoCoursegpa, threeCoursegpa, fourthCoursegpa, fifthCoursegpa, sixthCoursegpa, seventhCoursegpa, eightCoursegpa, ninthCoursegpa, tenthCoursegpa, eleventhCoursegpa];
            // console.log(courseGpaArray);
    })();



        // An Array that would be housing all of the coursesgpa

    

    });
});

