"use client"

import React, { useState } from 'react'

type AppointmentReason = "New patient emergency/Tooth pain" | "New patient cleaning & exam" |
    "New patient cleaning & exam (14 & under)" | "Dental implant consult" |
    "Invisalign consult"

type Provider = {
    'name': string;
    'title': string;
    'genre': "male" | "women"
}

type PaymentMethod = "I will pay myself" | "RAMQ" | "Other"

interface ReasonsBtnProps {
    reasons: AppointmentReason[]
}

interface BAInput {
    'first-name': string;
    'last-name': string;
    'forOther': boolean;
    'newPatient': boolean;
    'reason': AppointmentReason;
    'provider': Provider;
    'patientInfo': {
        'firstName': string;
        'lastName': string;
        'dateOfBirth': string;
        'email': string;
        'cellphone': string;
        'paymentMethod': PaymentMethod
        'message'?: string
    }
}

const textInputStyle = `
    px-3 py-3 rounded-lg 
    bg-gray-100 w-full lg:w-auto
    outline-none focus:outline-blue-800
    duration-300 outline-offset-0
    `

const buttonStyle = `
    border border-gray-300
    shadow-sm
    px-3 py-3 rounded-lg
    text-blue-800 duration-300
    `

const pressedButtonStyle = `
    border border-gray-300
    shadow-sm px-3 py-3 rounded-lg
    text-white bg-blue-800
`

function RenderReasonsBtn() {
    const reasons: AppointmentReason[] = ["New patient emergency/Tooth pain", "New patient cleaning & exam",
        "New patient cleaning & exam (14 & under)", "Dental implant consult",
        "Invisalign consult"]

    const [reasonChosen, setReasonChosen] = useState<AppointmentReason>("New patient cleaning & exam")

    return (
        <div className="grid grid-cols-2 gap-3">
            {
                reasons.map((reason: string, index: number) => {
                    return (
                        <button key={`${index}-reason-btn`} type={'button'}
                            onClick={() => setReasonChosen(reason as AppointmentReason)}
                            className={`${buttonStyle}`}>
                            {reason}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default function BookAppointmentForm() {
    const [page, setPage] = useState<number>(0)
    const [input, setInput] = useState<BAInput>({
        'patientInfo': {
            'firstName': "",
            'lastName': "",
            'dateOfBirth': '',
            'cellphone': "",
            'email': '',
            'paymentMethod': 'I will pay myself',
            'message': ''
        },
        'first-name': '',
        'last-name': '',
        'forOther': false,
        'newPatient': true,
        'reason': 'New patient emergency/Tooth pain',
        "provider": {
            'name': '',
            'title': '',
            "genre": "male"
        }
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            "forOther": e.target.checked
        })
    }

    function returnPage() {
        setPage(page - 1)
    }

    function forwardPage() {
        setPage(page + 1)
    }

    return (
        <form className='flex flex-col gap-8 max-w-4xl'>
            <div className={`${page < 1 ? 'flex' : 'hidden'} flex-col gap-8 max-w-4xl`}>
                <div className="flex flex-col gap-1">
                    <p className='-translate-y-2'>Who is this appointment for?</p>
                    <label className='text-sm font-semibold indent-3'>Patient Name (Required)</label>
                    <div className="grid grid-cols-2 gap-3">
                        <input
                            className={textInputStyle}
                            type="text"
                            name="first-name"
                            value={input['first-name']}
                            onChange={handleInputChange}
                            placeholder='First Name'
                            id="first-name"
                        />
                        <input
                            className={textInputStyle}
                            type="text"
                            name="last-name"
                            value={input['last-name']}
                            onChange={handleInputChange}
                            placeholder='Last Name'
                            id="last-name"
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="forOther" className='flex gap-3 items-center'>
                        <input
                            type="checkbox"
                            name="forOther"
                            checked={input.forOther}
                            onChange={handleCheckboxChange}
                            id="forOther"
                        />
                        {`I'm booking for someone else`}
                    </label>
                </div>
                <div className="flex flex-col gap-4">
                    <p className=''>{`
                    Have ${input.forOther ? 'they' : 'you'} visited us before?`
                    }</p>
                    <div className="grid grid-cols-2 gap-3">
                        <button type={'button'}
                            onClick={() => setInput({ ...input, 'newPatient': true })}
                            className={input.newPatient ?
                                pressedButtonStyle : buttonStyle}>
                            New Patient
                        </button>
                        <button type={'button'}
                            onClick={() => setInput({ ...input, 'newPatient': false })}
                            className={input.newPatient ? buttonStyle : pressedButtonStyle}>
                            Returning Patient
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${page >= 1 && page < 2 ? "flex" : "hidden"} flex-col`}>
                <div className="flex flex-col gap-3">
                    <p className=''>What would you like to come in for?</p>
                    <RenderReasonsBtn />
                </div>
            </div>
            <div className="flex items-center gap-3 w-full">
                <div className={`${page > 0 ? 'flex' : 'hidden'}`}>
                    <button type={'button'} onClick={() => returnPage()}
                        className="w-[8rem] md:w-[13rem] hover:bg-black/90 hover:text-white font-semibold outline outline-1 outline-gray-300 outline-offset-0 py-3 px-5 rounded-lg shadow-sm"
                    >
                        Back
                    </button>
                </div>
                <div className="flex justify-end w-full">
                    <button type={'button'} onClick={() => forwardPage()}
                        className="w-[8rem] md:w-[13rem] font-semibold bg-blue-800 text-white py-3 px-5 rounded-lg shadow-sm"
                    >
                        Next
                    </button>
                </div>
            </div>
        </form>
    )
}
