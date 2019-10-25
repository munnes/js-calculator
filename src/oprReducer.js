// JavaScript source code
import addOpr from './actions/addOpr'
import disOpr from './actions/disOpr'
import clearOpr from './actions/clearOpr'
const intState={
    input:'',
    result:'0'
}
const oprReducer=(state = intState, action)=>{
    switch(action.type){
        case 'CAL':
            let res=action.data.substring(0, action.data.length - 1);
            return {input:action.data+eval(res),
                result:eval(res)};
        case'DISPLAY':
            let disVal='';
            let newVal='0';
     /**************************************/       
            if (action.data.length>0 ){
                newVal=action.data.substring(action.data.length-1).toString();}
           
                if (action.data.length>1){
                    disVal  =action.data.substring(action.data.length-2);
                  /*******last two digits*/
                    if(action.data.slice(-2)=='0.'){
                        newVal='0.';
        
                    }
            
                    else{
                       
            let chk=/[+*/-]/.test(newVal);
            if (chk===false ){
                chk=/[+*/-]/.test(disVal);
                if(chk===false){
                        newVal=state.result.concat(newVal);
                }
            }
                    }}
            /**************************************/ 
            return{
                input:action.data,
                result:newVal
            }
        case 'CLEAR':
            return{
                input:'',
                result:'0' 
            }
        default:
            return intState;

    }}

    export default oprReducer;