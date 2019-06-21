import React from "react"

export function Streamer({user_name, viewer_count,title}){
return (
    <tr>
        <td>{user_name}</td>
        <td>{viewer_count}</td>
        <td>{title}</td>
    </tr>
    )
}