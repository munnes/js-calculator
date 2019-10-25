// JavaScript source code
import React, { Component } from 'react';
import Keys from './Keys'
import { Button } from 'reactstrap';
import { Row } from 'react-bootstrap';
import { col } from 'react-bootstrap';
import addOpr from './actions/addOpr';
import disOpr from './actions/disOpr';
import clearOpr from './actions/clearOpr';
import {connect} from 'react-redux';
import $ from 'jquery';
class MyCal extends Component {

 
    HandelCal  (val) {
        var mathStmnt=this.props.input;
      
        /**************************************/
        var chkEqual=mathStmnt.indexOf("=") ;
        if (chkEqual>-1){
            if (typeof val==='number' ){
                mathStmnt='';
            }
            else if(val==='.'){
                mathStmnt='0';
                mathStmnt=mathStmnt.concat(val);
                this.props.disMe(mathStmnt);
            }
            else{
                mathStmnt=this.props.result.toString();
            }
        }
        /*******************=************************/
        if (val==='='){
           
            var chkEqual=this.props.input.indexOf("=") ;
            if(/[+*/-]$/.test(mathStmnt)===false && chkEqual===-1 && this.props.input!==''){
                mathStmnt=mathStmnt.concat(val);
                this.props.calMe(mathStmnt);  }  
        }
            /*****************AC********************/
        else if(val==='AC'){
            this.props.clearMe('');
        }
            /****************.****************/
        else if(val==='.'){
                     
            if(/\./.test(this.props.result)===false && mathStmnt!=='0.')
            {
                if (/[0-9]$/.test(mathStmnt)===false ){
                    val='0.'
                } 
                mathStmnt=mathStmnt.concat(val);
                this.props.disMe(mathStmnt);
            }
           
        } 
       
            /*******************************************/
        else{ 
            var chk;
            /****************************/
            if(typeof val==='number'){
                if(this.props.result=='0'){
                    chk=true;
                }
            }        

                /*********************************/
            else if(val==='+'||val==='*'||val==='/')
            { 
                if (this.props.input==''||this.props.input=='-')
                {val='';}
                else{
                    chk= /[+*/-]$/.test(mathStmnt); }            
            }
                /*********************************************/
            else if(val==='-'){
                chk= /-$/.test(mathStmnt);
            }
             
                /*****************************************/
            else if(val== '0' && this.props.result =='0'){
                chk=true;
            }
            /********************************/
            if (chk===true){
                mathStmnt=mathStmnt.substring(0, mathStmnt.length - 1)
            }
  
            mathStmnt=mathStmnt.concat(val);
            this.props.disMe(mathStmnt);
        }
    }

  

    render() {
       
        const calKeys=[];
        const mapKeys=Keys.map((arr)=>{
            return( <Button className="btn btn-primary " id={arr.id} onClick={()=>this.HandelCal(arr.val) } >{arr.val}</Button>)
            });
                let i=0;
                let cal2=[];
                
               
                calKeys.push(<div className="row">{mapKeys.slice(i,i+3)}</div>)
                for (let i=3;i<9;i+=4){calKeys.push(<div className="row">{mapKeys.slice(i,i+4)}</div>)}
                for (let i=11;i<16;i+=3){cal2.push(<div className="row">{mapKeys.slice(i,i+3)}</div>)}
                calKeys.push(<div className="row" id="newRow"><div style={{display: 'inline-block',float:"left"}} id="hRow">{cal2}</div><Button className="btn btn-primary " id="equals" onClick={()=>this.HandelCal('=') } style={{display: 'inline-block',float:"right"}}>{'='}</Button></div>)
               
                //cal2=calKeys.pop();
                return (
                  <div className="App countainer-fluid">
                  <div className="well" id="display">
  <input id="up" value={this.props.input} />
      <input id="down" value={this.props.result} />
           
                  </div>
   
                    <div>{calKeys}</div>
                  </div>
    );
            }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => 
{ 
    return { 
        calMe:(inp) => {dispatch(addOpr(inp))},
        disMe:(inp)=> {dispatch(disOpr(inp))},
       clearMe:(inp)=> {dispatch(clearOpr(inp))}
       
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MyCal);

