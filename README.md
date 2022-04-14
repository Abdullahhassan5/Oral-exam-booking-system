# Exam #12345: "Exam Title"
## Student: s251425 Hassan Abdullah 

## React client application routes

- Route `/`: page content and purpose
- Route `/something/:param`: page content and purpose, param specification
- ...

## REST API server
  ('./routes/teacher');

  -post 'auth/login'
    get '/course/:id/student'
    get '/student/:s_id/Exam'
    post '/course/1/exam/1/session'
    PUT '/course/1/exam/1/session/1/slot/:sl_id'
    Get '/course/1/exam/1/session/1/slot'


get

## Server database db.sqlite

1- Table `Teacher` - contains {

    t_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            course text,
            c_id  Integer  
}
2-Table `Student` - contains{
   s_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            r_code text,
            result Text
}
3-Table `course_student` - contains{
    c_s_id INTEGER PRIMARY KEY AUTOINCREMENT, 
            c_id Integer,
            s_id Integer
}
  4-TABLE slot contain
  {
            sl_id INTEGER PRIMARY KEY AUTOINCREMENT,
            e_id Integer ,
            se_id Integer ,
            start_time Text, 
            end_time Text,
            booked Text ,   
             s_id Integer,
             status Text , 
             result  Integer, 
             passed Text
  }

 5-TABLE Exam contain
 {
            e_id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name text,
            c_id Integer,
            T1 Integer
 }
6-TABLE Exam_student
{ 
                e_s_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                e_id Integer,
                s_id Integer,
                
 }
  7-TABLE Session contain{
                se_id INTEGER PRIMARY KEY AUTOINCREMENT, 
                e_id Integer,
                time Integer,
                date Text ,
                duration Integer
  }


         
## Main React Components
--Teacher Component
'in login.js'  :performing teacher login operation'
'in ExeOralTest.js' : 'Execute Oral Test assign numbers
'in ResultOverView.js : shows result overview at teacher side 
'in StudentList.js' : after login shows the students that are enrolled in teacher course and perform slot creation operations etc


--Student Component--
  'in regPage.js' Enter student id for booking slot etc
  'StudentOverView' show student side booked slot
  'selectslot' select available slot by student

(only _main_ components, minor ones may be skipped)

## Screenshot

![Configurator Screenshot](./client/img/screenshot/login.PNG)
![Configurator Screenshot](./client/img/screenshot/sessionCreated.PMG)
![Configurator Screenshot](./client/img/screenshot/slotCreation.PNG)

## Test users
// Teacher login user name and password
* marco@example.com , admin123456
* alex@example.com , alex123456


--student reg_code --
Registeration code must be enter for the student side in 'reg_page.js'
251426
251427
251428
251429
251430
251431
251421
251422
