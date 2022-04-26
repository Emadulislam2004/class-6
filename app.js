let developerData = [
    ['Emadul islam',   18,    'MERN stack',          'Brahmmon baria',   1000  ],   
    ['Akash islam',    28,    'Laravel',   'Feni',             1000 ],
    ['Sakib islam',    20,    'Django',        'Mirpur',           1000  ],
    ['Emadul islam',   58,    'GoLang',        'Brahmmon baria',   1000   ],
    ['batas islam',   58,    'WordPress',        'Brahmmon baria',   1000   ],
    ['batas islam',   58,    'java',        'Brahmmon baria',   3000   ],
]

function myfunc(){
    let data = ''
    let tbody = document.querySelector('.tbody')
    filter = document.getElementById("select_id").value;
    for(let i =0;i<developerData.length;i++){

        if(filter===developerData[i][2]){
            data = `
            
            <tr>
                <th scope="row">${i+1}</th>
                <td>${developerData[i][0]}</td>
                <td>${developerData[i][1]}</td>
                <td>${developerData[i][2]}</td>
                <td>${developerData[i][3]}</td>
               <td>${developerData[i][4]}</td>


            </tr>
            
            
            
            
            
            
            
            `
        }
    
    
    }

    tbody.innerHTML = data
    
    
    


}









/**
 *  Create an array data structure with some data of fifth-grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result
 */


 let studentData = [
    ['A',12,5,'Dhaka',64,65,87,89,43,78],
    ['B',12,5,'Dhaka',98,90,78,89,89,65],
    ['C',12,5,'Dhaka',23,34,45,56,67,78],
    ['D',12,5,'Dhaka',98,78,67,56,54,78],
    ['E',12,5,'Dhaka',80,90,76,65,67,89]
]
/**
 * for grade cal
 * @param {*} marks 
 */

// function to get reslut



const Result = function(){



    this.gpaGrade = (marks) => {

        let gpa;
        let grade;

        if( marks >= 0 && marks < 33 ){
            gpa     = 0;
            grade   = 'F';
        }else if( marks >= 33 && marks < 40 ){
            gpa     = 1;
            grade   = 'D';
        }else if( marks >= 40 && marks < 50 ){
            gpa     = 2;
            grade   = 'C';
        }else if( marks >= 50 && marks < 60 ){
            gpa     = 3;
            grade   = 'B';
        }else if( marks >= 60 && marks < 70 ){
            gpa     = 3.5;
            grade   = 'A-';
        }else if( marks >= 70 && marks < 80 ){
            gpa     = 4;
            grade   = 'A';
        }else if( marks >= 80 && marks <= 100 ){
            gpa     = 5;
            grade   = 'A+';
        }else {
            gpa     = 'Invalid';
            grade   = 'Invalid';
        }

        return {
            resultGpa    : gpa,
            resultGrade  : grade,
        }
    }


    this.finalResult = function(bn, en, math, social, rel, scince){
        
        let cgpa;
        let finalGrade;

        let totalGpa = this.gpaGrade(bn).resultGpa + this.gpaGrade(en).resultGpa + this.gpaGrade(math).resultGpa + this.gpaGrade(social).resultGpa + this.gpaGrade(rel).resultGpa + this.gpaGrade(scince).resultGpa;

        cgpa =  totalGpa / 6;

        if( bn < 33 || en < 33 || math < 33 || social < 33 || scince < 33 || rel < 33 ){
            finalGrade = 'F';
        }else if( cgpa >= 0 && cgpa < 1 ){
            finalGrade = 'F';
        }else if( cgpa >= 1 && cgpa < 2 ){
            finalGrade = 'D';
        }else if( cgpa >= 2 && cgpa < 3 ){
            finalGrade = 'C';
        }else if( cgpa >= 3 && cgpa < 3.5 ){
            finalGrade = 'B';
        }else if( cgpa >= 3.5 && cgpa < 4 ){
            finalGrade = 'A-';
        }else if( cgpa >= 4 && cgpa < 5 ){
            finalGrade = 'A';
        }else if( cgpa == 5 ){
            finalGrade = 'A+';
        }


        return {
            finalCgpa   : (finalGrade =="F") ? '\'Failed\'': cgpa.toFixed(2),
            finalResult : finalGrade,
        }
        
    }

    this.output = () => {

        for(let i =0; i<studentData.length;i++){


            console.log(`
        
               
                Name               : ${studentData[i][0]}
                Age               : ${studentData[i][1]}
                Class              : ${studentData[i][2]}
                Location            : ${studentData[i][3]}
              

        
                Subject     Marks               GPA                 GRADE    
        
        
                Bangla      ${ studentData[i][5] }                   ${ res.gpaGrade(studentData[i][5]).resultGpa }                    ${ res.gpaGrade(studentData[i][5]).resultGrade } 
                English     ${ studentData[i][6] }                   ${ res.gpaGrade(studentData[i][6]).resultGpa }                    ${ res.gpaGrade(studentData[i][6]).resultGrade } 
                Math        ${ studentData[i][7]}                   ${ res.gpaGrade(studentData[i][7]).resultGpa }                    ${ res.gpaGrade(studentData[i][7]).resultGrade } 
                Social      ${ studentData[i][8] }                   ${ res.gpaGrade(studentData[i][8]).resultGpa }                    ${ res.gpaGrade(studentData[i][8]).resultGrade } 
                Religion    ${ studentData[i][4] }                   ${ res.gpaGrade(studentData[i][4]).resultGpa }                  ${ res.gpaGrade(studentData[i][4]).resultGrade } 
                Scince      ${ studentData[i][9] }                   ${ res.gpaGrade(studentData[i][9]).resultGpa }                    ${ res.gpaGrade(studentData[i][9]).resultGrade } 
                -----------------------------------------------------------------------------------------------------------------------------------------------------------------
                Result                         ${res.finalResult(studentData[i][5],studentData[i][6],studentData[i][7],studentData[i][8],studentData[i][4],studentData[i][4]).finalCgpa}                 ${res.finalResult(studentData[i][5],studentData[i][6],studentData[i][7],studentData[i][8],studentData[i][4],studentData[i][4]).finalResult}                             
        
                showing ${i +1 } out of ${studentData.length} 
        
              
            
            `)
    
        }
    }

}

let res = new Result();
res.output();






/**
* 
* Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive.
*/


let age = 23;
function messageCal(){

    if(age <= 18){
        console.log(`you're not allow to join the club`)
    }else if(age > 18 && age < 40){
        console.log(`we find these people who's under 40 and upper 18`)
    }else{
        console.log('you\'re old, the club not for you')
    }
}


messageCal()









