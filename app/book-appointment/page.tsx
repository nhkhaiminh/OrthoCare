"use client"

import React, { useState } from 'react'
import BookAppointmentForm from '../(components)/book-appointment/BookAppointmentForm'

export default function BookAppointmentPage() {


    return (
        <div className='flex flex-col gap-8 pt-[7rem] pb-[23rem] px-mobilex lg:px-[10rem] xl:px-[20rem]'>
            <h2 className='font-semibold text-3xl'>Request a Consultation</h2>
            <BookAppointmentForm />
        </div>
    )
}
