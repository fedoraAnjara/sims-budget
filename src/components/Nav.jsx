import React from 'react'
import logo from "../assets/icons8-money-100.png"
import { Form, NavLink } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/solid'

export default function 
({userName}) {
  return (
      <nav>
          <NavLink
              to="/"
              aria-label="Go to home"
          >
              <img src={logo} height={40} alt="" />
              <span>HomeBudget</span> 
          </NavLink>
          {
              userName && (
                  <Form
                      method='post'
                      action='/logout'
                      onSubmit={(event) => {
                          if (!confirm("Delete user and all data?")) {
                            event.preventDefault()
                          }
                      }}
                  >
                      <button type='submite' className='btn btn--warning'>
                          <span>Delete User</span>
                          <TrashIcon width={20} />
                      </button>
                  </Form>
              )
          }
    </nav>
  )
}
