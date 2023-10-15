import React , {Component, Fragment} from'react';

class CourseList extends Component{

   state = {
     isEdit : false
   }


// render course
  renderCourse =()=>{
      return(
        <li>
             <span>{this.props.course.name}</span>
             <button onClick={this.toggleUpdate}>Edit Course</button>
             <button onClick={() =>{this.props.deleteCourse(this.props.index)}} >Delete Course</button>
        </li>
      )
  }
/////////////////////////////////////
 

//    toggle Update 
toggleUpdate = ()=>{
    let {isEdit} = this.state; 
this.setState({
    isEdit : !isEdit
})
}
// ////////////////////////////////
// updateCourseItem
updateCourseItem = (e) => {
e.preventDefault();
this.props.editCourse(this.props.index, this.input.value)
this.toggleUpdate();
}
// ///////////////////////////////
// render Update Form
  renderUpdateForm = ()=>{
    return(
      <form onSubmit={this.updateCourseItem}>
        <input type='text' defaultValue={this.props.course.name} ref={(v)=>{this.input=v}} />
        <button>Update Course</button>
      </form>
    )
  }
// /////////////////////////////////// 



    render(){
         let {isEdit} = this.state; 
        return(
            <Fragment >
            { isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        )
    }
}
export default CourseList;
