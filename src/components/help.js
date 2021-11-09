import React, { useEffect } from 'react'

export default function help() {
    useEffect(() => {
        console.log("I am available")
        window.localStorage.getItem("score")
    })
}
