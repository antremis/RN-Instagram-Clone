import React from "react"
import {Text} from "react-native"

const Comment = ({comment}) => {
    return (
        <Text style = {{color : "#FFF"}}><Text style = {{fontWeight : "bold"}}>{comment.user}</Text> {comment.comment}</Text>
    )
}

export default Comment