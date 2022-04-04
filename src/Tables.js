import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

function Tables() {
    let UC = useContext(UserContext)
  return (
    <div class="container-fluid">

<div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to={'/create-user'}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Create User
        </Link>
      </div>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        
                                     {UC.users.map((user,index)=>{
                                         return <tr>
                                         <td>{user.name}</td>
                                         <td>{user.position}</td>
                                         <td>{user.office}</td>
                                         <td>{user.age}</td>
                                         <td>{user.startDate}</td>
                                         <td>{user.salary}</td>
                                         <td>
                                         <Link className='btn btn-warning btn-sm m-1' to={`/user-view/${index}`}>View</Link>
                                         <Link className='btn btn-primary btn-sm m-1' to={`/user-edit/${index}`}>Edit</Link>
                                             <button className='btn btn-danger btn-sm m-1'>Delete</button>
                                         </td>
                                     </tr>
                                     })}
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
  )
}

export default Tables