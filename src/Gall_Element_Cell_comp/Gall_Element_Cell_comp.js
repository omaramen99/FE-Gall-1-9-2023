
//------------------------------------
//-------------------------------------------------
import './Gall_Element_Cell_comp.css';



//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';

import ReactDOM from "react-dom";
import React from "react";

import { connect } from 'react-redux';

import { OnRevitElementSelected } from '../store/actions';


// import {bim_tree} from '../BIM_META_DATA'

 class Gall_Element_Cell_comp extends React.Component {
  state = {
    visable:true,
    visabilityClass:"",
    selectionClass:'',
    lastSelectedElementId : ""
  
  };

  componentDidUpdate()
  {


  }
  componentDidMount()
  {
    setInterval(() => {
      if(window.LOADED)
      {
        if (true) {
          if (this.props.state.SelectedRevitElementId != "" && this.props.state.SelectedRevitElementId != "-1" && this.props.state.SelectedRevitElementData.Element) {//if there is selected element
            if (this.props.ElementId == this.props.state.SelectedRevitElementData.Element.i) {//if it's the selected element
              
              if (this.props.state.SelectedRevitElementId != this.state.lastSelectedElementId) {
                //changed
                 if (this.props.state.SelectedRevitElementId == this.props.ElementId)
                 {//select
                   this.setState({
                     selectionClass:'-selected',
                     lastSelectedElementId:this.props.state.SelectedRevitElementId
                   })
                   document.getElementById(this.props.ElementName).scrollIntoView({behavior: "smooth", block: "center"});
            
                 }else
                 {//unSelect
                   this.setState({
                     selectionClass:'',
                     lastSelectedElementId:this.props.state.SelectedRevitElementId
                   })
            
                 }
            
               }
            }else
            {
              if (this.props.state.SelectedRevitElementId != this.state.lastSelectedElementId) {
                //changed
                 if (this.props.state.SelectedRevitElementId == this.props.ElementId)
                 {//select
                   this.setState({
                     selectionClass:'-selected',
                     lastSelectedElementId:this.props.state.SelectedRevitElementId
                   })
                   document.getElementById(this.props.ElementName).scrollIntoView({behavior: "smooth", block: "center"});
            
                 }else
                 {//unSelect
                   this.setState({
                     selectionClass:'',
                     lastSelectedElementId:this.props.state.SelectedRevitElementId
                   })
            
                 }
            
               }
            }
          }else
          {
            if (this.props.state.SelectedRevitElementId != this.state.lastSelectedElementId) {
              //changed
               if (this.props.state.SelectedRevitElementId == this.props.ElementId)
               {//select
                 this.setState({
                   selectionClass:'-selected',
                   lastSelectedElementId:this.props.state.SelectedRevitElementId
                 })
                 document.getElementById(this.props.ElementName).scrollIntoView({behavior: "smooth", block: "center"});
          
               }else
               {//unSelect
                 this.setState({
                   selectionClass:'',
                   lastSelectedElementId:this.props.state.SelectedRevitElementId
                 })
          
               }
          
             }

          }
        }
      }
    }, 1);
    
  }
  ToggleVisability(e)
  {
    e.stopPropagation()
    if(this.state.visable)
    {
      //hide
      this.setState({
        visable:false,
        visabilityClass:"-slash"
      })
      this.HideElement();
      
    }else
    {
      //show
      this.setState({
        visable:true,
        visabilityClass:""
      })
      this.ShowElement();
    } 
  }

/////////////3D Viewer////////////////////
  HideElement(){}

  ShowElement(){}

  //3d viewer & props/parameters
  FocusAndSelectElement(){
    //alert(`Selected [${this.props.ElementId}]`)865793
    //this.props.OnRevitElementSelected("865793")
    this.props.OnRevitElementSelected([this.props.ElementId,{}])
    window._unityInstance.SendMessage('GameManager', 'JS_JustSelectAndFocusElement', this.props.ElementId);
    window._unityInstance.SendMessage('GameManager', 'JS_SetAppFPS', 2);
    setTimeout(() => {
     window._unityInstance.SendMessage('GameManager', 'JS_SetAppDefaultFPS', '');
    }, 500);
    //console.log(bim_tree);
  }
/////////////////////////////////////////
  render() {

  
    return (
      <>

            <tr id={this.props.ElementName}>
              <td onClick={() => {this.FocusAndSelectElement()}} class={`gall-table-cell-ele${this.state.selectionClass}`}>
                <i class="fa-solid fa-cube gall-elements-list-3d-element-smp"></i><div class="gall-elements-list-cell-text">{this.props.ElementName}</div> <div onClick={(e) => {this.ToggleVisability(e)}} class="gall-elements-list-cell-side-buttons"><i class={`fa-solid fa-eye${this.state.visabilityClass}`}></i></div></td>
            </tr>
      

            
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {OnRevitElementSelected})(Gall_Element_Cell_comp);





// //------------------------------------
// //-------------------------------------------------
// import './Header_comp.css';
// //import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
// import ReactDOM from "react-dom";
// import React from "react";

// export default class Header_comp extends React.Component {
//   state = {

//   };
//   // constructor(props)
//   // {
   
//   //   super(props);
//   //   this.state={
//   //     complete : ""
//   //   };
//   // }


//   render() {
//     return (
//       <>

//       </>
//     );
//   }

  
// }