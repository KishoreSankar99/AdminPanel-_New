import React, { useContext } from 'react'
import { useFormik } from 'formik'
import UserContext from './UserContext';

function CreateUser() {
  let UC = useContext(UserContext)
  let formik = useFormik({
    initialValues:{
      name:'',
      position:'',
      office:'',
      age:'',
     
      salary:''
    },
    validate:(values)=>{
      const errors = {};
      if(!values.name){
        errors.name = 'Name cant be blank !'
      }
  
      if(!values.age || values.age<18){
        errors.age = 'Age cant be blank ! and greater than 18'
      }
  
      return errors
    },
   onSubmit : (values)=>{
    console.log('Name: '+values.name)
    console.log('Position: '+values.position)
    console.log('Office: '+values.office)
    console.log('Age: '+values.age)
    console.log('Salary: '+values.salary)
    
    UC.setUsers([...UC.users,values])
   }
  })
  return (
    <div className='container'>
     <form onSubmit={formik.handleSubmit}>
     <div className='row'>
        <div className='col-lg-6'>
          <label>Name</label>
          <input type={'text'} style={{border:formik.errors.name?'1px solid red':'', border:formik.values.name !== '' ? '1px solid green' : '' }} name='name' onChange={formik.handleChange} value={formik.values.name} className='form-control'></input>
          <span style={{color:'red',opacity:'80%'}}>{formik.errors.name}</span>
        </div>

        
        <div className='col-lg-6'>
          <label>Position</label>
          <input  type={'text'} name='position' onChange={formik.handleChange} value={formik.values.position} className='form-control'></input>
         
        </div>

        <div className='col-lg-6'>
          <label>Office</label>
          <input type={'text'} name='office' onChange={formik.handleChange} value={formik.values.office} className='form-control'></input>
        </div>

        <div className='col-lg-6'>
          <label>Age</label>
          <input type={'number'} style={{border:formik.errors.age?'1px solid red':'', border:formik.values.age !== '' ? '1px solid green' : '' }} name='age' onChange={formik.handleChange} value={formik.values.age} className='form-control'></input>
          <span style={{color:'red',opacity:'80%'}}>{formik.errors.age}</span>
          
        </div>

       
        <div className='col-lg-6'>
          <label>Salary</label>
          <input type={'number'} name='salary' onChange={formik.handleChange} value={formik.values.salary} className='form-control'></input>
        </div>

        <div className='col-lg-12 mt-3'>
          <input  disabled ={Object.keys(formik.errors).length!==0} type={'submit'} className={'btn btn-primary'}/>
        </div>

      </div>

     </form>
      
    </div>
    
  )
}

export default CreateUser