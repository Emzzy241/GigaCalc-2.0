$(document).ready(() => {
    $(".amountCourses").click(() => {
        $(".course-8").fadeIn();
        $(".course-info8").fadeOut();




        (function checkMyGpa() {


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



            let courseUnit1;
            let courseUnit2;
            let courseUnit3;
            let courseUnit4;
            let courseUnit5;
            let courseUnit6;
            let courseUnit7;
            let courseUnit8;
            let courseUnit9;
            let courseUnit10;
            let courseUnit11;


            // Checking out the first course

            $(".check1").click(() => {
                // picking up the unit and grade
                let userUnits1 = $(".unit1").find(":selected").val();
                let userGrade1 = $(".grade1").find(":selected").val();



                // For a 1 unit course and several grades
                if (userGrade1 === "A" && userUnits1 === "1") {
                    let IntUserUnits1a = parseInt(userUnits1);
                    console.log(IntUserUnits1a);
                    oneCoursegpa = IntUserUnits1a * 5;

                    courseUnit1 = IntUserUnits1a;
                    console.log(courseUnit1);

                    // oneCoursegpa = 1 * 5;

                    $(".myResult").text("You had an A in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "B" && userUnits1 === "1") {
                    let IntUserUnits1b = parseInt(userUnits1);
                    console.log(IntUserUnits1b);

                    oneCoursegpa = IntUserUnits1b * 4;

                    courseUnit1 = IntUserUnits1b;

                    // oneCoursegpa = 1 * 4;

                    $(".myResult").text("You had a B in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "C" && userUnits1 === "1") {
                    let IntUserUnits1c = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits1c * 3;

                    courseUnit1 = IntUserUnits1c;
                    console.log(courseUnit1);

                    $(".myResult").text("You had a C in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "D" && userUnits1 === "1") {
                    let IntUserUnits1d = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits1d * 2;

                    courseUnit1 = IntUserUnits1d;
                    console.log(courseUnit1);

                    $(".myResult").text("You had a D in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "E" && userUnits1 === "1") {
                    let IntUserUnits1e = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits1e * 1;

                    courseUnit1 = IntUserUnits1e;
                    console.log(courseUnit1);

                    $(".myResult").text("You had an E in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "F" && userUnits1 === "1") {
                    let IntUserUnits1f = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits1f * 0;

                    courseUnit1 = IntUserUnits1f;
                    console.log(courseUnit1);

                    $(".myResult").text("You had an F in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }

                // For 2 units now

                else if (userGrade1 === "A" && userUnits1 === "2") {
                    let IntUserUnits2a = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits2a * 5;

                    courseUnit1 = IntUserUnits2a;
                    console.log(courseUnit1);

                    $(".myResult").text("You had an A in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "B" && userUnits1 === "2") {
                    let IntUserUnits2b = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits2b * 4;

                    courseUnit1 = IntUserUnits2b;
                    console.log(courseUnit1);

                    $(".myResult").text("You had a B in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "C" && userUnits1 === "2") {
                    let IntUserUnits2c = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits2c * 3;

                    courseUnit1 = IntUserUnits2c;
                    console.log(courseUnit1);

                    $(".myResult").text("You had a C in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "D" && userUnits1 === "2") {
                    let IntUserUnits2d = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits2d * 2;

                    courseUnit1 = IntUserUnits2d;
                    console.log(courseUnit1);

                    $(".myResult").text("You had a D in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "E" && userUnits1 === "2") {
                    let IntUserUnits2e = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits2e * 1;

                    courseUnit1 = IntUserUnits2e;
                    console.log(courseUnit1);

                    $(".myResult").text("You had an E in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "F" && userUnits1 === "2") {
                    let IntUserUnits2f = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits2f * 0;

                    courseUnit1 = IntUserUnits2f;
                    console.log(courseUnit1);

                    $(".myResult").text("You had an F in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }

                // For 3 unit courses now


                else if (userGrade1 === "A" && userUnits1 === "3") {
                    let IntUserUnits3a = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits3a * 5;

                    courseUnit1 = IntUserUnits3a;
                    console.log(courseUnit1);

                    $(".myResult").text("You had an A in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "B" && userUnits1 === "3") {
                    let IntUserUnits3b = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits3b * 4;

                    courseUnit1 = IntUserUnits3b;
                    console.log(courseUnit1);

                    $(".myResult").text("You had a B in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "C" && userUnits1 === "3") {
                    let IntUserUnits3c = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits3c * 3;

                    courseUnit1 = IntUserUnits3c;
                    console.log(courseUnit1);
                    $(".myResult").text("You had a C in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "D" && userUnits1 === "3") {
                    let IntUserUnits3d = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits3d * 2;

                    courseUnit1 = IntUserUnits3d;
                    console.log(courseUnit1);

                    $(".myResult").text("You had a D in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "E" && userUnits1 === "3") {
                    let IntUserUnits3e = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits3e * 1;
                    courseUnit1 = IntUserUnits3e;
                    console.log(courseUnit1);

                    $(".myResult").text("You had an E in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if (userGrade1 === "F" && userUnits1 === "3") {
                    let IntUserUnits3f = parseInt(userUnits1);

                    oneCoursegpa = IntUserUnits3f * 0;

                    courseUnit1 = IntUserUnits3f;
                    console.log(courseUnit1);


                    $(".myResult").text("You had an F in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }

                console.log(oneCoursegpa);
                console.log(courseUnit1);







                // Checking for the second course

                $(".check2").click(() => {
                    // picking up the unit and grade
                    let userUnits2 = $(".unit2").find(":selected").val();
                    let userGrade2 = $(".grade2").find(":selected").val();



                    // For a 1 unit course and several grades
                    if (userGrade2 === "A" && userUnits2 === "1") {
                        let IntUserUnits1a = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits1a * 5;

                        courseUnit2 = IntUserUnits1a;
                        console.log(courseUnit2);


                        // twoCoursegpa = 1 * 5;

                        $(".mySecondResult").text("You had an A in a 1 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "B" && userUnits2 === "1") {
                        let IntUserUnits1b = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits1b * 4;

                        courseUnit2 = IntUserUnits1b;
                        console.log(courseUnit2);


                        $(".mySecondResult").text("You had a B in a 1 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "C" && userUnits2 === "1") {
                        let IntUserUnits1c = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits1c * 3;

                        courseUnit2 = IntUserUnits1c;
                        console.log(courseUnit2);


                        $(".mySecondResult").text("You had a C in a 1 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "D" && userUnits2 === "1") {
                        let IntUserUnits1d = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits1d * 2;

                        courseUnit2 = IntUserUnits1d;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had a D in a 1 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "E" && userUnits2 === "1") {
                        let IntUserUnits1e = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits1e * 1;

                        courseUnit2 = IntUserUnits1e;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had an E in a 1 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "F" && userUnits2 === "1") {
                        let IntUserUnits1f = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits1f * 0;

                        courseUnit2 = IntUserUnits1f;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had an F in a 1 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }

                    // For 2 units now

                    else if (userGrade2 === "A" && userUnits2 === "2") {
                        let IntUserUnits2a = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits2a * 5;

                        courseUnit2 = IntUserUnits2a;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had an A in a 2 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "B" && userUnits2 === "2") {
                        let IntUserUnits2a = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits2a * 4;

                        courseUnit2 = IntUserUnits2a;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had a B in a 2 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "C" && userUnits2 === "2") {
                        let IntUserUnits2c = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits2c * 3;

                        courseUnit2 = IntUserUnits2c;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had a C in a 2 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "D" && userUnits2 === "2") {
                        let IntUserUnits2d = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits2d * 2;

                        courseUnit2 = IntUserUnits2d;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had a D in a 2 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "E" && userUnits2 === "2") {
                        let IntUserUnits2e = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits2e * 1;

                        courseUnit2 = IntUserUnits2e;
                        console.log(courseUnit2);


                        $(".mySecondResult").text("You had an E in a 2 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "F" && userUnits2 === "2") {
                        let IntUserUnits2f = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits2f * 0;

                        courseUnit2 = IntUserUnits2f;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had an F in a 2 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }

                    // For 3 unit courses now


                    else if (userGrade2 === "A" && userUnits2 === "3") {
                        let IntUserUnits3a = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits3a * 5;

                        courseUnit2 = IntUserUnits3a;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had an A in a 3 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "B" && userUnits2 === "3") {
                        let IntUserUnits3b = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits3b * 4;

                        courseUnit2 = IntUserUnits3b;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had a B in a 3 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "C" && userUnits2 === "3") {
                        let IntUserUnits3c = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits3c * 3;

                        courseUnit2 = IntUserUnits3c;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had a C in a 3 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "D" && userUnits2 === "3") {
                        let IntUserUnits3d = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits3d * 2;

                        courseUnit2 = IntUserUnits3d;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had a D in a 3 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "E" && userUnits2 === "3") {
                        let IntUserUnits3e = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits3e * 1;

                        courseUnit2 = IntUserUnits3e;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had an E in a 3 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }
                    else if (userGrade2 === "F" && userUnits2 === "3") {
                        let IntUserUnits3f = parseInt(userUnits2);

                        twoCoursegpa = IntUserUnits3f * 0;

                        courseUnit2 = IntUserUnits3f;
                        console.log(courseUnit2);

                        $(".mySecondResult").text("You had an F in a 3 unit course")
                        $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

                    }


                    // console.log(courseUnit1);
                    // console.log(courseUnit2);

                    // let totalUnit = courseUnit1 + courseUnit2
                    // console.log(totalUnit);



                    // console.log(oneCoursegpa);
                    // console.log(twoCoursegpa);
                    // let totalCourseGpa = oneCoursegpa + twoCoursegpa
                    // console.log(totalCourseGpa);
                    // console.log(oneCoursegpa);



                    // Checking for the third course

                    $(".check3").click(() => {
                        //   picking up the unit and grade
                        let userUnits3 = $(".unit3").find(":selected").val();
                        let userGrade3 = $(".grade3").find(":selected").val();



                        // For a 1 unit course and several grades
                        if (userGrade3 === "A" && userUnits3 === "1") {
                            let IntUserUnits1a = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits1a * 5;

                            courseUnit3 = IntUserUnits1a;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an A in a 1 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "B" && userUnits3 === "1") {
                            let IntUserUnits1b = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits1b * 4;

                            courseUnit3 = IntUserUnits1b;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a B in a 1 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "C" && userUnits3 === "1") {
                            let IntUserUnits1c = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits1c * 3;

                            courseUnit3 = IntUserUnits1c;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a C in a 1 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "D" && userUnits3 === "1") {
                            let IntUserUnits1d = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits1d * 2;

                            courseUnit3 = IntUserUnits1d;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a D in a 1 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "E" && userUnits3 === "1") {
                            let IntUserUnits1e = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits1e * 1;

                            courseUnit3 = IntUserUnits1e;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an E in a 1 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "F" && userUnits3 === "1") {
                            let IntUserUnits1f = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits1f * 0;

                            courseUnit3 = IntUserUnits1f;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an F in a 1 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }

                        // For 2 units now

                        else if (userGrade3 === "A" && userUnits3 === "2") {
                            let IntUserUnits2a = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits2a * 5;

                            courseUnit3 = IntUserUnits2a;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an A in a 2 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "B" && userUnits3 === "2") {
                            let IntUserUnits2b = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits2b * 4;

                            courseUnit3 = IntUserUnits2b;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a B in a 2 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "C" && userUnits3 === "2") {
                            let IntUserUnits2c = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits2c * 3;

                            courseUnit3 = IntUserUnits2c;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a C in a 2 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "D" && userUnits3 === "2") {
                            let IntUserUnits2d = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits2d * 2;

                            courseUnit3 = IntUserUnits2d;
                            console.log(courseUnit3);


                            $(".myThirdResult").text("You had a D in a 2 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "E" && userUnits3 === "2") {
                            let IntUserUnits2e = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits2e * 1;

                            courseUnit3 = IntUserUnits2e;
                            console.log(courseUnit3);


                            $(".myThirdResult").text("You had an E in a 2 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "F" && userUnits3 === "2") {
                            let IntUserUnits2f = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits2f * 0;

                            courseUnit3 = IntUserUnits2f;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an F in a 2 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }

                        // For 3 unit courses now


                        else if (userGrade3 === "A" && userUnits3 === "3") {
                            let IntUserUnits3a = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits3a * 5;

                            courseUnit3 = IntUserUnits3a;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an A in a 3 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "B" && userUnits3 === "3") {
                            let IntUserUnits3b = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits3b * 4;

                            courseUnit3 = IntUserUnits3b;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a B in a 3 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "C" && userUnits3 === "3") {

                            let IntUserUnits3c = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits3c * 3;

                            courseUnit3 = IntUserUnits3c;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a C in a 3 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "D" && userUnits3 === "3") {
                            let IntUserUnits3d = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits3d * 2;

                            courseUnit3 = IntUserUnits3d;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had a D in a 3 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "E" && userUnits3 === "3") {
                            let IntUserUnits3e = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits3e * 1;

                            courseUnit3 = IntUserUnits3e;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an E in a 3 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        else if (userGrade3 === "F" && userUnits3 === "3") {
                            let IntUserUnits3f = parseInt(userUnits3);

                            threeCoursegpa = IntUserUnits3f * 0;

                            courseUnit3 = IntUserUnits3f;
                            console.log(courseUnit3);

                            $(".myThirdResult").text("You had an F in a 3 unit course")
                            $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);

                        }
                        // checkingGpa();



                        // Checking for the fourth course

                        $(".check4").click(() => {
                            let userUnits4 = $(".unit4").find(":selected").val();
                            let userGrade4 = $(".grade4").find(":selected").val();



                            // For a 1 unit course and several grades
                            if (userGrade4 === "A" && userUnits4 === "1") {
                                let IntUserUnits1a = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits1a * 5;

                                courseUnit4 = IntUserUnits1a;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an A in a 1 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "B" && userUnits4 === "1") {
                                let IntUserUnits1b = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits1b * 4;

                                courseUnit4 = IntUserUnits1b;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had a B in a 1 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "C" && userUnits4 === "1") {
                                let IntUserUnits1c = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits1c * 3;

                                courseUnit4 = IntUserUnits1c;
                                console.log(courseUnit4);


                                $(".myFourthResult").text("You had a C in a 1 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "D" && userUnits4 === "1") {
                                let IntUserUnits1d = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits1d * 2;

                                courseUnit4 = IntUserUnits1d;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had a D in a 1 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "E" && userUnits4 === "1") {
                                let IntUserUnits1e = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits1e * 1;

                                courseUnit4 = IntUserUnits1e;
                                console.log(courseUnit4);


                                $(".myFourthResult").text("You had an E in a 1 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "F" && userUnits4 === "1") {
                                let IntUserUnits1f = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits1f * 0;

                                courseUnit4 = IntUserUnits1f;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an F in a 1 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }

                            // For 2 units now

                            else if (userGrade4 === "A" && userUnits4 === "2") {
                                let IntUserUnits2a = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits2a * 5;

                                courseUnit4 = IntUserUnits2a;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an A in a 2 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "B" && userUnits4 === "2") {
                                let IntUserUnits2b = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits2b * 4;

                                courseUnit4 = IntUserUnits2b;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had a B in a 2 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "C" && userUnits4 === "2") {
                                let IntUserUnits2c = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits2c * 3;

                                courseUnit4 = IntUserUnits2c;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had a C in a 2 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "D" && userUnits4 === "2") {
                                let IntUserUnits2d = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits2d * 2;

                                courseUnit4 = IntUserUnits2d;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had a D in a 2 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "E" && userUnits4 === "2") {
                                let IntUserUnits2e = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits2e * 1;

                                courseUnit4 = IntUserUnits2e;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an E in a 2 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "F" && userUnits4 === "2") {
                                let IntUserUnits2f = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits2f * 0;

                                courseUnit4 = IntUserUnits2f;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an F in a 2 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }

                            // For 3 unit courses now


                            else if (userGrade4 === "A" && userUnits4 === "3") {
                                let IntUserUnits3a = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits3a * 5;

                                courseUnit4 = IntUserUnits3a;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an A in a 3 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "B" && userUnits4 === "3") {
                                let IntUserUnits3b = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits3b * 4;

                                courseUnit4 = IntUserUnits3b;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had a B in a 3 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "C" && userUnits4 === "3") {
                                let IntUserUnits3c = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits3c * 3;

                                courseUnit4 = IntUserUnits3c;
                                console.log(courseUnit4);


                                $(".myFourthResult").text("You had a C in a 3 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "D" && userUnits4 === "3") {
                                let IntUserUnits3d = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits3d * 2;

                                courseUnit4 = IntUserUnits3d;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had a D in a 3 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "E" && userUnits4 === "3") {
                                let IntUserUnits3e = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits3e * 1;

                                courseUnit4 = IntUserUnits3e;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an E in a 3 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }
                            else if (userGrade4 === "F" && userUnits4 === "3") {
                                let IntUserUnits3f = parseInt(userUnits4);

                                fourthCoursegpa = IntUserUnits3f * 0;

                                courseUnit4 = IntUserUnits3f;
                                console.log(courseUnit4);

                                $(".myFourthResult").text("You had an F in a 3 unit course")
                                $(".myFourthResult2").text("and your grade point per course is: " + fourthCoursegpa);

                            }



                            // checking for the fifth course

                            $(".check5").click(() => {
                                let userUnits5 = $(".unit5").find(":selected").val();
                                let userGrade5 = $(".grade5").find(":selected").val();



                                // For a 1 unit course and several grades
                                if (userGrade5 === "A" && userUnits5 === "1") {
                                    let IntUserUnits1a = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits1a * 5;

                                    courseUnit5 = IntUserUnits1a;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an A in a 1 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "B" && userUnits5 === "1") {
                                    let IntUserUnits1b = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits1b * 4;

                                    courseUnit5 = IntUserUnits1b;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a B in a 1 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "C" && userUnits5 === "1") {
                                    let IntUserUnits1c = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits1c * 3;

                                    courseUnit5 = IntUserUnits1c;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a C in a 1 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "D" && userUnits5 === "1") {
                                    let IntUserUnits1d = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits1d * 2;

                                    courseUnit5 = IntUserUnits1d;
                                    console.log(courseUnit5);


                                    $(".myFifthResult").text("You had a D in a 1 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "E" && userUnits5 === "1") {
                                    let IntUserUnits1e = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits1e * 1;

                                    courseUnit5 = IntUserUnits1e;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an E in a 1 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "F" && userUnits5 === "1") {
                                    let IntUserUnits1f = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits1f * 0;

                                    courseUnit5 = IntUserUnits1f;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an F in a 1 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }

                                // For 2 units now

                                else if (userGrade5 === "A" && userUnits5 === "2") {
                                    let IntUserUnits2a = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits2a * 5;

                                    courseUnit5 = IntUserUnits2a;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an A in a 2 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "B" && userUnits5 === "2") {
                                    let IntUserUnits2b = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits2b * 4;

                                    courseUnit5 = IntUserUnits2b;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a B in a 2 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "C" && userUnits5 === "2") {
                                    let IntUserUnits2c = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits2c * 3;

                                    courseUnit5 = IntUserUnits2c;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a C in a 2 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "D" && userUnits5 === "2") {
                                    let IntUserUnits2d = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits2d * 2;

                                    courseUnit5 = IntUserUnits2d;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a D in a 2 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "E" && userUnits5 === "2") {
                                    let IntUserUnits2e = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits2e * 1;

                                    courseUnit5 = IntUserUnits2e;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an E in a 2 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "F" && userUnits5 === "2") {
                                    let IntUserUnits2f = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits2f * 0;

                                    courseUnit5 = IntUserUnits2f;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an F in a F unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }

                                // For 3 unit courses now


                                else if (userGrade5 === "A" && userUnits5 === "3") {
                                    let IntUserUnits3a = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits3a * 5;

                                    courseUnit5 = IntUserUnits3a;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an A in a 3 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "B" && userUnits5 === "3") {
                                    let IntUserUnits3b = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits3b * 4;

                                    courseUnit5 = IntUserUnits3b;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a B in a 3 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "C" && userUnits5 === "3") {
                                    let IntUserUnits3c = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits3c * 3;

                                    courseUnit5 = IntUserUnits3c;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a C in a 3 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "D" && userUnits5 === "3") {
                                    let IntUserUnits3d = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits3d * 2;

                                    courseUnit5 = IntUserUnits3d;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had a D in a 3 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "E" && userUnits5 === "3") {
                                    let IntUserUnits3e = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits3e * 1;

                                    courseUnit5 = IntUserUnits3e;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an E in a 3 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }
                                else if (userGrade5 === "F" && userUnits5 === "3") {
                                    let IntUserUnits3f = parseInt(userUnits5);

                                    fifthCoursegpa = IntUserUnits3f * 0;

                                    courseUnit5 = IntUserUnits3f;
                                    console.log(courseUnit5);

                                    $(".myFifthResult").text("You had an F in a 3 unit course")
                                    $(".myFifthResult2").text("and your grade point per course is: " + fifthCoursegpa);

                                }





                                // checking the sixth course

                                $(".check6").click(() => {
                                    let userUnits6 = $(".unit6").find(":selected").val();
                                    let userGrade6 = $(".grade6").find(":selected").val();


                                    // For a 1 unit course and several grades
                                    if (userGrade6 === "A" && userUnits6 === "1") {
                                        let IntUserUnits1a = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits1a * 5;

                                        courseUnit6 = IntUserUnits1a;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had an A in a 1 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "B" && userUnits6 === "1") {
                                        let IntUserUnits1b = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits1b * 4;

                                        courseUnit6 = IntUserUnits1b;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had a B in a 1 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "C" && userUnits6 === "1") {
                                        let IntUserUnits1c = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits1c * 3;

                                        courseUnit6 = IntUserUnits1c;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had a C in a 1 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "D" && userUnits6 === "1") {
                                        let IntUserUnits1d = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits1d * 2;

                                        courseUnit6 = IntUserUnits1d;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had a D in a 1 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "E" && userUnits6 === "1") {
                                        let IntUserUnits1e = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits1e * 1;

                                        courseUnit6 = IntUserUnits1e;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had an E in a 1 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "F" && userUnits6 === "1") {
                                        let IntUserUnits1f = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits1f * 0;

                                        courseUnit6 = IntUserUnits1f;
                                        console.log(courseUnit6);
                                        console.log(sixthCoursegpa);

                                        $(".mySixthResult").text("You had an F in a 1 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }

                                    // For 2 units now

                                    else if (userGrade6 === "A" && userUnits6 === "2") {
                                        let IntUserUnits2a = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits2a * 5;

                                        courseUnit6 = IntUserUnits2a;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had an A in a 2 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "B" && userUnits6 === "2") {
                                        let IntUserUnits2b = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits2b * 4;

                                        courseUnit6 = IntUserUnits2b;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had a B in a 2 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "C" && userUnits6 === "2") {
                                        let IntUserUnits2c = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits2c * 3;

                                        courseUnit6 = IntUserUnits2c;
                                        console.log(courseUnit6);


                                        $(".mySixthResult").text("You had a C in a 2 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "D" && userUnits6 === "2") {
                                        let IntUserUnits2d = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits2d * 2;

                                        courseUnit6 = IntUserUnits2d;
                                        console.log(courseUnit6);


                                        $(".mySixthResult").text("You had a D in a 2 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "E" && userUnits6 === "2") {
                                        let IntUserUnits2e = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits2e * 1;

                                        courseUnit6 = IntUserUnits2e;
                                        console.log(courseUnit6);


                                        $(".mySixthResult").text("You had an E in a 2 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "F" && userUnits6 === "2") {
                                        let IntUserUnits2f = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits2f * 0;

                                        courseUnit6 = IntUserUnits2f;
                                        console.log(courseUnit6);


                                        $(".mySixthResult").text("You had an F in a 2 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }

                                    // For 3 unit courses now


                                    else if (userGrade6 === "A" && userUnits6 === "3") {
                                        let IntUserUnits3a = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits3a * 5;

                                        courseUnit6 = IntUserUnits3a;
                                        console.log(courseUnit6);


                                        $(".mySixthResult").text("You had an A in a 3 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "B" && userUnits6 === "3") {
                                        let IntUserUnits3b = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits3b * 4;

                                        courseUnit6 = IntUserUnits3b;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had a B in a 3 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "C" && userUnits6 === "3") {
                                        let IntUserUnits3c = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits3c * 3;

                                        courseUnit6 = IntUserUnits3c;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had a C in a 3 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "D" && userUnits6 === "3") {
                                        let IntUserUnits3d = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits3d * 2;

                                        courseUnit6 = IntUserUnits3d;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had a D in a 3 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "E" && userUnits6 === "3") {
                                        let IntUserUnits3e = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits3e * 1;

                                        courseUnit6 = IntUserUnits3e;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had an E in a 3 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }
                                    else if (userGrade6 === "F" && userUnits6 === "3") {
                                        let IntUserUnits3f = parseInt(userUnits6);

                                        sixthCoursegpa = IntUserUnits3f * 0;

                                        courseUnit6 = IntUserUnits3f;
                                        console.log(courseUnit6);

                                        $(".mySixthResult").text("You had an F in a 3 unit course")
                                        $(".mySixthResult2").text("and your grade point per course is: " + sixthCoursegpa);

                                    }





                                    // checking the seventh course

                                    $(".check7").click(() => {
                                        let userUnits7 = $(".unit7").find(":selected").val();
                                        let userGrade7 = $(".grade7").find(":selected").val();



                                        // For a 1 unit course and several grades
                                        if (userGrade7 === "A" && userUnits7 === "1") {
                                            let IntUserUnits1a = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits1a * 5;

                                            courseUnit7 = IntUserUnits1a;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had an A in a 1 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "B" && userUnits7 === "1") {
                                            let IntUserUnits1b = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits1b * 4;

                                            courseUnit7 = IntUserUnits1b;
                                            console.log(courseUnit7);


                                            $(".mySeventhResult").text("You had a B in a 1 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "C" && userUnits7 === "1") {
                                            let IntUserUnits1c = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits1c * 3;

                                            courseUnit7 = IntUserUnits1c;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a C in a 1 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "D" && userUnits7 === "1") {
                                            let IntUserUnits1d = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits1d * 2;

                                            courseUnit7 = IntUserUnits1d;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a D in a 1 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "E" && userUnits7 === "1") {
                                            let IntUserUnits1e = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits1e * 1;

                                            courseUnit7 = IntUserUnits1e;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had an E in a 1 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "F" && userUnits7 === "1") {
                                            let IntUserUnits1f = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits1f * 0;

                                            courseUnit7 = IntUserUnits1f;
                                            console.log(courseUnit7);


                                            $(".mySeventhResult").text("You had an F in a 1 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }

                                        // For 2 units now

                                        else if (userGrade7 === "A" && userUnits7 === "2") {
                                            let IntUserUnits2a = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits2a * 5;

                                            courseUnit7 = IntUserUnits2a;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had an A in a 2 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "B" && userUnits7 === "2") {
                                            let IntUserUnits2b = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits2b * 4;

                                            courseUnit7 = IntUserUnits2b;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a B in a 2 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "C" && userUnits7 === "2") {
                                            let IntUserUnits2c = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits2c * 3;

                                            courseUnit7 = IntUserUnits2c;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a C in a 2 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "D" && userUnits7 === "2") {
                                            let IntUserUnits2d = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits2d * 2;

                                            courseUnit7 = IntUserUnits2d;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a D in a 2 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "E" && userUnits7 === "2") {
                                            let IntUserUnits2e = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits2e * 1;

                                            courseUnit7 = IntUserUnits2e;
                                            console.log(courseUnit7);


                                            $(".mySeventhResult").text("You had an E in a 2 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "F" && userUnits7 === "2") {
                                            let IntUserUnits2f = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits2f * 0;

                                            courseUnit7 = IntUserUnits2f;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had an E in a 2 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }

                                        // For 3 unit courses now


                                        else if (userGrade7 === "A" && userUnits7 === "3") {
                                            let IntUserUnits3a = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits3a * 5;

                                            courseUnit7 = IntUserUnits3a;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had an A in a 3 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "B" && userUnits7 === "3") {
                                            let IntUserUnits3b = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits3b * 4;

                                            courseUnit7 = IntUserUnits3b;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a B in a 3 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "C" && userUnits7 === "3") {
                                            let IntUserUnits3c = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits3c * 3;

                                            courseUnit7 = IntUserUnits3c;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a C in a 3 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "D" && userUnits7 === "3") {
                                            let IntUserUnits3d = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits3d * 2;

                                            courseUnit7 = IntUserUnits3d;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had a D in a 3 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "E" && userUnits7 === "3") {
                                            let IntUserUnits3e = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits3e * 1;

                                            courseUnit7 = IntUserUnits3e;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had an E in a 3 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }
                                        else if (userGrade7 === "F" && userUnits7 === "3") {
                                            let IntUserUnits3f = parseInt(userUnits7);

                                            seventhCoursegpa = IntUserUnits3f * 0;

                                            courseUnit7 = IntUserUnits3f;
                                            console.log(courseUnit7);

                                            $(".mySeventhResult").text("You had an F in a 3 unit course")
                                            $(".mySeventhResult2").text("and your grade point per course is: " + seventhCoursegpa);

                                        }

                                        let mytotalGPA = oneCoursegpa + twoCoursegpa + threeCoursegpa + fourthCoursegpa + fifthCoursegpa + sixthCoursegpa + seventhCoursegpa;
                                        console.log(mytotalGPA);

                                        // let mytotalCoursesUnit = courseUnit1 + courseUnit2 + courseUnit3 + courseUnit4 + courseUnit5 + courseUnit6 + courseUnit7;
                                        let mytotalCoursesUnit = courseUnit1 + courseUnit2 + courseUnit3 + courseUnit4 + courseUnit5 + courseUnit6 + courseUnit7;
                                        console.log(mytotalCoursesUnit);

                                        // code is working for 7 courses... I can get both the total GPA and total course unit for all 7 courses... Its remaining 4 more courses








                                        // checking the eight course

                                        $(".check8").click(() => {
                                            let userUnits8 = $(".unit8").find(":selected").val();
                                            let userGrade8 = $(".grade8").find(":selected").val();



                                            // For a 1 unit course and several grades
                                            if (userGrade8 === "A" && userUnits8 === "1") {
                                                let IntUserUnits1a = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits1a * 5;

                                                courseUnit8 = IntUserUnits1a;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an A in a 1 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "B" && userUnits8 === "1") {
                                                let IntUserUnits1b = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits1b * 4;

                                                courseUnit8 = IntUserUnits1b;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a B in a 1 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "C" && userUnits8 === "1") {
                                                let IntUserUnits1c = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits1c * 3;

                                                courseUnit8 = IntUserUnits1c;
                                                console.log(courseUnit8);


                                                $(".myEightResult").text("You had a C in a 1 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "D" && userUnits8 === "1") {
                                                let IntUserUnits1d = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits1d * 2;

                                                courseUnit8 = IntUserUnits1d;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a D in a 1 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "E" && userUnits8 === "1") {
                                                let IntUserUnits1e = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits1e * 1;

                                                courseUnit8 = IntUserUnits1e;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an E in a 1 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "F" && userUnits8 === "1") {
                                                let IntUserUnits1f = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits1f * 0;

                                                courseUnit8 = IntUserUnits1f;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an F in a 1 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }

                                            // For 2 units now

                                            else if (userGrade8 === "A" && userUnits8 === "2") {
                                                let IntUserUnits2a = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits2a * 5;

                                                courseUnit8 = IntUserUnits2a;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an A in a 2 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "B" && userUnits8 === "2") {
                                                let IntUserUnits2b = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits2b * 4;

                                                courseUnit8 = IntUserUnits2b;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a B in a 2 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "C" && userUnits8 === "2") {
                                                let IntUserUnits2c = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits2c * 3;

                                                courseUnit8 = IntUserUnits2c;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a C in a 2 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "D" && userUnits8 === "2") {
                                                let IntUserUnits2d = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits2d * 2;

                                                courseUnit8 = IntUserUnits2d;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a D in a 2 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "E" && userUnits8 === "2") {
                                                let IntUserUnits2e = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits2e * 1;

                                                courseUnit8 = IntUserUnits2e;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an E in a 2 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "F" && userUnits8 === "2") {
                                                let IntUserUnits2f = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits2f * 0;

                                                courseUnit8 = IntUserUnits2f;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an F in a 2 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }

                                            // For 3 unit courses now


                                            else if (userGrade8 === "A" && userUnits8 === "3") {
                                                let IntUserUnits3a = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits3a * 5;

                                                courseUnit8 = IntUserUnits3a;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an A in a 3 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "B" && userUnits8 === "3") {
                                                let IntUserUnits3b = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits3b * 4;

                                                courseUnit8 = IntUserUnits3b;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a B in a 3 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "C" && userUnits8 === "3") {
                                                let IntUserUnits3c = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits3c * 3;

                                                courseUnit8 = IntUserUnits3c;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a C in a 3 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "D" && userUnits8 === "3") {
                                                let IntUserUnits3d = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits3d * 2;

                                                courseUnit8 = IntUserUnits3d;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had a D in a 3 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "E" && userUnits8 === "3") {
                                                let IntUserUnits3e = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits3e * 1;

                                                courseUnit8 = IntUserUnits3e;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an E in a 3 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }
                                            else if (userGrade8 === "F" && userUnits8 === "3") {
                                                let IntUserUnits3f = parseInt(userUnits8);

                                                eightCoursegpa = IntUserUnits3f * 0;

                                                courseUnit8 = IntUserUnits3f;
                                                console.log(courseUnit8);

                                                $(".myEightResult").text("You had an F in a 3 unit course")
                                                $(".myEightResult2").text("and your grade point per course is: " + eightCoursegpa);

                                            }







                                            let mytotalGPA = oneCoursegpa + twoCoursegpa + threeCoursegpa + fourthCoursegpa + fifthCoursegpa + sixthCoursegpa + seventhCoursegpa + eightCoursegpa;
                                            console.log(mytotalGPA);

                                            // let mytotalCoursesUnit = courseUnit1 + courseUnit2 + courseUnit3 + courseUnit4 + courseUnit5 + courseUnit6 + courseUnit7;
                                            let mytotalCoursesUnit = courseUnit1 + courseUnit2 + courseUnit3 + courseUnit4 + courseUnit5 + courseUnit6 + courseUnit7 + courseUnit8;
                                            console.log(mytotalCoursesUnit);




                                            // Showing the final result now when they click on the final-result button
                                            $(".final8").fadeIn();

                                            $("#finalResult").click(() => {
                                                // In calculating Unilorin's CGPA(my school)
                                                let mytotalGPAPerCourse = oneCoursegpa + twoCoursegpa + threeCoursegpa + fourthCoursegpa + fifthCoursegpa + sixthCoursegpa + seventhCoursegpa + eightCoursegpa;
                                                let mytotalCoursesUnit = courseUnit1 + courseUnit2 + courseUnit3 + courseUnit4 + courseUnit5 + courseUnit6 + courseUnit7 + courseUnit8;

                                                let myTotalGpaFirstSemester = mytotalGPAPerCourse / mytotalCoursesUnit;
                                                $(".myFinalResult").text("Your Total GPA for first semester is: " + myTotalGpaFirstSemester);

                                                // Thanking the user 
                                                $(".Thanks").text("Thank you very much for using this calculator. If you have any complaint; send a message to me via the number below");
                                                $(".stayTuned").text("Stay tuned for upcoming features like the CGPA that works for 1st and 2nd semester");
                                            });


                                        });

                                    });



                                });



                            });


                        });


                    });


                });



            });

























         
        })();



    });
});

