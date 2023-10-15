import React, { Component } from 'react'
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList'


class App extends Component {
  state = {
    courses:[
   {name : "HTML"},
   {name : "CSS"},
   {name : "PHP"}
],
  current :""
}
//  update Course
  updateCourse = (e => {
   this.setState({
    current : e.target.value
   })
  });
// //////////////////////////////////////

  // add Course
  addCourse = (e) =>{
    e.preventDefault();
      let {current} = this.state;
    const {courses} = this.state;
     courses.push({name:current});
     this.setState({
      courses,
      current:''
     })
  }
  // /////////////////////////////////////

  //  delete course
  deleteCourse = (index)=> {
     let {courses} = this.state;
     courses.splice(index , 1)
     this.setState({
      courses
     })
  }
  // //////////////////////////////////////
    

// editCourse
editCourse = (index , value) => {
  const {courses} = this.state;
   let course =courses[index];
     course["name"] = value;
     this.setState({
      courses
     })
}



  render (){

    const {courses} = this.state;
    const courseList = courses.map((course , index) => {
      return(
       <CourseList courses={this.state.courses} course={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/> 
      )
    })

  return (
    <div className="App">
      <h2>Adding course</h2>
      <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/> 
      <ul>  {courseList} </ul>
    </div>
  );
}
}

export default App;
